# 🎓 StudyForge — AI-Powered Undergraduate Learning Assistant

> **A flexible, interactive learning platform designed for undergraduate students to learn complex concepts, solve academic problems, test their understanding with quizzes, and prepare for exams with flashcards.**

---

## 🌟 Overview & Key Innovations

Instead of being a static textbook or a collection of fixed questions, **StudyForge** provides a personalized, multi-modal learning experience:

1. **Custom Topic & Problem Input**: Students can choose any undergraduate discipline (Computer Science, Mathematics, Physics, Chemistry & Engineering, Business Studies & Economics, or Other), specify their academic level (Beginner, Intermediate, Advanced), and enter their own homework problems or conceptual doubts.
2. **5 Distinct Explanation Styles**:
   - 🐣 **Simple (Beginners)**: Conversational tone, intuitive real-world metaphors, no heavy jargon.
   - 🪜 **Step-by-Step Solution**: Numbered logical steps, mathematical derivations, and systematic methodology.
   - 💡 **Practical Examples & Code**: Hands-on runnable code snippets, architecture diagrams, and industrial applications.
   - 📝 **Exam-Ready Answer**: Structured for maximum marks with formal definitions, key bullet points, formulas, and common pitfalls.
   - 🔍 **Hints First (Socratic Mode)**: Progressive hints that guide the student to think through the answer before revealing the complete solution.
3. **Interactive Practice Quizzes**:
   - Generates 3–5 tailored multiple-choice questions per topic.
   - Instant scoring with percentage badge and celebratory feedback.
   - Comprehensive explanations for every question explaining *why* the correct answer is right and why common misconceptions are wrong.
4. **Revision Notes & Interactive Flashcards**:
   - High-yield concept summaries and formula cheat-sheets.
   - Interactive Q&A flashcards that flip to reveal answers on click.
   - One-click **"Copy Revision Notes"** button to easily save notes into Notion, OneNote, or Google Docs.
5. **Integrated Mathematical Diagnostic Engine**:
   - Retains step-by-step cognitive misconception detection for multi-step algebraic derivations with interactive Area Models and Fraction visualizers.
6. **Dual AI Engine**:
   - Zero-dependency built-in offline academic knowledge reasoner (runs instantly without any API keys).
   - Optional live Google Gemini 2.0 Flash / 1.5 Pro integration via the Settings modal.

---

## 🚀 Quick Start (Zero Dependencies)

StudyForge is built with pure HTML5, modern CSS3, and vanilla ES6+ JavaScript. It requires no Node.js or npm packages.

### Option 1: Direct File Launch
Double-click or open `index.html` in any web browser:
```
file:///C:/Users/Windows 11/.gemini/antigravity-ide/scratch/misconception-map/index.html
```

### Option 2: Built-in PowerShell HTTP Server
Run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
This opens `http://localhost:8080` in your default browser.

---

## 📋 Recommended User Workflow

$$\text{Select Subject \& Level} \longrightarrow \text{Enter Topic/Question} \longrightarrow \text{Pick Explanation Style} \longrightarrow \text{Study Answer} \longrightarrow \text{Take Practice Quiz} \longrightarrow \text{Revise Flashcards}$$

1. **Choose Subject & Level**: Select from Computer Science, Mathematics, Physics, Business, etc., and pick your target depth (Beginner, Intermediate, Advanced).
2. **Enter Question**: Type any academic problem or choose from pre-populated topic pills (e.g. *Dynamic Programming*, *Database Normalization*, *Eigenvalues*, *Carnot Cycle*).
3. **Choose Style**: Switch between *Simple*, *Step-by-Step*, *Practical Code*, *Exam-Ready*, or *Hints-First*.
4. **Ask Follow-Up Doubts**: Use the interactive follow-up bar to ask clarifying questions.
5. **Practice Quiz**: Click **"🎯 Practice Quiz"** to take an interactive 3–5 question assessment with automated scoring and answer explanations.
6. **Revision & Copy**: Click **"📑 Revision Notes"** to review definitions, test recall with flip flashcards, and copy everything with one click.

---

## 📁 Project Structure

```
studyforge/
├── index.html        # Clean, responsive single-page application with semantic tabs
├── styles.css        # Cosmic dark glassmorphism design system & micro-interactions
├── app.js            # StudyForge core engine, explanation formatters, quiz engine, flashcards
├── server.ps1        # Zero-dependency PowerShell HTTP server script
└── README.md         # Documentation and user guide
```
