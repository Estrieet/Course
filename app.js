// ============================================
//   DIGITAL LITERACY PLATFORM — UI ENGINE
// ============================================

// ========== TOAST ==========
function showToast(msg, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icons = { success: "✅", error: "❌", info: "ℹ️" };
  toast.innerHTML = `${icons[type] || "ℹ️"} ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.style.opacity = "0", 2800);
  setTimeout(() => toast.remove(), 3100);
}

// ========== CONFETTI ==========
function celebrateConfetti() {
  const container = document.getElementById("confettiContainer");
  const colors = ["#2563EB", "#10B981", "#F59E0B", "#8B5CF6", "#EF4444", "#EC4899"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 10}px;
      height: ${6 + Math.random() * 10}px;
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      animation: fall ${1.5 + Math.random() * 2}s linear ${Math.random() * 0.5}s forwards;
    `;
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = "", 4000);
}

// ========== NAVIGATION ==========
function navigate(page, data = {}) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));

  const el = document.getElementById(`page-${page}`);
  if (el) {
    el.classList.add("active");
    const navEl = document.querySelector(`[data-nav="${page}"]`);
    if (navEl) navEl.classList.add("active");
    window.scrollTo(0, 0);
  }

  STATE.currentPage = page;
  document.getElementById("topbarTitle").textContent = getPageTitle(page);

  // Render page content
  switch(page) {
    case "home": renderHome(); break;
    case "lessons": renderLessons(); break;
    case "lesson-detail": renderLessonDetail(data.levelId, data.lessonIndex); break;
    case "quiz": renderQuiz(data.lessonId); break;
    case "typing": renderTyping(); break;
    case "progress": renderProgress(); break;
    case "help": renderHelp(); break;
    case "troubleshoot": renderTroubleshoot(); break;
    case "achievements": renderAchievements(); break;
    case "settings": renderSettings(); break;
  }

  // Close sidebar on mobile
  if (window.innerWidth < 900) {
    document.querySelector(".sidebar").classList.remove("open");
  }
}

function getPageTitle(page) {
  const titles = {
    home: "🏠 Welcome Home",
    lessons: "📚 All Lessons",
    "lesson-detail": "📖 Lesson",
    quiz: "❓ Quiz",
    typing: "⌨️ Typing Practice",
    progress: "📊 My Progress",
    help: "💛 Feeling Stuck?",
    troubleshoot: "🔧 Troubleshooting",
    achievements: "🏆 Achievements",
    settings: "⚙️ Settings"
  };
  return titles[page] || "Digital Literacy Platform";
}

// ========== HOME PAGE ==========
function renderHome() {
  const el = document.getElementById("page-home");
  const progress = getProgressPercent();
  const nextLesson = getNextLesson();

  el.innerHTML = `
    <div class="home-hero">
      <span class="hero-emoji">👋</span>
      <h1 class="hero-title">Welcome back,<br>${STATE.userName}!</h1>
      <p class="hero-subtitle">You're doing wonderfully. Every step you take today makes you more confident with computers. Let's keep going!</p>
      <div class="hero-actions">
        ${nextLesson ? `<button class="btn-hero-primary" onclick="navigate('lesson-detail', {levelId:${nextLesson.levelId}, lessonIndex:${nextLesson.lessonIndex}})">▶ Continue Learning</button>` : `<button class="btn-hero-primary" onclick="navigate('lessons')">🎓 Start Learning</button>`}
        <button class="btn-hero-secondary" onclick="navigate('typing')">⌨️ Practice Typing</button>
        <button class="btn-hero-secondary" onclick="navigate('help')">💛 I Need Help</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-value">${STATE.completedLessons.length}</div>
        <div class="stat-label">Lessons Done</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-value">${STATE.points}</div>
        <div class="stat-label">Points Earned</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔥</div>
        <div class="stat-value">${STATE.streak}</div>
        <div class="stat-label">Day Streak</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⚡</div>
        <div class="stat-value">${STATE.typingStats.bestWPM || 0}</div>
        <div class="stat-label">Best WPM</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🏅</div>
        <div class="stat-value">${STATE.earnedBadges.length}</div>
        <div class="stat-label">Badges</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-value">${progress}%</div>
        <div class="stat-label">Complete</div>
      </div>
    </div>

    ${nextLesson ? `
    <div class="card mb-6">
      <div class="card-header">
        <div class="card-title">📌 Continue Where You Left Off</div>
      </div>
      <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap;">
        <div style="font-size:3rem;">${nextLesson.lesson.emoji}</div>
        <div style="flex:1;">
          <div style="font-weight:800; font-size:1.1rem; margin-bottom:4px;">${nextLesson.lesson.title}</div>
          <div style="color:var(--text-muted); font-size:0.9rem; margin-bottom:12px;">${nextLesson.lesson.objective}</div>
          <button class="btn btn-primary btn-sm" onclick="navigate('lesson-detail', {levelId:${nextLesson.levelId}, lessonIndex:${nextLesson.lessonIndex}})">Start This Lesson →</button>
        </div>
      </div>
    </div>` : `
    <div class="encouragement-card">
      <span class="encouragement-emoji">🎉</span>
      <div class="encouragement-text">You've completed all available lessons! You're an amazing learner! Keep practising what you've learned.</div>
    </div>`}

    <h2 class="section-title">📚 Learning Levels</h2>
    <p class="section-subtitle">Your learning journey from beginner to confident computer user</p>

    <div class="levels-grid">
      ${CURRICULUM.map(level => renderLevelCard(level)).join("")}
    </div>

    <div class="card" style="background: linear-gradient(135deg, #EDE9FE, #DDD6FE); border-color: var(--purple);">
      <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
        <div style="font-size:2.5rem;">💛</div>
        <div style="flex:1;">
          <div style="font-weight:800; font-size:1.1rem; color:var(--purple); margin-bottom:4px;">Feeling stuck or confused?</div>
          <div style="color:#5B21B6; font-size:0.9rem;">Don't worry — everyone feels this way sometimes. Our help section has answers to the most common problems.</div>
        </div>
        <button class="btn btn-sm" onclick="navigate('help')" style="background:var(--purple);color:#fff;flex-shrink:0;">Get Help</button>
      </div>
    </div>
  `;
}

function getNextLesson() {
  for (const level of CURRICULUM) {
    if (!STATE.unlockedLevels.includes(level.id)) continue;
    for (let i = 0; i < level.lessons.length; i++) {
      const lesson = level.lessons[i];
      if (!STATE.completedLessons.includes(lesson.id)) {
        return { levelId: level.id, lessonIndex: i, lesson };
      }
    }
  }
  return null;
}

