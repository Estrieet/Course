// ============================================
//   DIGITAL LITERACY PLATFORM — CORE DATA
// ============================================

// ========== CURRICULUM DATA ==========

const CURRICULUM = [
  {
    id: 0,
    title: "Introduction to Computers",
    emoji: "🖥️",
    color: "#2563EB",
    description: "Start here! Learn what a computer is and how to use it safely.",
    lessons: [
      {
        id: "0-1",
        title: "What is a Computer?",
        emoji: "🖥️",
        objective: "Learn what a computer is and what it can do for you.",
        steps: [
          {
            title: "A Computer is a Tool",
            content: "A computer is an electronic tool that helps you do things. Think of it like a very smart typewriter, photo album, telephone, and library — all in one machine.",
            tip: "You cannot 'break' a computer by pressing the wrong key. It is safe to explore!"
          },
          {
            title: "What Can a Computer Do?",
            content: "A computer can help you: write letters, send emails, look things up on the internet, watch videos, listen to music, video call friends and family, store photos, and much more.",
            tip: "Everything you learn here will help you do real things in your daily life."
          },
          {
            title: "Computers Come in Different Shapes",
            content: "A desktop computer sits on a desk. A laptop computer folds open and you can carry it around. A tablet is like a big flat phone. All of these are types of computers.",
            tip: "This course works on any type of computer."
          }
        ],
        practice: {
          type: "identify",
          question: "Which of these is a computer?",
          options: ["🖥️ Desktop computer", "🍎 Apple (fruit)", "💡 Light bulb", "📺 Television"],
          correct: 0,
          feedback: "That's right! A desktop computer is a type of computer."
        },
        homework: [
          { title: "Look Around You", desc: "Find one computer, laptop, or tablet in your home or nearby. Just look at it — that's all!" },
          { title: "Tell Someone", desc: "Tell a friend or family member one thing a computer can do." }
        ],
        quiz: [
          { q: "What is a computer?", options: ["A tool that helps you do many things", "A type of food", "A musical instrument", "A car"], correct: 0, explanation: "A computer is an electronic tool that helps you do many tasks like writing, searching the internet, and sending messages." },
          { q: "Can you break a computer by pressing the wrong key?", options: ["No — it is safe to explore", "Yes — be very careful", "Sometimes", "Only on old computers"], correct: 0, explanation: "You cannot break a computer by pressing keys. It is perfectly safe to try things!" },
          { q: "Which of these is NOT a type of computer?", options: ["A toaster", "A laptop", "A tablet", "A desktop"], correct: 0, explanation: "A toaster is a kitchen appliance, not a computer. Laptops, tablets, and desktops are all types of computers." },
          { q: "What can a computer help you do?", options: ["All of these", "Send emails", "Watch videos", "Look things up"], correct: 0, explanation: "A computer can do all of these things and much more!" }
        ],
        encouragement: "Wonderful start! You've just learned what a computer is. That's the very first step — and you did it perfectly! 🌟"
      },
      {
        id: "0-2",
        title: "Turning a Computer On and Off",
        emoji: "⏻",
        objective: "Learn how to safely turn your computer on and off.",
        steps: [
          {
            title: "Finding the Power Button",
            content: "Every computer has a power button. On a desktop, it is usually on the front or top of the large box. On a laptop, it is usually in the top corner of the keyboard. It often looks like a circle with a line through it: ⏻",
            tip: "The power button symbol looks like this: ⏻ — a circle with a vertical line inside it."
          },
          {
            title: "Turning ON Your Computer",
            content: "Step 1: Make sure the computer is plugged in (or the laptop battery has charge). Step 2: Press the power button once. Step 3: Wait! The computer needs 1-2 minutes to start up. Step 4: You will see the screen light up and show pictures. Then it's ready!",
            tip: "Be patient — starting up takes time. This is perfectly normal."
          },
          {
            title: "Turning OFF Your Computer (the right way)",
            content: "Do NOT just press the power button! The correct way is: Step 1: Click the Start menu (bottom left) or the Apple logo. Step 2: Find the word 'Shut Down' or 'Power Off'. Step 3: Click it. Step 4: Wait for the screen to go dark. Done!",
            tip: "Always shut down properly to protect your files and the computer."
          },
          {
            title: "When the Screen Goes Dark (Sleep mode)",
            content: "If you don't use the computer for a while, the screen may go dark. The computer is NOT broken — it is just 'sleeping' to save power. To wake it up: press any key on the keyboard, or tap the touchpad or mouse.",
            tip: "A sleeping computer is just resting! One tap or keypress wakes it up."
          }
        ],
        practice: {
          type: "sequence",
          question: "Put these steps in the right order to turn ON your computer:",
          items: ["Press the power button", "Wait for the screen to light up", "Make sure it's plugged in", "The computer is ready to use"],
          correct: [2, 0, 1, 3]
        },
        homework: [
          { title: "Practice Turning On", desc: "Turn your computer on. Watch it start up. Count how many seconds it takes." },
          { title: "Practice Shutting Down", desc: "Use the proper shut down menu to turn your computer off." },
          { title: "Wake from Sleep", desc: "Let your computer go to sleep. Then wake it up by pressing a key." }
        ],
        quiz: [
          { q: "What is the power button symbol?", options: ["⏻ (circle with line)", "★ (star)", "✓ (check mark)", "♥ (heart)"], correct: 0, explanation: "The power button symbol is a circle with a vertical line through it." },
          { q: "What should you do when the screen goes dark?", options: ["Press any key to wake it up", "Press the power button hard", "Unplug the computer", "Call for help immediately"], correct: 0, explanation: "A dark screen usually means the computer is sleeping. Just press any key to wake it up." },
          { q: "What is the CORRECT way to turn off a computer?", options: ["Use the Shut Down option in the menu", "Pull out the power cable", "Press the power button quickly", "Close the lid"], correct: 0, explanation: "Always use the Shut Down option in the menu to safely turn off your computer." },
          { q: "How long does it take for a computer to start up?", options: ["1-2 minutes — be patient!", "Instantly", "10 minutes", "1 hour"], correct: 0, explanation: "A computer needs 1-2 minutes to start up. This is perfectly normal." }
        ],
        encouragement: "You now know how to turn your computer on and off like a pro! You're building great habits from the very start! 🎉"
      },
      {
        id: "0-3",
        title: "Using a Mouse",
        emoji: "🖱️",
        objective: "Learn how to hold and use a mouse to control the computer.",
        steps: [
          {
            title: "What is a Mouse?",
            content: "A mouse is a small device that you hold in your hand and move on a flat surface. As you move it, you will see an arrow (called the cursor) move on the screen. The mouse lets you point at things and click on them.",
            tip: "On a laptop, there is usually a built-in touchpad instead of a separate mouse — you move it with your finger."
          },
          {
            title: "How to Hold the Mouse",
            content: "Place your hand gently over the mouse. Your index finger (pointing finger) rests on the LEFT button. Your middle finger rests on the RIGHT button. Your palm rests on the back of the mouse. Hold it gently — don't squeeze!",
            tip: "A light, relaxed grip is best. You don't need to hold it tightly."
          },
          {
            title: "Clicking (Left Click)",
            content: "A 'click' means pressing the left button once and releasing it quickly. Use this to: select things, press buttons, open files, and follow links. Press DOWN and let go — that's a click!",
            tip: "Click once to select. Click twice fast (double-click) to open."
          },
          {
            title: "Double-Clicking",
            content: "A double-click means pressing the left button TWICE quickly. This opens files and programs. Practice: click once... now click twice quickly. If the first time doesn't work, try again!",
            tip: "If double-clicking is hard, you can often single-click and then press Enter instead."
          },
          {
            title: "Right-Clicking",
            content: "Right-click means pressing the RIGHT button once. This shows a menu of options. Don't worry if it looks complicated — just press Escape or click somewhere else to close the menu.",
            tip: "Right-click shows options. Left-click does things. Escape closes menus."
          },
          {
            title: "Scrolling",
            content: "Most mice have a small wheel between the buttons. Rolling it forward makes the page go UP. Rolling it backward makes the page go DOWN. This lets you read long pages without moving the mouse.",
            tip: "On a touchpad, sliding two fingers up or down does the same thing."
          }
        ],
        practice: {
          type: "click-practice",
          question: "Practice clicking the big button below! Click it 5 times.",
          buttonText: "Click Me! 🖱️",
          goal: 5
        },
        homework: [
          { title: "Cursor Practice", desc: "Move your mouse slowly around the screen. Watch the cursor follow it." },
          { title: "Click Practice", desc: "Find any icon on the screen. Click it once. Then close it." },
          { title: "Scroll Practice", desc: "Open a webpage or document. Use the mouse wheel (or two fingers) to scroll up and down." }
        ],
        quiz: [
          { q: "What moves the cursor on the screen?", options: ["Moving the mouse", "Pressing Ctrl", "Pressing the spacebar", "Looking at the screen"], correct: 0, explanation: "Moving the mouse moves the cursor (the arrow) on the screen." },
          { q: "What does a single LEFT click do?", options: ["Selects or activates something", "Deletes a file", "Shuts down the computer", "Opens a new window"], correct: 0, explanation: "A single left click selects or activates something — like pressing a button." },
          { q: "How do you open a file or program?", options: ["Double-click it", "Right-click it", "Hold the mouse over it", "Press Delete"], correct: 0, explanation: "Double-clicking (clicking twice quickly) opens files and programs." },
          { q: "What does right-clicking do?", options: ["Shows a menu of options", "Deletes the file", "Moves the file", "Opens the internet"], correct: 0, explanation: "Right-clicking shows a menu with various options for that item." },
          { q: "How do you scroll down a page?", options: ["Roll the mouse wheel down", "Press the Delete key", "Double-click the page", "Press the power button"], correct: 0, explanation: "Rolling the mouse wheel down (or sliding two fingers down on a touchpad) scrolls the page down." }
        ],
        encouragement: "Fantastic work! The mouse is one of the trickiest things to learn — and you're already getting it! Keep practicing, it gets easier every day. 💪"
      },
      {
        id: "0-4",
        title: "Using the Keyboard",
        emoji: "⌨️",
        objective: "Learn the parts of the keyboard and type your first words.",
        steps: [
          {
            title: "What is a Keyboard?",
            content: "The keyboard has buttons called 'keys'. Each key makes a letter, number, or symbol appear on screen when you press it. You use the keyboard to type words, numbers, and messages.",
            tip: "There are over 100 keys on a keyboard, but you only need to know a few to get started!"
          },
          {
            title: "The Letter Keys",
            content: "The middle section has all 26 letters of the alphabet. They are arranged in a special layout (not A-B-C order). This is called the QWERTY layout because the top-left letters spell Q-W-E-R-T-Y. It may seem strange, but you will learn where each letter is over time.",
            tip: "It's normal to type slowly at first. Speed comes with practice!"
          },
          {
            title: "Important Keys to Know",
            content: "SPACE BAR: The long key at the bottom. Press it to add a space between words. BACKSPACE: Deletes the letter to the left. Use it to fix mistakes. ENTER: Starts a new line or confirms something. SHIFT: Hold this and press a letter to make it CAPITAL.",
            tip: "Backspace is your best friend — it removes mistakes!"
          },
          {
            title: "CAPS LOCK",
            content: "The Caps Lock key (on the left side) turns ALL CAPITALS on or off. Press it once to turn CAPITALS on. Press it again to turn them off. There is usually a light on the keyboard that shows when Caps Lock is on.",
            tip: "If everything you type is in CAPITALS, press Caps Lock to turn it off!"
          },
          {
            title: "Typing Your First Words",
            content: "Place your fingers near the middle row of keys. Look for the F and J keys — they usually have a small bump on them. This helps you find the right position without looking. Now try typing your name!",
            tip: "Don't worry about speed or which fingers you use yet. Just start typing!"
          }
        ],
        practice: {
          type: "typing",
          prompt: "Type your name below:",
          isFreePractice: true
        },
        homework: [
          { title: "Type Your Name", desc: "Open any text area and type your full name 5 times." },
          { title: "Type a Sentence", desc: "Type this sentence: My name is [your name] and I am learning computers." },
          { title: "Practice Backspace", desc: "Type a word. Then use Backspace to delete it one letter at a time." }
        ],
        quiz: [
          { q: "What does the Backspace key do?", options: ["Deletes the letter to the left", "Moves forward", "Makes letters bigger", "Opens a menu"], correct: 0, explanation: "Backspace deletes the letter immediately to the left of your cursor — perfect for fixing mistakes!" },
          { q: "How do you type a CAPITAL letter?", options: ["Hold Shift and press the letter", "Press Caps Lock for each letter", "Press the letter key twice", "Press Ctrl + letter"], correct: 0, explanation: "Hold the Shift key and press a letter to type it in CAPITAL (uppercase)." },
          { q: "What is the long key at the bottom of the keyboard?", options: ["The Space Bar", "The Enter key", "The Shift key", "The Backspace key"], correct: 0, explanation: "The Space Bar is the long key at the bottom. Press it to add a space between words." },
          { q: "What does Caps Lock do?", options: ["Turns ALL CAPITALS on or off", "Locks the keyboard", "Deletes everything", "Makes keys louder"], correct: 0, explanation: "Caps Lock switches between typing in ALL CAPS and normal lowercase letters." }
        ],
        encouragement: "You're typing! This is HUGE progress! Every expert typist started exactly where you are right now. Keep going — you're doing brilliantly! ⌨️✨"
      }
    ]
  },
  {
    id: 1,
    title: "Computer Hardware",
    emoji: "🔧",
    color: "#10B981",
    description: "Learn the names and jobs of all the parts of a computer.",
    lessons: [
      {
        id: "1-1",
        title: "Parts of a Desktop Computer",
        emoji: "🖥️",
        objective: "Learn the names and jobs of each part of a desktop computer.",
        steps: [
          { title: "The Monitor (Screen)", content: "The monitor is the screen you look at. It shows you everything — your files, the internet, videos. A monitor connects to the computer tower with a cable. The screen does NOT do the computing — it just shows the result.", tip: "Monitors come in different sizes. A bigger monitor can be easier to read." },
          { title: "The Computer Tower", content: "The tower (or case) is the big box that IS the computer. Everything important is inside it: the brain (processor), memory, and storage. All other parts plug into the tower.", tip: "Don't worry about what's inside the tower — you don't need to open it!" },
          { title: "The Keyboard", content: "The keyboard is how you type. It connects to the tower with a cable (or wirelessly). The keyboard sends your typing to the computer.", tip: "Keep your keyboard clean and free of crumbs!" },
          { title: "The Mouse", content: "The mouse controls the cursor on screen. Move it to point at things. Click to select or activate them. It connects to the tower with a cable or wirelessly.", tip: "Mouse pads give the mouse a smooth surface to slide on." },
          { title: "Speakers", content: "Speakers let you hear sound from the computer — music, videos, and alerts. They may be built into the monitor or connected separately.", tip: "If you can't hear sound, check that the speakers are plugged in and the volume is turned up." },
          { title: "Printer", content: "A printer connects to your computer and prints documents or photos onto paper. You send something to print from the computer, and the printer does the rest.", tip: "Printers need ink (called toner or ink cartridges) — they run out over time." }
        ],
        practice: { type: "label", question: "Can you name this computer part?", items: ["🖥️ This shows you everything — it's the...", "⌨️ You type with this — it's the...", "🖱️ You move this to control the cursor — it's the..."] },
        homework: [
          { title: "Find the Parts", desc: "Look at a computer near you. Point to the monitor, keyboard, and mouse. Say each name out loud." },
          { title: "Draw a Computer", desc: "Draw a simple picture of a desktop computer with all its parts labeled." }
        ],
        quiz: [
          { q: "What does the monitor do?", options: ["Shows you everything on screen", "Stores your files", "Connects to the internet", "Controls the cursor"], correct: 0, explanation: "The monitor is the screen that shows you everything — your files, the internet, videos." },
          { q: "Where is the 'brain' of the desktop computer?", options: ["Inside the tower", "In the monitor", "In the keyboard", "In the mouse"], correct: 0, explanation: "The computer tower contains all the important parts including the processor (brain), memory, and storage." },
          { q: "What does a printer do?", options: ["Prints documents onto paper", "Displays images on screen", "Stores your files", "Connects to the internet"], correct: 0, explanation: "A printer connects to your computer and prints documents or photos onto real paper." },
          { q: "What does a speaker do?", options: ["Lets you hear sound", "Shows images", "Controls the cursor", "Types text"], correct: 0, explanation: "Speakers let you hear sound from your computer — music, videos, and alerts." }
        ],
        encouragement: "You now know your way around a desktop computer! Every part has a job, and now you know what each one does. Great learning! 🖥️"
      },
      {
        id: "1-2",
        title: "Parts of a Laptop",
        emoji: "💻",
        objective: "Learn the parts of a laptop and how they work.",
        steps: [
          { title: "The Screen (Lid)", content: "The laptop screen is built into the lid — the top part that opens and closes. It shows you everything, just like a monitor on a desktop. When you open the lid, the laptop often wakes up automatically.", tip: "Hold a laptop by its base, not by the screen — to protect the hinges." },
          { title: "The Keyboard", content: "The keyboard is built into the bottom half of the laptop. It works exactly like a desktop keyboard. Because it's smaller, some keys may be in slightly different places.", tip: "Laptop keyboards are more sensitive to liquids — never put a drink near it!" },
          { title: "The Touchpad (Trackpad)", content: "The touchpad is the flat, smooth rectangle below the keyboard. Slide one finger on it to move the cursor. Tap once to click. Tap twice quickly to double-click. Slide two fingers to scroll.", tip: "If the touchpad feels hard to use, you can connect a regular mouse to the laptop." },
          { title: "The Battery and Charger", content: "A laptop runs on battery power. The battery is inside the laptop. When it runs low, you need to plug in the charger. The charging port is usually on the side of the laptop. Look for a small light that shows it's charging.", tip: "Try not to let the battery run completely flat — charge it before it gets too low." },
          { title: "The Power Button", content: "On a laptop, the power button is usually in the top corner of the keyboard area. Press it once to turn on. To turn off, use the Shut Down menu — don't just press the power button.", tip: "Some laptops turn on automatically when you open the lid!" },
          { title: "Webcam and Microphone", content: "Most laptops have a small camera (webcam) at the top of the screen and a microphone built in. These let you make video calls to see and talk to people far away.", tip: "The webcam is usually a small dot at the top centre of the screen." }
        ],
        practice: { type: "label", question: "Where on the laptop would you find these?", items: ["Where is the touchpad?", "Where is the power button?", "Where is the webcam?"] },
        homework: [
          { title: "Check Your Battery", desc: "Find the battery icon on your laptop. How much charge does it have? If it's below 20%, plug it in." },
          { title: "Use the Touchpad", desc: "Move the cursor around the screen using only the touchpad for 5 minutes." }
        ],
        quiz: [
          { q: "What is a touchpad?", options: ["A flat surface to control the cursor", "A type of screen", "A keyboard shortcut", "A type of battery"], correct: 0, explanation: "The touchpad (or trackpad) is the smooth flat surface below the keyboard. You move your finger on it to control the cursor." },
          { q: "Where is the webcam on a laptop?", options: ["At the top of the screen", "Below the keyboard", "On the side", "Inside the battery"], correct: 0, explanation: "The webcam is usually a small dot or lens at the very top centre of the screen." },
          { q: "What should you do when the laptop battery is low?", options: ["Plug in the charger", "Press the power button", "Remove the battery", "Restart immediately"], correct: 0, explanation: "When the battery is low, plug in the charger to recharge it." },
          { q: "How do you scroll on a touchpad?", options: ["Slide two fingers up or down", "Press the touchpad hard", "Tap three times", "Hold one finger still"], correct: 0, explanation: "Sliding two fingers up or down on the touchpad scrolls the page." }
        ],
        encouragement: "Excellent! You now know every important part of a laptop! You're building real computer knowledge step by step. 💻✨"
      },
      {
        id: "1-3",
        title: "Computer Ports Explained",
        emoji: "🔌",
        objective: "Learn what computer ports are and how to use them.",
        steps: [
          { title: "What is a Port?", content: "A port is a small hole or slot on the outside of your computer. You plug cables and devices into ports. Each port has a specific job — like a special door that only certain plugs fit into.", tip: "Never force a plug into a port. If it doesn't fit easily, it's the wrong port!" },
          { title: "USB-A Port", content: "USB-A is the most common port — a rectangular hole. You use it to connect: USB flash drives (memory sticks), keyboards, mice, phone chargers, and many other things. If it doesn't go in one way, flip it over and try again.", tip: "USB-A plugs only go in ONE way. If it doesn't fit, don't force it — just flip it!" },
          { title: "USB-C Port", content: "USB-C is a newer, smaller oval-shaped port. It can charge the laptop and transfer files. It's reversible — you can plug it in either way! Many modern laptops, phones, and tablets use USB-C.", tip: "USB-C is the future — more and more devices are using it." },
          { title: "HDMI Port", content: "HDMI is a flat trapezoidal port. You use it to connect your computer to a TV or external monitor. An HDMI cable sends both picture and sound at the same time.", tip: "HDMI cables are great for watching movies on a big TV from your laptop." },
          { title: "Headphone Jack (3.5mm)", content: "The headphone jack is a small round hole, usually 3.5mm wide. Plug in headphones or speakers here to hear private audio or to improve the sound quality.", tip: "Most headphones and earphones use a 3.5mm jack." },
          { title: "Ethernet Port", content: "The Ethernet port looks like a large phone socket. You plug in a network cable to connect directly to the internet — this is faster and more reliable than Wi-Fi.", tip: "If your Wi-Fi is slow, try connecting with an Ethernet cable instead." },
          { title: "SD Card Slot", content: "An SD card is a tiny rectangle card used in digital cameras and phones. You can slide an SD card into the SD card slot to copy photos from your camera to the computer.", tip: "SD cards click in — push until you hear/feel a click. Push again to remove." }
        ],
        practice: { type: "match", question: "Match each port to its use:", items: [["USB-A", "Plug in a flash drive"], ["HDMI", "Connect to a TV"], ["Headphone Jack", "Plug in earphones"], ["Ethernet", "Wired internet connection"]] },
        homework: [
          { title: "Port Hunt", desc: "Look at a computer or laptop near you. How many different ports can you find? Try to name each one." },
          { title: "Plug Something In", desc: "With adult supervision, try plugging a USB device (like a phone charger or flash drive) into the computer." }
        ],
        quiz: [
          { q: "What do you plug into an HDMI port?", options: ["A cable to connect to a TV or monitor", "Headphones", "A flash drive", "A charger"], correct: 0, explanation: "HDMI connects your computer to a TV or external monitor, sending both picture and sound." },
          { q: "What shape is a USB-C port?", options: ["Small oval shape", "Large rectangle", "Round circle", "Flat trapezoid"], correct: 0, explanation: "USB-C has a small oval shape and works both ways — you can plug it in either direction." },
          { q: "What is an Ethernet port used for?", options: ["Connecting directly to the internet with a cable", "Charging the battery", "Connecting headphones", "Plugging in a mouse"], correct: 0, explanation: "An Ethernet port is for wired internet — faster and more reliable than Wi-Fi." },
          { q: "What do you plug into the headphone jack?", options: ["Headphones or earphones", "An HDMI cable", "A USB drive", "A network cable"], correct: 0, explanation: "The headphone jack (3.5mm) is where you plug in headphones or earphones to hear sound." }
        ],
        encouragement: "Ports can look confusing at first, but now you know what each one does! You're becoming a real computer expert! 🔌💪"
      }
    ]
  },
  {
    id: 2,
    title: "Using the Computer",
    emoji: "🖱️",
    color: "#8B5CF6",
    description: "Practice mouse skills, clicking, scrolling, and keyboard basics.",
    lessons: [
      {
        id: "2-1",
        title: "Mouse Practice",
        emoji: "🖱️",
        objective: "Practise all mouse movements and clicks with confidence.",
        steps: [
          { title: "Moving the Mouse", content: "Pick up the mouse and set it in the middle of your mouse pad or desk. Move it slowly in all directions — up, down, left, right. Watch the cursor on screen follow every movement.", tip: "If you run out of space on the desk, just lift the mouse, reposition it, and keep moving." },
          { title: "Single Click", content: "A single click selects something. Move the cursor over a button or icon. Press the left mouse button once and release. The item is now selected (often highlighted in blue).", tip: "Click gently — you don't need to press hard." },
          { title: "Double Click", content: "Double-click opens things. Move the cursor over a file or program icon. Click the left button twice quickly (click-click!). The item will open.", tip: "If a single click opened a menu instead, just press Escape and try double-clicking faster." },
          { title: "Right Click", content: "Right-click shows options. Right-click anywhere to see a menu. This menu shows things you CAN do to that item. To close it without doing anything, press Escape or click somewhere else.", tip: "Right-clicking never deletes or changes anything by itself — it just shows options." },
          { title: "Dragging", content: "Dragging moves things. Click and HOLD the left button on an item. While holding, move the mouse. Release the button to drop the item in the new place.", tip: "Drag and drop is used to move files into folders." }
        ],
        practice: { type: "click-game", question: "Click the 🎯 target as many times as you can in 30 seconds!", timeLimit: 30 },
        homework: [
          { title: "Click Practice", desc: "Find 5 different buttons or icons on your screen. Click each one." },
          { title: "Right-Click Explore", desc: "Right-click on the desktop background. Look at the menu. Press Escape to close it." }
        ],
        quiz: [
          { q: "What does a SINGLE click do?", options: ["Selects an item", "Opens an item", "Deletes an item", "Moves an item"], correct: 0, explanation: "A single click selects or activates an item. Double-click opens it." },
          { q: "What does DOUBLE-clicking do?", options: ["Opens a file or program", "Deletes a file", "Selects text", "Closes a window"], correct: 0, explanation: "Double-clicking (two quick clicks) opens files and programs." },
          { q: "How do you drag something to a new location?", options: ["Click and hold, move, then release", "Double-click and move", "Right-click and choose move", "Press Ctrl and click"], correct: 0, explanation: "To drag: click and hold the left button, move the mouse, then release to drop." },
          { q: "What does right-clicking do?", options: ["Shows a menu of options", "Deletes something", "Opens a file", "Scrolls the page"], correct: 0, explanation: "Right-clicking shows a context menu with options for that item — it doesn't do anything by itself." }
        ],
        encouragement: "Your mouse skills are improving every time you practice! Keep clicking — you're doing amazing! 🎯"
      }
    ]
  },
  {
    id: 3,
    title: "Operating System Basics",
    emoji: "🪟",
    color: "#F59E0B",
    description: "Understand Windows, the desktop, and how to manage windows.",
    lessons: [
      {
        id: "3-1",
        title: "What is an Operating System?",
        emoji: "🪟",
        objective: "Understand what an operating system is and learn the desktop.",
        steps: [
          { title: "What is an Operating System?", content: "An operating system (OS) is the main program that runs on your computer. It manages everything — letting you see your files, open programs, and use the internet. The most common ones are Windows (by Microsoft), macOS (by Apple), and Chrome OS (on Chromebooks).", tip: "Most Windows computers have the Windows logo on the Start button in the bottom-left." },
          { title: "The Desktop", content: "The desktop is the main screen you see after turning on your computer. Think of it as your 'desk' — you can put shortcuts and files on it, and open things from it.", tip: "You can change your desktop background (wallpaper) to a photo you like!" },
          { title: "Icons", content: "Icons are small pictures on the desktop. Each icon represents a program, file, or folder. Double-click an icon to open it.", tip: "Icons are shortcuts — they don't store the actual file, just a link to it." },
          { title: "The Taskbar", content: "The taskbar is the bar at the bottom of the screen (in Windows) or top (on Mac). It shows programs that are pinned there or currently open. Click a program in the taskbar to switch to it.", tip: "You can pin your favourite programs to the taskbar for quick access." },
          { title: "The Start Menu", content: "Click the Windows logo button (bottom-left) to open the Start Menu. This shows ALL your programs, settings, and a search box. It's like the main menu of your computer.", tip: "If you can't find a program, open Start and type the program's name to search for it." }
        ],
        practice: { type: "identify", question: "What is shown at the bottom of the Windows screen?", options: ["The Taskbar", "The Desktop", "A File", "The Start Menu"], correct: 0, feedback: "The Taskbar runs along the bottom of the screen and shows open and pinned programs." },
        homework: [
          { title: "Explore Your Desktop", desc: "Look at your desktop. How many icons can you count? What do they look like?" },
          { title: "Open the Start Menu", desc: "Click the Start button. Look at what's there. Then press Escape to close it without changing anything." }
        ],
        quiz: [
          { q: "What is the desktop?", options: ["The main screen you see on the computer", "A type of keyboard", "An internet browser", "A document program"], correct: 0, explanation: "The desktop is the main screen you see after turning on your computer — it's like your virtual workspace." },
          { q: "What does double-clicking an icon do?", options: ["Opens the program or file", "Deletes it", "Moves it", "Changes its colour"], correct: 0, explanation: "Double-clicking an icon opens the program, file, or folder it represents." },
          { q: "Where is the Start Menu button in Windows?", options: ["Bottom-left of the screen", "Top-right of the screen", "In the middle of the screen", "On the keyboard"], correct: 0, explanation: "The Start Menu button (Windows logo) is in the bottom-left corner of the screen." },
          { q: "What is the Taskbar?", options: ["The bar at the bottom showing open programs", "The list of files", "A type of menu", "The background image"], correct: 0, explanation: "The Taskbar runs along the bottom of the screen and shows programs that are open or pinned there." }
        ],
        encouragement: "You've learned the desktop and operating system basics! You're navigating your computer with real confidence now! 🪟⭐"
      }
    ]
  },
  {
    id: 4,
    title: "Files and Folders",
    emoji: "📁",
    color: "#EF4444",
    description: "Learn to create, save, move, and organise files and folders.",
    lessons: [
      {
        id: "4-1",
        title: "Understanding Files and Folders",
        emoji: "📁",
        objective: "Learn what files and folders are and how to organise them.",
        steps: [
          { title: "What is a File?", content: "A file is a collection of information saved on your computer. Files can be: documents (like letters), photos, music, videos, or programs. Every file has a name and a type (shown by the letters after the dot, like .docx or .jpg).", tip: "Think of a file like a piece of paper — it has content stored on it." },
          { title: "What is a Folder?", content: "A folder is like a physical folder or drawer — it holds multiple files and helps you keep things organised. You can put folders inside other folders (like drawers within a cabinet).", tip: "Good folder names help you find things quickly. Use clear names like 'Photos 2024' or 'Bills'." },
          { title: "Saving a File", content: "When you create something (a letter, a drawing), you need to SAVE it or it will disappear when you close the program. To save: Press Ctrl + S (or Cmd + S on Mac). Or click File → Save. Choose where to save it and give it a name.", tip: "Save your work often — press Ctrl+S regularly while working!" },
          { title: "Opening a File", content: "To open a file: Find it in your folders. Double-click it. The correct program will open automatically.", tip: "If a file won't open, the computer may need the right program installed to read it." },
          { title: "Deleting and Moving Files", content: "To DELETE a file: click it once, then press the Delete key. It goes to the Recycle Bin — you can recover it from there if you make a mistake. To MOVE a file: drag it from one folder to another, or right-click → Cut → go to new folder → Paste.", tip: "Deleted files go to the Recycle Bin first — not gone forever yet!" }
        ],
        practice: { type: "identify", question: "Which symbol usually represents a folder?", options: ["📁 A folder icon (yellow folder)", "📄 A document icon", "🖼️ A picture frame", "💾 A disk icon"], correct: 0, feedback: "Folders are usually shown as yellow folder icons on your computer." },
        homework: [
          { title: "Create a Folder", desc: "On your desktop, right-click → New → Folder. Name it 'My Practice'." },
          { title: "Save a File", desc: "Open Notepad (Windows) or TextEdit (Mac). Type a few words. Save it into your 'My Practice' folder." }
        ],
        quiz: [
          { q: "What is a file?", options: ["Saved information on your computer", "A physical paper document", "A type of folder", "An internet address"], correct: 0, explanation: "A file is information stored on your computer — it could be a document, photo, music, or program." },
          { q: "Where do deleted files go?", options: ["The Recycle Bin (they can be recovered)", "They disappear forever immediately", "Another folder", "The internet"], correct: 0, explanation: "Deleted files go to the Recycle Bin first, so you can recover them if you deleted something by mistake." },
          { q: "What keyboard shortcut saves a file?", options: ["Ctrl + S", "Ctrl + P", "Ctrl + D", "Ctrl + Z"], correct: 0, explanation: "Ctrl + S (or Cmd + S on Mac) saves your current file. Use it often!" },
          { q: "What is a folder used for?", options: ["Organising files in groups", "Playing videos", "Connecting to the internet", "Typing documents"], correct: 0, explanation: "Folders help you organise files by grouping related ones together, just like physical folders." }
        ],
        encouragement: "Now you can organise your digital life! Files and folders are the foundation of computer organisation — and you've got it! 📁🌟"
      }
    ]
  },
  {
    id: 5,
    title: "Internet Basics",
    emoji: "🌐",
    color: "#0EA5E9",
    description: "Learn about the internet, Wi-Fi, web browsers, and searching.",
    lessons: [
      {
        id: "5-1",
        title: "What is the Internet?",
        emoji: "🌐",
        objective: "Understand what the internet is and how to connect to it.",
        steps: [
          { title: "What is the Internet?", content: "The internet is a giant worldwide network that connects computers, phones, and devices together. When you are 'on the internet', your computer is connected to millions of other computers around the world.", tip: "The internet is sometimes called 'going online'." },
          { title: "What is Wi-Fi?", content: "Wi-Fi is a way of connecting to the internet without cables. A device called a router sends out a wireless signal. Your computer picks up this signal and connects to the internet. The Wi-Fi symbol looks like curved lines: )), )))) or 📶", tip: "Wi-Fi only works if you are close enough to the router." },
          { title: "Connecting to Wi-Fi", content: "Step 1: Look for the Wi-Fi icon in the bottom-right corner of your screen. Step 2: Click it. Step 3: A list of available Wi-Fi networks appears. Step 4: Click your home network name. Step 5: Type the Wi-Fi password. Step 6: Click Connect.", tip: "Your Wi-Fi password is usually on a sticker on the back of your router." },
          { title: "Using a Web Browser", content: "A web browser is the program you use to visit websites. Common browsers: Chrome (colourful circle), Edge (blue wave), Firefox (orange and purple), Safari (compass). Click the browser icon to open it.", tip: "Chrome is the most popular browser. It's free and works well for beginners." },
          { title: "Searching the Internet", content: "The easiest way to find things on the internet is to use a search engine. Google is the most popular. In your browser, type google.com and press Enter. Then type what you want to find in the search box and press Enter or click the search button.", tip: "Use simple words to search. 'pasta recipe' works better than 'I would like to find a recipe for pasta'." }
        ],
        practice: { type: "identify", question: "What does the Wi-Fi symbol look like?", options: ["Curved lines like 📶 signal bars", "A lightning bolt", "A key", "A lock"], correct: 0, feedback: "Wi-Fi shows as curved signal lines, like the bars on your phone." },
        homework: [
          { title: "Connect to Wi-Fi", desc: "Find the Wi-Fi icon on your computer. Check that you are connected. What is the name of your Wi-Fi network?" },
          { title: "Your First Search", desc: "Open a web browser. Search for 'today's weather' and see what comes up." }
        ],
        quiz: [
          { q: "What is the internet?", options: ["A worldwide network connecting computers", "A program on your computer", "A type of email", "A document app"], correct: 0, explanation: "The internet is a global network that connects computers and devices worldwide." },
          { q: "What is Wi-Fi?", options: ["Wireless internet connection", "A type of cable", "A computer program", "A type of keyboard"], correct: 0, explanation: "Wi-Fi lets you connect to the internet wirelessly, without needing a cable." },
          { q: "What is Google used for?", options: ["Searching the internet", "Writing documents", "Playing games", "Making video calls"], correct: 0, explanation: "Google is a search engine — you type what you want to find and it searches the entire internet for results." },
          { q: "What program do you use to visit websites?", options: ["A web browser (Chrome, Edge, Firefox)", "Word processing software", "The file manager", "The settings app"], correct: 0, explanation: "A web browser is the program you use to visit websites. Chrome, Edge, and Firefox are popular browsers." }
        ],
        encouragement: "You're on the internet! The whole world of knowledge is now open to you. You've come so far — be proud of yourself! 🌐🎉"
      }
    ]
  },
  {
    id: 6,
    title: "Daily Life Skills",
    emoji: "📧",
    color: "#EC4899",
    description: "Email, video calls, online forms, and real-life computer tasks.",
    lessons: [
      {
        id: "6-1",
        title: "Sending Email",
        emoji: "📧",
        objective: "Learn how to write and send an email to someone.",
        steps: [
          { title: "What is Email?", content: "Email is electronic mail. You can send messages to anyone in the world instantly, for free. Every person has a unique email address (like their postal address, but for the internet).", tip: "An email address always has an @ symbol in it, like: name@example.com" },
          { title: "Opening Gmail", content: "Gmail is one of the most popular email services. Open your browser and go to gmail.com. Sign in with your email address and password. You will see your Inbox — this is where messages you receive appear.", tip: "If you don't have an email account yet, you can create a free one at gmail.com" },
          { title: "Writing a New Email", content: "Click the 'Compose' button (usually in the top-left). A new writing box appears. Fill in: TO: the email address of the person you're writing to. SUBJECT: a short title (like writing on an envelope). BODY: your actual message. Then click SEND.", tip: "If you make a mistake, you can find your sent message in 'Sent' folder." },
          { title: "Reading Emails You Receive", content: "New emails appear in your Inbox. Unread emails appear in bold. Click on an email to open and read it. To reply, click the Reply button. Type your reply. Click Send.", tip: "Check your email regularly — important messages may arrive any time." }
        ],
        practice: { type: "typing", prompt: "Practice typing an email subject line:", placeholder: "e.g. Hello from [Your Name]", isFreePractice: true },
        homework: [
          { title: "Write an Email", desc: "Write an email to a friend or family member. Say hello and share one thing you learned today." },
          { title: "Reply to an Email", desc: "Ask someone to send you an email. Then reply to it." }
        ],
        quiz: [
          { q: "What symbol does every email address contain?", options: ["@ (the at symbol)", "# (hash)", "$ (dollar sign)", "* (asterisk)"], correct: 0, explanation: "Every email address contains the @ symbol, like: yourname@gmail.com" },
          { q: "What does the 'Subject' field contain?", options: ["A short title for your email", "Your email address", "The message body", "Your password"], correct: 0, explanation: "The Subject line is a short title that tells the recipient what the email is about." },
          { q: "Where do emails you receive appear?", options: ["The Inbox", "The Sent folder", "The Drafts folder", "The Desktop"], correct: 0, explanation: "Emails you receive appear in your Inbox — this is the main folder in your email." },
          { q: "What do you click to write a new email in Gmail?", options: ["The Compose button", "The Reply button", "The Forward button", "The Delete button"], correct: 0, explanation: "Click 'Compose' to start writing a new email to someone." }
        ],
        encouragement: "You can now send emails! This skill connects you to the whole world. You should be incredibly proud! 📧🌟"
      }
    ]
  },
  {
    id: 7,
    title: "Troubleshooting",
    emoji: "🔧",
    color: "#6366F1",
    description: "Fix common computer problems step by step.",
    lessons: [],
    troubleshooting: true
  },
  {
    id: 8,
    title: "Safety & Security",
    emoji: "🛡️",
    color: "#10B981",
    description: "Stay safe online with strong passwords and smart browsing.",
    lessons: [
      {
        id: "8-1",
        title: "Staying Safe Online",
        emoji: "🛡️",
        objective: "Learn how to protect yourself online and avoid common scams.",
        steps: [
          { title: "Strong Passwords", content: "A strong password is hard for others to guess. Use: at least 8 characters, a mix of UPPER and lower case letters, numbers (like 4 or 9), and symbols (like ! or #). Example: MyDog!2024 is a strong password. 'password' is a terrible one.", tip: "Never share your password with anyone — not even people who say they are from the bank or a computer company." },
          { title: "Recognising Scam Emails", content: "Scam emails try to trick you. Watch for: urgent language ('Act NOW or your account will be closed!'), requests for your password or bank details, strange email addresses (like: support@amaz0n-free.xyz), and links that look suspicious.", tip: "If an email looks suspicious, don't click ANY links. Ask a trusted person for help." },
          { title: "The Padlock Symbol", content: "When you visit a website, look at the address bar at the top. A padlock symbol (🔒) means the site is secure and your information is protected. No padlock, or a warning symbol, means be more cautious.", tip: "You can also check if the address starts with https:// — the 's' stands for secure." },
          { title: "Viruses and Scam Pop-ups", content: "Sometimes a message pops up saying your computer has a virus and you must call a number immediately. THIS IS A SCAM. Real virus warnings do not ask you to call a phone number. Close the window. If you're worried, ask a trusted person.", tip: "Real warnings from your computer NEVER ask you to call a phone number or pay money." }
        ],
        practice: { type: "identify", question: "Which of these is a STRONG password?", options: ["MyD0g!Loves$Walks", "password", "123456", "abc"], correct: 0, feedback: "MyD0g!Loves$Walks is strong because it has capitals, lowercase, numbers, and symbols." },
        homework: [
          { title: "Check Your Passwords", desc: "Think about your passwords. Are they easy to guess? Consider making them stronger." },
          { title: "Padlock Check", desc: "Visit google.com. Look for the padlock symbol in the address bar." }
        ],
        quiz: [
          { q: "What makes a strong password?", options: ["A mix of letters, numbers, and symbols", "Your name and birthday", "A single word", "1-2-3-4-5-6"], correct: 0, explanation: "Strong passwords use a mix of uppercase, lowercase, numbers, and symbols — and are hard to guess." },
          { q: "What should you do if an email asks for your bank password?", options: ["Delete it — this is a scam", "Reply with your password", "Click the link to check", "Call the number in the email"], correct: 0, explanation: "Banks and real companies never ask for your password by email. This is a scam — delete it." },
          { q: "What does the padlock symbol in a browser mean?", options: ["The site is secure", "The site is dangerous", "Your password is saved", "You're disconnected"], correct: 0, explanation: "The padlock symbol means the site is using secure encryption to protect your information." },
          { q: "A pop-up says your computer has a virus and to call a number. What do you do?", options: ["Close it — it's a scam", "Call the number immediately", "Click OK", "Type your password"], correct: 0, explanation: "Legitimate security warnings never ask you to call a phone number. Close the pop-up — it's a scam." }
        ],
        encouragement: "You now know how to protect yourself online! These skills will keep you safe every single day. You're a smart computer user! 🛡️🎉"
      }
    ]
  }
];

