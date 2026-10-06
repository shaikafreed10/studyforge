# 🗺️ Misconception Map — AI Math Diagnosis & Targeted Repair Engine

> **A Complete Learning Loop for Mathematics Education:**
> *Student makes mistake → AI identifies misconception → Visual mini-lesson → Repair question → Student retries → Teacher sees class-wide misconception map.*

---

## 🌟 Overview & Key Innovations

**Misconception Map** is an intelligent diagnostic and remediation platform designed for middle and secondary mathematics education. Rather than merely grading an answer as "wrong," Misconception Map:
1. **Analyzes line-by-line student working** to pinpoint the exact *first step* where conceptual reasoning departed from sound mathematics.
2. **Classifies the error into a structured misconception taxonomy** (e.g., Partial Distributive Law, Direct Denominator Addition, Negative Sign Omission).
3. **Generates targeted Socratic hints and interactive visual mini-lessons** (such as visual area models and fraction bars) that demystify *why* the reasoning broke down.
4. **Delivers an isomorphic Repair Question** to close the learning loop, giving students immediate redemption and updating their concept mastery map.
5. **Aggregates class-wide cognitive error data into an Interactive Network Misconception Map** for teachers, automatically generating actionable 5-minute warm-up interventions, student error clusters, and before/after efficacy analytics.
6. **Supports authentic Telugu (తెలుగు) & Tenglish multilingual feedback** for localized learning.

---

## 🚀 Quick Start (Zero Dependencies Required!)

The application runs entirely client-side with zero npm/node prerequisites.

### Option A: Launch with Built-in HTTP Server (Recommended)
Open PowerShell and run:
```powershell
cd "C:\Users\Windows 11\.gemini\antigravity-ide\scratch\misconception-map"
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
This starts a lightweight .NET HTTP server at `http://localhost:8080` and opens your default browser automatically.

### Option B: Direct File Launch
Simply double-click or open `index.html` in Chrome, Edge, Firefox, or Safari:
```
file:///C:/Users/Windows 11/.gemini/antigravity-ide/scratch/misconception-map/index.html
```

---

## 🧩 The 10 System Prompts Implemented

All 10 prompts specified in the project architecture are integrated into the app and can be tested live inside the **Prompt Lab**:

| Prompt # | Name | Role in Application |
| :--- | :--- | :--- |
| **#10** | **Complete `/submit` Diagnosis Prompt** | **Core Student Engine**: Ingests student step-by-step working, identifies first wrong step, assigns taxonomy ID, calculates confidence score, generates student explanation, Socratic hint, repair question, and triggers `needs_teacher_review` if confidence < 0.70. |
| **#5** | **Repair Answer Checker Prompt** | **Interactive Learning Loop**: Evaluates retry attempts on the repair question, assesses conceptual understanding, triggers celebration animations, and updates mastery. |
| **#7** | **Teacher Intervention Prompt** | **Teacher Dashboard Engine**: Converts class-wide error counts into actionable 5-minute warmups, physical manipulatives/visual models, and follow-up checks. |
| **#6** | **Telugu + English Feedback Prompt** | **Multilingual Engine**: Translates diagnostic explanations, Socratic hints, and mini-lessons into authentic Telugu and bilingual Tenglish. |
| **#8** | **Misconception Clustering Prompt** | **Classroom Segmentation**: Clusters raw student working into cognitive misconception groups. |
| **#9** | **Before/After Learning Analysis Prompt** | **Efficacy Analytics**: Computes pre-intervention vs. post-intervention shifts, calculating student recovery rates and persistent error rates. |
| **#1** | **Student Answer Diagnosis Prompt** | Base foundational diagnosis prompt with strict JSON schema. |
| **#2** | **Partial Distribution Prompt** | Focused algebraic auditor checking coefficient distribution across brackets. |
| **#3** | **Fraction Denominator Misconception Prompt** | Checks for direct numerator/denominator addition without common denominators. |
| **#4** | **Repair Question Generator Prompt** | Generates isomorphic, slightly simpler questions targeting the same root cognitive error. |

---

## 🧭 Application Architecture & Features

### 1. Student Workspace (`student-view`)
- **Step-by-Step Reasoner Breakdown**:
  - Highlights the **FIRST WRONG STEP** with glowing amber/rose borders and scan animation.
  - Line numbers and step indexing make debugging intuitive for students.
- **Visual Mini-Lesson Engine**:
  - **Algebra Area Model**: Renders an interactive 2D geometry model demonstrating that $3(x + 2)$ represents a rectangle of height $3$ and width $(x + 2)$, split into two sub-rooms: area $3x$ and area $6$ (total $3x + 6$). Visually exposes the missing $+6$.
  - **Fraction Bar Comparison**: Displays $1/2$ and $1/3$ overlay bars, proving that the erroneous direct denominator addition $2/5$ ($0.40$) is smaller than $1/2$ alone.
- **Repair Retry & Celebration**:
  - Live retry input field with instant validation (Prompt #5).
  - Pure canvas confetti explosion upon successful repair!
  - Real-time personal concept mastery progress bar.
- **Multilingual Switcher**:
  - Instant toggle between **English**, **తెలుగు (Telugu)**, and **Tenglish**.

### 2. Teacher Dashboard (`teacher-view`)
- **Interactive Misconception Network Map (SVG Canvas)**:
  - Visual force graph connecting mathematical domains (*Algebraic Expressions*, *Fractions & Rationals*, *Signed Arithmetic*) to specific misconception nodes.
  - Node radius reflects class error frequency.
  - Color-coded severity: Critical Red (>30% class affected), Moderate Amber (15-30%), Repaired Green (<15%).
  - Clicking any node opens the **Inspector Drawer** with affected student names, sample working, and one-click warmup generation.
- **Teacher Interventions (Prompt #7)**:
  - 5-minute ready-to-teach warmups, manipulative suggestions, and follow-up checks.
- **Misconception Clustering (Prompt #8)**:
  - Categorizes 24+ student submissions into clear clusters.
- **Before/After Analytics (Prompt #9)**:
  - Comparative bar graphs demonstrating pre vs post intervention shifts (e.g., 81.8% repair rate).
- **1-Click Classroom Simulator**:
  - Generates realistic class data (Aarav, Sneha, Rohan, Ananya, etc.) to immediately populate the teacher dashboard.

### 3. Interactive Prompt Laboratory (`prompts-view`)
- Inspect all **10 Prompts** side-by-side.
- Live variable substitution playground.
- Real-time JSON schema validation and syntax copy buttons.

### 4. Dual AI Engine (Online Gemini API + Zero-Config Offline Heuristic)
- **Built-in Offline Engine**: Works immediately out-of-the-box with 100% mathematical fidelity.
- **Google Gemini API Support**: Click the **Settings (⚙️)** icon in the top right to paste a Gemini API Key. The app seamlessly routes Prompt #10 to `gemini-2.0-flash` or `gemini-1.5-pro` via the Google Generative Language API.

---

## 📁 File Structure
```
misconception-map/
├── index.html        # Single-page application markup with semantic views
├── styles.css        # Cosmic slate glassmorphism design system & animations
├── app.js            # Core diagnosis engine, prompt runner, network visualizer
├── server.ps1        # Standalone PowerShell .NET HTTP server launcher
└── README.md         # Comprehensive documentation
```