function renderLevelCard(level) {
  const isUnlocked = STATE.unlockedLevels.includes(level.id);
  const completedCount = level.lessons.filter(l => STATE.completedLessons.includes(l.id)).length;
  const total = level.lessons.length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const isComplete = total > 0 && completedCount === total;
  const isTroubleshoot = level.troubleshooting;

  let statusClass = "locked";
  if (isComplete) statusClass = "completed";
  else if (isUnlocked) statusClass = "current";

  return `
    <div class="level-card ${statusClass}" 
         style="--level-color: ${level.color};"
         onclick="${isUnlocked ? `navigate('${isTroubleshoot ? 'troubleshoot' : 'lessons'}', {levelId:${level.id}})` : 'showLockedMessage()'}">
      ${isComplete ? `<span class="check-icon">✅</span>` : !isUnlocked ? `<span class="lock-icon">🔒</span>` : ""}
      <div class="level-num">${isComplete ? "✓" : level.id}</div>
      <div class="level-title">${level.emoji} ${level.title}</div>
      <div class="level-desc">${level.description}</div>
      ${total > 0 ? `
        <div class="level-progress-wrap">
          <div class="level-progress-bar" style="width:${percent}%"></div>
        </div>
        <div class="level-meta">
          <span>${completedCount}/${total} lessons</span>
          <span class="chip chip-${isComplete ? 'green' : isUnlocked ? 'blue' : 'yellow'}">${isComplete ? 'Complete' : isUnlocked ? 'In Progress' : 'Locked'}</span>
        </div>
      ` : `<div class="level-meta"><span class="chip chip-blue">Reference</span></div>`}
    </div>
  `;
}

function showLockedMessage() {
  showToast("🔒 Complete the previous level to unlock this one!", "info");
}

// ========== LESSONS PAGE ==========
function renderLessons() {
  const el = document.getElementById("page-lessons");
  let html = `<h2 class="section-title">📚 All Levels & Lessons</h2>
    <p class="section-subtitle">Click a level to see its lessons. Complete them in order to unlock more!</p>`;

  CURRICULUM.forEach(level => {
    const isUnlocked = STATE.unlockedLevels.includes(level.id);
    html += `
      <div class="card mb-6" style="border-top: 4px solid ${level.color};">
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:${level.lessons.length > 0 ? '20px' : '0'};">
          <div style="font-size:2rem;">${level.emoji}</div>
          <div>
            <div style="font-weight:800; font-size:1.15rem;">Level ${level.id}: ${level.title}</div>
            <div style="color:var(--text-muted); font-size:0.88rem;">${level.description}</div>
          </div>
          ${!isUnlocked ? `<span class="chip chip-yellow" style="margin-left:auto;">🔒 Locked</span>` : ""}
        </div>
    `;

    if (level.troubleshooting) {
      html += `<button class="btn btn-ghost btn-sm" onclick="navigate('troubleshoot')">Open Troubleshooting Guide →</button>`;
    } else {
      level.lessons.forEach((lesson, i) => {
        const unlocked = isLessonUnlocked(level.id, i);
        const done = STATE.completedLessons.includes(lesson.id);
        html += `
          <div style="display:flex; align-items:center; gap:14px; padding:14px; border-radius:var(--radius); margin-bottom:8px;
                      background:${done ? 'var(--secondary-light)' : unlocked ? 'var(--surface2)' : 'var(--bg)'};
                      border: 1px solid ${done ? 'var(--secondary)' : 'var(--border)'};
                      opacity: ${unlocked ? 1 : 0.6};
                      cursor: ${unlocked ? 'pointer' : 'not-allowed'};"
               onclick="${unlocked ? `navigate('lesson-detail', {levelId:${level.id}, lessonIndex:${i}})` : 'showLockedMessage()'}">
            <div style="font-size:1.5rem;">${done ? "✅" : unlocked ? lesson.emoji : "🔒"}</div>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.95rem;">${lesson.title}</div>
              <div style="font-size:0.82rem; color:var(--text-muted);">${lesson.objective}</div>
            </div>
            ${done ? `<span class="chip chip-green">Done ✓</span>` : unlocked ? `<span class="chip chip-blue">Ready</span>` : `<span class="chip chip-yellow">Locked</span>`}
          </div>
        `;
      });
    }

    html += `</div>`;
  });

  el.innerHTML = html;
}

// ========== LESSON DETAIL ==========
function renderLessonDetail(levelId, lessonIndex) {
  const level = CURRICULUM.find(l => l.id === levelId);
  if (!level) return;
  const lesson = level.lessons[lessonIndex];
  if (!lesson) return;

  STATE.currentLesson = { levelId, lessonIndex, lesson };
  const el = document.getElementById("page-lesson-detail");

  const hwKey = lesson.id;
  const hwCompleted = STATE.completedHomework[hwKey] || [];
  const allHWDone = lesson.homework.every((_, i) => hwCompleted.includes(i));
  const quizScore = STATE.quizScores[lesson.id];
  const quizPassed = quizScore !== undefined && quizScore >= 70;
  const lessonDone = STATE.completedLessons.includes(lesson.id);

  el.innerHTML = `
    <div class="lesson-header" data-emoji="${lesson.emoji}">
      <span class="lesson-badge">Level ${level.id} · ${level.title}</span>
      <h1 class="lesson-title-main">${lesson.title}</h1>
      <p class="lesson-objective">🎯 Goal: ${lesson.objective}</p>
    </div>

    <div style="display:flex; gap:12px; margin-bottom:24px; flex-wrap:wrap;">
      <button class="btn btn-ghost btn-sm" onclick="navigate('lessons')">← Back to Lessons</button>
      ${lessonDone ? `<span class="chip chip-green" style="padding:10px 16px;">✅ Completed!</span>` : ""}
    </div>

    <!-- STEPS -->
    <h2 class="section-title">📖 Lesson Steps</h2>
    <p class="section-subtitle">Read through each step carefully. Take your time — there's no rush!</p>

    ${lesson.steps.map((step, i) => `
      <div class="lesson-step" style="animation-delay:${i * 0.1}s">
        <div class="step-number">${i + 1}</div>
        <div class="step-title">${step.title}</div>
        <div class="step-content">${step.content}</div>
        ${step.tip ? `<div class="step-tip">${step.tip}</div>` : ""}
      </div>
    `).join("")}

    <!-- PRACTICE -->
    ${lesson.practice ? renderPracticeSection(lesson.practice, lesson.id) : ""}

    <!-- HOMEWORK -->
    <h2 class="section-title mt-8">📝 Homework</h2>
    <p class="section-subtitle">Try these tasks at home! Check each one off when you finish.</p>
    <div class="homework-list" id="homeworkList">
      ${lesson.homework.map((hw, i) => `
        <div class="homework-item ${hwCompleted.includes(i) ? 'done' : ''}" id="hw-${i}" onclick="toggleHomework(${i}, '${lesson.id}')">
          <div class="hw-checkbox">${hwCompleted.includes(i) ? "✓" : ""}</div>
          <div class="hw-text">
            <div class="hw-title">${hw.title}</div>
            <div class="hw-desc">${hw.desc}</div>
          </div>
        </div>
      `).join("")}
    </div>

    ${allHWDone ? `<div class="encouragement-card mt-6"><span class="encouragement-emoji">🎉</span><div class="encouragement-text">Homework complete! Now take the quiz to unlock the next lesson!</div></div>` : ""}

    <!-- QUIZ SECTION -->
    <div class="card mt-8" style="border-color:${quizPassed ? 'var(--secondary)' : 'var(--primary)'};">
      <h2 class="card-title">❓ Lesson Quiz</h2>
      <p class="text-muted" style="margin-bottom:16px;">Answer ${lesson.quiz.length} questions to complete this lesson. You need 70% or higher to pass.</p>
      ${quizScore !== undefined ? `
        <div style="margin-bottom:16px;">
          <span class="chip ${quizPassed ? 'chip-green' : 'chip-yellow'}">
            Last score: ${quizScore}% ${quizPassed ? '✅ Passed' : '- Try again!'}
          </span>
        </div>
      ` : ""}
      <button class="btn btn-primary" onclick="navigate('quiz', {lessonId:'${lesson.id}'})">
        ${quizScore !== undefined ? "🔄 Retake Quiz" : "🚀 Start Quiz"}
      </button>
    </div>

    <!-- ENCOURAGEMENT -->
    <div class="encouragement-card mt-6">
      <span class="encouragement-emoji">💛</span>
      <div class="encouragement-text">"${lesson.encouragement}"</div>
    </div>

    <!-- UNLOCK STATUS -->
    ${!lessonDone ? `
    <div class="card mt-6" style="background:var(--surface2);">
      <div style="font-weight:700; margin-bottom:10px;">🔓 Unlock Next Lesson</div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:8px; font-size:0.9rem;">
          <span>${allHWDone ? "✅" : "⬜"}</span> Complete all homework
        </div>
        <div style="display:flex; align-items:center; gap:8px; font-size:0.9rem;">
          <span>${quizPassed ? "✅" : "⬜"}</span> Pass the quiz (70%+)
        </div>
      </div>
      ${allHWDone && quizPassed ? `
        <button class="btn btn-success mt-4" onclick="markLessonComplete('${lesson.id}')">
          🎉 Mark Lesson Complete!
        </button>
      ` : ""}
    </div>` : `
    <div class="card mt-6" style="background:var(--secondary-light); border-color:var(--secondary);">
      <div style="font-weight:700; color:var(--secondary); margin-bottom:8px;">✅ Lesson Complete!</div>
      <div style="color:#065F46;">You've finished this lesson. The next one has been unlocked!</div>
      <button class="btn btn-success btn-sm mt-4" onclick="navigate('lessons')">See All Lessons →</button>
    </div>`}
  `;
}