const TROUBLESHOOTING_DATA = [
  {
    id: "t1",
    problem: "Computer Won't Turn On",
    icon: "💔",
    symptoms: ["Screen stays black", "No sounds or lights", "Nothing happens when pressing power button"],
    causes: ["Power cable not plugged in", "Battery is flat (laptop)", "Power strip is switched off"],
    steps: ["Check the power cable is firmly plugged in at both ends", "For a laptop: make sure the charger is connected", "Press the power button and hold for 3 seconds", "Check if any lights come on — even briefly", "Try a different power socket", "If nothing works, ask someone to help"],
    prevention: ["Always shut down properly using the menu", "Keep laptop charged above 20%", "Don't pull out power cables while computer is on"]
  },
  {
    id: "t2",
    problem: "No Internet Connection",
    icon: "📡",
    symptoms: ["Cannot open websites", "Wi-Fi icon has an X or exclamation mark", "Browser shows 'No internet' page"],
    causes: ["Wi-Fi is turned off on the computer", "Router has lost connection", "Entered wrong Wi-Fi password", "Internet service is down in your area"],
    steps: ["Check the Wi-Fi icon — is it connected?", "Turn Wi-Fi off and back on: click the Wi-Fi icon and toggle", "Move closer to the router if possible", "Restart the router: unplug it, wait 30 seconds, plug back in", "Forget the Wi-Fi network and reconnect (re-enter password)", "If all else fails, contact your internet provider"],
    prevention: ["Keep router in a central, open location", "Don't place heavy objects on the router", "Know where your Wi-Fi password is written down"]
  },
  {
    id: "t3",
    problem: "Computer is Very Slow",
    icon: "🐌",
    symptoms: ["Programs take a long time to open", "Screen freezes briefly", "Everything feels sluggish"],
    causes: ["Too many programs open at once", "Computer needs to restart", "Not enough storage space", "Needs software updates"],
    steps: ["Restart the computer — this fixes most slowness", "Close programs you are not using", "Check if updates are waiting: Settings → Update", "Wait a moment — sometimes computers just need to 'catch up'", "Ask for help if it stays slow for days"],
    prevention: ["Restart your computer at least once a week", "Close programs when you're done with them", "Keep your computer updated"]
  },
  {
    id: "t4",
    problem: "Screen is Frozen",
    icon: "🥶",
    symptoms: ["Mouse cursor won't move", "Clicking does nothing", "Programs are not responding"],
    causes: ["A program has stopped working", "Computer ran out of memory temporarily"],
    steps: ["Wait 2-3 minutes — the computer may recover on its own", "Press Ctrl + Alt + Delete and choose Task Manager", "Find the program that says 'Not Responding'", "Click it and press 'End Task'", "If nothing works: press and HOLD the power button until it shuts off", "Wait 10 seconds, then turn it back on normally"],
    prevention: ["Don't open too many programs at once", "Restart the computer regularly", "Keep programs updated"]
  },
  {
    id: "t5",
    problem: "Keyboard Not Working",
    icon: "⌨️",
    symptoms: ["Keys don't type anything", "Wrong letters appear", "Some keys don't respond"],
    causes: ["Keyboard not plugged in properly", "Caps Lock or Num Lock is on accidentally", "Keyboard needs cleaning", "Software issue"],
    steps: ["Check the keyboard cable is firmly connected", "Check if Caps Lock light is on — press it to turn off if so", "Try unplugging and re-plugging the keyboard", "Restart the computer", "Try a different USB port", "Test with a different keyboard if available"],
    prevention: ["Keep food and drinks away from keyboard", "Clean keyboard regularly with compressed air", "Don't press keys too hard"]
  },
  {
    id: "t6",
    problem: "Battery Not Charging",
    icon: "🔋",
    symptoms: ["Battery percentage stays the same while plugged in", "Charging light is not on", "Computer dies quickly"],
    causes: ["Charger not fully connected", "Charging port has debris", "Faulty charger cable"],
    steps: ["Remove the charger and reconnect firmly at both ends", "Check the charging port for fluff or debris (don't put anything inside)", "Try a different power socket", "Restart the computer and try charging again", "Check if the charging light comes on at all", "If charger is warm/hot, stop using it and get a replacement"],
    prevention: ["Don't bend or coil charger cables tightly", "Don't walk on charger cables", "Remove charger by the plug, not the cable"]
  },
  {
    id: "t7",
    problem: "Printer Not Printing",
    icon: "🖨️",
    symptoms: ["Print job disappears without printing", "Error message appears", "Printer makes noise but no paper comes out"],
    causes: ["Printer is out of paper or ink", "Printer is not set as default", "Print queue is stuck", "Printer is offline"],
    steps: ["Check the printer is turned on", "Check there is paper in the paper tray", "Check ink or toner levels", "Make sure the USB cable or Wi-Fi connection is working", "Open Control Panel → Printers and check status", "Clear the print queue: cancel all pending jobs", "Restart both the printer and computer"],
    prevention: ["Keep paper stocked", "Replace ink/toner before it runs completely out", "Keep printer drivers updated"]
  },
  {
    id: "t8",
    problem: "Website or Program Won't Open",
    icon: "🚫",
    symptoms: ["Error message when opening a program", "Website shows error page", "'Page not found' message"],
    causes: ["No internet connection", "The website is temporarily down", "The program needs updating"],
    steps: ["Check you are connected to the internet", "Try refreshing the page (Ctrl + R)", "Try a different website to see if the internet works", "Clear the browser cache: Settings → Clear browsing data", "Try a different web browser", "Restart the computer and try again"],
    prevention: ["Keep browser updated", "Clear browser cache regularly", "Check internet connection first when sites don't load"]
  }
];

