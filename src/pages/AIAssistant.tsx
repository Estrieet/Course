import React, { useState, useEffect, useRef } from 'react';

const AIAssistant: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sttSupported, setSttSupported] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const initializeSpeechRecognition = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSttSupported(false);
      return;
    }

    try {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        console.log('Voice recognition started');
      };

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log('Transcript:', transcript);
        setInputText(transcript);
        handleAsk(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        console.log('Voice recognition ended');
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed' || event.error === 'permission_denied') {
          alert('Microphone permission denied. Please allow microphone access to use voice input.');
          setPermissionGranted(false);
        } else {
          alert(`Speech recognition error: ${event.error}`);
        }
      };

      setSttSupported(true);
    } catch (error) {
      console.error('Speech recognition initialization failed:', error);
      setSttSupported(false);
    }
  };

  useEffect(() => {
    // Initialize TTS
    synthRef.current = window.speechSynthesis;

    // Initialize STT support
    initializeSpeechRecognition();

    // Check permission status
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'microphone' as PermissionName }).then(result => {
        setPermissionGranted(result.state === 'granted');
      }).catch(() => {
        setPermissionGranted(false);
      });
    }



    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore if already stopped
        }
      }
    };
  }, []);

  const handleAsk = async (text: string) => {
    if (!text.trim()) return;

    setIsGenerating(true);
    setResponse('');

    try {
      const prompt = `You are Gemini, a helpful digital literacy assistant. Answer clearly and kindly about online safety, passwords, email scams, phishing, and privacy. Question: ${text}`;
      let aiResponse = await generateGeminiAnswer(prompt);

      if (!aiResponse) {
        const fallbackKnowledgeBase: { [key: string]: string } = {
          'password': 'A strong password should be at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters. Never use the same password for multiple accounts.',
          'email scam': 'Email scams often pretend to be from trusted sources like banks or companies. Look for urgent requests for personal information, suspicious links, or poor grammar. Always verify by contacting the organization directly.',
          'phishing': 'Phishing is when attackers try to trick you into giving sensitive information. Be wary of unexpected emails, texts, or calls asking for personal data. Check URLs carefully and use two-factor authentication.',
          'safe browsing': 'Use HTTPS websites (look for the lock icon), avoid clicking suspicious links, keep your browser and antivirus updated, and be cautious with downloads.',
          'social media privacy': 'Limit what you share publicly, review privacy settings regularly, be careful about accepting friend requests from strangers, and think before posting personal information.',
        };

        const lowerText = text.toLowerCase();
        for (const [key, value] of Object.entries(fallbackKnowledgeBase)) {
          if (lowerText.includes(key)) {
            aiResponse = value;
            break;
          }
        }
      }

      if (!aiResponse) {
        aiResponse = "Gemini is ready to help with digital literacy questions. Try asking about passwords, email scams, phishing, safe browsing, or social media privacy.";
      }

      setResponse(aiResponse);
      speakResponse(aiResponse);
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('Sorry, I encountered an error trying to reach Gemini. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateGeminiAnswer = async (promptText: string) => {
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: promptText }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error('Gemini API error:', data);
        return '';
      }
      return data.text?.trim() || '';
    } catch (error) {
      console.error('Gemini request failed:', error);
      return '';
    }
  };

  const speakResponse = (text: string) => {
    if (!synthRef.current) return;

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a female voice
    const voices = synthRef.current.getVoices();
    const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman') || voice.name.toLowerCase().includes('zira') || voice.name.toLowerCase().includes('susan'));
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    synthRef.current.speak(utterance);
  };

  const startListening = async () => {
    if (!recognitionRef.current) {
      initializeSpeechRecognition();
      if (!recognitionRef.current) {
        alert('Speech recognition is not supported in this browser.');
        return;
      }
    }

    if (isListening) {
      recognitionRef.current.stop();
      return;
    }

    try {
      // Request microphone permission if needed before starting recognition.
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setPermissionGranted(true);
      recognitionRef.current.start();
    } catch (error: any) {
      console.error('Error starting recognition:', error);
      if (error && error.name === 'NotAllowedError') {
        alert('Microphone permission denied. Please allow microphone access in your browser settings.');
      } else {
        alert('Error starting voice recognition. Please try again.');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-2">Gemini Digital Literacy Assistant</h1>
          <p className="text-slate-400 mb-4">Ask Gemini about safe passwords, email scams, phishing, and online privacy. Gemini is the main AI, and voice input/output is enabled.</p>
          {!sttSupported && (
            <p className="text-yellow-400 mb-4">⚠️ Voice input is not supported in this browser. Please use a modern browser like Chrome or Edge.</p>
          )}
          {sttSupported && !permissionGranted && (
            <p className="text-yellow-400 mb-4">⚠️ Microphone permission required for voice input. Click "Speak" to grant permission.</p>
          )}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          {/* Input Section */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-300 mb-3">Ask your question:</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleAsk(inputText)}
              />
              <button
                onClick={() => handleAsk(inputText)}
                disabled={isGenerating || !inputText.trim()}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200"
              >
                {isGenerating ? 'Thinking...' : 'Ask'}
              </button>
              <button
                onClick={isListening ? stopListening : startListening}
                disabled={!sttSupported}
                className={`px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
                  isListening
                    ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                } ${!sttSupported ? 'bg-gray-600 cursor-not-allowed' : ''}`}
              >
                {isListening ? '🛑 Stop Listening' : sttSupported ? '🎤 Speak' : 'Voice Not Supported'}
              </button>
            </div>
          </div>

          {/* Response Section */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-300 mb-3">AI Response:</label>
            <div className="bg-slate-700/30 border border-purple-500/20 rounded-lg p-4 min-h-[120px]">
              {response ? (
                <div className="text-white leading-relaxed">
                  {response}
                </div>
              ) : (
                <div className="text-slate-500 italic">
                  Your response will appear here. Try asking about passwords, email scams, or safe browsing!
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            {isSpeaking && (
              <button
                onClick={stopSpeaking}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Stop Speaking
              </button>
            )}
          </div>

          {/* Quick Topics */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Topics:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'What makes a strong password?',
                'How to spot email scams?',
                'What is phishing?',
                'Safe browsing tips',
                'Social media privacy'
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setInputText(topic);
                    handleAsk(topic);
                  }}
                  className="p-3 bg-slate-700/50 hover:bg-slate-600/50 border border-purple-500/20 rounded-lg text-left text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;