function renderPracticeSection(practice, lessonId) {
  if (practice.type === "click-practice") {
    return `
      <div class="practice-area mt-6">
        <div class="practice-title">🖱️ Interactive Practice</div>
        <p style="color:var(--primary-dark); margin-bottom:16px;">${practice.question}</p>
        <div style="text-align:center;">
          <div id="clickCount" style="font-family:var(--font-display); font-size:3rem; color:var(--primary); margin-bottom:16px;">0 / ${practice.goal}</div>
          <button class="btn btn-accent btn-lg" onclick="handleClickPractice(this, ${practice.goal})">${practice.buttonText}</button>
          <div id="clickFeedback" style="margin-top:16px; font-weight:700; display:none; color:var(--secondary);">🎉 Amazing! You did it!</div>
        </div>
      </div>
    `;
  }
  if (practice.type === "identify") {
    return `
      <div class="practice-area mt-6">
        <div class="practice-title">🎯 Quick Practice</div>
        <p style="color:var(--primary-dark); font-weight:700; margin-bottom:16px;">${practice.question}</p>
        <div class="quiz-options">
          ${practice.options.map((opt, i) => `
            <button class="quiz-option" onclick="handleIdentifyPractice(this, ${i === practice.correct}, '${practice.feedback.replace(/'/g, "\\'")}')">
              <span class="option-letter">${String.fromCharCode(65+i)}</span>
              ${opt}
            </button>
          `).join("")}
        </div>
        <div id="practiceResult" style="display:none; padding:14px; border-radius:var(--radius); margin-top:12px; font-weight:700;"></div>
      </div>
    `;
  }
  if (practice.type === "typing") {
    return `
      <div class="practice-area mt-6">
        <div class="practice-title">⌨️ Typing Practice</div>
        <p style="color:var(--primary-dark); margin-bottom:12px;">${practice.prompt}</p>
        <input type="text" class="typing-input-field" placeholder="${practice.placeholder || 'Start typing here...'}" oninput="handleFreePracticeTyping(this)">
        <div id="typingPracticeFeedback" style="margin-top:10px; font-size:0.9rem; color:var(--text-muted);">Keep going — every character you type is practice! 💪</div>
      </div>
    `;
  }
  return "";
}

let clickCount = 0;
function handleClickPractice(btn, goal) {
  clickCount++;
  const countEl = document.getElementById("clickCount");
  if (countEl) countEl.textContent = `${clickCount} / ${goal}`;
  btn.style.transform = "scale(0.95)";
  setTimeout(() => btn.style.transform = "", 100);
  if (clickCount >= goal) {
    const feedback = document.getElementById("clickFeedback");
    if (feedback) feedback.style.display = "block";
    btn.textContent = "✅ Done!";
    btn.disabled = true;
    showToast("🎉 Practice complete!", "success");
    clickCount = 0;
  }
}

function handleIdentifyPractice(el, correct, feedback) {
  const options = el.parentElement.querySelectorAll(".quiz-option");
  options.forEach(o => o.disabled = true);
  const result = document.getElementById("practiceResult");
  if (correct) {
    el.classList.add("correct");
    if (result) {
      result.style.display = "block";
      result.style.background = "var(--secondary-light)";
      result.style.color = "#065F46";
      result.textContent = "✅ Correct! " + feedback;
    }
    showToast("✅ Correct!", "success");
  } else {
    el.classList.add("incorrect");
    if (result) {
      result.style.display = "block";
      result.style.background = "var(--danger-light)";
      result.style.color = "#991B1B";
      result.textContent = "Not quite — " + feedback;
    }
  }
}

function handleFreePracticeTyping(input) {
  const len = input.value.length;
  const el = document.getElementById("typingPracticeFeedback");
  if (!el) return;
  if (len === 0) el.textContent = "Start typing here — every character is practice! 💪";
  else if (len < 5) el.textContent = `Good start! ${len} character${len === 1 ? "" : "s"} typed.`;
  else if (len < 20) el.textContent = `Great work! You've typed ${len} characters so far!`;
  else el.textContent = `Excellent! ${len} characters — you're really practising! 🌟`;
}