const BADGES = [
  { id: "first_lesson", name: "First Step!", icon: "🚀", desc: "Completed your first lesson", condition: (s) => s.completedLessons >= 1 },
  { id: "level0_complete", name: "Computer Explorer", icon: "🖥️", desc: "Completed Level 0", condition: (s) => s.level0Complete },
  { id: "quiz_pass", name: "Quiz Champion", icon: "🏆", desc: "Passed a quiz with 100%", condition: (s) => s.perfectQuiz },
  { id: "typing_start", name: "Keyboard Beginner", icon: "⌨️", desc: "Typed 100 characters", condition: (s) => s.totalCharsTyped >= 100 },
  { id: "typing_speed", name: "Speed Typist", icon: "⚡", desc: "Reached 20 WPM typing speed", condition: (s) => s.bestTypingWPM >= 20 },
  { id: "streak3", name: "3 Day Streak", icon: "🔥", desc: "Learned 3 days in a row", condition: (s) => s.streak >= 3 },
  { id: "internet", name: "Internet Navigator", icon: "🌐", desc: "Completed Internet Basics", condition: (s) => s.level5Started },
  { id: "safety", name: "Safety Champion", icon: "🛡️", desc: "Completed Safety & Security", condition: (s) => s.level8Complete },
  { id: "half_way", name: "Halfway Hero", icon: "⭐", desc: "Completed 50% of lessons", condition: (s) => s.progressPercent >= 50 },
  { id: "graduate", name: "Digital Graduate", icon: "🎓", desc: "Completed all levels!", condition: (s) => s.progressPercent >= 90 }
];

// ========== STATE ==========
let STATE = {
  currentPage: "home",
  currentLesson: null,
  currentLevelId: 0,
  userName: "Learner",
  completedLessons: [],
  completedHomework: {},
  quizScores: {},
  unlockedLevels: [0],
  points: 0,
  streak: 1,
  typingStats: { bestWPM: 0, totalChars: 0, sessions: 0 },
  settings: { largeText: false, highContrast: false, encouragementOn: true },
  earnedBadges: [],
  lastLogin: new Date().toDateString()
};

function loadState() {
  try {
    const saved = localStorage.getItem("dlp_state");
    if (saved) STATE = { ...STATE, ...JSON.parse(saved) };
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem("dlp_state", JSON.stringify(STATE));
  } catch(e) {}
}

function getTotalLessons() {
  return CURRICULUM.reduce((acc, lvl) => acc + lvl.lessons.length, 0);
}

function getProgressPercent() {
  return Math.round((STATE.completedLessons.length / getTotalLessons()) * 100);
}

function isLessonUnlocked(levelId, lessonIndex) {
  if (!STATE.unlockedLevels.includes(levelId)) return false;
  if (lessonIndex === 0) return true;
  const level = CURRICULUM.find(l => l.id === levelId);
  if (!level) return false;
  const prevLesson = level.lessons[lessonIndex - 1];
  return prevLesson && STATE.completedLessons.includes(prevLesson.id);
}