function toggleHomework(index, lessonId) {
  if (!STATE.completedHomework[lessonId]) STATE.completedHomework[lessonId] = [];
  const arr = STATE.completedHomework[lessonId];
  const idx = arr.indexOf(index);
  if (idx === -1) {
    arr.push(index);
    STATE.points += 10;
    showToast("✅ Homework task marked complete! +10 points", "success");
  } else {
    arr.splice(idx, 1);
  }
  saveState();

  const lesson = STATE.currentLesson?.lesson;
  if (lesson) {
    const hwItem = document.getElementById(`hw-${index}`);
    if (hwItem) {
      if (arr.includes(index)) {
        hwItem.classList.add("done");
        hwItem.querySelector(".hw-checkbox").textContent = "✓";
      } else {
        hwItem.classList.remove("done");
        hwItem.querySelector(".hw-checkbox").textContent = "";
      }
    }

    const allDone = lesson.homework.every((_, i) => arr.includes(i));
    if (allDone) {
      showToast("🎉 All homework done! Now take the quiz!", "success");
      celebrateConfetti();
    }
  }
}

function markLessonComplete(lessonId) {
  completeLesson(lessonId);
  celebrateConfetti();
  showToast("🎉 Lesson complete! +50 points earned!", "success");

  const lesson = STATE.currentLesson?.lesson;
  if (lesson) {
    const btn = document.querySelector(".btn-success");
    if (btn) btn.textContent = "✅ Complete!";
  }
  setTimeout(() => navigate("lessons"), 1500);
}

// ========== QUIZ ==========
let quizState = { current: 0, answers: [], lessonId: null, questions: [] };

function renderQuiz(lessonId) {
  const lesson = CURRICULUM.flatMap(l => l.lessons).find(l => l.id === lessonId);
  if (!lesson) return;

  quizState = { current: 0, answers: [], lessonId, questions: lesson.quiz };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const el = document.getElementById("page-quiz");
  const { questions, current, lessonId } = quizState;

  if (current >= questions.length) {
    renderQuizResults();
    return;
  }

  const q = questions[current];
  el.innerHTML = `
    <div class="quiz-container">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="font-weight:800; font-size:1.3rem;">❓ Quiz Time!</h2>
          <p class="text-muted">Answer all questions to complete the lesson</p>
        </div>
        <div style="font-size:0.88rem; color:var(--text-muted); font-weight:700;">
          Question ${current + 1} of ${questions.length}
        </div>
      </div>

      <div class="progress-bar-wrap mb-6">
        <div class="progress-bar-fill" style="width:${(current / questions.length) * 100}%"></div>
      </div>

      <div class="quiz-question">
        <div class="question-num">Question ${current + 1}</div>
        <div class="question-text">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" onclick="selectQuizAnswer(this, ${i})">
              <span class="option-letter">${String.fromCharCode(65+i)}</span>
              ${opt}
            </button>
          `).join("")}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
      </div>

      <div id="quizNext" style="display:none; margin-top:16px; text-align:right;">
        <button class="btn btn-primary" onclick="nextQuizQuestion()">
          ${current + 1 < questions.length ? "Next Question →" : "See Results 🎉"}
        </button>
      </div>

      <button class="btn btn-ghost btn-sm mt-4" onclick="navigate('lesson-detail', {levelId:${getLevelIdForLesson(lessonId)}, lessonIndex:${getLessonIndexInLevel(lessonId)}})">← Back to Lesson</button>
    </div>
  `;
}

function selectQuizAnswer(el, chosenIndex) {
  const q = quizState.questions[quizState.current];
  const isCorrect = chosenIndex === q.correct;
  const options = el.parentElement.querySelectorAll(".quiz-option");

  options.forEach((opt, i) => {
    opt.disabled = true;
    if (i === q.correct) opt.classList.add("correct");
    else if (i === chosenIndex && !isCorrect) opt.classList.add("incorrect");
  });

  quizState.answers.push({ correct: isCorrect, chosen: chosenIndex });

  const feedback = document.getElementById("quizFeedback");
  feedback.classList.add("show");
  if (isCorrect) {
    feedback.textContent = "✅ Correct! " + q.explanation;
    STATE.points += 5;
  } else {
    feedback.classList.add("wrong");
    feedback.textContent = "That's not quite right. " + q.explanation;
  }

  document.getElementById("quizNext").style.display = "block";
}

function nextQuizQuestion() {
  quizState.current++;
  renderQuizQuestion();
}

function renderQuizResults() {
  const el = document.getElementById("page-quiz");
  const { answers, lessonId, questions } = quizState;
  const correct = answers.filter(a => a.correct).length;
  const score = Math.round((correct / questions.length) * 100);
  const passed = score >= 70;

  STATE.quizScores[lessonId] = score;
  if (passed) {
    STATE.points += 25;
    checkBadges();
  }
  saveState();

  const emoji = score === 100 ? "🏆" : score >= 80 ? "🌟" : score >= 70 ? "✅" : "💪";
  const msg = score === 100 ? "Perfect score! You're incredible!" : score >= 80 ? "Excellent work! You really know this!" : score >= 70 ? "You passed! Well done!" : "Keep trying — you're learning! Every attempt counts!";

  if (passed) celebrateConfetti();

  const levelId = getLevelIdForLesson(lessonId);
  const lessonIndex = getLessonIndexInLevel(lessonId);

  el.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-score-card">
        <div class="score-emoji">${emoji}</div>
        <div class="score-number">${score}%</div>
        <div class="score-label">${correct} out of ${questions.length} correct<br>${msg}</div>
        <div class="score-actions">
          ${passed ? `<button class="btn btn-success" onclick="handleQuizPassed('${lessonId}', ${levelId}, ${lessonIndex})">🎉 Continue!</button>` : ""}
          <button class="btn btn-outline" style="color:#fff; border-color:rgba(255,255,255,0.5);" onclick="navigate('quiz', {lessonId:'${lessonId}'})">🔄 Try Again</button>
          <button class="btn btn-ghost" style="background:rgba(255,255,255,0.15); color:#fff;" onclick="navigate('lesson-detail', {levelId:${levelId}, lessonIndex:${lessonIndex}})">📖 Review Lesson</button>
        </div>
      </div>
      ${!passed ? `
      <div class="card mt-6" style="border-color:var(--accent);">
        <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px;">💛 Don't worry!</div>
        <p>You need 70% to pass. You got ${score}%. Read through the lesson again, then try the quiz once more. You can take it as many times as you need!</p>
      </div>` : ""}
    </div>
  `;
}

function handleQuizPassed(lessonId, levelId, lessonIndex) {
  const hwKey = lessonId;
  const lesson = CURRICULUM.find(l => l.id === levelId)?.lessons[lessonIndex];
  if (lesson) {
    const hwCompleted = STATE.completedHomework[hwKey] || [];
    const allHWDone = lesson.homework.every((_, i) => hwCompleted.includes(i));
    if (allHWDone) {
      markLessonComplete(lessonId);
    } else {
      showToast("Complete your homework tasks first!", "info");
      navigate("lesson-detail", { levelId, lessonIndex });
    }
  }
}

function getLevelIdForLesson(lessonId) {
  for (const level of CURRICULUM) {
    if (level.lessons.some(l => l.id === lessonId)) return level.id;
  }
  return 0;
}

function getLessonIndexInLevel(lessonId) {
  for (const level of CURRICULUM) {
    const idx = level.lessons.findIndex(l => l.id === lessonId);
    if (idx !== -1) return idx;
  }
  return 0;
}

// ========== TYPING TRAINER ==========
let typingSession = {
  active: false,
  startTime: null,
  currentText: "",
  typed: "",
  errors: 0,
  wpm: 0,
  accuracy: 100,
  level: 1,
  timer: null
};

const TYPING_TEXTS = {
  1: ["a s d f g h j k l", "fff jjj ddd kkk", "asdf jkl; asdf jkl;"],
  2: ["sad lad ask fall glad half"],
  3: ["top row quit write yore", "type quit write your"],
  4: ["zip zone back", "mix vex box"],
  5: ["123 456 789 0", "call me at 555 1234"],
  6: ["Hello, World!", "Good morning!", "How are you?"],
  7: ["the cat sat on the mat", "I like to learn new things", "computers help us every day"],
  8: ["Learning to type makes me faster every day.", "I am practising on my computer right now.", "Technology helps us connect with people we love."],
  9: ["Dear John, I hope you are well. I am learning to use a computer!", "Please find the attached document. Kind regards."]
};

function renderTyping() {
  const el = document.getElementById("page-typing");
  const currentTexts = TYPING_TEXTS[typingSession.level] || TYPING_TEXTS[1];
  const text = currentTexts[Math.floor(Math.random() * currentTexts.length)];

  el.innerHTML = `
    <h2 class="section-title">⌨️ Typing Practice</h2>
    <p class="section-subtitle">Practise typing to build speed and accuracy. Take your time — accuracy first, speed second!</p>

    <div class="typing-stats">
      <div class="typing-stat"><div class="ts-value" id="wpmDisplay">0</div><div class="ts-label">WPM</div></div>
      <div class="typing-stat"><div class="ts-value" id="accDisplay">100%</div><div class="ts-label">Accuracy</div></div>
      <div class="typing-stat"><div class="ts-value" id="timeDisplay">0s</div><div class="ts-label">Time</div></div>
      <div class="typing-stat"><div class="ts-value" id="charDisplay">0</div><div class="ts-label">Characters</div></div>
    </div>

    <div class="typing-area">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
        <div>
          <strong>Level ${typingSession.level}</strong> · 
          <select onchange="setTypingLevel(this.value)" style="border:1px solid var(--border); border-radius:8px; padding:4px 8px; font-family:var(--font-main);">
            ${Object.keys(TYPING_TEXTS).map(l => `<option value="${l}" ${l == typingSession.level ? 'selected' : ''}>Level ${l}</option>`).join("")}
          </select>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="resetTyping()">🔄 New Text</button>
      </div>

      <div class="typing-target" id="typingTarget"></div>
      <input type="text" class="typing-input-field" id="typingInput" 
             placeholder="Click here and start typing..." 
             oninput="handleTypingInput(this)" autocomplete="off" autocorrect="off" spellcheck="false">

      <div id="typingComplete" style="display:none; text-align:center; padding:20px; background:var(--secondary-light); border-radius:var(--radius); margin-top:16px;">
        <div style="font-size:2rem; margin-bottom:8px;">🎉</div>
        <div style="font-weight:800; color:var(--secondary);">Text Complete! Well done!</div>
        <div id="typingFinalStats" style="color:#065F46; margin:8px 0;"></div>
        <button class="btn btn-success btn-sm mt-4" onclick="resetTyping()">Try Another!</button>
      </div>
    </div>

    <div class="card">
      <div class="card-title mb-4">⌨️ Keyboard Guide</div>
      <div class="keyboard-visual" id="keyboardVisual">
        ${renderKeyboard()}
      </div>
      <p style="color:var(--text-light); font-size:0.8rem; margin-top:10px;">Blue keys = Home row. These are where your fingers should rest.</p>
    </div>

    <div class="card mt-6">
      <div class="card-title mb-4">💡 Typing Tips</div>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap:14px;">
        ${[
          ["🎯 Accuracy First", "Don't rush. Type slowly and correctly. Speed will come naturally!"],
          ["👀 Look at the Screen", "Try not to look at your fingers — look at the text on screen."],
          ["🖐️ Home Row", "Rest your fingers on A S D F (left) and J K L ; (right)."],
          ["😌 Stay Relaxed", "Keep your hands and wrists relaxed. Don't tense up!"]
        ].map(([t, d]) => `<div style="background:var(--surface2); border-radius:var(--radius); padding:14px;"><div style="font-weight:700; margin-bottom:4px;">${t}</div><div style="font-size:0.84rem; color:var(--text-muted);">${d}</div></div>`).join("")}
      </div>
    </div>

    <div class="card mt-6" style="background:linear-gradient(135deg,var(--primary-light),var(--purple-light));">
      <div class="card-title" style="color:var(--primary);">🏆 Your Typing Records</div>
      <div class="typing-stats mt-4">
        <div class="typing-stat"><div class="ts-value">${STATE.typingStats.bestWPM || 0}</div><div class="ts-label">Best WPM</div></div>
        <div class="typing-stat"><div class="ts-value">${STATE.typingStats.sessions || 0}</div><div class="ts-label">Sessions</div></div>
        <div class="typing-stat"><div class="ts-value">${STATE.typingStats.totalChars || 0}</div><div class="ts-label">Total Chars</div></div>
      </div>
    </div>
  `;

  initTypingSession(text);
}

function renderKeyboard() {
  const rows = [
    ["q","w","e","r","t","y","u","i","o","p"],
    ["a","s","d","f","g","h","j","k","l",";"],
    ["z","x","c","v","b","n","m",",",".","/"]
  ];
  const homeRow = ["a","s","d","f","j","k","l",";"];

  return rows.map(row => `
    <div class="key-row">
      ${row.map(k => `<div class="key ${homeRow.includes(k) ? 'home-key' : ''}" id="key-${k}">${k.toUpperCase()}</div>`).join("")}
    </div>
  `).join("") + `
  <div class="key-row">
    <div class="key extra-wide">Shift</div>
    <div class="key space" id="key-space">Space</div>
    <div class="key wide">Backspace</div>
  </div>`;
}

function initTypingSession(text) {
  typingSession.currentText = text;
  typingSession.typed = "";
  typingSession.errors = 0;
  typingSession.active = false;
  typingSession.startTime = null;
  if (typingSession.timer) clearInterval(typingSession.timer);

  updateTypingDisplay();
  document.getElementById("typingComplete").style.display = "none";
  const input = document.getElementById("typingInput");
  if (input) { input.value = ""; input.disabled = false; }
}