function completeLesson(lessonId) {
  if (!STATE.completedLessons.includes(lessonId)) {
    STATE.completedLessons.push(lessonId);
    STATE.points += 50;
  }
  // Unlock next level if needed
  CURRICULUM.forEach(level => {
    if (level.lessons.length > 0) {
      const allDone = level.lessons.every(l => STATE.completedLessons.includes(l.id));
      if (allDone) {
        const nextId = level.id + 1;
        if (!STATE.unlockedLevels.includes(nextId)) {
          STATE.unlockedLevels.push(nextId);
        }
      }
    }
  });
  checkBadges();
  saveState();
}

function checkBadges() {
  const stats = {
    completedLessons: STATE.completedLessons.length,
    level0Complete: CURRICULUM[0].lessons.every(l => STATE.completedLessons.includes(l.id)),
    perfectQuiz: Object.values(STATE.quizScores).some(s => s === 100),
    totalCharsTyped: STATE.typingStats.totalChars,
    bestTypingWPM: STATE.typingStats.bestWPM,
    streak: STATE.streak,
    level5Started: STATE.unlockedLevels.includes(5),
    level8Complete: CURRICULUM[8] && CURRICULUM[8].lessons.every(l => STATE.completedLessons.includes(l.id)),
    progressPercent: getProgressPercent()
  };
  BADGES.forEach(badge => {
    if (!STATE.earnedBadges.includes(badge.id) && badge.condition(stats)) {
      STATE.earnedBadges.push(badge.id);
      showToast(`🏆 Badge earned: ${badge.name}!`, "success");
      celebrateConfetti();
    }
  });
}