function updateTypingDisplay() {
  const el = document.getElementById("typingTarget");
  if (!el) return;
  const text = typingSession.currentText;
  const typed = typingSession.typed;

  let html = "";
  for (let i = 0; i < text.length; i++) {
    if (i < typed.length) {
      html += `<span class="${typed[i] === text[i] ? 'char-correct' : 'char-incorrect'}">${text[i] === " " ? "&nbsp;" : text[i]}</span>`;
    } else if (i === typed.length) {
      html += `<span class="char-current">${text[i] === " " ? "&nbsp;" : text[i]}</span>`;
    } else {
      html += `<span class="char-default">${text[i] === " " ? "&nbsp;" : text[i]}</span>`;
    }
  }
  el.innerHTML = html;

  // Highlight active key
  const nextChar = text[typed.length];
  if (nextChar) {
    document.querySelectorAll(".key.active").forEach(k => k.classList.remove("active"));
    const keyEl = document.getElementById(`key-${nextChar === " " ? "space" : nextChar.toLowerCase()}`);
    if (keyEl) keyEl.classList.add("active");
  }
}

function handleTypingInput(input) {
  const text = typingSession.currentText;
  const typed = input.value;

  if (!typingSession.active && typed.length > 0) {
    typingSession.active = true;
    typingSession.startTime = Date.now();
    typingSession.timer = setInterval(updateTypingStats, 500);
  }

  typingSession.typed = typed;
  updateTypingDisplay();

  if (typed.length >= text.length) {
    finishTypingSession();
  }
}

function updateTypingStats() {
  if (!typingSession.startTime || !typingSession.active) return;
  const elapsed = (Date.now() - typingSession.startTime) / 1000;
  const words = typingSession.typed.trim().split(/\s+/).length;
  const wpm = elapsed > 0 ? Math.round((words / elapsed) * 60) : 0;

  let errors = 0;
  for (let i = 0; i < typingSession.typed.length; i++) {
    if (typingSession.typed[i] !== typingSession.currentText[i]) errors++;
  }
  const accuracy = typingSession.typed.length > 0
    ? Math.round(((typingSession.typed.length - errors) / typingSession.typed.length) * 100)
    : 100;

  const wpmEl = document.getElementById("wpmDisplay");
  const accEl = document.getElementById("accDisplay");
  const timeEl = document.getElementById("timeDisplay");
  const charEl = document.getElementById("charDisplay");

  if (wpmEl) wpmEl.textContent = wpm;
  if (accEl) accEl.textContent = accuracy + "%";
  if (timeEl) timeEl.textContent = Math.round(elapsed) + "s";
  if (charEl) charEl.textContent = typingSession.typed.length;

  typingSession.wpm = wpm;
  typingSession.accuracy = accuracy;
}

function finishTypingSession() {
  if (typingSession.timer) clearInterval(typingSession.timer);
  typingSession.active = false;
  updateTypingStats();

  const input = document.getElementById("typingInput");
  if (input) input.disabled = true;

  // Update records
  if (typingSession.wpm > STATE.typingStats.bestWPM) {
    STATE.typingStats.bestWPM = typingSession.wpm;
  }
  STATE.typingStats.totalChars = (STATE.typingStats.totalChars || 0) + typingSession.typed.length;
  STATE.typingStats.sessions = (STATE.typingStats.sessions || 0) + 1;
  STATE.points += 10;
  saveState();
  checkBadges();

  const completeEl = document.getElementById("typingComplete");
  const statsEl = document.getElementById("typingFinalStats");
  if (completeEl) completeEl.style.display = "block";
  if (statsEl) statsEl.textContent = `${typingSession.wpm} WPM · ${typingSession.accuracy}% accuracy`;

  if (typingSession.accuracy >= 90) celebrateConfetti();
}

function resetTyping() {
  const level = typingSession.level;
  const texts = TYPING_TEXTS[level] || TYPING_TEXTS[1];
  const text = texts[Math.floor(Math.random() * texts.length)];
  initTypingSession(text);
}

function setTypingLevel(level) {
  typingSession.level = parseInt(level);
  resetTyping();
}

// ========== PROGRESS ==========
function renderProgress() {
  const el = document.getElementById("page-progress");
  const progress = getProgressPercent();

  el.innerHTML = `
    <h2 class="section-title">📊 My Progress</h2>
    <p class="section-subtitle">You're doing brilliantly! Here's how far you've come.</p>

    <div class="card mb-6" style="background: linear-gradient(135deg, var(--primary), var(--purple)); color:#fff;">
      <div style="font-size:0.9rem; opacity:0.85; margin-bottom:6px;">Overall Progress</div>
      <div style="font-family:var(--font-display); font-size:3rem; margin-bottom:8px;">${progress}%</div>
      <div class="progress-bar-wrap" style="background:rgba(255,255,255,0.3); height:14px;">
        <div class="progress-bar-fill" style="width:${progress}%; background:#fff;"></div>
      </div>
      <div style="margin-top:10px; font-size:0.9rem; opacity:0.85;">${STATE.completedLessons.length} of ${getTotalLessons()} lessons complete</div>
    </div>

    <div class="stats-grid mb-6">
      <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-value">${STATE.points}</div><div class="stat-label">Total Points</div></div>
      <div class="stat-card"><div class="stat-icon">🏅</div><div class="stat-value">${STATE.earnedBadges.length}</div><div class="stat-label">Badges Earned</div></div>
      <div class="stat-card"><div class="stat-icon">⚡</div><div class="stat-value">${STATE.typingStats.bestWPM || 0} WPM</div><div class="stat-label">Best Typing Speed</div></div>
      <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-value">${STATE.streak}</div><div class="stat-label">Day Streak</div></div>
    </div>

    <h2 class="section-title">📚 Lesson History</h2>
    <div class="progress-timeline mt-4">
      ${CURRICULUM.flatMap(level => level.lessons.map((lesson, i) => {
        const done = STATE.completedLessons.includes(lesson.id);
        const unlocked = isLessonUnlocked(level.id, i);
        return `
          <div class="timeline-item">
            <div class="timeline-dot ${done ? 'done' : !unlocked ? 'locked-dot' : ''}">${done ? "✓" : level.id}</div>
            <div class="timeline-content">
              <div style="font-weight:700;">${lesson.emoji} ${lesson.title}</div>
              <div style="font-size:0.82rem; color:var(--text-muted);">Level ${level.id} · ${level.title}</div>
              ${done ? `
                <div style="margin-top:6px; display:flex; gap:8px; flex-wrap:wrap;">
                  ${STATE.quizScores[lesson.id] !== undefined ? `<span class="chip chip-green">Quiz: ${STATE.quizScores[lesson.id]}%</span>` : ""}
                  <span class="chip chip-blue">✅ Complete</span>
                </div>` : unlocked ? `<span class="chip chip-yellow">In Progress</span>` : `<span class="chip chip-yellow">🔒 Locked</span>`}
            </div>
          </div>
        `;
      })).join("")}
    </div>
  `;
}

// ========== HELP ==========
const HELP_ITEMS = [
  { icon: "😕", title: "I'm confused", desc: "Everything feels too much", steps: ["Take a deep breath — it's perfectly okay to feel confused!", "Close any tabs or windows that are not needed", "Go back to the beginning of the lesson you're working on", "Read just ONE step at a time", "If you still feel stuck, ask a friend or family member to sit with you", "Remember: every expert was once a beginner. You CAN do this!"] },
  { icon: "😬", title: "I made a mistake", desc: "Something went wrong and I'm worried", steps: ["First: take a breath. Mistakes cannot seriously damage a computer.", "If you accidentally deleted something: check the Recycle Bin on your desktop", "If you closed something: try opening it again from the Start Menu", "If you sent an email by mistake: most email services let you recall it quickly", "If the screen looks strange: try pressing Escape, or restart the browser", "When in doubt: turn the computer off properly and turn it back on"] },
  { icon: "😤", title: "I feel frustrated", desc: "I want to give up", steps: ["It is COMPLETELY normal to feel frustrated when learning something new", "Take a short break — make a cup of tea, go for a short walk", "Come back after 10-15 minutes — things often look clearer", "Try a simpler task first — build your confidence back up", "Remember how far you've already come — you should be proud!", "Learning computers takes time. You're doing better than you think!"] },
  { icon: "🔑", title: "I forgot my password", desc: "I can't log in", steps: ["On the login page, look for 'Forgot password?' or 'Reset password'", "Click it and enter your email address", "Check your email inbox for a reset link", "Click the link and choose a new password", "Write your new password down somewhere safe (but private!)", "If you can't access your email either, contact support for that service"] },
  { icon: "💻", title: "Computer not working", desc: "Something seems broken", steps: ["First: don't panic! Most problems have simple fixes", "Try turning the computer off and back on — this fixes most problems", "Check all cables are firmly plugged in", "Make sure the battery is charged (for laptops)", "Check if the Wi-Fi is connected if you can't access the internet", "See the Troubleshooting section for specific problems"] },
  { icon: "🌐", title: "Can't get online", desc: "No internet connection", steps: ["Check the Wi-Fi icon in the bottom-right corner", "Click the Wi-Fi icon and check if it shows 'Connected'", "If not connected: click your Wi-Fi network name and reconnect", "Try turning Wi-Fi off and back on", "Restart your router (unplug, wait 30 seconds, plug back in)", "If all else fails, call your internet provider"] }
];

function renderHelp() {
  const el = document.getElementById("page-help");
  el.innerHTML = `
    <div class="card mb-6" style="background:linear-gradient(135deg,#FEF3C7,#FDE68A); border-color:var(--accent);">
      <div style="font-size:3rem; margin-bottom:10px;">💛</div>
      <h1 style="font-weight:800; font-size:1.5rem; color:#92400E; margin-bottom:8px;">Feeling Stuck? That's Okay!</h1>
      <p style="color:#92400E;">Everyone feels stuck sometimes. This section is here to help you feel calm and get back on track. You're not alone!</p>
    </div>

    <h2 class="section-title">What's happening?</h2>
    <p class="section-subtitle">Click the situation that matches how you feel right now.</p>

    <div class="help-grid">
      ${HELP_ITEMS.map((item, i) => `
        <div class="help-card" onclick="showHelpDetail(${i})">
          <div class="help-icon">${item.icon}</div>
          <div class="help-title">${item.title}</div>
          <div class="help-desc">${item.desc}</div>
        </div>
      `).join("")}
    </div>

    <div id="helpDetail" class="help-detail"></div>

    <div class="card mt-6" style="border-color:var(--primary);">
      <div style="font-size:2rem; margin-bottom:8px;">📞</div>
      <div style="font-weight:800; margin-bottom:6px;">Still need help?</div>
      <p style="color:var(--text-muted);">Ask someone you trust — a family member, friend, or local library. Many libraries offer free computer help sessions. You don't have to figure it out alone!</p>
    </div>

    <div class="encouragement-card mt-6">
      <span class="encouragement-emoji">🌟</span>
      <div class="encouragement-text">The fact that you're here, trying to learn, is something to be incredibly proud of. Every person who learned to use computers started exactly where you are. You've got this!</div>
    </div>
  `;
}

function showHelpDetail(index) {
  const item = HELP_ITEMS[index];
  const el = document.getElementById("helpDetail");
  el.classList.add("visible");
  el.innerHTML = `
    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:16px;">${item.icon} ${item.title}</h3>
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${item.steps.map((step, i) => `
        <div style="display:flex; align-items:flex-start; gap:12px;">
          <div style="width:28px; height:28px; background:var(--primary); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0;">${i+1}</div>
          <div style="font-size:0.95rem; color:var(--text); padding-top:4px;">${step}</div>
        </div>
      `).join("")}
    </div>
    <button class="btn btn-outline btn-sm mt-6" onclick="document.getElementById('helpDetail').classList.remove('visible')">← Back</button>
  `;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ========== TROUBLESHOOT ==========
function renderTroubleshoot() {
  const el = document.getElementById("page-troubleshoot");
  el.innerHTML = `
    <h2 class="section-title">🔧 Troubleshooting Guide</h2>
    <p class="section-subtitle">Having a problem? Find it below and follow the steps. You can fix this!</p>

    <div class="card mb-6" style="background:var(--primary-light); border-color:var(--primary);">
      <div style="font-weight:700; color:var(--primary-dark);">💡 Before you start: The most powerful fix for most problems is simply turning your computer off and back on again! Try that first.</div>
    </div>

    ${TROUBLESHOOTING_DATA.map((item, i) => `
      <div class="trouble-item">
        <div class="trouble-header" onclick="toggleTrouble(${i})">
          <span class="trouble-icon">${item.icon}</span>
          <span style="flex:1;">${item.problem}</span>
          <span class="trouble-arrow">▼</span>
        </div>
        <div class="trouble-body" id="trouble-${i}">
          <div class="trouble-section">
            <h4>🔍 What you might notice</h4>
            <ul>${item.symptoms.map(s => `<li>${s}</li>`).join("")}</ul>
          </div>
          <div class="trouble-section">
            <h4>🤔 Common causes</h4>
            <ul>${item.causes.map(c => `<li>${c}</li>`).join("")}</ul>
          </div>
          <div class="trouble-section">
            <h4>✅ Step-by-step fix</h4>
            <ul>${item.steps.map((s, n) => `<li style="font-weight:${n === 0 ? '700' : '400'};"><strong>Step ${n+1}:</strong> ${s}</li>`).join("")}</ul>
          </div>
          <div class="trouble-section">
            <h4>🛡️ How to prevent this</h4>
            <ul>${item.prevention.map(p => `<li>${p}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    `).join("")}

    <div class="encouragement-card mt-6">
      <span class="encouragement-emoji">💪</span>
      <div class="encouragement-text">If you've tried everything here and it still doesn't work, there's no shame in asking for help. Take it to a computer repair shop or ask someone you trust. Some problems need professional help!</div>
    </div>
  `;
}

function toggleTrouble(i) {
  const body = document.getElementById(`trouble-${i}`);
  const header = body.previousElementSibling;
  const isOpen = body.classList.contains("open");
  document.querySelectorAll(".trouble-body.open").forEach(b => { b.classList.remove("open"); b.previousElementSibling.classList.remove("open"); });
  if (!isOpen) { body.classList.add("open"); header.classList.add("open"); }
}

// ========== ACHIEVEMENTS ==========
function renderAchievements() {
  const el = document.getElementById("page-achievements");
  const stats = {
    completedLessons: STATE.completedLessons.length,
    level0Complete: CURRICULUM[0].lessons.every(l => STATE.completedLessons.includes(l.id)),
    perfectQuiz: Object.values(STATE.quizScores).some(s => s === 100),
    totalCharsTyped: STATE.typingStats.totalChars || 0,
    bestTypingWPM: STATE.typingStats.bestWPM || 0,
    streak: STATE.streak,
    level5Started: STATE.unlockedLevels.includes(5),
    level8Complete: false,
    progressPercent: getProgressPercent()
  };

  el.innerHTML = `
    <h2 class="section-title">🏆 Your Achievements</h2>
    <p class="section-subtitle">Earn badges by completing lessons, passing quizzes, and practising typing!</p>

    <div class="card mb-6" style="background:linear-gradient(135deg,#FFFBEB,#FEF3C7);">
      <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
        <div style="font-size:2.5rem;">⭐</div>
        <div>
          <div style="font-weight:800; font-size:1.1rem;">Total Points: ${STATE.points}</div>
          <div style="color:var(--text-muted);">${STATE.earnedBadges.length} of ${BADGES.length} badges earned</div>
        </div>
      </div>
    </div>

    <div class="achievements-grid">
      ${BADGES.map(badge => {
        const earned = STATE.earnedBadges.includes(badge.id);
        const eligible = badge.condition(stats);
        return `
          <div class="badge-card ${earned ? 'earned' : 'locked-badge'}">
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-desc">${badge.desc}</div>
            ${earned ? `<div style="color:var(--accent); font-size:0.76rem; font-weight:700; margin-top:6px;">✅ Earned!</div>` : `<div style="color:var(--text-light); font-size:0.76rem; margin-top:6px;">🔒 Keep learning!</div>`}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// ========== SETTINGS ==========
function renderSettings() {
  const el = document.getElementById("page-settings");
  el.innerHTML = `
    <h2 class="section-title">⚙️ Settings</h2>
    <p class="section-subtitle">Customise your learning experience to suit your needs.</p>

    <div class="card mb-6">
      <div class="card-title mb-4">👤 Your Profile</div>
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; flex-wrap:wrap;">
        <div class="user-avatar" style="width:60px; height:60px; font-size:1.5rem;">👩</div>
        <div>
          <div style="font-weight:700; font-size:1.05rem;">${STATE.userName}</div>
          <div style="color:var(--text-muted); font-size:0.85rem;">Level ${Math.floor(STATE.completedLessons.length / 3) + 1} Learner</div>
        </div>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <input type="text" id="nameInput" value="${STATE.userName}" class="typing-input-field" style="max-width:280px; padding:10px 14px;">
        <button class="btn btn-primary btn-sm" onclick="updateName()">Save Name</button>
      </div>
    </div>

    <div class="card mb-6">
      <div class="card-title mb-4">♿ Accessibility</div>
      <div class="settings-row">
        <div><div class="settings-label">Large Text Mode</div><div class="settings-desc">Makes all text bigger and easier to read</div></div>
        <label class="toggle"><input type="checkbox" ${STATE.settings.largeText ? 'checked' : ''} onchange="toggleSetting('largeText', this.checked)"><span class="toggle-slider"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-label">High Contrast Mode</div><div class="settings-desc">Increases contrast for better visibility</div></div>
        <label class="toggle"><input type="checkbox" ${STATE.settings.highContrast ? 'checked' : ''} onchange="toggleSetting('highContrast', this.checked)"><span class="toggle-slider"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-label">Encouragement Messages</div><div class="settings-desc">Show supportive messages after lessons</div></div>
        <label class="toggle"><input type="checkbox" ${STATE.settings.encouragementOn !== false ? 'checked' : ''} onchange="toggleSetting('encouragementOn', this.checked)"><span class="toggle-slider"></span></label>
      </div>
    </div>

    <div class="card mb-6">
      <div class="card-title mb-4">📊 Progress Data</div>
      <div class="settings-row">
        <div><div class="settings-label">Reset All Progress</div><div class="settings-desc">Start completely from the beginning</div></div>
        <button class="btn btn-sm" style="background:var(--danger-light); color:var(--danger);" onclick="confirmReset()">Reset</button>
      </div>
    </div>

    <div class="card" style="background:var(--surface2);">
      <div class="card-title mb-2">ℹ️ About This Platform</div>
      <p style="color:var(--text-muted); font-size:0.9rem;">Digital Literacy Learning Platform v1.0</p>
      <p style="color:var(--text-muted); font-size:0.88rem; margin-top:8px;">Designed for absolute beginners. Every person can learn to use computers — at their own pace, in their own time.</p>
    </div>
  `;
}

function updateName() {
  const input = document.getElementById("nameInput");
  if (input && input.value.trim()) {
    STATE.userName = input.value.trim();
    saveState();
    document.querySelector(".user-name").textContent = STATE.userName;
    showToast("✅ Name updated!", "success");
  }
}

function toggleSetting(key, val) {
  STATE.settings[key] = val;
  saveState();
  applySettings();
}

function applySettings() {
  document.body.classList.toggle("large-text", STATE.settings.largeText);
  document.body.classList.toggle("high-contrast", STATE.settings.highContrast);
}

function confirmReset() {
  if (confirm("Are you sure you want to reset ALL your progress? This cannot be undone.")) {
    localStorage.removeItem("dlp_state");
    location.reload();
  }
}

// ========== NAME MODAL ==========
function showNameModal() {
  document.getElementById("nameModal").classList.add("open");
}

function saveNameFromModal() {
  const input = document.getElementById("nameModalInput");
  if (input && input.value.trim()) {
    STATE.userName = input.value.trim();
    saveState();
    document.querySelector(".user-name").textContent = STATE.userName;
    document.getElementById("nameModal").classList.remove("open");
    renderHome();
    showToast(`Welcome, ${STATE.userName}! 🎉`, "success");
  }
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  applySettings();

  // Update sidebar user
  document.querySelector(".user-name").textContent = STATE.userName;
  document.querySelector(".user-level").textContent = `${STATE.completedLessons.length} lessons complete`;
  updateSidebarProgress();

  // Hamburger menu
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
  });

  // Show name modal on first visit
  if (STATE.userName === "Learner") {
    setTimeout(showNameModal, 500);
  }

  navigate("home");
});

function updateSidebarProgress() {
  const p = getProgressPercent();
  const fill = document.querySelector(".progress-bar-fill");
  const label = document.querySelector(".progress-label span:last-child");
  if (fill) fill.style.width = p + "%";
  if (label) label.textContent = p + "%";
}
