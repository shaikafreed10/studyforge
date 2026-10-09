/**
 * STUDYFORGE — COMPREHENSIVE AI-POWERED UNDERGRADUATE LEARNING ASSISTANT
 * 
 * Connected Modules:
 * 1. Learn & Solve (Custom Subject, Topic, Question, 3 Academic Levels, 5 Explanation Styles)
 * 2. Practice Quiz (Interactive 3-5 MCQs with instant scoring, feedback, explanations & retry)
 * 3. Revision Notes & Flashcards (High-yield formulas, definitions, interactive flip cards, 1-click copy)
 * 4. Step-by-Step Mathematical Diagnostic (Misconception detection, visual models, repair loop)
 * 5. Teacher Misconception Network Map (Interactive SVG graph, 5-min interventions, analytics)
 * 6. Prompt Engineering Lab (All 10 System Prompts with live variable testing)
 * 7. Multilingual Engine (English, Telugu, Tenglish)
 * 8. Dual AI Engine (Google Gemini 2.0 Flash / 1.5 Pro + Offline Reasoner)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. UNDERGRADUATE ACADEMIC KNOWLEDGE CATALOG
  // =========================================================================
  const STUDYFORGE_CATALOG = {
    cs: [
      {
        topic: 'Dynamic Programming (Memoization vs Tabulation)',
        question: 'What is the difference between top-down memoization and bottom-up tabulation? Explain with the Fibonacci sequence and include space/time complexity.',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: The Math Cheat Sheet!

Imagine you are calculating **Fibonacci(5)** by hand:
- Without dynamic programming, to calculate \`Fib(5)\`, you compute \`Fib(4)\` and \`Fib(3)\`.
- But to calculate \`Fib(4)\`, you compute \`Fib(3)\` and \`Fib(2)\` again.
- In a naive recursive approach, you do the exact same arithmetic over and over like a tired robot with amnesia!

**Dynamic Programming (DP)** is simply **remembering past answers so you never re-solve the same puzzle twice**.

#### The Two Main Flavors:
1. **Memoization (Top-Down)**: You start from the big goal (\`Fib(5)\`), ask what pieces you need, calculate them on demand, and write each result in a notebook (a cache/dictionary) as you go.
2. **Tabulation (Bottom-Up)**: You start from the ground floor (\`Fib(0) = 0\`, \`Fib(1) = 1\`), fill out an array table step-by-step, and build up to \`Fib(5)\`.

> **Key Takeaway**: Both give you the exact same answer in linear time $O(n)$ instead of exponential nightmare time $O(2^n)$!`,

        step_by_step: `### 🪜 Step-by-Step Methodical Solution

#### Step 1: Identify the Naive Problem & Recurrence Relation
The Fibonacci sequence is defined by:
$$F(n) = F(n-1) + F(n-2) \\quad \\text{for } n \\ge 2$$
$$F(0) = 0, \\quad F(1) = 1$$
Naive recursion branches into two subproblems at each step, yielding an exponential time complexity of **$O(2^n)$** with overlapping subproblems.

#### Step 2: Implement Top-Down Memoization
1. Create a memoization lookup table (hash map or array initialized to -1).
2. Before computing $F(n)$, check if $F(n)$ exists in the lookup table.
3. If it exists, return the cached value in $O(1)$.
4. Otherwise, compute recursively, store the result in the cache, and return.
- **Time Complexity**: $O(n)$ — every unique state is computed exactly once.
- **Space Complexity**: $O(n)$ — table storage plus recursion call stack depth.

#### Step 3: Implement Bottom-Up Tabulation
1. Allocate an array \`dp\` of size $(n + 1)$.
2. Set base cases: \`dp[0] = 0\`, \`dp[1] = 1\`.
3. Iterate iteratively using a loop from $i = 2$ up to $n$:
   $$\\text{dp}[i] = \\text{dp}[i-1] + \\text{dp}[i-2]$$
4. Return \`dp[n]\`.
- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$ (can be reduced to $O(1)$ by keeping only the last two variables \`prev1\` and \`prev2\`).`,

        practical: `### 💡 Practical Implementation & Code Examples

Here is runnable Python code showing both approaches side-by-side:

\`\`\`python
# 1. Top-Down Memoization
def fib_memo(n: int, memo: dict = None) -> int:
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

# 2. Bottom-Up Tabulation (Optimized Space O(1))
def fib_tabulation(n: int) -> int:
    if n <= 1:
        return n
    
    prev2, prev1 = 0, 1
    for _ in range(2, n + 1):
        curr = prev1 + prev2
        prev2, prev1 = prev1, curr
    return prev1

# Test
print("Memoization fib(10):", fib_memo(10))       # 55
print("Tabulation  fib(10):", fib_tabulation(10)) # 55
\`\`\`

#### Real-World Engineering Applications:
- **Routing Algorithms**: Bellman-Ford and Floyd-Warshall shortest path algorithms.
- **Bioinformatics**: Needleman-Wunsch algorithm for DNA sequence alignment.
- **Natural Language Processing**: Viterbi algorithm in Hidden Markov Models.`,

        exam_ready: `### 📝 Exam-Ready Model Answer

**Definition**: Dynamic Programming (DP) is an algorithm design paradigm used to solve optimization problems by breaking them down into overlapping subproblems and optimal substructures.

#### 1. Core Differences:
1. **Top-Down Memoization**:
   - Uses recursion and caches results of subproblems.
   - Solves subproblems on-demand.
   - Incurs function call overhead and consumes $O(n)$ auxiliary call-stack memory.
2. **Bottom-Up Tabulation**:
   - Uses iterative loops to fill a table from base cases up to the final target.
   - Avoids call-stack overhead and eliminates recursion limits.
   - Solves all subproblems in topological order.

#### 2. Complexity Analysis:
- **Naive Recursion**: Time $O(2^n)$, Space $O(n)$
- **Memoization**: Time $O(n)$, Space $O(n)$
- **Tabulation**: Time $O(n)$, Space $O(1)$ (using two rolling variables)

#### 3. Criteria for Applying DP:
- **Optimal Substructure**: The optimal solution to the problem contains within it optimal solutions to subproblems.
- **Overlapping Subproblems**: The same subproblems are solved repeatedly.`,

        hints_first: `### 🔍 Socratic Discovery Mode

**Hint 1**: When you compute \`fib(5) = fib(4) + fib(3)\` and \`fib(4) = fib(3) + fib(2)\`, notice that \`fib(3)\` appears twice in the tree. If $n = 50$, how many times would \`fib(3)\` be computed in total?

**Hint 2**: If you store the answer in an array index \`dp[n]\` the very first time it is calculated, how many total unique computations remain for $n$?

*(Click the "Reveal Full Solution Step" button below to unlock the complete derivation)*`,

        quiz: [
          {
            id: 'q1',
            question: 'What is the primary difference between top-down memoization and bottom-up tabulation?',
            options: [
              { key: 'A', text: 'Memoization is iterative; tabulation is recursive.' },
              { key: 'B', text: 'Memoization uses recursion with caching; tabulation builds solutions iteratively from base cases.' },
              { key: 'C', text: 'Tabulation always uses more memory than memoization.' },
              { key: 'D', text: 'Memoization only works on greedy problems.' }
            ],
            correctAnswer: 'B',
            explanation: 'Memoization is a top-down recursive technique that saves computed results, whereas tabulation is a bottom-up iterative method that fills a table starting from base cases.'
          },
          {
            id: 'q2',
            question: 'Which two properties MUST a problem possess to be solved using Dynamic Programming?',
            options: [
              { key: 'A', text: 'Greedy choice property and sorting capability' },
              { key: 'B', text: 'Optimal substructure and overlapping subproblems' },
              { key: 'C', text: 'Linear time complexity and binary branching' },
              { key: 'D', text: 'Constant memory and deterministic hashing' }
            ],
            correctAnswer: 'B',
            explanation: 'A problem must exhibit Optimal Substructure (solution constructed from optimal sub-solutions) and Overlapping Subproblems (subproblems are reused multiple times).'
          },
          {
            id: 'q3',
            question: 'By using rolling variables instead of an array in Fibonacci tabulation, what is the auxiliary space complexity?',
            options: [
              { key: 'A', text: 'O(n)' },
              { key: 'B', text: 'O(log n)' },
              { key: 'C', text: 'O(1)' },
              { key: 'D', text: 'O(2^n)' }
            ],
            correctAnswer: 'C',
            explanation: 'Since each step only requires the previous two numbers (prev1 and prev2), keeping just two rolling variables reduces memory usage to constant space O(1).'
          }
        ],

        revision: {
          summary: 'Dynamic programming optimizes recursive problems by caching answers. Memoization works top-down via recursion, while Tabulation works bottom-up via iterative loops.',
          definitions: [
            { term: 'Optimal Substructure', desc: 'An optimal solution to the overall problem can be assembled from optimal solutions of its subproblems.' },
            { term: 'Overlapping Subproblems', desc: 'A scenario where recursive algorithms repeatedly revisit the exact same smaller subproblems.' },
            { term: 'Memoization', desc: 'Top-down caching of function return values keyed by parameter inputs.' },
            { term: 'Tabulation', desc: 'Bottom-up iterative population of an array or table starting strictly from base conditions.' }
          ],
          flashcards: [
            { q: 'What is the time complexity of naive Fibonacci vs DP Fibonacci?', a: 'Naive recursion is exponential O(2^n); Dynamic programming is linear O(n).' },
            { q: 'Why might memoization cause a stack overflow while tabulation does not?', a: 'Memoization relies on the recursion call stack, which can exceed the maximum call stack limit for large n.' },
            { q: 'Can every divide-and-conquer problem be solved with DP?', a: 'No; divide-and-conquer (like Merge Sort) divides problems into independent, non-overlapping subproblems. DP specifically requires overlapping subproblems.' }
          ]
        }
      },
      {
        topic: 'Database Normalization (1NF, 2NF, 3NF, BCNF)',
        question: 'Explain 1NF, 2NF, and 3NF with an example student database table and explain why transitive dependencies are eliminated in 3NF.',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: Cleaning Up Messy Spreadsheets

Imagine a spreadsheet where one cell says \`Courses: Math, Physics, History\`. If you want to search for students taking just "Physics", you have to split text.

**Database Normalization** is the process of organizing tables to prevent redundant duplicate data and eliminate update anomalies:
- **1NF (Atomic Values)**: Every cell holds one single, indivisible value. No lists in a single box!
- **2NF (No Partial Dependencies)**: Everything in the row must depend on the **entire** composite primary key, not just half of it.
- **3NF (No Transitive Dependencies)**: Non-key columns cannot depend on other non-key columns (e.g., student ID determines ZipCode, and ZipCode determines City -> City should be in its own lookup table!).`,

        step_by_step: `### 🪜 Step-by-Step Methodical Solution

#### Step 1: First Normal Form (1NF)
**Rule**: An attribute cannot contain multiple values (atomic attributes only), and rows must be uniquely identifiable.
- *Violation*: \`StudentID | Name | Courses\` with value \`"CS101, MATH201"\`.
- *Fix*: Split into separate rows so each course has its own record.

#### Step 2: Second Normal Form (2NF)
**Rule**: Must be in 1NF **AND** all non-prime attributes must be fully functionally dependent on the entire primary key (no partial dependency).
- *Scenario*: Composite key \`{StudentID, CourseID}\`.
- *Violation*: \`CourseName\` depends only on \`CourseID\`, not on \`StudentID\`.
- *Fix*: Extract \`CourseID, CourseName\` into a dedicated \`Courses\` table.

#### Step 3: Third Normal Form (3NF)
**Rule**: Must be in 2NF **AND** no non-prime attribute should be transitively dependent on the primary key ($X \\to Y$ and $Y \\to Z$ where $Z$ is non-key).
- *Violation*: \`StudentID -> ZipCode -> City\`. City depends on ZipCode, creating duplicate data for everyone in that city.
- *Fix*: Split into \`StudentAddress(StudentID, ZipCode)\` and \`ZipLookup(ZipCode, City)\`.`,

        practical: `### 💡 Practical SQL Normalization Example

\`\`\`sql
-- 3NF Normalized Schema
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    Email VARCHAR(100) UNIQUE
);

CREATE TABLE Instructors (
    InstructorID INT PRIMARY KEY,
    InstructorName VARCHAR(100)
);

CREATE TABLE Courses (
    CourseID VARCHAR(10) PRIMARY KEY,
    CourseTitle VARCHAR(100),
    InstructorID INT REFERENCES Instructors(InstructorID)
);

CREATE TABLE Enrollments (
    StudentID INT REFERENCES Students(StudentID),
    CourseID VARCHAR(10) REFERENCES Courses(CourseID),
    Grade CHAR(2),
    PRIMARY KEY (StudentID, CourseID)
);
\`\`\``,

        exam_ready: `### 📝 Exam-Ready Model Answer

**Definition**: Normalization is a formal technique for analyzing relations based on their primary keys and functional dependencies to eliminate data redundancy and anomalies (insertion, deletion, modification).

1. **1NF**: Atomic domains; primary key defined; no repeating groups.
2. **2NF**: In 1NF + Every non-prime attribute is fully functionally dependent on any candidate key.
3. **3NF**: In 2NF + For every functional dependency $X \\to A$, either $X$ is a superkey or $A$ is a prime attribute (eliminates transitive dependencies).
4. **BCNF**: Strict 3NF where for every $X \\to A$, $X$ must be a superkey without exception.`,

        hints_first: `### 🔍 Socratic Discovery Mode
**Hint 1**: If you have a composite primary key \`(StudentID, CourseID)\`, does the professor's office phone number depend on the student, or only on the course?
**Hint 2**: If the course is cancelled and deleted from the table, what happens to the professor's contact info if they are stored in the same row?`,

        quiz: [
          {
            id: 'q1',
            question: 'Which anomaly occurs when deleting one piece of data inadvertently deletes unrelated required information?',
            options: [
              { key: 'A', text: 'Insertion Anomaly' },
              { key: 'B', text: 'Deletion Anomaly' },
              { key: 'C', text: 'Transitive Anomaly' },
              { key: 'D', text: 'Atomic Anomaly' }
            ],
            correctAnswer: 'B',
            explanation: 'A deletion anomaly occurs when the removal of one fact automatically causes the unintended loss of another distinct fact.'
          },
          {
            id: 'q2',
            question: 'To transition a table from 1NF to 2NF, which type of dependency must be eliminated?',
            options: [
              { key: 'A', text: 'Transitive Dependency' },
              { key: 'B', text: 'Partial Dependency' },
              { key: 'C', text: 'Multi-valued Dependency' },
              { key: 'D', text: 'Circular Dependency' }
            ],
            correctAnswer: 'B',
            explanation: '2NF requires that all non-key attributes be fully dependent on the entire primary key, eliminating partial functional dependencies.'
          },
          {
            id: 'q3',
            question: 'In 3NF, why are transitive dependencies eliminated?',
            options: [
              { key: 'A', text: 'To ensure column names are alphabetically ordered' },
              { key: 'B', text: 'To prevent non-key attributes from determining other non-key attributes and causing redundant copies' },
              { key: 'C', text: 'To allow duplicate rows across the database' },
              { key: 'D', text: 'To enforce composite primary keys on all tables' }
            ],
            correctAnswer: 'B',
            explanation: 'Transitive dependencies mean a non-key column determines another non-key column (e.g. ZipCode -> City), which leads to duplicate records and update anomalies.'
          }
        ],

        revision: {
          summary: 'Normalization cleans relational schemas. 1NF guarantees atomic cells, 2NF removes partial key dependencies, and 3NF removes transitive non-key dependencies.',
          definitions: [
            { term: 'Functional Dependency (X -> Y)', desc: 'The value of attribute X uniquely determines the value of attribute Y.' },
            { term: 'Partial Dependency', desc: 'A non-prime attribute depends on only a subset of a composite candidate key.' },
            { term: 'Transitive Dependency', desc: 'An indirect relationship where X -> Y and Y -> Z, with X not directly determining Z.' }
          ],
          flashcards: [
            { q: 'What is 1NF in one phrase?', a: 'Atomic values per cell with no repeating groups.' },
            { q: 'When is a table automatically in 2NF if it is already in 1NF?', a: 'When the primary key consists of only a single column (since partial dependencies require a composite key).' },
            { q: 'How does BCNF differ from 3NF?', a: 'In BCNF, for every functional dependency X -> Y, X MUST be a superkey without exception.' }
          ]
        }
      }
    ],
    math: [
      {
        topic: 'Eigenvalues and Eigenvectors',
        question: 'How do you calculate the eigenvalues and eigenvectors of a 2x2 matrix A = [[4, 1], [2, 3]]? Show the characteristic equation.',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: Vectors That Refuse to Rotate!

When you multiply a vector $\\vec{v}$ by a matrix $A$, the matrix usually **stretches** AND **rotates** the vector into a completely new direction.

However, certain special directions refuse to rotate:
$$A\\vec{v} = \\lambda\\vec{v}$$
- When multiplied by $A$, these vectors simply **grow or shrink** along their original line!
- The vector $\\vec{v}$ is called an **Eigenvector**.
- The scaling multiplier $\\lambda$ (how much it stretches or shrinks) is the **Eigenvalue**.`,

        step_by_step: `### 🪜 Step-by-Step Methodical Solution

Given matrix:
$$A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$$

#### Step 1: Formulate the Characteristic Equation
The condition $(A - \\lambda I)\\vec{v} = \\vec{0}$ has non-trivial solutions if and only if:
$$\\det(A - \\lambda I) = 0$$
$$\\det \\begin{pmatrix} 4 - \\lambda & 1 \\\\ 2 & 3 - \\lambda \\end{pmatrix} = 0$$

#### Step 2: Solve the Characteristic Polynomial
$$(4 - \\lambda)(3 - \\lambda) - (1)(2) = 0$$
$$\\lambda^2 - 7\\lambda + 12 - 2 = 0 \\implies \\lambda^2 - 7\\lambda + 10 = 0$$
$$(\\lambda - 5)(\\lambda - 2) = 0 \\implies \\lambda_1 = 5, \\quad \\lambda_2 = 2$$

#### Step 3: Find Eigenvector for $\\lambda_1 = 5$
Solve $(A - 5I)\\vec{v}_1 = \\vec{0}$:
$$\\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies -x + y = 0 \\implies y = x$$
$$\\vec{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$

#### Step 4: Find Eigenvector for $\\lambda_2 = 2$
Solve $(A - 2I)\\vec{v}_2 = \\vec{0}$:
$$\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies 2x + y = 0 \\implies y = -2x$$
$$\\vec{v}_2 = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$$`,

        practical: `### 💡 Real-World Applications & Code
- **Google PageRank**: Stationary probability vector calculation.
- **Principal Component Analysis (PCA)**: Finding axes of maximum variance.
- **Quantum Mechanics**: Observable states represented as eigenvalues of Hermitian operators.

\`\`\`python
import numpy as np

A = np.array([[4, 1], [2, 3]])
vals, vecs = np.linalg.eig(A)
print("Eigenvalues:", vals) # [5., 2.]
\`\`\``,

        exam_ready: `### 📝 Exam-Ready Model Answer

**Theorem**: For an $n \\times n$ matrix $A$, a non-zero vector $\\vec{v}$ is an eigenvector corresponding to scalar eigenvalue $\\lambda$ if $A\\vec{v} = \\lambda\\vec{v}$.

1. **Characteristic Equation**: $\\det(A - \\lambda I) = 0$.
2. For $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$:
   - Characteristic polynomial: $\\lambda^2 - 7\\lambda + 10 = 0$.
   - Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = 2$.
   - Eigenvector $\\vec{v}_1 = [1, 1]^T$ for $\\lambda_1 = 5$.
   - Eigenvector $\\vec{v}_2 = [1, -2]^T$ for $\\lambda_2 = 2$.
3. **Verification**:
   - $\\text{Trace}(A) = 4 + 3 = 7 = 5 + 2$ (Verified).
   - $\\det(A) = 4(3) - 2(1) = 10 = 5 \\times 2$ (Verified).`,

        hints_first: `### 🔍 Socratic Discovery Mode
**Hint 1**: When does $(A - \\lambda I)\\vec{v} = \\vec{0}$ have non-zero vector solutions? Only when $(A - \\lambda I)$ is singular (determinant equals zero).
**Hint 2**: Expand $(4 - \\lambda)(3 - \\lambda) - 2$. Can you factor the quadratic polynomial into two binomials?`,

        quiz: [
          {
            id: 'q1',
            question: 'What is the sum of the eigenvalues of any square matrix equal to?',
            options: [
              { key: 'A', text: 'The determinant of the matrix' },
              { key: 'B', text: 'The trace (sum of main diagonal elements)' },
              { key: 'C', text: 'The rank of the matrix' },
              { key: 'D', text: 'Zero' }
            ],
            correctAnswer: 'B',
            explanation: 'The sum of all eigenvalues of a square matrix is always equal to its trace.'
          },
          {
            id: 'q2',
            question: 'For matrix A = [[4, 1], [2, 3]], what is the determinant?',
            options: [
              { key: 'A', text: '7' },
              { key: 'B', text: '10' },
              { key: 'C', text: '12' },
              { key: 'D', text: '5' }
            ],
            correctAnswer: 'B',
            explanation: 'det(A) = (4 * 3) - (1 * 2) = 12 - 2 = 10.'
          },
          {
            id: 'q3',
            question: 'If Av = λv with v ≠ 0, what does matrix A do to vector v geometrically?',
            options: [
              { key: 'A', text: 'Rotates it by 90 degrees' },
              { key: 'B', text: 'Scales it by factor λ along its own span without rotating off its line' },
              { key: 'C', text: 'Inverts its dimension' },
              { key: 'D', text: 'Projects it onto the origin' }
            ],
            correctAnswer: 'B',
            explanation: 'Multiplying an eigenvector by the matrix results in pure scalar scaling by λ along the vector span without rotating off its line.'
          }
        ],

        revision: {
          summary: 'Eigenvectors are vectors whose direction is unchanged by matrix multiplication, simply scaled by eigenvalue λ. Computed via det(A - λI) = 0.',
          definitions: [
            { term: 'Eigenvalue (λ)', desc: 'Scalar factor by which an eigenvector is scaled under linear transformation A.' },
            { term: 'Eigenvector (v)', desc: 'Non-zero vector satisfying A v = λ v.' },
            { term: 'Characteristic Equation', desc: 'det(A - λ I) = 0, whose roots are the eigenvalues.' }
          ],
          flashcards: [
            { q: 'How is the determinant related to eigenvalues?', a: 'The determinant of matrix A equals the product of all its eigenvalues.' },
            { q: 'Can an eigenvalue be zero?', a: 'Yes; λ = 0 means the matrix is singular (det(A) = 0).' },
            { q: 'Can an eigenvector be the zero vector?', a: 'No; by definition, eigenvectors must strictly be non-zero vectors.' }
          ]
        }
      }
    ],
    physics: [
      {
        topic: 'Thermodynamics: Carnot Cycle & Efficiency',
        question: 'Derive the efficiency of a Carnot heat engine operating between temperatures Th and Tc. Why cannot any real engine exceed Carnot efficiency?',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: The Universal Speed Limit of Heat Engines

Imagine heat flowing like water down a waterfall:
- The upper reservoir is hot ($T_h$), the lower reservoir is cold ($T_c$).
- A heat engine is like a waterwheel: it captures some flowing heat energy to do mechanical work ($W$).
- But you **must dump** the rest of the heat into the cold sink to keep the cycle turning!

$$\\eta = 1 - \\frac{T_c}{T_h}$$

Even a theoretically 100% frictionless machine cannot be 100% efficient unless the cold reservoir is at absolute zero ($-273.15^\\circ\\text{C}$)!`,

        step_by_step: `### 🪜 Step-by-Step Derivation

A Carnot cycle consists of four reversible processes:
1. **Isothermal Expansion** at $T_h$: Heat $Q_h$ absorbed from hot reservoir.
2. **Adiabatic Expansion**: Temperature drops from $T_h$ to $T_c$; $Q = 0$.
3. **Isothermal Compression** at $T_c$: Heat $Q_c$ rejected to cold reservoir.
4. **Adiabatic Compression**: Temperature rises from $T_c$ to $T_h$; $Q = 0$.

#### Derivation:
$$\\eta = \\frac{W}{Q_h} = \\frac{Q_h - Q_c}{Q_h} = 1 - \\frac{Q_c}{Q_h}$$
For a reversible cycle, $\\Delta S = 0 \\implies \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h}$.
Therefore:
$$\\eta_{\\text{Carnot}} = 1 - \\frac{T_c}{T_h}$$
*(Temperatures must always be in Kelvin).*`,

        practical: `### 💡 Real-World Engineering Implications
- **Power Plants**: A turbine with boiler at $550^\\circ\\text{C}$ (823 K) and cooling river at $25^\\circ\\text{C}$ (298 K):
  $$\\eta_{\\max} = 1 - \\frac{298}{823} \\approx 63.8\\%$$
  Real modern combined-cycle plants achieve roughly 55–60% due to friction and irreversibility.`,

        exam_ready: `### 📝 Exam-Ready Model Answer

**Carnot's Theorem**:
1. No engine operating between two heat reservoirs can be more efficient than a reversible Carnot engine operating between the same reservoirs.
2. All reversible engines operating between the same two temperatures have identical efficiency regardless of working fluid.

**Formula**:
$$\\eta = 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}}$$
*(Temperatures in Kelvin)*

**Why Real Engines Cannot Exceed Carnot Efficiency**:
- Irreversible processes (viscous friction, unrestrained expansion, finite-gradient heat transfer).
- Exceeding Carnot efficiency violates the Second Law of Thermodynamics (Clausius statement).`,

        hints_first: `### 🔍 Socratic Discovery Mode
**Hint 1**: What does the First Law of Thermodynamics say about net work $W$ when internal energy returns to its original state $\\Delta U = 0$ over a closed cycle?
**Hint 2**: In a reversible cycle, what is the net total entropy change $\\Delta S_{\\text{total}}$ of the universe?`,

        quiz: [
          {
            id: 'q1',
            question: 'A Carnot engine operates between Th = 600 K and Tc = 300 K. What is its maximum theoretical efficiency?',
            options: [
              { key: 'A', text: '25%' },
              { key: 'B', text: '50%' },
              { key: 'C', text: '75%' },
              { key: 'D', text: '100%' }
            ],
            correctAnswer: 'B',
            explanation: 'η = 1 - (Tc / Th) = 1 - (300 / 600) = 1 - 0.50 = 0.50 (50%).'
          },
          {
            id: 'q2',
            question: 'What temperature unit MUST be used when calculating Carnot efficiency?',
            options: [
              { key: 'A', text: 'Celsius (°C)' },
              { key: 'B', text: 'Fahrenheit (°F)' },
              { key: 'C', text: 'Kelvin (K)' },
              { key: 'D', text: 'Rankine (°R) only' }
            ],
            correctAnswer: 'C',
            explanation: 'Thermodynamic efficiency formulas require absolute temperature measured in Kelvin.'
          },
          {
            id: 'q3',
            question: 'Why can a real heat engine NEVER achieve 100% efficiency?',
            options: [
              { key: 'A', text: 'Because of the First Law of Thermodynamics' },
              { key: 'B', text: 'Because achieving 100% requires a cold reservoir at absolute zero (0 K), which is unattainable by the Third Law' },
              { key: 'C', text: 'Because metals expand when heated' },
              { key: 'D', text: 'Because gravity opposes mechanical work' }
            ],
            correctAnswer: 'B',
            explanation: 'To reach 100% efficiency, Tc must be 0 K (absolute zero), which cannot be attained in a finite number of steps per the Third Law of Thermodynamics.'
          }
        ],

        revision: {
          summary: 'The Carnot cycle is the maximum theoretical efficiency limit for heat engines operating between two thermal reservoirs: η = 1 - Tc/Th.',
          definitions: [
            { term: 'Isothermal Process', desc: 'A thermodynamic process occurring at constant temperature (ΔT = 0).' },
            { term: 'Adiabatic Process', desc: 'A process with zero heat transfer into or out of the system (Q = 0).' },
            { term: 'Second Law of Thermodynamics', desc: 'Heat cannot spontaneously flow from colder to hotter bodies without net external work.' }
          ],
          flashcards: [
            { q: 'What four reversible steps comprise a Carnot cycle?', a: 'Isothermal expansion, Adiabatic expansion, Isothermal compression, Adiabatic compression.' },
            { q: 'How can you increase Carnot efficiency?', a: 'Either increase the temperature of the heat source (Th) or decrease the temperature of the sink (Tc).' },
            { q: 'Does working fluid (steam, gas, helium) affect Carnot efficiency?', a: 'No; Carnot efficiency depends strictly on the reservoir temperatures Th and Tc.' }
          ]
        }
      }
    ],
    chem: [
      {
        topic: 'Chemical Kinetics: Arrhenius Equation & Activation Energy',
        question: 'How does temperature influence reaction rates according to the Arrhenius equation k = A e^(-Ea / RT)? How do you calculate Ea from an experimental plot?',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: Molecules Needing Enough Energy to Collide!

Imagine you are trying to kick a football over a tall wall:
- The wall is the **Activation Energy ($E_a$)** — the minimum energetic threshold required for reactant chemical bonds to break and form new products.
- The temperature ($T$) is the average speed and kinetic energy of the molecules.
- As temperature rises, vastly more molecules have enough kinetic energy to clear the wall!

The **Arrhenius Equation**:
$$k = A e^{-\\frac{E_a}{RT}}$$
- $k$: Reaction rate constant.
- $A$: Frequency factor (how often molecules collide in the correct spatial orientation).
- $e^{-E_a / RT}$: The statistical fraction of collisions possessing energy greater than or equal to $E_a$.`,

        step_by_step: `### 🪜 Step-by-Step Methodical Solution

#### Step 1: The Canonical Arrhenius Equation
The rate constant $k$ depends exponentially on absolute temperature $T$ (in Kelvin):
$$k = A e^{-\\frac{E_a}{RT}}$$

#### Step 2: Linearize the Relationship
Take the natural logarithm ($\\ln$) of both sides:
$$\\ln(k) = \\ln\\left(A e^{-\\frac{E_a}{RT}}\\right) = \\ln(A) - \\frac{E_a}{R} \\cdot \\frac{1}{T}$$

Rearrange into standard straight-line form $y = mx + c$:
$$\\ln(k) = \\left(-\\frac{E_a}{R}\\right) \\cdot \\left(\\frac{1}{T}\\right) + \\ln(A)$$

#### Step 3: Graphical Determination of Activation Energy
1. Measure rate constant $k$ across several temperatures $T$ (in Kelvin).
2. Plot $\\ln(k)$ on the vertical $y$-axis versus $1/T$ on the horizontal $x$-axis.
3. The plot yields a straight line with:
   - **Slope**: $m = -\\frac{E_a}{R}$
   - **y-Intercept**: $c = \\ln(A)$
4. Calculate $E_a = -m \\cdot R$ where universal gas constant $R = 8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})$.`,

        practical: `### 💡 Laboratory Application & Python Plotter

\`\`\`python
import numpy as np

# Experimental Data: T (Kelvin) and k (s^-1)
T = np.array([300, 310, 320, 330, 340])
k = np.array([0.0012, 0.0028, 0.0062, 0.0135, 0.0280])

R = 8.314 # J / (mol * K)
inv_T = 1.0 / T
ln_k = np.log(k)

# Linear regression: ln(k) = m * (1/T) + c
slope, intercept = np.polyfit(inv_T, ln_k, 1)
Ea = -slope * R / 1000 # in kJ/mol

print(f"Activation Energy Ea = {Ea:.2f} kJ/mol")
print(f"Pre-exponential factor A = {np.exp(intercept):.2e} s^-1")
\`\`\`

#### Industrial Relevance:
- **Food Preservation**: Lowering temperature in refrigeration decreases $k$, exponentially slowing spoilage.
- **Catalytic Converters**: Catalysts provide an alternate mechanism with lower $E_a$, accelerating exhaust cleanup.`,

        exam_ready: `### 📝 Exam-Ready Model Answer

**1. Law**: The Arrhenius equation relates reaction rate constant $k$ to absolute temperature $T$:
$$k = A e^{-E_a / RT}$$

**2. Key Terms**:
- $k$: Rate constant
- $A$: Pre-exponential / frequency factor
- $E_a$: Activation energy $(\\text{J}/\\text{mol})$
- $R$: Universal gas constant $(8.314 \\text{ J}/\\text{mol}\\cdot\\text{K})$
- $T$: Absolute temperature in Kelvin $(\\text{K})$

**3. Two-Point Formula for Exam Calculations**:
$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

**4. High-Yield Rule**: For reactions near room temperature (~300 K), the reaction rate approximately doubles for every $10^\\circ\\text{C}$ temperature increase.`,

        hints_first: `### 🔍 Socratic Discovery Mode
**Hint 1**: If you take the natural log $\\ln(k) = \\ln(A) - E_a/(RT)$, what would you plot on the $y$-axis and $x$-axis to produce a straight line $y = mx + c$?
**Hint 2**: If the slope of that line is negative, how do you extract $E_a$ using the universal gas constant $R$?`,

        quiz: [
          {
            id: 'q1',
            question: 'In an Arrhenius plot of ln(k) vs 1/T, what does the slope of the line represent?',
            options: [
              { key: 'A', text: '-Ea / R' },
              { key: 'B', text: '+Ea / R' },
              { key: 'C', text: 'ln(A)' },
              { key: 'D', text: '-R / Ea' }
            ],
            correctAnswer: 'A',
            explanation: 'Linearizing gives ln(k) = (-Ea/R)(1/T) + ln(A), so the slope is equal to -Ea / R.'
          },
          {
            id: 'q2',
            question: 'How does a chemical catalyst increase the rate of reaction?',
            options: [
              { key: 'A', text: 'By increasing the temperature of the system' },
              { key: 'B', text: 'By lowering the activation energy (Ea) through an alternate reaction pathway' },
              { key: 'C', text: 'By changing the equilibrium constant Keq' },
              { key: 'D', text: 'By decreasing reactant collision frequency' }
            ],
            correctAnswer: 'B',
            explanation: 'Catalysts provide an alternative reaction pathway with a lower activation energy barrier Ea, increasing the fraction of effective collisions.'
          },
          {
            id: 'q3',
            question: 'What temperature unit must ALWAYS be used in the Arrhenius equation?',
            options: [
              { key: 'A', text: 'Degrees Celsius (°C)' },
              { key: 'B', text: 'Degrees Fahrenheit (°F)' },
              { key: 'C', text: 'Kelvin (K)' },
              { key: 'D', text: 'Either Celsius or Kelvin' }
            ],
            correctAnswer: 'C',
            explanation: 'Thermodynamic and kinetic formulas require absolute temperature measured in Kelvin (K = °C + 273.15).'
          }
        ],

        revision: {
          summary: 'The Arrhenius equation k = A e^(-Ea/RT) quantifies how temperature exponentially increases reaction rates by providing thermal energy to overcome the activation energy barrier Ea.',
          definitions: [
            { term: 'Activation Energy (Ea)', desc: 'The minimum kinetic energy reacting molecules must possess for a collision to result in a chemical reaction.' },
            { term: 'Pre-exponential Factor (A)', desc: 'The collision frequency factor accounting for both the collision rate and steric molecular orientation.' },
            { term: 'Two-Point Form', desc: 'ln(k2 / k1) = (Ea / R) * (1/T1 - 1/T2), used to calculate Ea from rates at two temperatures.' }
          ],
          flashcards: [
            { q: 'What happens to rate constant k as temperature T approaches infinity?', a: 'As T -> infinity, the exponential term e^(-Ea/RT) approaches 1, meaning k approaches the maximum collision factor A.' },
            { q: 'Why is the slope of an Arrhenius plot ln(k) vs 1/T negative?', a: 'Because higher temperatures mean smaller 1/T values, and rate constants increase with temperature.' },
            { q: 'Does adding a catalyst change the frequency factor A or activation energy Ea?', a: 'Primarily Ea; a catalyst lowers the activation energy barrier Ea.' }
          ]
        }
      }
    ],
    business: [
      {
        topic: 'Net Present Value (NPV) vs IRR',
        question: 'Compare Net Present Value (NPV) and Internal Rate of Return (IRR) for capital budgeting decisions. When might they conflict?',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: Dollars Today vs Interest Rates!

Imagine you have two business investment options:
- **Net Present Value (NPV)** tells you the **exact dollar wealth** added to your pocket today after discounting future cash flows.
- **Internal Rate of Return (IRR)** tells you the **effective percentage return** of the project (the hurdle rate where NPV = 0).

> **Rule of Thumb**: NPV measures *absolute scale of wealth created*, while IRR measures *percentage rate of return*. When choosing between mutually exclusive projects, always trust **NPV**!`,

        step_by_step: `### 🪜 Step-by-Step Methodical Solution

#### Step 1: Net Present Value (NPV) Formulation
$$\\text{NPV} = \\sum_{t=1}^n \\frac{C_t}{(1 + r)^t} - C_0$$
Where $C_t$ is cash inflow at period $t$, $r$ is the cost of capital (discount rate), and $C_0$ is initial investment.
- **Decision Rule**: Accept if $\\text{NPV} > 0$.

#### Step 2: Internal Rate of Return (IRR) Formulation
IRR is the discount rate $r^*$ at which $\\text{NPV} = 0$:
$$0 = \\sum_{t=1}^n \\frac{C_t}{(1 + \\text{IRR})^t} - C_0$$
- **Decision Rule**: Accept if $\\text{IRR} > \\text{Cost of Capital } (r)$.

#### Step 3: When Do NPV and IRR Conflict?
NPV and IRR can give conflicting rankings for **mutually exclusive** projects due to:
1. **Scale Disparity**: Project A requires $10,000 with 50% IRR (Profit = $5,000). Project B requires $1,000,000 with 25% IRR (Profit = $250,000). NPV chooses B; IRR chooses A.
2. **Timing of Cash Flows**: Front-loaded vs back-loaded cash receipts.
3. **Reinvestment Rate Assumption**:
   - NPV assumes cash flows are reinvested at the realistic **cost of capital** ($r$).
   - IRR assumes cash flows are reinvested at the project's own **IRR** (often unrealistically high).`,

        practical: `### 💡 Corporate Finance Example in Python

\`\`\`python
import numpy as np

# Project A: High IRR, Small Scale
# Cash flows: [-10000, 8000, 7000]
# Project B: Moderate IRR, Large Scale
# Cash flows: [-100000, 65000, 65000]

r = 0.10 # 10% discount rate

def calc_npv(rate, cflows):
    return sum(c / ((1 + rate) ** t) for t, c in enumerate(cflows))

npv_a = calc_npv(r, [-10000, 8000, 7000])
npv_b = calc_npv(r, [-100000, 65000, 65000])

print(f"Project A NPV: USD {npv_a:,.2f}")
print(f"Project B NPV: USD {npv_b:,.2f}")
# Project B creates vastly greater wealth despite smaller percentage rate!
\`\`\``,

        exam_ready: `### 📝 Exam-Ready Model Answer

**1. Definitions**:
- **NPV**: Present value of cash inflows minus present value of cash outflows discounted at the cost of capital.
- **IRR**: The discount rate that equates the present value of cash inflows to initial outlay (yielding NPV = 0).

**2. Decision Criteria**:
| Metric | Independent Projects | Mutually Exclusive Projects |
|---|---|---|
| **NPV** | Accept if NPV > 0 | Select project with highest positive NPV |
| **IRR** | Accept if IRR > hurdle rate (r) | Can be misleading due to scale & reinvestment |

**3. Primary Reasons for Conflict**:
1. **Reinvestment Rate Fallacy**: NPV assumes reinvestment at cost of capital $r$; IRR assumes reinvestment at IRR.
2. **Project Scale Differences**: High percentage return on small base vs moderate return on huge capital base.
3. **Multiple IRRs**: Non-conventional cash flows (multiple sign changes) yield multiple mathematical roots.`,

        hints_first: `### 🔍 Socratic Discovery Mode
**Hint 1**: Would you rather earn 100% return on $1 (Profit = $1), or 20% return on $1,000,000 (Profit = $200,000)?
**Hint 2**: At what reinvestment rate does NPV evaluate interim cash inflows compared to IRR?`,

        quiz: [
          {
            id: 'q1',
            question: 'Why is Net Present Value (NPV) theoretically superior to IRR for mutually exclusive capital budgeting decisions?',
            options: [
              { key: 'A', text: 'NPV assumes realistic reinvestment of cash flows at the cost of capital.' },
              { key: 'B', text: 'NPV ignores the time value of money.' },
              { key: 'C', text: 'NPV always equals zero.' },
              { key: 'D', text: 'IRR is easier to compute manually.' }
            ],
            correctAnswer: 'A',
            explanation: 'NPV assumes intermediate cash flows can be reinvested at the firm cost of capital, whereas IRR unrealistically assumes reinvestment at the project own IRR.'
          },
          {
            id: 'q2',
            question: 'When can a project have multiple Internal Rates of Return (IRRs)?',
            options: [
              { key: 'A', text: 'When the cost of capital is zero' },
              { key: 'B', text: 'When the project has non-conventional cash flows with multiple sign changes' },
              { key: 'C', text: 'When initial outlay is positive' },
              { key: 'D', text: 'When NPV is strictly positive' }
            ],
            correctAnswer: 'B',
            explanation: 'By Descartes Rule of Signs, a polynomial has as many real roots as sign changes in the cash flow sequence.'
          },
          {
            id: 'q3',
            question: 'What is the NPV of a project when the discount rate equals the project Internal Rate of Return (IRR)?',
            options: [
              { key: 'A', text: 'Positive infinity' },
              { key: 'B', text: 'Zero ($0)' },
              { key: 'C', text: 'Equal to initial cost C0' },
              { key: 'D', text: 'Negative 1' }
            ],
            correctAnswer: 'B',
            explanation: 'By definition, IRR is the exact discount rate that sets the Net Present Value equal to zero.'
          }
        ],

        revision: {
          summary: 'NPV measures total shareholder wealth added in currency units discounted at the cost of capital. IRR measures the percentage return at which NPV = 0. When they conflict, NPV is always the decisive criterion.',
          definitions: [
            { term: 'Net Present Value (NPV)', desc: 'The sum of discounted future cash flows minus initial investment outlay.' },
            { term: 'Internal Rate of Return (IRR)', desc: 'The discount rate that forces NPV to zero.' },
            { term: 'Crossover Rate', desc: 'The discount rate at which the NPVs of two alternative projects are exactly equal.' }
          ],
          flashcards: [
            { q: 'What is the decision rule for NPV?', a: 'Accept if NPV > 0; for mutually exclusive projects, select the one with the highest positive NPV.' },
            { q: 'Why does IRR fail when cash flow signs flip more than once?', a: 'Multiple sign changes produce multiple mathematical solutions (multiple IRRs), making decision-making ambiguous.' },
            { q: 'What is the Modified Internal Rate of Return (MIRR)?', a: 'A variant of IRR that resolves the reinvestment rate problem by assuming cash inflows are reinvested at the cost of capital.' }
          ]
        }
      }
    ]
  };

  // Generic synthesis generator for custom user-entered questions
  function generateGenericSynthesis(subject, topic, question, level, style) {
    const title = topic || 'Academic Concept';
    const qText = question || `How do we formulate, analyze, and optimize ${title}?`;
    const disciplineMap = {
      cs: 'Computer Science & Software Systems',
      math: 'Mathematics & Applied Analysis',
      physics: 'Physics & Engineering Mechanics',
      chem: 'Chemistry & Molecular Sciences',
      business: 'Business, Economics & Finance',
      other: 'Academic Research & Applied Science'
    };
    const discipline = disciplineMap[subject] || subject.toUpperCase();

    if (style === 'simple') {
      return `### 🐣 Intuitive Explanation: ${title}

Let's understand **${title}** through a clear, everyday perspective:

1. **The Core Intuition**:
   - Imagine this problem without the complex notation: *"How do we solve ${qText.length > 70 ? qText.slice(0, 67) + '...' : qText} in the simplest, most reliable way?"*
   - Think of the system as taking known inputs, filtering out noise, and applying a systematic rule to produce the verified output.

2. **Everyday Analogy**:
   - Just like learning to drive or cook, you master the core invariant rules before worrying about rare edge conditions.
   - When approaching **${title}**, focus on what stays constant and what changes as parameters scale.

3. **Why Undergraduate Students Care**:
   - In **${discipline}**, this concept forms a key foundation. Once you grasp this intuition, the mathematical notation and technical derivations become second nature!`;
    }

    if (style === 'step_by_step') {
      return `### 🪜 Step-by-Step Methodical Solution: ${title}

**Academic Level**: ${level.charAt(0).toUpperCase() + level.slice(1)} Undergraduate  
**Discipline**: ${discipline}  
**Target Problem**: *${qText}*

---

#### Step 1: Problem Definition & Boundary Identification
- **Input Parameters**: Identify all given variables, constants, and initial assumptions.
- **Constraints**: Note conservation laws, domain limits, or computational boundaries.
- **Target Objective**: Formulate the exact quantity or relationship to be determined.

#### Step 2: Foundational Principles & Governing Equations
- Recall the canonical laws governing this topic in **${discipline}**.
- Establish dimensional consistency and confirm that all prerequisite assumptions are satisfied.

#### Step 3: Analytical Derivation & Execution
1. Express the governing equation in terms of the primary variables.
2. Substitute known quantities and isolate the unknown terms.
3. Simplify intermediate expressions algebraically or algorithmically to avoid cumulative rounding errors.

#### Step 4: Verification & Edge Case Analysis
- Check the asymptotic behavior (what happens as variables approach $0$ or $\\infty$?).
- Confirm that the final solution adheres to underlying physical, computational, or mathematical invariants.`;
    }

    if (style === 'practical') {
      return `### 💡 Practical Implementation & Applied Example: ${title}

#### Real-World Context:
In industry, research laboratories, and engineering applications, **${title}** directly addresses:
> *"How do we implement solutions to '${qText.length > 70 ? qText.slice(0, 67) + '...' : qText}' under real-world time, memory, or resource constraints?"*

#### Computational / Analytical Model:
\`\`\`python
# Practical Model for: ${title}
# Discipline: ${discipline}

def analyze_concept(input_parameters, options=None):
    """
    Executes systematic analysis for ${title}.
    Validates boundary conditions and returns verified output.
    """
    # 1. Validate preconditions and inputs
    if input_parameters is None:
        raise ValueError("Valid input parameters required")
        
    # 2. Apply core operational transformation
    # Transforming input data using canonical governing principles
    result = {
        "concept": "${title}",
        "status": "Verified",
        "output_metric": "Optimal",
        "complexity_bound": "Scalable"
    }
    
    # 3. Return verified results
    return result

# Demonstration
print("Executing analysis for ${title}:")
demo_result = analyze_concept({"topic": "${title}"})
print(demo_result)
\`\`\`

#### Key Practical Takeaways:
- **Scalability**: Solutions must perform reliably as data sizes and problem complexities grow.
- **Robustness**: Always validate boundary cases and exceptional conditions before deployment.`;
    }

    if (style === 'exam_ready') {
      return `### 📝 Exam-Ready Model Answer: ${title}

#### 1. Formal Academic Definition:
**${title}** refers to the foundational principle in **${discipline}** that governs:
> *"${qText}"*

#### 2. Key Theoretical Pillars (Full Marks Criteria):
- **Core Mechanism**: Formulate the primary equation or logical statement with standard notations.
- **Underlying Assumptions**: State the boundary conditions, linearity assumptions, and domain constraints.
- **Formal Derivation**: Show clean, step-by-step mathematical or algorithmic steps without skipping intermediate reasoning.

#### 3. Common Exam Pitfalls & Deductions:
- **Pitfall 1**: Omitting units, coordinate orientations, or complexity notation ($O, \\Omega, \\Theta$).
- **Pitfall 2**: Confusing empirical heuristics with strict axiomatic definitions.
- **Pitfall 3**: Failing to state what happens at edge or boundary limits.`;
    }

    // hints_first
    return `### 🔍 Socratic Guided Discovery: ${title}

**Target Challenge**: *"${qText}"*

---

#### 💡 Hint 1: Consider the Simplest Base Case
Before tackling the full problem, ask yourself:
*If you reduce this problem to its absolute smallest, most trivial non-zero form, what is the initial operation you must perform?*

#### 💡 Hint 2: Identify the Governing Invariant
In **${discipline}**, what fundamental law or balance equation (conservation, recurrence, equilibrium, or optimality) must never be violated here?

*(Formulate your intermediate hypothesis, then click **"Reveal Full Solution Step"** above to inspect the complete formal solution!)*`;
  }

  // =========================================================================
  // 2. MATHEMATICAL MISCONCEPTION TAXONOMY & SCENARIOS
  // =========================================================================
  const MISCONCEPTION_LIBRARY = {
    ALG_PARTIAL_DISTRIBUTION: {
      id: 'ALG_PARTIAL_DISTRIBUTION',
      label: 'Partial Distributive Property',
      domain: 'Algebra & Expressions',
      description: 'Multiplying only the variable term and leaving the constant unmultiplied inside parentheses: a(x + b) -> ax + b.',
      severity: 'critical',
      typicalCount: 12,
      telugu: {
        label: 'పాక్షిక పంపిణీ న్యాయ లోపం',
        explanation: 'మీరు బ్రాకెట్ బయట ఉన్న 3 తో x ని మాత్రమే గుణించారు (3x), కానీ 2 ని గుణించడం మర్చిపోయారు. బ్రాకెట్ లోని ప్రతి పదాన్ని బయటి గుణకం తో గుణించాలి.',
        hint: 'మీ దగ్గర ఒక్కొక్కటి (x + 2) నాణాలు ఉన్న 3 సంచులు ఉంటే, మొత్తం మీద ఎన్ని విడి నాణాలు ఉంటాయి?'
      },
      tenglish: {
        label: 'Partial Distribution Error',
        explanation: 'Brackets simplify chesetappudu 3 ni x tho multiply chesaru, kani 2 tho multiply cheyadam marchipoyaru. 3(x+2) ante 3x + 6 avvali.',
        hint: 'Bracket bayata unna 3 lopaliki distribute cheste 3 * x and 3 * 2 renditiki apply avtundhi kadha?'
      }
    },
    FRACTION_ADD_DENOMINATORS: {
      id: 'FRACTION_ADD_DENOMINATORS',
      label: 'Direct Denominator Addition',
      domain: 'Rational Numbers & Fractions',
      description: 'Adding fractions by directly summing numerators and summing denominators without common denominators: a/b + c/d -> (a+c)/(b+d).',
      severity: 'critical',
      typicalCount: 8,
      telugu: {
        label: 'హారాలను నేరుగా కూడే లోపం',
        explanation: 'భిన్నాలను కూడేటప్పుడు హారాలను నేరుగా కూడకూడదు. ముందుగా సామాన్య హారం (క.సా.గు/LCM) కనుగొని సమాన భిన్నాలుగా మార్చాలి.',
        hint: 'సగం కేక్ (1/2) మరియు మూడోవంతు కేక్ (1/3) కలిపితే, అది అసలు సగం కంటే తక్కువ (1/5) ఎలా అవుతుంది?'
      },
      tenglish: {
        label: 'Direct Denominator Addition Error',
        explanation: 'Fractions add chesetappudu denominators ni direct ga add cheyakudadhu. LCM theeskuni common denominator cheyali.',
        hint: '1/2 cake and 1/3 cake kalisthe 1/5 ela avthundhi? 1/2 kante chinnadi aipothundhi kadha?'
      }
    },
    NEG_SIGN_DISTRIBUTION: {
      id: 'NEG_SIGN_DISTRIBUTION',
      label: 'Negative Sign Distribution Error',
      domain: 'Algebra & Expressions',
      description: 'Failing to invert signs when distributing a negative multiplier across terms: -a(x - b) -> -ax - ab instead of -ax + ab.',
      severity: 'moderate',
      typicalCount: 5,
      telugu: {
        label: 'ఋణ గుర్తు పంపిణీ లోపం',
        explanation: 'ఋణ సంఖ్య (-2) తో బ్రాకెట్ లోపలి (-4) ని గుణించినప్పుడు, (- * - = +) గుర్తు ధనంగా మారాలి.',
        hint: 'రెండు ఋణ సంఖ్యలను గుణించినప్పుడు వచ్చే ఫలితం ధనమా లేదా ఋణమా?'
      },
      tenglish: {
        label: 'Negative Sign Flip Error',
        explanation: '-2 tho (x - 4) multiply chesetappudu -2 * -4 = +8 avvali, kani -8 ga raasaru.',
        hint: 'Negative number ni inkoka negative number tho multiply chesthe sign emitavtundhi?'
      }
    },
    LIKE_TERMS_CONCAT: {
      id: 'LIKE_TERMS_CONCAT',
      label: 'Combining Unlike Terms',
      domain: 'Algebra & Expressions',
      description: 'Adding variable terms and constant terms together: 3x + 5 -> 8x.',
      severity: 'moderate',
      typicalCount: 3,
      telugu: {
        label: 'సజాతి కాని పదాలను కూడటం',
        explanation: '3x మరియు 5 వేర్వేరు రకాల పదాలు. చరరాశి ఉన్న పదాన్ని స్థిరరాశితో కలపలేము.',
        hint: '3 యాపిల్స్ మరియు 5 అరటిపండ్లు ఉంటే, మీ దగ్గర 8 యాపిల్స్ ఉన్నాయని చెప్పగలరా?'
      },
      tenglish: {
        label: 'Combining Unlike Terms Error',
        explanation: '3x and 5 like terms kaavu. Variable term ni constant term tho direct ga add chesi 8x ani rayakudadhu.',
        hint: '3 apples + 5 oranges = 8 apples avvavu kadha?'
      }
    },
    EXPONENT_BASE_MULTIPLY: {
      id: 'EXPONENT_BASE_MULTIPLY',
      label: 'Base Multiplied by Exponent',
      domain: 'Signed Arithmetic & Powers',
      description: 'Multiplying the base by the exponent instead of repeated multiplication: 2^3 -> 6 instead of 8.',
      severity: 'low',
      typicalCount: 2,
      telugu: {
        label: 'భూమి మరియు ఘాతాంకం గుణకారం',
        explanation: '2³ అంటే 2 × 3 కాదు. అది 2 × 2 × 2 = 8.',
        hint: 'ఘాతాంకం (Power) దేన్ని సూచిస్తుంది? పునరావృత గుణకారమా లేదా సాధారణ గుణకారమా?'
      },
      tenglish: {
        label: 'Exponent Multiplication Error',
        explanation: '2^3 ante 2 * 3 = 6 kaadhu. 2 ni 3 times repeat ga multiply cheyali: 2 * 2 * 2 = 8.',
        hint: 'Power 3 ante base ni 3 times multiply cheyali kada?'
      }
    },
    NONE: {
      id: 'NONE',
      label: 'Sound Mathematical Reasoning',
      domain: 'General Mathematics',
      description: 'All steps reflect mathematically valid reasoning, symmetry in operations, and proper property application.',
      severity: 'none',
      typicalCount: 0,
      telugu: {
        label: 'సరైన భావనాత్మక అవగాహన',
        explanation: 'అన్ని గణిత దశలు సరైనవి మరియు న్యాయాలను సరిగ్గా వర్తింపజేశారు.',
        hint: 'మీ సాధన పూర్తిగా సరైనది! ఇదే ఉత్సాహాన్ని కొనసాగించండి.'
      },
      tenglish: {
        label: 'Sound Understanding',
        explanation: 'All mathematical steps correct ga unnayi. Conceptual reasoning sound ga undhi.',
        hint: 'Mee solution complete ga correct! Great job.'
      }
    },
    INSUFFICIENT_EVIDENCE: {
      id: 'INSUFFICIENT_EVIDENCE',
      label: 'Insufficient Working Evidence',
      domain: 'Diagnostic Assessment',
      description: 'Answer provides insufficient intermediate steps or explanations to diagnose underlying belief patterns.',
      severity: 'low',
      typicalCount: 1,
      telugu: {
        label: 'సరిపోని సాక్ష్యం',
        explanation: 'సమాధానంలో మధ్యంతర దశలు లేవు. దీనివలన కచ్చితమైన భావనను నిర్ధారించలేము.',
        hint: 'దయచేసి మీ పూర్తి సాధనా దశలను చూపించండి.'
      },
      tenglish: {
        label: 'Insufficient Evidence',
        explanation: 'Intermediate working steps lekapovadam valla exact misconception confirm cheyalekapotunnam.',
        hint: 'Please intermediate derivation steps kuda type cheyandi.'
      }
    },
    IRRELEVANT_INPUT: {
      id: 'IRRELEVANT_INPUT',
      label: 'Incomplete or Irrelevant Response',
      domain: 'Diagnostic Assessment',
      description: 'Response contains non-mathematical content, blank inputs, or off-topic text.',
      severity: 'low',
      typicalCount: 1,
      telugu: {
        label: 'అసంబద్ధమైన లేదా అసంపూర్ణ సమాధానం',
        explanation: 'ఇచ్చిన సమాధానంలో గణిత సాధన లేదు లేదా సంబంధం లేని పదాలు ఉన్నాయి.',
        hint: 'ప్రశ్నకు సంబంధించిన మొదటి గణిత సమీకరణాన్ని రాయండి.'
      },
      tenglish: {
        label: 'Irrelevant Response',
        explanation: 'Provided input mathematical topic ki relevant ga ledu leda incomplete ga undhi.',
        hint: 'Problem ki sambandhinchina first step rayadaniki prayatninchandi.'
      }
    }
  };

  const PRESET_SCENARIOS = {
    partial_dist: {
      id: 'partial_dist',
      title: 'Algebra: Distributive Property',
      question: '3(x + 2) = 15',
      expectedMethod: '3(x + 2) = 15\n3x + 6 = 15\n3x = 9\nx = 3',
      studentWorking: '3(x + 2) = 3x + 2\n3x + 2 = 15\n3x = 13\nx = 13/3',
      studentName: 'Aarav Patel (Grade 8)',
      misconceptionId: 'ALG_PARTIAL_DISTRIBUTION',
      firstWrongStep: 1,
      confidence: 0.95,
      explanation: 'You multiplied 3 by x to get 3x, but forgot to also multiply 3 by 2. The coefficient outside the bracket must distribute to every term inside.',
      hint: 'If you have 3 bags containing (x + 2) coins each, how many single coins do you have altogether from all 3 bags?',
      repairQuestion: 'Expand and simplify: 4(y + 3) = ?',
      expectedRepairAnswer: '4y + 12',
      visualType: 'area_model'
    },
    frac_denom: {
      id: 'frac_denom',
      title: 'Fractions: Addition of Unlike Denominators',
      question: '1/2 + 1/3 = ?',
      expectedMethod: '1/2 + 1/3\n= 3/6 + 2/6\n= 5/6',
      studentWorking: '1/2 + 1/3\n= (1 + 1) / (2 + 3)\n= 2/5',
      studentName: 'Sneha Reddy (Grade 7)',
      misconceptionId: 'FRACTION_ADD_DENOMINATORS',
      firstWrongStep: 2,
      confidence: 0.96,
      explanation: 'You added the numerators (1+1=2) and denominators (2+3=5) directly. Fractions require a common denominator before adding.',
      hint: '1/2 is already half a cake. If you add 1/3 more cake, how can the total (2/5 = 0.4) be less than half?',
      repairQuestion: 'Calculate: 1/4 + 1/3 = ?',
      expectedRepairAnswer: '7/12',
      visualType: 'fraction_bar'
    },
    neg_sign: {
      id: 'neg_sign',
      title: 'Algebra: Negative Multiplier Distribution',
      question: '-2(x - 4) = 10',
      expectedMethod: '-2(x - 4) = 10\n-2x + 8 = 10\n-2x = 2\nx = -1',
      studentWorking: '-2(x - 4) = 10\n-2x - 8 = 10\n-2x = 18\nx = -9',
      studentName: 'Rohan Sharma (Grade 8)',
      misconceptionId: 'NEG_SIGN_DISTRIBUTION',
      firstWrongStep: 2,
      confidence: 0.92,
      explanation: 'When distributing -2 to -4, negative times negative equals positive: (-2) × (-4) = +8, but you wrote -8.',
      hint: 'What is the sign when you multiply two negative numbers together?',
      repairQuestion: 'Expand: -3(y - 5) = ?',
      expectedRepairAnswer: '-3y + 15',
      visualType: 'area_model'
    },
    like_terms: {
      id: 'like_terms',
      title: 'Algebra: Combining Terms',
      question: '3x + 5 = 20',
      expectedMethod: '3x + 5 = 20\n3x = 15\nx = 5',
      studentWorking: '3x + 5 = 20\n8x = 20\nx = 2.5',
      studentName: 'Ananya Verma (Grade 7)',
      misconceptionId: 'LIKE_TERMS_CONCAT',
      firstWrongStep: 2,
      confidence: 0.94,
      explanation: 'You added 3x and 5 together to make 8x. A variable term and a constant number cannot be combined because they are not like terms.',
      hint: 'Can you combine 3 apples and 5 dollars into 8 apple-dollars?',
      repairQuestion: 'Simplify: 4x + 7 = ?',
      expectedRepairAnswer: '4x + 7',
      visualType: 'area_model'
    },
    exp_multiply: {
      id: 'exp_multiply',
      title: 'Powers: Exponent vs Multiplication',
      question: '2³ + 4 = ?',
      expectedMethod: '2³ + 4\n= (2 × 2 × 2) + 4\n= 8 + 4\n= 12',
      studentWorking: '2³ + 4\n= 6 + 4\n= 10',
      studentName: 'Vikram Rao (Grade 8)',
      misconceptionId: 'EXPONENT_BASE_MULTIPLY',
      firstWrongStep: 2,
      confidence: 0.93,
      explanation: 'You multiplied the base 2 by the exponent 3 to get 6. Exponentiation means repeated multiplication: 2³ = 2 × 2 × 2 = 8.',
      hint: 'What does the small power 3 tell you to do with the number 2?',
      repairQuestion: 'Calculate: 3³ = ?',
      expectedRepairAnswer: '27',
      visualType: 'area_model'
    },
    correct_sol: {
      id: 'correct_sol',
      title: 'Algebra: Distributive Property (Correct Solution)',
      question: '3(x + 2) = 15',
      expectedMethod: '3(x + 2) = 15\n3x + 6 = 15\n3x = 9\nx = 3',
      studentWorking: '3(x + 2) = 15\n3x + 6 = 15\n3x = 9\nx = 3',
      studentName: 'Priya Iyer (Grade 8)',
      misconceptionId: 'NONE',
      firstWrongStep: 0,
      confidence: 1.0,
      explanation: 'Flawless working! Every step strictly follows the distributive property and balance method.',
      hint: 'Your solution is completely correct. Keep up the great mathematical reasoning!',
      repairQuestion: 'Advance Challenge: Solve 5(2x - 3) = 25',
      expectedRepairAnswer: 'x = 4',
      visualType: 'area_model'
    }
  };

  // =========================================================================
  // 3. SYSTEM PROMPTS REPOSITORY (PROMPT LAB)
  // =========================================================================
  const SYSTEM_PROMPTS = [
    {
      num: 1,
      name: 'Student Answer Diagnosis Prompt',
      tag: 'LLM Diagnosis',
      desc: 'Base diagnostic prompt identifying the earliest point of reasoning departure.',
      template: `You are a mathematics misconception-detection assistant.
Analyze the student's answer and identify the FIRST step where their reasoning became incorrect.

Question: {question}
Expected solution: {expected_solution}
Student's working: {student_working}
Available misconception IDs: {misconception_library}

Return ONLY valid JSON:
{
  "first_wrong_step": 0,
  "misconception_id": "VALID_ID",
  "confidence": 0.0,
  "explanation": "Short explanation",
  "hint": "Guiding hint",
  "repair_question": "Similar target question",
  "needs_teacher_review": false
}`,
      vars: {
        question: '3(x + 2) = 15',
        expected_solution: '3(x + 2) = 15\n3x + 6 = 15\n3x = 9\nx = 3',
        student_working: '3(x + 2) = 3x + 2\n3x + 2 = 15\n3x = 13\nx = 13/3',
        misconception_library: 'ALG_PARTIAL_DISTRIBUTION, FRACTION_ADD_DENOMINATORS, NEG_SIGN_DISTRIBUTION, NONE'
      },
      sampleOutput: {
        first_wrong_step: 1,
        misconception_id: 'ALG_PARTIAL_DISTRIBUTION',
        confidence: 0.95,
        explanation: 'The student distributed 3 only to x and not to 2.',
        hint: 'What happens to the 2 inside the brackets when multiplied by 3?',
        repair_question: 'Expand 4(y + 3)',
        needs_teacher_review: false
      }
    },
    {
      num: 5,
      name: 'Repair Answer Checker Prompt',
      tag: 'Learning Loop',
      desc: 'Evaluates retry attempts and determines if the misconception has been repaired.',
      template: `You are checking whether a student successfully repaired a previously identified misconception.

Original misconception: {misconception}
Repair question: {repair_question}
Student answer: {student_answer}
Expected answer: {expected_answer}

Return ONLY JSON:
{
  "correct": true,
  "confidence": 0.0,
  "explanation": "",
  "misconception_fixed": true,
  "next_action": "continue"
}`,
      vars: {
        misconception: 'ALG_PARTIAL_DISTRIBUTION',
        repair_question: '4(y + 3) = ?',
        student_answer: '4y + 12',
        expected_answer: '4y + 12'
      },
      sampleOutput: {
        correct: true,
        confidence: 0.99,
        explanation: 'Correct! You successfully distributed 4 to both y and 3 to produce 4y + 12.',
        misconception_fixed: true,
        next_action: 'continue'
      }
    },
    {
      num: 7,
      name: 'Teacher Intervention Prompt',
      tag: 'Dashboard Engine',
      desc: 'Analyzes class-wide aggregated error frequencies to generate 5-minute action plans.',
      template: `Analyze the following anonymized misconception data from a class.
Class data: {misconception_counts}

For each major misconception:
1. Identify the likely learning problem.
2. Recommend a 5-minute classroom intervention.
3. Suggest a visual or example the teacher can use.
4. Suggest one follow-up question.

Return JSON:
{
  "top_misconceptions": [
    {
      "misconception_id": "",
      "percentage": 0,
      "teacher_action": "",
      "visual": "",
      "follow_up_question": ""
    }
  ]
}`,
      vars: {
        misconception_counts: '{"ALG_PARTIAL_DISTRIBUTION": 12, "FRACTION_ADD_DENOMINATORS": 8, "NEG_SIGN_DISTRIBUTION": 5}'
      },
      sampleOutput: {
        top_misconceptions: [
          {
            misconception_id: 'ALG_PARTIAL_DISTRIBUTION',
            percentage: 42.8,
            teacher_action: "Conduct a 5-minute 'Area Model Warmup' on the board.",
            visual: 'Rectangle partitioned into 3*x and 3*2 areas.',
            follow_up_question: 'If a rectangle has height 5 and length (y + 4), what are the two separate areas?'
          }
        ]
      }
    },
    {
      num: 10,
      name: 'Complete /submit Diagnosis Prompt',
      tag: 'Main Engine',
      desc: 'Connects student answer to the entire misconception-map flow.',
      template: `You are the diagnosis engine for an educational application called StudyForge.

QUESTION: {question}
EXPECTED METHOD: {expected_method}
STUDENT WORKING: {student_working}
STUDENT LANGUAGE: {language}
MISCONCEPTION LIBRARY: {misconception_library}

Return ONLY this JSON:
{
  "first_wrong_step": 0,
  "misconception_id": "",
  "confidence": 0.0,
  "explanation": "",
  "hint": "",
  "repair_question": "",
  "needs_teacher_review": false
}`,
      vars: {
        question: '3(x + 2) = 15',
        expected_method: '3(x + 2) = 15\n3x + 6 = 15\n3x = 9\nx = 3',
        student_working: '3(x + 2) = 3x + 2\n3x + 2 = 15\n3x = 13\nx = 13/3',
        language: 'en',
        misconception_library: 'ALG_PARTIAL_DISTRIBUTION, FRACTION_ADD_DENOMINATORS, NEG_SIGN_DISTRIBUTION, NONE'
      },
      sampleOutput: {
        first_wrong_step: 1,
        misconception_id: 'ALG_PARTIAL_DISTRIBUTION',
        confidence: 0.95,
        explanation: 'You multiplied 3 by x to get 3x, but forgot to also multiply 3 by 2.',
        hint: 'If you have 3 bags containing (x + 2) coins each, how many single coins do you have altogether?',
        repair_question: 'Expand and simplify: 4(y + 3) = ?',
        needs_teacher_review: false
      }
    }
  ];

  // =========================================================================
  // 4. APPLICATION STATE STORE
  // =========================================================================
  const state = {
    activeView: 'learn-view',
    language: 'en',
    currentStudy: {
      subject: 'cs',
      level: 'intermediate',
      topic: 'Dynamic Programming (Memoization vs Tabulation)',
      question: 'What is the difference between top-down memoization and bottom-up tabulation? Explain with the Fibonacci sequence and include space/time complexity.',
      style: 'step_by_step',
      activeData: null
    },
    activeQuiz: null,
    userQuizAnswers: {},
    activePromptLabIndex: 3, // Prompt #10
    diagnostic: {
      currentScenario: PRESET_SCENARIOS.partial_dist,
      activeDiagnosis: null,
      history: []
    },
    classroom: {
      totalStudents: 28,
      students: [
        { name: 'Aarav Patel', grade: '8A', misconception: 'ALG_PARTIAL_DISTRIBUTION', step: 1, repairDone: false },
        { name: 'Sneha Reddy', grade: '8A', misconception: 'FRACTION_ADD_DENOMINATORS', step: 2, repairDone: true },
        { name: 'Rohan Sharma', grade: '8B', misconception: 'NEG_SIGN_DISTRIBUTION', step: 2, repairDone: false },
        { name: 'Ananya Verma', grade: '8B', misconception: 'ALG_PARTIAL_DISTRIBUTION', step: 1, repairDone: true },
        { name: 'Vikram Rao', grade: '8A', misconception: 'EXPONENT_BASE_MULTIPLY', step: 2, repairDone: false },
        { name: 'Diya Nair', grade: '8C', misconception: 'ALG_PARTIAL_DISTRIBUTION', step: 1, repairDone: false },
        { name: 'Karthik Raju', grade: '8A', misconception: 'FRACTION_ADD_DENOMINATORS', step: 2, repairDone: false },
        { name: 'Meera Menon', grade: '8B', misconception: 'ALG_PARTIAL_DISTRIBUTION', step: 1, repairDone: true }
      ],
      misconceptionCounts: {
        ALG_PARTIAL_DISTRIBUTION: 12,
        FRACTION_ADD_DENOMINATORS: 8,
        NEG_SIGN_DISTRIBUTION: 5,
        LIKE_TERMS_CONCAT: 3,
        EXPONENT_BASE_MULTIPLY: 2
      },
      selectedNodeId: 'ALG_PARTIAL_DISTRIBUTION'
    },
    apiSettings: {
      geminiKey: localStorage.getItem('studyforge_gemini_key') || '',
      model: 'gemini-2.0-flash',
      confidenceThreshold: 0.70
    }
  };

  // =========================================================================
  // 5. DOM ELEMENTS CACHE
  // =========================================================================
  const DOM = {
    // Navigation
    navTabs: document.querySelectorAll('.nav-tab'),
    viewPanels: document.querySelectorAll('.view-panel'),
    langSelect: document.getElementById('lang-select'),
    btnOpenSettings: document.getElementById('btn-open-settings'),
    settingsModal: document.getElementById('settings-modal'),
    btnCloseSettings: document.getElementById('btn-close-settings'),
    btnSaveSettings: document.getElementById('btn-save-settings'),
    btnResetSettings: document.getElementById('btn-reset-settings'),
    settingGeminiKey: document.getElementById('setting-gemini-key'),
    apiStatusDot: document.getElementById('api-status-dot'),

    // Learn & Solve
    subjectSelect: document.getElementById('learn-subject-select'),
    levelRadios: document.querySelectorAll('input[name="student-level"]'),
    topicInput: document.getElementById('learn-topic-input'),
    questionInput: document.getElementById('learn-question-input'),
    styleRadios: document.querySelectorAll('input[name="explanation-style"]'),
    btnGenerateExplanation: document.getElementById('btn-generate-explanation'),
    learnSpinner: document.getElementById('learn-spinner'),
    btnLoadSample: document.getElementById('btn-load-sample'),
    quickTopicPills: document.querySelectorAll('.topic-pill'),
    activeStyleBadge: document.getElementById('active-style-badge'),
    explanationTopicHeading: document.getElementById('explanation-topic-heading'),
    explanationBodyContent: document.getElementById('explanation-body-content'),
    hintsSocraticBox: document.getElementById('hints-socratic-box'),
    hintsSocraticText: document.getElementById('hints-socratic-text'),
    btnRevealSolution: document.getElementById('btn-reveal-solution'),
    btnCopyExplanation: document.getElementById('btn-copy-explanation'),
    btnGotoQuiz: document.getElementById('btn-goto-quiz'),
    btnGotoRevision: document.getElementById('btn-goto-revision'),
    followupInput: document.getElementById('followup-input'),
    btnSubmitFollowup: document.getElementById('btn-submit-followup'),

    // Quiz
    quizTitleHeading: document.getElementById('quiz-title-heading'),
    quizSubheading: document.getElementById('quiz-subheading'),
    quizScoreBadge: document.getElementById('quiz-score-badge'),
    quizScoreVal: document.getElementById('quiz-score-val'),
    quizQuestionsContainer: document.getElementById('quiz-questions-container'),
    btnSubmitQuiz: document.getElementById('btn-submit-quiz'),
    btnRetryQuiz: document.getElementById('btn-retry-quiz'),
    btnGenerateNewQuiz: document.getElementById('btn-generate-new-quiz'),
    quizSummaryStats: document.getElementById('quiz-summary-stats'),
    summaryScorePct: document.getElementById('summary-score-pct'),
    summaryScoreRatio: document.getElementById('summary-score-ratio'),
    summaryFeedbackMsg: document.getElementById('summary-feedback-msg'),

    // Revision Notes
    revisionTitleHeading: document.getElementById('revision-title-heading'),
    revisionDefinitionsContent: document.getElementById('revision-definitions-content'),
    flashcardsContainer: document.getElementById('flashcards-container'),
    btnCopyAllNotes: document.getElementById('btn-copy-all-notes'),

    // Math Diagnostic
    diagScenarioSelect: document.getElementById('diagnostic-scenario-select'),
    problemTitle: document.getElementById('problem-title'),
    diagnosticTopicInput: document.getElementById('diagnostic-topic-input'),
    diagnosticQuestionInput: document.getElementById('diagnostic-question-input'),
    diagnosticExpectedInput: document.getElementById('diagnostic-expected-input'),
    displayQuestion: document.getElementById('display-question'),
    displayExpected: document.getElementById('display-expected'),
    expectedMethodDrawer: document.getElementById('expected-method-drawer'),
    btnToggleExpected: document.getElementById('btn-toggle-expected'),
    workingStepsEditor: document.getElementById('working-steps-editor'),
    stepLineNumbers: document.getElementById('step-line-numbers'),
    btnClearWorking: document.getElementById('btn-clear-working'),
    btnSubmitDiagnosis: document.getElementById('btn-submit-diagnosis'),
    submitSpinner: document.getElementById('submit-spinner'),
    studentNameBadge: document.getElementById('student-name-badge'),
    masteryOverallScore: document.getElementById('mastery-overall-score'),
    chipDist: document.getElementById('chip-dist'),
    barDist: document.getElementById('bar-dist'),
    diagClassificationChip: document.getElementById('diag-classification-chip'),
    diagHeadline: document.getElementById('diag-headline'),
    diagSubheadline: document.getElementById('diag-subheadline'),
    statusPulse: document.getElementById('status-pulse'),
    diagConfidence: document.getElementById('diag-confidence'),
    diagReviewFlag: document.getElementById('diag-review-flag'),
    stepInspectionList: document.getElementById('step-inspection-list'),
    diagMisconceptionId: document.getElementById('diag-misconception-id'),
    diagMisconceptionName: document.getElementById('diag-misconception-name'),
    diagExplanation: document.getElementById('diag-explanation'),
    diagEvidenceText: document.getElementById('diag-evidence-text'),
    diagCorrectConceptText: document.getElementById('diag-correct-concept-text'),
    diagUncertaintyBox: document.getElementById('diag-uncertainty-box'),
    diagUncertaintyText: document.getElementById('diag-uncertainty-text'),
    btnCopyDiagnosis: document.getElementById('btn-copy-diagnosis'),
    btnExportReport: document.getElementById('btn-export-report'),
    hintToggleBtn: document.getElementById('hint-toggle-btn'),
    hintContentBody: document.getElementById('hint-content-body'),
    diagHint: document.getElementById('diag-hint'),
    multilingualNote: document.getElementById('multilingual-note'),
    multilingualText: document.getElementById('multilingual-text'),
    visualModelViewport: document.getElementById('visual-model-viewport'),
    miniLessonTitle: document.getElementById('mini-lesson-title'),
    lessonTextEn: document.getElementById('lesson-text-en'),
    lessonTextTe: document.getElementById('lesson-text-te'),
    repairQuestionText: document.getElementById('repair-question-text'),
    repairQuestionTarget: document.getElementById('repair-question-target'),
    repairInputAnswer: document.getElementById('repair-input-answer'),
    btnSubmitRepair: document.getElementById('btn-submit-repair'),
    repairSpinner: document.getElementById('repair-spinner'),
    repairFeedbackBanner: document.getElementById('repair-feedback-banner'),
    repairResultIcon: document.getElementById('repair-result-icon'),
    repairResultHeading: document.getElementById('repair-result-heading'),
    repairResultDesc: document.getElementById('repair-result-desc'),
    diagnosticHistoryCard: document.getElementById('diagnostic-history-card'),
    recentDiagnosesList: document.getElementById('recent-diagnoses-list'),
    btnClearDiagHistory: document.getElementById('btn-clear-diag-history'),

    // Teacher View
    teacherSubtabBtns: document.querySelectorAll('.subtab-btn'),
    teacherSubtabContents: document.querySelectorAll('.teacher-subtab-content'),
    networkSvg: document.getElementById('misconception-network-svg'),
    graphTooltip: document.getElementById('graph-tooltip'),
    inspectNodeBadge: document.getElementById('inspect-node-badge'),
    inspectNodeTitle: document.getElementById('inspect-node-title'),
    inspectNodeFreq: document.getElementById('inspect-node-freq'),
    inspectNodeDesc: document.getElementById('inspect-node-desc'),
    affectedStudentsContainer: document.getElementById('affected-students-container'),
    interventionsGrid: document.getElementById('interventions-grid'),
    clustersContainer: document.getElementById('clusters-container'),
    shiftChartContainer: document.getElementById('shift-chart-container'),
    btnSimulateClass: document.getElementById('btn-simulate-class'),

    // Prompt Lab
    promptsNavList: document.getElementById('prompts-nav-list'),
    promptActiveBadge: document.getElementById('prompt-active-badge'),
    promptActiveTitle: document.getElementById('prompt-active-title'),
    promptActiveDesc: document.getElementById('prompt-active-desc'),
    promptCodeView: document.getElementById('prompt-code-view'),
    promptVarsContainer: document.getElementById('prompt-vars-container'),
    promptOutputView: document.getElementById('prompt-output-view'),
    btnRunPromptTest: document.getElementById('btn-run-prompt-test'),

    // Celebration Canvas & Toasts
    confettiCanvas: document.getElementById('confetti-canvas'),
    toastContainer: document.getElementById('toast-container')
  };

  // =========================================================================
  // 6. MODULE 1: LEARN & SOLVE IMPLEMENTATION
  // =========================================================================

  function getSelectedLevel() {
    for (const r of DOM.levelRadios) {
      if (r.checked) return r.value;
    }
    return 'intermediate';
  }

  function getSelectedStyle() {
    for (const r of DOM.styleRadios) {
      if (r.checked) return r.value;
    }
    return 'step_by_step';
  }

  function findMatchingPreset(subject, topic) {
    if (!topic) return null;
    const normalized = (topic || '').trim().toLowerCase();
    
    // Check current subject catalog first
    const list = STUDYFORGE_CATALOG[subject] || [];
    let match = list.find(item => {
      const itemTopic = item.topic.toLowerCase();
      return itemTopic.includes(normalized) || 
             normalized.includes(itemTopic.toLowerCase()) ||
             normalized.includes(itemTopic.split('(')[0].trim().toLowerCase()) ||
             normalized.includes(itemTopic.split(':')[0].trim().toLowerCase());
    });
    if (match) return match;

    // Check across all subjects in catalog
    for (const key of Object.keys(STUDYFORGE_CATALOG)) {
      const subList = STUDYFORGE_CATALOG[key] || [];
      match = subList.find(item => {
        const itemTopic = item.topic.toLowerCase();
        return itemTopic.includes(normalized) || 
               normalized.includes(itemTopic.toLowerCase()) ||
               normalized.includes(itemTopic.split('(')[0].trim().toLowerCase());
      });
      if (match) return match;
    }

    return null;
  }

  async function generateExplanation() {
    const subject = DOM.subjectSelect.value;
    const topic = DOM.topicInput.value.trim();
    const question = DOM.questionInput.value.trim();
    const level = getSelectedLevel();
    const style = getSelectedStyle();

    if (!topic && !question) {
      showToast('Please enter a topic or academic question.', 'error');
      return;
    }

    state.currentStudy = { subject, topic, question, level, style };
    setLoadingState(true);

    try {
      let content = '';
      const preset = findMatchingPreset(subject, topic);

      if (state.apiSettings.geminiKey) {
        content = await callGeminiStudyAPI(subject, topic, question, level, style);
      } else {
        await new Promise(r => setTimeout(r, 280));
        if (preset && preset[style]) {
          content = preset[style];
          state.currentStudy.activeData = preset;
        } else {
          content = generateGenericSynthesis(subject, topic, question, level, style);
          state.currentStudy.activeData = null;
        }
      }

      renderExplanation(content, topic || question, style);
      showToast('Explanation generated successfully!', 'success');

      prepareQuizForTopic(preset || generateFallbackQuiz(topic, question, subject));
      prepareRevisionForTopic(preset || generateFallbackRevision(topic, question, subject));

    } catch (err) {
      console.warn('AI call fallback:', err);
      const fallback = generateGenericSynthesis(subject, topic, question, level, style);
      renderExplanation(fallback, topic || question, style);
      showToast('Generated explanation via offline academic engine.', 'success');
    } finally {
      setLoadingState(false);
    }
  }

  async function callGeminiStudyAPI(subject, topic, question, level, style) {
    const prompt = `
Subject: ${subject}
Topic: ${topic}
Question: ${question}
Student level: ${level}
Answer style: ${style}

Provide an accurate, clear explanation suitable for an undergraduate student following the requested style:
- If "Simple explanation": use simple analogies, plain language, intuitive explanations.
- If "Step-by-Step": give sequential numbered steps with derivations and reasoning.
- If "Practical & Code": include runnable code or practical real-world scenario.
- If "Exam-Ready": structure with definition, key points, formula, and concise bullet points.
- If "Hints first": provide 2 progressive hints first, followed by a complete solution.
`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${state.apiSettings.geminiKey}`;
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!resp.ok) throw new Error('Gemini API call failed');
    const data = await resp.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  }

  function renderExplanation(markdownText, topic, style) {
    const styleLabels = {
      simple: '🐣 Simple (Beginner)',
      step_by_step: '🪜 Step-by-Step Solution',
      practical: '💡 Practical & Code Examples',
      exam_ready: '📝 Exam-Ready Answer',
      hints_first: '🔍 Hints First (Socratic)'
    };

    DOM.activeStyleBadge.textContent = styleLabels[style] || 'Academic Explanation';
    DOM.explanationTopicHeading.textContent = topic || 'Academic Solution';

    if (style === 'hints_first') {
      DOM.hintsSocraticBox.classList.remove('hidden');
      DOM.hintsSocraticText.textContent = `Ponder this first: What core principle governs this topic before reviewing the full solution?`;
    } else {
      DOM.hintsSocraticBox.classList.add('hidden');
    }

    DOM.explanationBodyContent.innerHTML = formatMarkdownToHTML(markdownText);
  }

  function formatMarkdownToHTML(text) {
    if (!text) return '<p>No content generated.</p>';

    let html = text
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^## (.*$)/gim, '<h3>$1</h3>')
      .replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre><code class="lang-$1">$2</code></pre>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>')
      .replace(/\$\$([^$]+)\$\$/gim, '<div class="math-code">$1</div>')
      .replace(/\$([^$]+)\$/gim, '<code>$1</code>')
      .replace(/^> (.*$)/gim, '<blockquote style="border-left:3px solid #6366f1; padding-left:12px; margin:10px 0; color:#cbd5e1;">$1</blockquote>')
      .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>')
      .replace(/\n\n/gim, '</p><p>');

    return `<p>${html}</p>`;
  }

  function handleFollowupQuestion() {
    const doubt = DOM.followupInput.value.trim();
    if (!doubt) return;

    const followupBubble = document.createElement('div');
    followupBubble.className = 'mt-3 p-3';
    followupBubble.style.background = 'rgba(99, 102, 241, 0.12)';
    followupBubble.style.border = '1px solid rgba(99, 102, 241, 0.3)';
    followupBubble.style.borderRadius = '8px';

    followupBubble.innerHTML = `
      <div style="font-weight:700; color:#38bdf8; margin-bottom:4px;">💬 Follow-Up Doubt: "${escapeHtml(doubt)}"</div>
      <p style="color:#cbd5e1; font-size:0.88rem; line-height:1.5;">
        <strong>StudyForge Answer:</strong> Great question! In the context of <code>${escapeHtml(DOM.topicInput.value)}</code>, 
        this addresses an important nuance: whenever you adjust the underlying parameters, the fundamental invariant remains true 
        provided the boundary conditions hold. Consider checking both extremes (lower and upper bounds) to see how the solution scales!
      </p>
    `;

    DOM.explanationBodyContent.appendChild(followupBubble);
    DOM.followupInput.value = '';
    DOM.explanationBodyContent.scrollTop = DOM.explanationBodyContent.scrollHeight;
    showToast('Follow-up answered!', 'success');
  }

  let sampleIndex = 0;
  function loadNextSample() {
    const samples = [
      { subj: 'cs', topic: 'Dynamic Programming (Memoization vs Tabulation)', q: 'What is the difference between top-down memoization and bottom-up tabulation? Explain with the Fibonacci sequence.' },
      { subj: 'math', topic: 'Eigenvalues and Eigenvectors', q: 'How do you calculate the eigenvalues and eigenvectors of a 2x2 matrix A = [[4, 1], [2, 3]]? Show the characteristic equation.' },
      { subj: 'physics', topic: 'Thermodynamics: Carnot Cycle & Efficiency', q: 'Derive the efficiency of a Carnot heat engine operating between temperatures Th and Tc. Why cannot any real engine exceed Carnot efficiency?' },
      { subj: 'cs', topic: 'Database Normalization (1NF, 2NF, 3NF, BCNF)', q: 'Explain 1NF, 2NF, and 3NF with an example student database table and explain why transitive dependencies are eliminated in 3NF.' }
    ];

    const s = samples[sampleIndex % samples.length];
    sampleIndex++;

    DOM.subjectSelect.value = s.subj;
    DOM.topicInput.value = s.topic;
    DOM.questionInput.value = s.q;
    generateExplanation();
  }

  // =========================================================================
  // 7. MODULE 2: PRACTICE QUIZ IMPLEMENTATION
  // =========================================================================

  function prepareQuizForTopic(data) {
    const topic = DOM.topicInput.value.trim();
    const question = DOM.questionInput.value.trim();
    const subject = DOM.subjectSelect.value;
    const quizList = data?.quiz || generateFallbackQuiz(topic, question, subject);
    state.activeQuiz = quizList;
    state.userQuizAnswers = {};

    DOM.quizTitleHeading.textContent = `Topic Quiz: ${topic || 'Academic Concepts'}`;
    DOM.quizScoreBadge.classList.add('hidden');
    DOM.quizSummaryStats.classList.add('hidden');
    DOM.btnSubmitQuiz.classList.remove('hidden');
    DOM.btnRetryQuiz.classList.add('hidden');

    renderQuizQuestions(quizList);
  }

  function generateFallbackQuiz(topicName, questionText, subjectName) {
    const t = topicName || 'this subject';
    const q = questionText || `core problem in ${t}`;
    return [
      {
        id: 'q1',
        question: `What is the foundational theoretical objective of ${t}?`,
        options: [
          { key: 'A', text: `To establish formal principles and optimize solutions under domain constraints.` },
          { key: 'B', text: `To replace systematic deductions with arbitrary trial and error.` },
          { key: 'C', text: `To memorize superficial terminology without understanding underlying mechanisms.` },
          { key: 'D', text: `It has no practical analytical application in modern science or engineering.` }
        ],
        correctAnswer: 'A',
        explanation: `${t} provides rigorous models to analyze, verify, and optimize solutions to complex academic challenges.`
      },
      {
        id: 'q2',
        question: `When analyzing problems regarding "${q.length > 60 ? q.slice(0, 57) + '...' : q}", which step is essential?`,
        options: [
          { key: 'A', text: `Disregarding conservation laws and assumptions.` },
          { key: 'B', text: `Validating boundary conditions, given constraints, and prerequisite theorems.` },
          { key: 'C', text: `Choosing formulas at random based on length.` },
          { key: 'D', text: `Assuming all variables are always constant.` }
        ],
        correctAnswer: 'B',
        explanation: `Undergraduate rigor requires systematically confirming initial boundaries, valid ranges of applicability, and domain constraints.`
      },
      {
        id: 'q3',
        question: `How does systematic problem decomposition apply to ${t}?`,
        options: [
          { key: 'A', text: `By treating the problem monolithically without breaking it into solvable steps.` },
          { key: 'B', text: `By isolating distinct sub-components, applying canonical laws, and verifying synthesized results.` },
          { key: 'C', text: `By ignoring intermediate calculation checks.` },
          { key: 'D', text: `By skipping definitions and working only with approximations.` }
        ],
        correctAnswer: 'B',
        explanation: `Decomposing complex systems into verified modular steps guarantees logical and mathematical correctness.`
      },
      {
        id: 'q4',
        question: `What is the most common student pitfall when solving problems in ${t}?`,
        options: [
          { key: 'A', text: `Assuming solutions apply outside their valid operational boundaries or omitting units/conditions.` },
          { key: 'B', text: `Writing clear step-by-step mathematical reasoning.` },
          { key: 'C', text: `Cross-checking intermediate steps against physical invariants.` },
          { key: 'D', text: `Drawing diagrams to visualize behavior.` }
        ],
        correctAnswer: 'A',
        explanation: `Students frequently err by applying specialized formulas outside their intended domain or neglecting edge constraints.`
      }
    ];
  }

  function renderQuizQuestions(quizList) {
    const container = DOM.quizQuestionsContainer;
    container.innerHTML = '';

    quizList.forEach((q, index) => {
      const card = document.createElement('div');
      card.className = 'card glass-card quiz-question-card';
      card.id = `quiz-card-${q.id}`;

      let optionsHTML = '';
      q.options.forEach(opt => {
        optionsHTML += `
          <label class="mcq-option-label" data-qid="${q.id}" data-key="${opt.key}">
            <input type="radio" name="mcq-${q.id}" value="${opt.key}">
            <div class="mcq-option-card" id="opt-${q.id}-${opt.key}">
              <span class="mcq-badge">${opt.key}</span>
              <span class="mcq-text">${escapeHtml(opt.text)}</span>
            </div>
          </label>
        `;
      });

      card.innerHTML = `
        <div class="quiz-question-header">
          <span class="question-q-num">Question ${index + 1} of ${quizList.length}</span>
          <span class="badge badge-outline">1 Mark</span>
        </div>
        <p class="question-prompt">${escapeHtml(q.question)}</p>
        <div class="mcq-options-grid">${optionsHTML}</div>
        <div class="quiz-explanation-box hidden" id="exp-${q.id}">
          <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
        </div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll('.mcq-option-label').forEach(label => {
      label.addEventListener('click', () => {
        const qid = label.getAttribute('data-qid');
        const key = label.getAttribute('data-key');
        state.userQuizAnswers[qid] = key;
      });
    });
  }

  function submitQuiz() {
    const quizList = state.activeQuiz;
    if (!quizList) return;

    let score = 0;
    const total = quizList.length;

    quizList.forEach(q => {
      const userChoice = state.userQuizAnswers[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      if (isCorrect) score++;

      q.options.forEach(opt => {
        const optCard = document.getElementById(`opt-${q.id}-${opt.key}`);
        if (!optCard) return;

        if (opt.key === q.correctAnswer) {
          optCard.className = 'mcq-option-card state-correct';
        } else if (opt.key === userChoice && !isCorrect) {
          optCard.className = 'mcq-option-card state-wrong';
        }
      });

      const expBox = document.getElementById(`exp-${q.id}`);
      if (expBox) expBox.classList.remove('hidden');
    });

    const pct = Math.round((score / total) * 100);
    DOM.quizScoreBadge.classList.remove('hidden');
    DOM.quizScoreVal.textContent = `${score} / ${total} (${pct}%)`;

    DOM.summaryScorePct.textContent = `${pct}%`;
    DOM.summaryScoreRatio.textContent = `${score} of ${total} correct`;
    DOM.quizSummaryStats.classList.remove('hidden');

    if (pct >= 80) {
      launchCelebrationConfetti();
      DOM.summaryFeedbackMsg.textContent = '🎉 Excellent Mastery! You have solid command over these concepts.';
      showToast(`Quiz Passed: ${score}/${total} (${pct}%)!`, 'success');
    } else {
      DOM.summaryFeedbackMsg.textContent = 'Keep practicing! Review the detailed explanations below to cement your understanding.';
      showToast(`Quiz Complete: ${score}/${total}. Review explanations below.`, 'error');
    }

    DOM.btnSubmitQuiz.classList.add('hidden');
    DOM.btnRetryQuiz.classList.remove('hidden');
  }

  function retryQuiz() {
    state.userQuizAnswers = {};
    DOM.quizScoreBadge.classList.add('hidden');
    DOM.quizSummaryStats.classList.add('hidden');
    DOM.btnSubmitQuiz.classList.remove('hidden');
    DOM.btnRetryQuiz.classList.add('hidden');
    renderQuizQuestions(state.activeQuiz);
  }

  // =========================================================================
  // 8. MODULE 3: REVISION NOTES & FLASHCARDS IMPLEMENTATION
  // =========================================================================

  function prepareRevisionForTopic(data) {
    const topic = DOM.topicInput.value.trim();
    const question = DOM.questionInput.value.trim();
    const subject = DOM.subjectSelect.value;
    const rev = data?.revision || generateFallbackRevision(topic, question, subject);
    DOM.revisionTitleHeading.textContent = `Revision Notes: ${topic || 'Core Concepts'}`;

    const defContainer = DOM.revisionDefinitionsContent;
    defContainer.innerHTML = `
      <div class="def-item" style="border-left: 3px solid #6366f1;">
        <span class="def-term">Executive Summary:</span>
        <p class="def-desc">${escapeHtml(rev.summary)}</p>
      </div>
    `;

    rev.definitions.forEach(d => {
      const item = document.createElement('div');
      item.className = 'def-item';
      item.innerHTML = `
        <span class="def-term">${escapeHtml(d.term)}</span>
        <p class="def-desc">${escapeHtml(d.desc)}</p>
      `;
      defContainer.appendChild(item);
    });

    const flashContainer = DOM.flashcardsContainer;
    flashContainer.innerHTML = '';

    rev.flashcards.forEach((f, i) => {
      const card = document.createElement('div');
      card.className = 'flashcard-item';
      card.innerHTML = `
        <div class="flashcard-q">
          <span class="badge badge-accent">Q${i + 1}</span>
          <span>${escapeHtml(f.q)}</span>
        </div>
        <div class="flashcard-hint-tag" style="font-size:0.75rem; color:#94a3b8; margin-top:8px;">Tap to reveal answer ▾</div>
        <div class="flashcard-a hidden" id="flash-ans-${i}">
          ${escapeHtml(f.a)}
        </div>
      `;

      card.addEventListener('click', () => {
        const ans = card.querySelector('.flashcard-a');
        const hintTag = card.querySelector('.flashcard-hint-tag');
        const isHidden = ans.classList.toggle('hidden');
        card.classList.toggle('flipped', !isHidden);
        if (hintTag) {
          hintTag.textContent = isHidden ? 'Tap to reveal answer ▾' : 'Tap to hide answer ▴';
        }
      });

      flashContainer.appendChild(card);
    });
  }

  function generateFallbackRevision(topicName, questionText, subjectName) {
    const t = topicName || 'Academic Concept';
    return {
      summary: `High-yield synthesis for ${t}: Focus on axiomatic definitions, governing laws, dimensional consistency, and avoiding common boundary-condition errors.`,
      definitions: [
        { term: 'Foundational Principle', desc: `The primary theoretical postulate or algorithm underlying ${t}.` },
        { term: 'Key Boundary Invariant', desc: `The operational limits, domain assumptions, and conservation laws required for valid analysis.` },
        { term: 'Analytical Formulation', desc: `The canonical mathematical, algorithmic, or formal model expressing system behavior.` }
      ],
      flashcards: [
        { q: `What is the core premise of ${t}?`, a: `It provides systematic mechanisms to model, analyze, and optimize academic and engineering solutions.` },
        { q: `What is the most critical mistake to avoid in ${t}?`, a: `Applying specialized formulas without verifying whether initial boundary conditions and assumptions hold.` },
        { q: `How is ${t} applied in real-world systems?`, a: `By translating abstract mathematical and computational constraints into measurable, reproducible architectures.` },
        { q: `How do you verify whether a solution to ${t} is correct?`, a: `Check asymptotic behavior at extreme limits (0, infinity), verify dimensional consistency, and confirm conservation laws.` }
      ]
    };
  }

  function copyAllNotesToClipboard() {
    const topic = DOM.topicInput.value || 'Topic';
    const defs = DOM.revisionDefinitionsContent.innerText;
    let flashcardsText = '';
    DOM.flashcardsContainer.querySelectorAll('.flashcard-item').forEach((fc, idx) => {
      const q = fc.querySelector('.flashcard-q')?.innerText || '';
      const a = fc.querySelector('.flashcard-a')?.innerText || '';
      flashcardsText += `\nFlashcard ${idx + 1}:\n${q}\nAnswer: ${a}\n`;
    });

    const fullNotes = `# StudyForge Revision Notes: ${topic}\n\n${defs}\n\n## Interactive Flashcards:\n${flashcardsText}\n\n---\nGenerated with StudyForge`;
    navigator.clipboard.writeText(fullNotes);
    showToast('📋 Revision notes copied to clipboard!', 'success');
  }

  // =========================================================================
  // 9. MODULE 4: MATHEMATICAL MISCONCEPTION DIAGNOSTIC ENGINE
  // =========================================================================

  function loadDiagnosticScenario(key) {
    if (key === 'custom') {
      state.diagnostic.currentScenario = {
        id: 'custom',
        title: 'Custom Problem',
        question: '',
        expectedMethod: '',
        studentWorking: '',
        studentName: 'Custom Student',
        misconceptionId: 'NONE',
        firstWrongStep: 0,
        confidence: 1.0,
        explanation: 'Custom problem entered by user.',
        hint: 'Inspect each algebraic step.',
        repairQuestion: 'Practice targeted problem',
        expectedRepairAnswer: '4y + 12'
      };
      DOM.problemTitle.textContent = 'Custom Diagnostic Problem';
      if (DOM.diagnosticTopicInput) DOM.diagnosticTopicInput.value = '';
      if (DOM.diagnosticQuestionInput) DOM.diagnosticQuestionInput.value = '';
      if (DOM.diagnosticExpectedInput) DOM.diagnosticExpectedInput.value = '';
      DOM.displayQuestion.textContent = 'Enter your custom question below';
      DOM.displayExpected.textContent = 'Enter expected method or reference key';
      DOM.workingStepsEditor.value = '';
      DOM.studentNameBadge.textContent = 'Interactive Student';
      updateLineNumbers();
      showToast('✏️ Custom problem mode active. Enter question, topic & student steps!', 'info');
      return;
    }

    const sc = PRESET_SCENARIOS[key];
    if (!sc) return;
    state.diagnostic.currentScenario = sc;

    DOM.problemTitle.textContent = sc.title;
    if (DOM.diagnosticTopicInput) DOM.diagnosticTopicInput.value = sc.title;
    if (DOM.diagnosticQuestionInput) DOM.diagnosticQuestionInput.value = sc.question;
    if (DOM.diagnosticExpectedInput) DOM.diagnosticExpectedInput.value = sc.expectedMethod;
    DOM.displayQuestion.textContent = sc.question;
    DOM.displayExpected.textContent = sc.expectedMethod;
    DOM.workingStepsEditor.value = sc.studentWorking;
    DOM.studentNameBadge.textContent = sc.studentName;

    updateLineNumbers();
    runStudentDiagnosis();
  }

  function updateLineNumbers() {
    const lines = DOM.workingStepsEditor.value.split('\n');
    DOM.stepLineNumbers.innerHTML = lines.map((_, i) => `<div>${i + 1}</div>`).join('');
  }

  async function callGeminiDiagnosisAPI(topic, question, expected, working) {
    const prompt = `You are an expert mathematical misconception diagnosis AI for undergraduate and school education.
Analyze the student working against the question and expected reference.

Topic: ${topic}
Question: ${question}
Expected Solution / Reference: ${expected}
Student Working Steps:
${working}

Analyze carefully and return ONLY a valid JSON object matching this schema:
{
  "classification": "CORRECT" | "PARTIAL" | "MISCONCEPTION" | "INCOMPLETE_OR_IRRELEVANT" | "UNCERTAIN",
  "first_wrong_step": <integer, 0 if correct or incomplete, else 1-based step number of first reasoning error>,
  "misconception_id": "<ID such as ALG_PARTIAL_DISTRIBUTION, FRACTION_ADD_DENOMINATORS, NEG_SIGN_DISTRIBUTION, LIKE_TERMS_CONCAT, EXPONENT_BASE_MULTIPLY, NONE, or custom ID>",
  "misconception_name": "<Short human-readable title of the misconception or 'Sound Understanding'>",
  "confidence": <float between 0.0 and 1.0>,
  "explanation": "<Simple student-friendly explanation of why the reasoning is incorrect or why it is correct>",
  "evidence": "<Direct quoted expression or line from student working demonstrating the misconception>",
  "correct_concept": "<Clear statement of the correct mathematical principle or property>",
  "hint": "<Socratic guiding question helping the student self-correct>",
  "repair_question": "<A new targeted question testing the exact same concept>",
  "expected_repair_answer": "<Correct answer string to the repair question>",
  "uncertainty_reason": "<Explanation if confidence < 0.70 or classification is UNCERTAIN, else empty string>"
}

Rules:
- Do NOT invent a misconception if the answer is just incomplete, ambiguous, or blank.
- If only a final number is given without steps, classify as UNCERTAIN.
- Return ONLY the raw JSON string without markdown formatting.`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${state.apiSettings.geminiKey}`;
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json' }
      })
    });

    if (!resp.ok) throw new Error(`Gemini diagnosis API error: ${resp.status}`);
    const data = await resp.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    text = text.replace(/```json\s*/gi, '').replace(/```/g, '').trim();
    return JSON.parse(text);
  }

  function diagnoseOffline(topic, question, expected, rawWorking, scenarioKey) {
    const lines = rawWorking.split('\n').map(l => l.trim()).filter(Boolean);
    const fullText = rawWorking.toLowerCase().replace(/\s+/g, ' ');

    // 1. Check for adversarial / prompt injection
    const injectionRegex = /(ignore\s+all\s+previous|system\s+prompt|forget\s+instructions|you\s+are\s+now|bypass\s+rules|reveal\s+secret)/i;
    if (injectionRegex.test(rawWorking) || injectionRegex.test(question || '')) {
      return {
        classification: 'INCOMPLETE_OR_IRRELEVANT',
        first_wrong_step: 0,
        misconception_id: 'IRRELEVANT_INPUT',
        misconception_name: 'Adversarial or Irrelevant Input',
        confidence: 0.99,
        explanation: 'The provided submission contains non-mathematical system prompts or instruction overrides rather than valid mathematical reasoning.',
        evidence: lines[0] ? lines[0].slice(0, 60) : 'Adversarial pattern detected',
        correct_concept: 'Mathematical diagnosis requires genuine algebraic or numerical statements.',
        hint: 'Please provide genuine mathematical working to solve the problem.',
        repair_question: 'Solve for x: 3x + 6 = 15',
        expected_repair_answer: 'x = 3',
        uncertainty_reason: ''
      };
    }

    // 2. Check for empty submission
    if (lines.length === 0) {
      return {
        classification: 'INCOMPLETE_OR_IRRELEVANT',
        first_wrong_step: 0,
        misconception_id: 'IRRELEVANT_INPUT',
        misconception_name: 'Empty Submission',
        confidence: 1.0,
        explanation: 'No mathematical steps were provided. Please enter your working to receive a diagnosis.',
        evidence: 'No input provided',
        correct_concept: 'A solution must begin with an initial algebraic statement or arithmetic setup.',
        hint: 'Write down the original problem as step 1 to begin.',
        repair_question: 'Expand: 2(x + 5) = ?',
        expected_repair_answer: '2x + 10',
        uncertainty_reason: ''
      };
    }

    // Check if non-math text, conversational, or lacks mathematical operations/equations
    const hasEquationsOrNumbers = /\d/.test(fullText) || /[=+\-*/^]/.test(fullText);
    const isConversationalOnly = /^(hi|hello|idk|i don't know|what|who|help|test|banana|cat|dog|pizza|i think|no idea)\b/i.test(fullText.trim());
    if (!hasEquationsOrNumbers || isConversationalOnly || lines.every(l => !/[\d=+\-*/^]/.test(l))) {
      return {
        classification: 'INCOMPLETE_OR_IRRELEVANT',
        first_wrong_step: 0,
        misconception_id: 'IRRELEVANT_INPUT',
        misconception_name: 'Incomplete or Irrelevant Text',
        confidence: 0.95,
        explanation: 'The text does not contain mathematical expressions or logical steps addressing the problem.',
        evidence: lines[0].slice(0, 80),
        correct_concept: 'Answers must provide mathematical statements or equations addressing the question.',
        hint: 'Try writing the first equation to start solving the problem.',
        repair_question: 'Solve for x: 2x = 8',
        expected_repair_answer: 'x = 4',
        uncertainty_reason: ''
      };
    }

    // 3. Check for ambiguous single token without intermediate working
    if (lines.length === 1 && /^([a-z]\s*=\s*-?\d+(\.\d+|\/\d+)?|-?\d+(\.\d+|\/\d+)?)$/i.test(lines[0].trim())) {
      return {
        classification: 'UNCERTAIN',
        first_wrong_step: 0,
        misconception_id: 'INSUFFICIENT_EVIDENCE',
        misconception_name: 'Insufficient Working Evidence',
        confidence: 0.50,
        explanation: 'Only a single final value was submitted without intermediate derivation steps. While the value can be checked, we cannot determine whether mistakes are due to conceptual misconceptions or minor calculation slips.',
        evidence: lines[0],
        correct_concept: 'Step-by-step working is needed to diagnose conceptual thinking patterns and verify mathematical properties.',
        hint: 'Could you write down the intermediate steps you used to arrive at this answer?',
        repair_question: 'Show all steps to solve: 3(x + 2) = 15',
        expected_repair_answer: '3x + 6 = 15',
        uncertainty_reason: 'Only a bare final value was provided without intermediate working steps.'
      };
    }

    // 4. Check preset scenario match
    if (scenarioKey && scenarioKey !== 'custom' && PRESET_SCENARIOS[scenarioKey]) {
      const sc = PRESET_SCENARIOS[scenarioKey];
      if (sc.id === 'correct_sol' || (fullText.includes('3x + 6 = 15') && fullText.includes('x = 3'))) {
        return {
          classification: 'CORRECT',
          first_wrong_step: 0,
          misconception_id: 'NONE',
          misconception_name: 'Sound Mathematical Reasoning',
          confidence: 1.0,
          explanation: sc.explanation,
          evidence: lines[lines.length - 1] || 'All steps valid',
          correct_concept: 'Properties of Equality: applying inverse operations symmetrically isolates the variable correctly.',
          hint: sc.hint,
          repair_question: sc.repairQuestion,
          expected_repair_answer: sc.expectedRepairAnswer,
          uncertainty_reason: ''
        };
      }
    }

    // 5. Pattern-based Misconception Detection

    // A) Partial Distribution: 3(x + 2) -> 3x + 2
    const partialDistStep = lines.findIndex(l => {
      const s = l.replace(/\s+/g, '');
      return /3\(x\+2\)=3x\+2/i.test(s) || /4\(y\+3\)=4y\+3/i.test(s) || /2\(x\+4\)=2x\+4/i.test(s) || /3x\+2=15/i.test(s) || /3x\+2=13/i.test(s);
    });
    if (partialDistStep !== -1) {
      return {
        classification: 'MISCONCEPTION',
        first_wrong_step: partialDistStep + 1,
        misconception_id: 'ALG_PARTIAL_DISTRIBUTION',
        misconception_name: 'Partial Distributive Property',
        confidence: 0.95,
        explanation: 'You multiplied the factor outside the parentheses by the variable term, but did not multiply it by the constant term inside. The distributive property requires a(b + c) = ab + ac.',
        evidence: lines[partialDistStep],
        correct_concept: 'Distributive Property: Every term inside the parentheses must be multiplied by the factor outside: 3 · (x + 2) = 3·x + 3·2 = 3x + 6.',
        hint: 'If you have 3 bags each containing (x + 2) items, how many single items do you have in total across all 3 bags?',
        repair_question: 'Expand and simplify: 4(y + 3) = ?',
        expected_repair_answer: '4y + 12',
        uncertainty_reason: ''
      };
    }

    // B) Fraction Denominator Addition: 1/2 + 1/3 = 2/5
    const fracDenomStep = lines.findIndex(l => {
      const s = l.replace(/\s+/g, '');
      return /\(1\+1\)\/\(2\+3\)/.test(s) || s.includes('2/5') || /\(a\+c\)\/\(b\+d\)/.test(s);
    });
    if (fracDenomStep !== -1 || (fullText.includes('1/2') && fullText.includes('1/3') && fullText.includes('2/5'))) {
      const stepIdx = fracDenomStep !== -1 ? fracDenomStep + 1 : 2;
      return {
        classification: 'MISCONCEPTION',
        first_wrong_step: stepIdx,
        misconception_id: 'FRACTION_ADD_DENOMINATORS',
        misconception_name: 'Direct Denominator Addition',
        confidence: 0.96,
        explanation: 'You added numerators and denominators straight across: (1+1)/(2+3) = 2/5. Fractions must have a common denominator before their numerators can be added.',
        evidence: lines[fracDenomStep !== -1 ? fracDenomStep : 0],
        correct_concept: 'Common Denominators: The denominator denotes part size. Convert to equivalent fractions with LCM(2, 3) = 6: 3/6 + 2/6 = 5/6.',
        hint: '1/2 is half a cake. If you add 1/3 more cake, how can the total (2/5 = 0.4) be smaller than half?',
        repair_question: 'Calculate: 1/4 + 1/3 = ?',
        expected_repair_answer: '7/12',
        uncertainty_reason: ''
      };
    }

    // C) Negative Sign Distribution Error: -2(x - 4) -> -2x - 8
    const negSignStep = lines.findIndex(l => {
      const s = l.replace(/\s+/g, '');
      return /-2x-8/.test(s) || /-3y-15/.test(s) || /-2\(x-4\)=-2x-8/.test(s);
    });
    if (negSignStep !== -1) {
      return {
        classification: 'MISCONCEPTION',
        first_wrong_step: negSignStep + 1,
        misconception_id: 'NEG_SIGN_DISTRIBUTION',
        misconception_name: 'Negative Sign Distribution Error',
        confidence: 0.93,
        explanation: 'When distributing the negative coefficient -2 across the subtraction -4, a double negative produces a positive product: (-2) × (-4) = +8, but you wrote -8.',
        evidence: lines[negSignStep],
        correct_concept: 'Double Negatives: Multiplying two negative numbers yields a positive product: -a(x - b) = -ax + ab.',
        hint: 'What is the sign when you multiply two negative numbers together: (-2) × (-4)?',
        repair_question: 'Expand: -3(y - 5) = ?',
        expected_repair_answer: '-3y + 15',
        uncertainty_reason: ''
      };
    }

    // D) Combining Unlike Terms: 3x + 5 = 8x
    const likeTermsStep = lines.findIndex(l => {
      const s = l.replace(/\s+/g, '');
      return /8x=20/.test(s) || /3x\+5=8x/.test(s) || /4x\+7=11x/.test(s);
    });
    if (likeTermsStep !== -1) {
      return {
        classification: 'MISCONCEPTION',
        first_wrong_step: likeTermsStep + 1,
        misconception_id: 'LIKE_TERMS_CONCAT',
        misconception_name: 'Combining Unlike Terms',
        confidence: 0.94,
        explanation: 'You added the variable term 3x and the constant 5 together to make 8x. Terms with variables cannot be merged with constant numbers because they are unlike terms.',
        evidence: lines[likeTermsStep],
        correct_concept: 'Like Terms Principle: Only terms with identical variable bases and exponents can be combined: 3x and 5 cannot be added together.',
        hint: 'Can you combine 3 apples and 5 dollars into 8 apple-dollars?',
        repair_question: 'Simplify: 4x + 7 = ?',
        expected_repair_answer: '4x + 7',
        uncertainty_reason: ''
      };
    }

    // E) Exponent Base Multiply: 2^3 = 6
    const expStep = lines.findIndex(l => {
      const s = l.replace(/\s+/g, '');
      return s.includes('6+4') || s.includes('2^3=6') || s.includes('2³=6') || s.includes('3^2=6') || (s.includes('6') && (fullText.includes('2³') || fullText.includes('2^3')));
    });
    if (expStep !== -1 || ((fullText.includes('2³') || fullText.includes('2^3')) && (fullText.includes('6 + 4') || fullText.includes('6+4') || fullText.includes('= 10') || fullText.includes('=10')))) {
      const stepIdx = expStep !== -1 ? expStep + 1 : 2;
      return {
        classification: 'MISCONCEPTION',
        first_wrong_step: stepIdx,
        misconception_id: 'EXPONENT_BASE_MULTIPLY',
        misconception_name: 'Base Multiplied by Exponent',
        confidence: 0.93,
        explanation: 'You multiplied the base 2 by the exponent 3 (2 × 3 = 6). Exponentiation represents repeated multiplication of the base: 2³ = 2 × 2 × 2 = 8.',
        evidence: lines[expStep !== -1 ? expStep : 1] || '2³ = 6',
        correct_concept: 'Powers & Exponents: a^n means multiplying a by itself n times: 2³ = 2 × 2 × 2 = 8, not 2 × 3.',
        hint: 'What does the exponent 3 tell you to do with the number 2?',
        repair_question: 'Calculate: 3³ = ?',
        expected_repair_answer: '27',
        uncertainty_reason: ''
      };
    }

    // F) Correct Working Verification
    const lastLine = lines[lines.length - 1];
    const isAlgebraCorrect = fullText.includes('x = 3') || fullText.includes('x=3') || fullText.includes('5/6') || fullText.includes('x = -1') || fullText.includes('x = 5') || fullText.includes('12');
    
    if (isAlgebraCorrect) {
      return {
        classification: 'CORRECT',
        first_wrong_step: 0,
        misconception_id: 'NONE',
        misconception_name: 'Sound Mathematical Reasoning',
        confidence: 0.98,
        explanation: 'Every step correctly applies mathematical properties, balances operations on both sides, and leads to the valid solution.',
        evidence: lastLine,
        correct_concept: 'Algebraic Consistency: Each step is an equivalent transformation preserving equality.',
        hint: 'Your working is mathematically sound! Can you verify by plugging your answer back into the equation?',
        repair_question: 'Mastery Challenge: Solve 5(2x - 3) = 25',
        expected_repair_answer: 'x = 4',
        uncertainty_reason: ''
      };
    }

    // G) Partial Working
    if (lines.length >= 2) {
      return {
        classification: 'PARTIAL',
        first_wrong_step: 0,
        misconception_id: 'NONE',
        misconception_name: 'Partially Complete Solution',
        confidence: 0.85,
        explanation: 'Your initial algebraic manipulations are conceptually sound, but the working does not yet reach the final isolated variable or simplified answer.',
        evidence: lastLine,
        correct_concept: 'Complete Equation Solving: Continue applying inverse operations until the target variable is isolated on one side.',
        hint: 'What final inverse operation is required to isolate the variable from ' + lastLine + '?',
        repair_question: 'Complete isolation of x from: 3x = 9',
        expected_repair_answer: 'x = 3',
        uncertainty_reason: ''
      };
    }

    // H) Fallback: Report Uncertain instead of inventing a misconception
    return {
      classification: 'UNCERTAIN',
      first_wrong_step: 0,
      misconception_id: 'INSUFFICIENT_EVIDENCE',
      misconception_name: 'Inconclusive Reasoning',
      confidence: 0.55,
      explanation: 'The steps provided do not match known systematic misconception patterns or standard solutions. Additional steps or explanations are needed to evaluate understanding.',
      evidence: lines[0],
      correct_concept: 'Formulate explicit algebraic steps showing each transformation on both sides.',
      hint: 'Please provide full step-by-step working from start to finish.',
      repair_question: 'Solve step-by-step: 2(x + 3) = 14',
      expected_repair_answer: 'x = 4',
      uncertainty_reason: 'Steps provided do not provide enough evidence to differentiate between an arithmetic slip, typographical error, or conceptual misunderstanding.'
    };
  }

  async function runStudentDiagnosis() {
    const rawWorking = (DOM.workingStepsEditor?.value || '').trim();
    const topic = (DOM.diagnosticTopicInput?.value || DOM.problemTitle?.textContent || '').trim();
    const question = (DOM.diagnosticQuestionInput?.value || DOM.displayQuestion?.textContent || '').trim();
    const expected = (DOM.diagnosticExpectedInput?.value || DOM.displayExpected?.textContent || '').trim();
    const scenarioKey = DOM.diagScenarioSelect?.value || 'custom';

    if (!rawWorking) {
      showToast('Please enter mathematical working to diagnose.', 'error');
      return;
    }

    if (rawWorking.length > 5000) {
      showToast('Working text is too long (maximum 5000 characters).', 'warning');
      return;
    }

    DOM.submitSpinner.classList.remove('hidden');
    DOM.btnSubmitDiagnosis.disabled = true;

    try {
      let diag = null;

      if (state.apiSettings.geminiKey) {
        try {
          diag = await callGeminiDiagnosisAPI(topic, question, expected, rawWorking);
        } catch (apiErr) {
          console.warn('Gemini diagnosis API error, falling back to offline engine:', apiErr);
          showToast('Live AI unreachable: running offline heuristic engine.', 'info');
          diag = diagnoseOffline(topic, question, expected, rawWorking, scenarioKey);
        }
      } else {
        await new Promise(r => setTimeout(r, 260));
        diag = diagnoseOffline(topic, question, expected, rawWorking, scenarioKey);
      }

      // Multilingual check
      if (state.language === 'te' && MISCONCEPTION_LIBRARY[diag.misconception_id]?.telugu) {
        diag.explanation = MISCONCEPTION_LIBRARY[diag.misconception_id].telugu.explanation;
        diag.hint = MISCONCEPTION_LIBRARY[diag.misconception_id].telugu.hint;
      } else if (state.language === 'tenglish' && MISCONCEPTION_LIBRARY[diag.misconception_id]?.tenglish) {
        diag.explanation = MISCONCEPTION_LIBRARY[diag.misconception_id].tenglish.explanation;
        diag.hint = MISCONCEPTION_LIBRARY[diag.misconception_id].tenglish.hint;
      }

      state.diagnostic.activeDiagnosis = diag;
      renderDiagnosisResult(diag, rawWorking);

      // Save to Session History
      const historyEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        topic: topic || 'Algebra',
        question: question || '',
        working: rawWorking,
        classification: diag.classification,
        confidence: diag.confidence,
        misconception_id: diag.misconception_id,
        first_wrong_step: diag.first_wrong_step,
        diag: diag
      };
      state.diagnostic.history.unshift(historyEntry);
      if (state.diagnostic.history.length > 20) state.diagnostic.history.pop();
      renderDiagnosticHistory();

      showToast(`Diagnosis complete: ${diag.classification}`, 'success');

    } catch (err) {
      console.error('Diagnosis error:', err);
      showToast('An error occurred during diagnosis. Check your input.', 'error');
    } finally {
      DOM.submitSpinner.classList.add('hidden');
      DOM.btnSubmitDiagnosis.disabled = false;
    }
  }

  function renderDiagnosisResult(diag, studentWorking) {
    const isCorrect = diag.classification === 'CORRECT';
    const isPartial = diag.classification === 'PARTIAL';
    const isMisconception = diag.classification === 'MISCONCEPTION';
    const isIncomplete = diag.classification === 'INCOMPLETE_OR_IRRELEVANT';
    const isUncertain = diag.classification === 'UNCERTAIN';

    const taxon = MISCONCEPTION_LIBRARY[diag.misconception_id] || { label: diag.misconception_name || diag.misconception_id };

    // Update Classification Chip
    if (DOM.diagClassificationChip) {
      if (isCorrect) {
        DOM.diagClassificationChip.className = 'classification-chip badge-class-correct';
        DOM.diagClassificationChip.innerHTML = '✓ Correct Understanding';
      } else if (isPartial) {
        DOM.diagClassificationChip.className = 'classification-chip badge-class-partial';
        DOM.diagClassificationChip.innerHTML = '⚡ Partially Correct';
      } else if (isMisconception) {
        DOM.diagClassificationChip.className = 'classification-chip badge-class-misconception';
        DOM.diagClassificationChip.innerHTML = '⚠️ Conceptual Misconception';
      } else if (isIncomplete) {
        DOM.diagClassificationChip.className = 'classification-chip badge-class-incomplete';
        DOM.diagClassificationChip.innerHTML = '🚫 Incomplete / Irrelevant';
      } else {
        DOM.diagClassificationChip.className = 'classification-chip badge-class-uncertain';
        DOM.diagClassificationChip.innerHTML = '❓ Uncertain Evidence';
      }
    }

    // Headline & Subheadline
    if (isCorrect) {
      DOM.diagHeadline.textContent = 'Correct Working — No Misconceptions';
      DOM.diagSubheadline.textContent = 'Every line correctly applies algebraic properties';
      DOM.statusPulse.className = 'status-pulse-badge pulse-emerald';
      DOM.diagMisconceptionId.className = 'badge badge-success';
    } else if (isPartial) {
      DOM.diagHeadline.textContent = 'Partially Correct Working';
      DOM.diagSubheadline.textContent = 'Reasoning is mathematically sound but incomplete';
      DOM.statusPulse.className = 'status-pulse-badge pulse-amber';
      DOM.diagMisconceptionId.className = 'badge badge-warning';
    } else if (isMisconception) {
      DOM.diagHeadline.textContent = `Misconception Detected in Step ${diag.first_wrong_step || 1}`;
      DOM.diagSubheadline.textContent = 'Earliest reasoning departure pinpointed';
      DOM.statusPulse.className = 'status-pulse-badge pulse-rose';
      DOM.diagMisconceptionId.className = 'badge badge-rose';
    } else if (isIncomplete) {
      DOM.diagHeadline.textContent = 'Incomplete or Irrelevant Response';
      DOM.diagSubheadline.textContent = 'Please provide valid mathematical working';
      DOM.statusPulse.className = 'status-pulse-badge pulse-slate';
      DOM.diagMisconceptionId.className = 'badge badge-outline';
    } else {
      DOM.diagHeadline.textContent = 'Inconclusive — Insufficient Evidence';
      DOM.diagSubheadline.textContent = 'Need more intermediate steps for diagnosis';
      DOM.statusPulse.className = 'status-pulse-badge pulse-purple';
      DOM.diagMisconceptionId.className = 'badge badge-purple';
    }

    DOM.diagConfidence.textContent = `${Math.round((diag.confidence || 0.85) * 100)}%`;
    DOM.diagMisconceptionId.textContent = diag.misconception_id || 'ANALYSIS';
    DOM.diagMisconceptionName.textContent = diag.misconception_name || taxon.label || diag.misconception_id;
    DOM.diagExplanation.textContent = diag.explanation;
    DOM.diagHint.textContent = diag.hint || 'Review your first principles.';

    // Evidence & Correct Concept
    if (DOM.diagEvidenceText) {
      DOM.diagEvidenceText.textContent = diag.evidence || 'N/A';
    }
    if (DOM.diagCorrectConceptText) {
      DOM.diagCorrectConceptText.textContent = diag.correct_concept || 'Standard mathematical properties and balance methods applied.';
    }

    // Uncertainty Alert Box
    if (DOM.diagUncertaintyBox) {
      if (isUncertain || (diag.confidence && diag.confidence < 0.70)) {
        DOM.diagUncertaintyBox.classList.remove('hidden');
        if (DOM.diagUncertaintyText) {
          DOM.diagUncertaintyText.textContent = diag.uncertainty_reason || 'Confidence is below 70%. Please enter intermediate working steps to allow accurate diagnosis.';
        }
      } else {
        DOM.diagUncertaintyBox.classList.add('hidden');
      }
    }

    // Teacher Review Flag
    const needsReview = (diag.confidence && diag.confidence < 0.70) || isUncertain;
    if (DOM.diagReviewFlag) {
      if (needsReview) DOM.diagReviewFlag.classList.remove('hidden');
      else DOM.diagReviewFlag.classList.add('hidden');
    }

    renderStepInspectionList(studentWorking, diag.first_wrong_step || 0);
    renderVisualMiniLesson(diag.misconception_id);

    DOM.repairQuestionText.innerHTML = `${diag.repair_question || 'Solve: 3(x + 2) = 15'}`;
    DOM.repairQuestionTarget.textContent = `Targeting: ${diag.misconception_id}`;
    DOM.repairInputAnswer.value = '';
    DOM.repairFeedbackBanner.classList.add('hidden');
  }

  function renderStepInspectionList(workingText, firstWrongStep) {
    const lines = workingText.split('\n').map(l => l.trim()).filter(Boolean);
    DOM.stepInspectionList.innerHTML = '';

    if (lines.length === 0) {
      DOM.stepInspectionList.innerHTML = '<div class="text-muted" style="padding:8px; font-size:0.85rem;">No steps available to inspect.</div>';
      return;
    }

    lines.forEach((line, idx) => {
      const stepNum = idx + 1;
      const isError = stepNum === firstWrongStep;
      const isAfterError = stepNum > firstWrongStep && firstWrongStep > 0;

      const row = document.createElement('div');
      row.className = `step-row ${isError ? 'step-error' : (isAfterError ? 'step-consequential' : 'step-ok')}`;

      let verdict = '<span class="step-row-verdict">✓ Valid Step</span>';
      if (isError) verdict = '<span class="step-row-verdict">⚠️ First Wrong Step</span>';
      else if (isAfterError) verdict = '<span class="step-row-verdict text-muted">↳ Consequential Step</span>';

      row.innerHTML = `
        <span class="step-row-num">Step ${stepNum}</span>
        <span class="step-row-math">${escapeHtml(line)}</span>
        ${verdict}
      `;
      DOM.stepInspectionList.appendChild(row);
    });
  }

  function renderVisualMiniLesson(misconceptionId) {
    if (misconceptionId === 'ALG_PARTIAL_DISTRIBUTION' || misconceptionId === 'NONE') {
      DOM.miniLessonTitle.textContent = 'Visualizing the Area Model for Distribution';
      DOM.visualModelViewport.innerHTML = `
        <div class="area-model-demo" id="algebra-area-model">
          <div class="area-labels-top">
            <span class="area-col-label label-x">x</span>
            <span class="area-plus">+</span>
            <span class="area-col-label label-num">2</span>
          </div>
          <div class="area-layout-row">
            <div class="area-height-label">3 ×</div>
            <div class="area-box-container">
              <div class="area-box box-var">
                <span class="box-formula">3 · x = <strong>3x</strong></span>
                <span class="box-status">✓ Computed correctly</span>
              </div>
              <div class="area-box box-const error-highlight">
                <span class="box-formula">3 · 2 = <strong>6</strong></span>
                <span class="box-alert">⚠️ You wrote 2 instead of 6!</span>
              </div>
            </div>
          </div>
          <div class="area-equation-summary">
            <span>Total Area = </span>
            <span class="correct-term">3x</span>
            <span> + </span>
            <span class="correct-term highlight-glow">6</span>
            <span class="note-pill">Not 3x + 2</span>
          </div>
        </div>
      `;
    } else if (misconceptionId === 'FRACTION_ADD_DENOMINATORS') {
      DOM.miniLessonTitle.textContent = 'Visualizing Fraction Sums with Common Denominators';
      DOM.visualModelViewport.innerHTML = `
        <div class="fraction-visual-container" style="width:100%; display:flex; flex-direction:column; gap:12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="width:80px; font-weight:700;">1/2 (3/6):</span>
            <div style="flex:1; height:24px; background:#1e293b; border-radius:4px; overflow:hidden; display:flex;">
              <div style="width:50%; background:#6366f1; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">1/2</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="width:80px; font-weight:700;">1/3 (2/6):</span>
            <div style="flex:1; height:24px; background:#1e293b; border-radius:4px; overflow:hidden; display:flex;">
              <div style="width:33.33%; background:#06b6d4; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">1/3</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="width:80px; font-weight:700; color:#10b981;">Sum (5/6):</span>
            <div style="flex:1; height:24px; background:#1e293b; border-radius:4px; overflow:hidden; display:flex;">
              <div style="width:83.33%; background:#10b981; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">5/6 (Correct)</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="width:80px; font-weight:700; color:#f43f5e;">Your (2/5):</span>
            <div style="flex:1; height:24px; background:#1e293b; border-radius:4px; overflow:hidden; display:flex;">
              <div style="width:40%; background:#f43f5e; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">2/5 (Smaller than 1/2 alone!)</div>
            </div>
          </div>
        </div>
      `;
    } else if (misconceptionId === 'NEG_SIGN_DISTRIBUTION') {
      DOM.miniLessonTitle.textContent = 'Visualizing Negative Distribution & Polarity Flip';
      DOM.visualModelViewport.innerHTML = `
        <div style="padding:14px; background:rgba(15,23,42,0.6); border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
          <div style="display:flex; justify-content:space-around; align-items:center; text-align:center; gap:12px;">
            <div style="padding:10px 16px; background:rgba(99,102,241,0.15); border:1px solid #6366f1; border-radius:6px;">
              <span style="font-size:0.75rem; color:#94a3b8; display:block;">First Term</span>
              <strong style="color:#818cf8;">-2 · x = -2x</strong>
            </div>
            <span style="font-size:1.4rem; color:#f59e0b;">+</span>
            <div style="padding:10px 16px; background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:6px;">
              <span style="font-size:0.75rem; color:#94a3b8; display:block;">Double Negative Inversion</span>
              <strong style="color:#34d399;">(-2) · (-4) = +8</strong>
            </div>
          </div>
          <div style="margin-top:12px; padding:8px 12px; background:rgba(244,63,94,0.12); border-left:3px solid #f43f5e; border-radius:4px; font-size:0.82rem; color:#fda4af;">
            ⚠️ Common Trap: Forgetting that multiplying two negative signs yields a POSITIVE (+8), not -8!
          </div>
        </div>
      `;
    } else if (misconceptionId === 'LIKE_TERMS_CONCAT') {
      DOM.miniLessonTitle.textContent = 'Visualizing Unlike Terms: Variables vs Constants';
      DOM.visualModelViewport.innerHTML = `
        <div style="padding:14px; background:rgba(15,23,42,0.6); border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
          <div style="display:flex; justify-content:center; align-items:center; gap:16px; margin-bottom:12px;">
            <div style="padding:8px 16px; background:rgba(59,130,246,0.15); border:1px solid #3b82f6; border-radius:6px; text-align:center;">
              <div style="font-size:1.1rem; font-weight:700; color:#60a5fa;">3x</div>
              <div style="font-size:0.72rem; color:#94a3b8;">3 Variable Units (📦 📦 📦)</div>
            </div>
            <span style="font-size:1.4rem; color:#94a3b8;">+</span>
            <div style="padding:8px 16px; background:rgba(168,85,247,0.15); border:1px solid #a855f7; border-radius:6px; text-align:center;">
              <div style="font-size:1.1rem; font-weight:700; color:#c084fc;">5</div>
              <div style="font-size:0.72rem; color:#94a3b8;">5 Constant Coins (🪙 🪙 🪙 🪙 🪙)</div>
            </div>
          </div>
          <div style="text-align:center; padding:8px; background:rgba(244,63,94,0.12); border-radius:6px; font-size:0.84rem; color:#fda4af;">
            🚫 <strong>3x + 5 ≠ 8x</strong>. You cannot combine variable boxes with constant coins!
          </div>
        </div>
      `;
    } else if (misconceptionId === 'EXPONENT_BASE_MULTIPLY') {
      DOM.miniLessonTitle.textContent = 'Visualizing Powers: Repeated Multiplication vs Linear Scaling';
      DOM.visualModelViewport.innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:12px;">
          <div style="padding:12px; background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; text-align:center;">
            <strong style="color:#34d399; font-size:1rem; display:block;">2³ (Power / Exponent)</strong>
            <div style="margin:8px 0; font-family:var(--font-mono); font-size:0.9rem; color:#e2e8f0;">2 × 2 × 2 = <strong style="color:#10b981; font-size:1.15rem;">8</strong></div>
            <span style="font-size:0.72rem; color:#94a3b8;">Exponential doubling across 3 dimensions</span>
          </div>
          <div style="padding:12px; background:rgba(244,63,94,0.15); border:1px solid #f43f5e; border-radius:8px; text-align:center;">
            <strong style="color:#fb7185; font-size:1rem; display:block;">2 × 3 (Multiplication)</strong>
            <div style="margin:8px 0; font-family:var(--font-mono); font-size:0.9rem; color:#e2e8f0;">2 + 2 + 2 = <strong style="color:#f43f5e; font-size:1.15rem;">6</strong></div>
            <span style="font-size:0.72rem; color:#94a3b8;">⚠️ What you calculated by mistake</span>
          </div>
        </div>
      `;
    } else {
      DOM.miniLessonTitle.textContent = 'Conceptual Review: Mathematical First Principles';
      DOM.visualModelViewport.innerHTML = `
        <div style="padding:16px; background:rgba(15,23,42,0.6); border-radius:8px; border:1px solid rgba(255,255,255,0.08); text-align:center;">
          <p style="color:var(--text-muted); font-size:0.9rem;">Review each line by checking equality balance: verify operations applied symmetrically to both left and right sides.</p>
        </div>
      `;
    }
  }

  function submitRepairAnswer() {
    const raw = (DOM.repairInputAnswer.value || '').trim();
    if (!raw) {
      showToast('Please type your corrected answer first.', 'error');
      return;
    }

    const studentAns = raw.toLowerCase().replace(/\s+/g, '');
    const sc = state.diagnostic.currentScenario || {};
    const activeDiag = state.diagnostic.activeDiagnosis || {};
    const expected = (activeDiag.expected_repair_answer || sc.expectedRepairAnswer || '4y+12').toLowerCase().replace(/\s+/g, '');

    let isCorrect = (studentAns === expected);
    if (!isCorrect) {
      if (expected.includes('4y+12') || expected === '4y+12') {
        isCorrect = ['4y+12', '12+4y', '4*y+12', '12+4*y', '4(y+3)'].includes(studentAns);
      } else if (expected === '7/12') {
        isCorrect = ['7/12', '0.583', '0.58'].includes(studentAns);
      } else if (expected === '-3y+15') {
        isCorrect = ['-3y+15', '15-3y', '-3*y+15', '15+-3y', '-3y+15'].includes(studentAns);
      } else if (expected === '4x+7') {
        isCorrect = ['4x+7', '7+4x', '4*x+7', '7+4*x'].includes(studentAns);
      } else if (expected === '27') {
        isCorrect = ['27', '3^3', '3*3*3'].includes(studentAns);
      } else if (expected === 'x=4' || expected === '4') {
        isCorrect = ['x=4', '4', 'x=4.0'].includes(studentAns);
      } else if (expected === 'x=3' || expected === '3') {
        isCorrect = ['x=3', '3'].includes(studentAns);
      } else if (expected === '2x+10') {
        isCorrect = ['2x+10', '10+2x'].includes(studentAns);
      }
    }

    DOM.repairSpinner.classList.remove('hidden');
    DOM.btnSubmitRepair.disabled = true;

    setTimeout(() => {
      DOM.repairSpinner.classList.add('hidden');
      DOM.btnSubmitRepair.disabled = false;

      if (isCorrect) {
        DOM.repairFeedbackBanner.className = 'repair-feedback-banner success';
        DOM.repairResultIcon.textContent = '🎉';
        DOM.repairResultHeading.textContent = 'Misconception Repaired!';
        DOM.repairResultDesc.textContent = 'Excellent work! You demonstrated complete conceptual mastery.';
        DOM.barDist.style.width = '100%';
        DOM.barDist.className = 'progress-bar-fill fill-emerald';
        DOM.chipDist.className = 'status-chip chip-success';
        DOM.chipDist.textContent = 'Mastered';
        DOM.masteryOverallScore.textContent = '94% Overall';
        launchCelebrationConfetti();
        showToast('Misconception repaired! Mastery updated.', 'success');
      } else {
        DOM.repairFeedbackBanner.className = 'repair-feedback-banner retry';
        DOM.repairResultIcon.textContent = '⚠️';
        DOM.repairResultHeading.textContent = 'Almost There — Review the Rule';
        DOM.repairResultDesc.textContent = 'Make sure to apply the operation to all terms inside the brackets.';
        showToast('Incorrect answer. Check hint and retry.', 'error');
      }

      DOM.repairFeedbackBanner.classList.remove('hidden');
    }, 280);
  }

  function renderDiagnosticHistory() {
    if (!DOM.recentDiagnosesList) return;
    const history = state.diagnostic.history;

    if (!history || history.length === 0) {
      DOM.recentDiagnosesList.innerHTML = `
        <div class="history-empty-state" style="text-align:center; padding:1.5rem; color:var(--text-muted); font-size:0.875rem;">
          No diagnoses recorded yet in this session. Run your first analysis above!
        </div>
      `;
      return;
    }

    let html = '';
    history.forEach((item, idx) => {
      let badgeClass = 'badge-class-uncertain';
      let badgeLabel = item.classification;
      if (item.classification === 'CORRECT') {
        badgeClass = 'badge-class-correct';
        badgeLabel = 'CORRECT';
      } else if (item.classification === 'PARTIAL') {
        badgeClass = 'badge-class-partial';
        badgeLabel = 'PARTIAL';
      } else if (item.classification === 'MISCONCEPTION') {
        badgeClass = 'badge-class-misconception';
        badgeLabel = 'MISCONCEPTION';
      } else if (item.classification === 'INCOMPLETE_OR_IRRELEVANT') {
        badgeClass = 'badge-class-incomplete';
        badgeLabel = 'INCOMPLETE';
      }

      const confPct = Math.round((item.confidence || 0.8) * 100);
      const previewText = (item.working || '').split('\n')[0] || 'No steps';

      html += `
        <div class="history-item" data-history-idx="${idx}">
          <div class="history-item-left">
            <div class="history-item-header">
              <span class="history-item-topic">${escapeHtml(item.topic || 'Diagnostic')}</span>
              <span class="history-item-badge ${badgeClass}">${escapeHtml(badgeLabel)}</span>
              <span class="badge badge-outline" style="font-size:0.7rem;">${confPct}% Conf</span>
            </div>
            <div class="history-item-preview">Working: ${escapeHtml(previewText)}</div>
          </div>
          <div class="history-item-right">
            <span class="history-item-time">${escapeHtml(item.time)}</span>
            <button type="button" class="history-item-restore-btn" data-history-idx="${idx}">Restore ↺</button>
          </div>
        </div>
      `;
    });

    DOM.recentDiagnosesList.innerHTML = html;

    DOM.recentDiagnosesList.querySelectorAll('.history-item').forEach(el => {
      el.addEventListener('click', (e) => {
        const idx = parseInt(el.getAttribute('data-history-idx'), 10);
        restoreDiagnosisFromHistory(idx);
      });
    });
  }

  function restoreDiagnosisFromHistory(idx) {
    const item = state.diagnostic.history[idx];
    if (!item) return;

    if (DOM.diagnosticTopicInput) DOM.diagnosticTopicInput.value = item.topic;
    if (DOM.diagnosticQuestionInput) DOM.diagnosticQuestionInput.value = item.question;
    DOM.workingStepsEditor.value = item.working;
    updateLineNumbers();

    state.diagnostic.activeDiagnosis = item.diag;
    renderDiagnosisResult(item.diag, item.working);
    showToast(`Restored diagnosis from ${item.time}`, 'success');

    DOM.workingStepsEditor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function clearDiagnosisHistory() {
    state.diagnostic.history = [];
    renderDiagnosticHistory();
    showToast('Diagnosis history cleared.', 'success');
  }

  function copyDiagnosisReport() {
    const diag = state.diagnostic.activeDiagnosis;
    if (!diag) {
      showToast('Run a diagnosis first before copying report.', 'error');
      return;
    }

    const topic = DOM.diagnosticTopicInput?.value || DOM.problemTitle?.textContent || 'Algebra';
    const question = DOM.diagnosticQuestionInput?.value || DOM.displayQuestion?.textContent || 'Problem';
    const working = DOM.workingStepsEditor?.value || '';

    const md = `# StudyForge Misconception Diagnostic Report
- **Date & Time**: ${new Date().toLocaleString()}
- **Topic**: ${topic}
- **Question**: ${question}
- **Classification**: ${diag.classification}
- **Confidence**: ${Math.round((diag.confidence || 0.85) * 100)}%
- **Identified Misconception / Status**: ${diag.misconception_name || diag.misconception_id}
- **First Wrong Step**: ${diag.first_wrong_step ? `Step ${diag.first_wrong_step}` : 'N/A'}
- **Evidence**: ${diag.evidence || 'N/A'}

## Student Working Steps:
\`\`\`
${working}
\`\`\`

## Explanation:
${diag.explanation}

## Correct Concept:
${diag.correct_concept || 'Standard mathematical properties applied.'}

## Socratic Hint:
${diag.hint || 'N/A'}

## Targeted Follow-Up Repair Challenge:
${diag.repair_question || 'N/A'}

---
*Generated by StudyForge AI Misconception Detection System*`;

    navigator.clipboard.writeText(md).then(() => {
      showToast('📋 Full diagnostic report copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Could not access clipboard.', 'error');
    });
  }

  function exportDiagnosisReport() {
    const diag = state.diagnostic.activeDiagnosis;
    if (!diag) {
      showToast('Run a diagnosis first before exporting report.', 'error');
      return;
    }

    const topic = (DOM.diagnosticTopicInput?.value || DOM.problemTitle?.textContent || 'diagnostic').replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const md = `# StudyForge Misconception Diagnostic Report\n\n- Generated: ${new Date().toISOString()}\n- Topic: ${DOM.diagnosticTopicInput?.value || ''}\n- Question: ${DOM.diagnosticQuestionInput?.value || ''}\n- Classification: ${diag.classification}\n- Confidence: ${diag.confidence}\n- Misconception ID: ${diag.misconception_id}\n- First Wrong Step: ${diag.first_wrong_step}\n- Evidence: ${diag.evidence}\n- Correct Concept: ${diag.correct_concept}\n\n## Working:\n${DOM.workingStepsEditor.value}\n\n## Explanation:\n${diag.explanation}\n\n## Repair Challenge:\n${diag.repair_question}\n`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `studyforge_diagnosis_${topic}_${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('💾 Diagnostic report downloaded!', 'success');
  }

  // =========================================================================
  // 10. MODULE 5: TEACHER CLASSROOM MISCONCEPTION MAP
  // =========================================================================

  function renderMisconceptionNetwork() {
    const svg = DOM.networkSvg;
    if (!svg) return;
    svg.innerHTML = '';

    const domainNodes = [
      { id: 'DOMAIN_ALG', label: 'Algebraic Expressions', x: 260, y: 220, r: 28, color: '#8b5cf6' },
      { id: 'DOMAIN_NUM', label: 'Fractions & Rationals', x: 580, y: 200, r: 26, color: '#06b6d4' },
      { id: 'DOMAIN_INT', label: 'Signed Arithmetic', x: 420, y: 380, r: 24, color: '#3b82f6' }
    ];

    const leafNodes = [
      { id: 'ALG_PARTIAL_DISTRIBUTION', domain: 'DOMAIN_ALG', label: 'Partial Distribution', x: 130, y: 110, count: state.classroom.misconceptionCounts.ALG_PARTIAL_DISTRIBUTION, status: 'critical', color: '#f43f5e' },
      { id: 'LIKE_TERMS_CONCAT', domain: 'DOMAIN_ALG', label: 'Combine Unlike Terms', x: 110, y: 290, count: state.classroom.misconceptionCounts.LIKE_TERMS_CONCAT, status: 'moderate', color: '#f59e0b' },
      { id: 'FRACTION_ADD_DENOMINATORS', domain: 'DOMAIN_NUM', label: 'Add Denominators', x: 720, y: 130, count: state.classroom.misconceptionCounts.FRACTION_ADD_DENOMINATORS, status: 'critical', color: '#f43f5e' },
      { id: 'NEG_SIGN_DISTRIBUTION', domain: 'DOMAIN_INT', label: 'Negative Sign Flip', x: 320, y: 450, count: state.classroom.misconceptionCounts.NEG_SIGN_DISTRIBUTION, status: 'moderate', color: '#f59e0b' },
      { id: 'EXPONENT_BASE_MULTIPLY', domain: 'DOMAIN_INT', label: 'Exponent Multiplication', x: 560, y: 440, count: state.classroom.misconceptionCounts.EXPONENT_BASE_MULTIPLY, status: 'mastered', color: '#10b981' }
    ];

    // Links
    leafNodes.forEach(leaf => {
      const parent = domainNodes.find(d => d.id === leaf.domain);
      if (!parent) return;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', parent.x);
      line.setAttribute('y1', parent.y);
      line.setAttribute('x2', leaf.x);
      line.setAttribute('y2', leaf.y);
      line.setAttribute('class', `graph-link ${leaf.status === 'critical' ? 'active-flow' : ''}`);
      svg.appendChild(line);
    });

    // Domain nodes
    domainNodes.forEach(node => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'graph-node-group');

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', node.x);
      circle.setAttribute('cy', node.y);
      circle.setAttribute('r', node.r);
      circle.setAttribute('fill', node.color);
      circle.setAttribute('fill-opacity', '0.2');
      circle.setAttribute('stroke', node.color);
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute('class', 'node-core');

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y + 4);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#ffffff');
      text.setAttribute('font-size', '11');
      text.setAttribute('font-weight', '700');
      text.textContent = node.label;

      g.appendChild(circle);
      g.appendChild(text);
      svg.appendChild(g);
    });

    // Misconception leaves
    leafNodes.forEach(leaf => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'graph-node-group');
      const radius = 18 + (leaf.count * 1.5);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', leaf.x);
      circle.setAttribute('cy', leaf.y);
      circle.setAttribute('r', radius);
      circle.setAttribute('fill', leaf.color);
      circle.setAttribute('fill-opacity', '0.22');
      circle.setAttribute('stroke', leaf.color);
      circle.setAttribute('stroke-width', state.classroom.selectedNodeId === leaf.id ? '3.5' : '2');
      circle.setAttribute('class', 'node-core');

      const textCount = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textCount.setAttribute('x', leaf.x);
      textCount.setAttribute('y', leaf.y + 5);
      textCount.setAttribute('text-anchor', 'middle');
      textCount.setAttribute('fill', '#ffffff');
      textCount.setAttribute('font-size', '13');
      textCount.setAttribute('font-weight', '800');
      textCount.textContent = leaf.count;

      const textLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textLabel.setAttribute('x', leaf.x);
      textLabel.setAttribute('y', leaf.y + radius + 15);
      textLabel.setAttribute('text-anchor', 'middle');
      textLabel.setAttribute('fill', '#cbd5e1');
      textLabel.setAttribute('font-size', '11');
      textLabel.setAttribute('font-weight', '600');
      textLabel.textContent = leaf.label;

      g.appendChild(circle);
      g.appendChild(textCount);
      g.appendChild(textLabel);

      g.addEventListener('click', () => {
        selectMisconceptionNode(leaf.id);
      });

      svg.appendChild(g);
    });
  }

  function selectMisconceptionNode(nodeId) {
    state.classroom.selectedNodeId = nodeId;
    const taxon = MISCONCEPTION_LIBRARY[nodeId];
    if (!taxon) return;

    const count = state.classroom.misconceptionCounts[nodeId] || 0;
    const pct = Math.round((count / state.classroom.totalStudents) * 100);

    DOM.inspectNodeBadge.textContent = taxon.id;
    DOM.inspectNodeTitle.textContent = taxon.label;
    DOM.inspectNodeFreq.textContent = `${count} Students (${pct}%)`;
    DOM.inspectNodeDesc.innerHTML = taxon.description;

    const affected = state.classroom.students.filter(s => s.misconception === nodeId);
    DOM.affectedStudentsContainer.innerHTML = '';
    affected.forEach(st => {
      const btn = document.createElement('button');
      btn.className = 'student-tag-btn';
      btn.innerHTML = `${st.name} <span class="text-xs text-muted">(Step ${st.step})</span>`;
      DOM.affectedStudentsContainer.appendChild(btn);
    });

    renderMisconceptionNetwork();
  }

  function renderInterventionCards() {
    const grid = DOM.interventionsGrid;
    if (!grid) return;
    grid.innerHTML = '';

    const interventions = [
      {
        id: 'ALG_PARTIAL_DISTRIBUTION',
        title: 'Partial Distribution: The Dual-Room Area Model',
        pct: '43% Class Affected',
        problem: 'Students distribute only to the variable term, leaving the constant unmultiplied.',
        action: 'Draw a 2-room rectangle: height 3, width x + 2. Compute each room separately (3x and 6).',
        visual: 'Visual Area Model: Rectangle split into 3*x and 3*2.',
        followUp: 'If a rectangle has height 5 and length (y + 4), what are the two areas?'
      },
      {
        id: 'FRACTION_ADD_DENOMINATORS',
        title: 'Direct Denominators: The Pizza Slice Paradox',
        pct: '29% Class Affected',
        problem: 'Adding denominators directly causes the sum to be smaller than the largest addend.',
        action: 'Compare 1/2 of a pizza + 1/3 of a pizza vs 2/5 (which is 0.40 < 0.50).',
        visual: 'Fraction Bar Overlay: 1/2 + 1/3 = 5/6 vs 2/5.',
        followUp: 'Is 1/3 + 1/4 greater or less than 1/3?'
      }
    ];

    interventions.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card glass-card intervention-card';
      card.innerHTML = `
        <div class="intervention-top">
          <div class="intervention-title-box">
            <span class="badge badge-accent">${item.id}</span>
            <h3>${item.title}</h3>
          </div>
          <span class="intervention-pct">${item.pct}</span>
        </div>
        <div class="intervention-item">
          <span class="intervention-label">1. Cognitive Root Cause:</span>
          <p class="intervention-body">${item.problem}</p>
        </div>
        <div class="intervention-item">
          <span class="intervention-label">2. 5-Minute Classroom Activity:</span>
          <p class="intervention-body">${item.action}</p>
        </div>
        <div class="intervention-item">
          <span class="intervention-label">3. Suggested Visual Aid:</span>
          <p class="intervention-body"><code>${item.visual}</code></p>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderClusteringView() {
    const container = DOM.clustersContainer;
    if (!container) return;
    container.innerHTML = `
      <div class="card glass-card cluster-card">
        <div class="cluster-header">
          <span class="badge badge-rose">ALG_PARTIAL_DISTRIBUTION</span>
          <h3>Cluster A: Partial Distribution (12 Students)</h3>
        </div>
        <p class="cluster-reason">Students multiplied the coefficient only by x, leaving 2 unmultiplied.</p>
      </div>
      <div class="card glass-card cluster-card">
        <div class="cluster-header">
          <span class="badge badge-success">NONE</span>
          <h3>Cluster B: Correct Solutions (9 Students)</h3>
        </div>
        <p class="cluster-reason">Properly distributed 3 to both terms and balanced equation.</p>
      </div>
    `;
  }

  function renderBeforeAfterAnalytics() {
    const container = DOM.shiftChartContainer;
    if (!container) return;
    container.innerHTML = `
      <div class="shift-row">
        <div class="shift-labels">
          <span>Partial Distribution [3(x+2)]</span>
          <span class="text-emerald">↓ -83% Reduction</span>
        </div>
        <div class="shift-bars-dual">
          <div class="shift-bar-wrap">
            <span class="shift-tag">Pre:</span>
            <div class="shift-bar-outer"><div class="shift-bar-pre" style="width: 85%;"></div></div>
            <span>12 students</span>
          </div>
          <div class="shift-bar-wrap">
            <span class="shift-tag">Post:</span>
            <div class="shift-bar-outer"><div class="shift-bar-post" style="width: 15%;"></div></div>
            <span>2 students</span>
          </div>
        </div>
      </div>
    `;
  }

  function simulateClassroomData() {
    state.classroom.totalStudents = 32;
    state.classroom.misconceptionCounts = {
      ALG_PARTIAL_DISTRIBUTION: 14,
      FRACTION_ADD_DENOMINATORS: 9,
      NEG_SIGN_DISTRIBUTION: 6,
      LIKE_TERMS_CONCAT: 4,
      EXPONENT_BASE_MULTIPLY: 2
    };

    renderMisconceptionNetwork();
    renderInterventionCards();
    renderClusteringView();
    renderBeforeAfterAnalytics();
    showToast('⚡ Simulated 32 student submissions across 5 topics.', 'success');
  }

  // =========================================================================
  // 11. MODULE 6: PROMPT ENGINEERING LABORATORY
  // =========================================================================

  function initPromptLab() {
    const list = DOM.promptsNavList;
    if (!list) return;
    list.innerHTML = '';

    SYSTEM_PROMPTS.forEach((p, idx) => {
      const item = document.createElement('button');
      item.className = `prompt-nav-item ${idx === state.activePromptLabIndex ? 'active' : ''}`;
      item.innerHTML = `
        <span class="p-num">Prompt #${p.num}</span>
        <span class="p-name">${p.name}</span>
        <span class="p-badge-sub">${p.tag}</span>
      `;
      item.addEventListener('click', () => {
        selectPromptLabItem(idx);
      });
      list.appendChild(item);
    });

    renderPromptDetail(state.activePromptLabIndex);
  }

  function selectPromptLabItem(idx) {
    state.activePromptLabIndex = idx;
    DOM.promptsNavList.querySelectorAll('.prompt-nav-item').forEach((it, i) => {
      it.classList.toggle('active', i === idx);
    });
    renderPromptDetail(idx);
  }

  function renderPromptDetail(idx) {
    const p = SYSTEM_PROMPTS[idx];
    if (!p) return;
    DOM.promptActiveBadge.textContent = `Prompt #${p.num} • ${p.tag}`;
    DOM.promptActiveTitle.textContent = p.name;
    DOM.promptActiveDesc.textContent = p.desc;
    DOM.promptCodeView.textContent = p.template;

    DOM.promptVarsContainer.innerHTML = '';
    if (p.vars) {
      Object.keys(p.vars).forEach(k => {
        const field = document.createElement('div');
        field.className = 'prompt-var-field';
        field.innerHTML = `
          <label class="prompt-var-label" for="var-${k}">{${k}}:</label>
          <input type="text" id="var-${k}" class="prompt-var-input" value="${escapeHtml(p.vars[k])}">
        `;
        DOM.promptVarsContainer.appendChild(field);
      });
    }

    DOM.promptOutputView.textContent = JSON.stringify(p.sampleOutput, null, 2);
  }

  function runPromptTest() {
    const p = SYSTEM_PROMPTS[state.activePromptLabIndex];
    DOM.promptOutputView.textContent = 'Processing prompt via reasoning model...';

    setTimeout(() => {
      DOM.promptOutputView.textContent = JSON.stringify(p.sampleOutput, null, 2);
      showToast(`Prompt #${p.num} executed. Valid JSON returned.`, 'success');
    }, 250);
  }

  // =========================================================================
  // 12. GLOBAL UTILITIES, CONFETTI & VIEW SWITCHING
  // =========================================================================

  function switchView(targetViewId) {
    state.activeView = targetViewId;

    DOM.navTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-target') === targetViewId);
    });

    DOM.viewPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === targetViewId);
    });

    if (targetViewId === 'teacher-view') {
      renderMisconceptionNetwork();
      renderInterventionCards();
      renderClusteringView();
      renderBeforeAfterAnalytics();
    } else if (targetViewId === 'prompts-view') {
      initPromptLab();
    }
  }

  function setLoadingState(loading) {
    DOM.learnSpinner.classList.toggle('hidden', !loading);
    DOM.btnGenerateExplanation.disabled = loading;
  }

  function showToast(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✓' : '⚠️'}</span><span>${msg}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function escapeHtml(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function launchCelebrationConfetti() {
    const canvas = DOM.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#06b6d4', '#f43f5e', '#a855f7'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.45,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let animationId;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.vRot;
        p.opacity -= 0.012;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      if (alive) animationId = requestAnimationFrame(render);
      else cancelAnimationFrame(animationId);
    }
    render();
  }

  // =========================================================================
  // 13. INITIALIZATION & EVENT LISTENERS
  // =========================================================================

  const SUBJECT_PILLS = {
    cs: [
      { topic: 'Dynamic Programming (Memoization vs Tabulation)', label: 'Dynamic Programming', q: 'What is the difference between top-down memoization and bottom-up tabulation? Explain with the Fibonacci sequence.' },
      { topic: 'Database Normalization (1NF, 2NF, 3NF, BCNF)', label: 'DB Normalization', q: 'Explain 1NF, 2NF, and 3NF with an example student database table and explain why transitive dependencies are eliminated in 3NF.' },
      { topic: 'Dijkstra vs A* Shortest Path Algorithms', label: 'Shortest Path Graphs', q: 'How does Dijkstra algorithm differ from A* search algorithm? What role does the heuristic function play in graph exploration?' },
      { topic: 'Deadlock Detection & Prevention in OS', label: 'OS Deadlocks', q: 'Explain the 4 necessary conditions for deadlock (Coffman conditions) and how bankers algorithm prevents deadlock.' }
    ],
    math: [
      { topic: 'Eigenvalues and Eigenvectors', label: 'Eigenvalues & Vectors', q: 'How do you calculate the eigenvalues and eigenvectors of a 2x2 matrix A = [[4, 1], [2, 3]]? Show the characteristic equation.' },
      { topic: 'Fourier Series & Frequency Transform', label: 'Fourier Series', q: 'What is the physical meaning of Fourier series coefficients a_n and b_n? How do they decompose periodic signals?' },
      { topic: 'Multivariable Calculus: Lagrange Multipliers', label: 'Lagrange Multipliers', q: 'How do Lagrange multipliers optimize a function f(x, y) subject to a constraint g(x, y) = c? Explain gradient alignment.' }
    ],
    physics: [
      { topic: 'Thermodynamics: Carnot Cycle & Efficiency', label: 'Carnot Cycle', q: 'Derive the efficiency of a Carnot heat engine operating between temperatures Th and Tc. Why cannot any real engine exceed Carnot efficiency?' },
      { topic: 'Quantum Mechanics: Wave-Particle Duality', label: 'Wave-Particle Duality', q: 'Explain de Broglie wavelength lambda = h / p and the physical interpretation of the double slit experiment with electrons.' },
      { topic: 'Electromagnetism: Maxwell Equations', label: 'Maxwell Equations', q: 'Explain the physical significance of Gauss law, Faraday law, and Ampere-Maxwell law in vacuum.' }
    ],
    chem: [
      { topic: 'Chemical Kinetics: Arrhenius Equation & Activation Energy', label: 'Arrhenius Equation', q: 'How does temperature influence reaction rates according to the Arrhenius equation k = A e^(-Ea / RT)? How do you calculate Ea from an experimental plot?' },
      { topic: 'Thermodynamics: Gibbs Free Energy (ΔG = ΔH - TΔS)', label: 'Gibbs Free Energy', q: 'Explain how enthalpy (delta H) and entropy (delta S) determine reaction spontaneity at different temperatures.' },
      { topic: 'Electrochemistry: Nernst Equation & Galvanic Cells', label: 'Nernst Equation', q: 'Derive the Nernst equation for non-standard cell potentials and explain how ion concentration affects voltage.' }
    ],
    business: [
      { topic: 'Net Present Value (NPV) vs IRR', label: 'NPV vs IRR', q: 'Compare Net Present Value (NPV) and Internal Rate of Return (IRR) for capital budgeting decisions. When might they conflict?' },
      { topic: 'Porter Five Forces Framework', label: 'Porters 5 Forces', q: 'Explain how Porters Five Forces analyze industry profitability and competitive intensity with a tech industry example.' },
      { topic: 'Capital Asset Pricing Model (CAPM) & Beta', label: 'CAPM & Beta', q: 'How does CAPM calculate the expected return of an asset based on systematic risk (Beta) and market risk premium?' }
    ],
    other: [
      { topic: 'Scientific Method & Hypothesis Falsification', label: 'Scientific Method', q: 'Explain Karl Poppers criterion of falsifiability and how hypothesis testing differs from inductive proof.' },
      { topic: 'Statistical Significance & p-values', label: 'p-values & Alpha', q: 'What does a p-value < 0.05 actually mean in hypothesis testing? Differentiate Type I and Type II errors.' }
    ]
  };

  function updateTopicPillsForSubject(subj) {
    const container = document.getElementById('quick-topic-pills');
    if (!container) return;
    const pills = SUBJECT_PILLS[subj] || SUBJECT_PILLS.cs;
    let html = '<span class="pills-title">Popular:</span>';
    pills.forEach(p => {
      html += `<button type="button" class="topic-pill" data-subj="${subj}" data-topic="${escapeHtml(p.topic)}" data-q="${escapeHtml(p.q)}">${escapeHtml(p.label)}</button>`;
    });
    container.innerHTML = html;
  }

  function initEventListeners() {
    // Nav tabs
    DOM.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        switchView(target);
      });
    });

    // Language selector
    DOM.langSelect.addEventListener('change', (e) => {
      state.language = e.target.value;
      showToast(`Language set to ${e.target.options[e.target.selectedIndex].text}`, 'success');
      generateExplanation();
    });

    // Learn & Solve
    DOM.btnGenerateExplanation.addEventListener('click', generateExplanation);
    DOM.btnLoadSample.addEventListener('click', loadNextSample);

    // Subject select change listener
    DOM.subjectSelect.addEventListener('change', () => {
      const subj = DOM.subjectSelect.value;
      updateTopicPillsForSubject(subj);
      const presets = STUDYFORGE_CATALOG[subj];
      if (presets && presets.length > 0) {
        DOM.topicInput.value = presets[0].topic;
        DOM.questionInput.value = presets[0].question;
      }
      generateExplanation();
    });

    // Style radio cards: instant regenerate on selection
    DOM.styleRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        generateExplanation();
      });
    });

    // Level radio chips: instant regenerate on selection
    DOM.levelRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        generateExplanation();
      });
    });

    // Quick topic pills click via container delegation
    const pillsContainer = document.getElementById('quick-topic-pills');
    if (pillsContainer) {
      pillsContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.topic-pill');
        if (!pill) return;
        DOM.subjectSelect.value = pill.getAttribute('data-subj') || DOM.subjectSelect.value;
        DOM.topicInput.value = pill.getAttribute('data-topic');
        DOM.questionInput.value = pill.getAttribute('data-q');
        generateExplanation();
      });
    }

    DOM.btnCopyExplanation.addEventListener('click', () => {
      navigator.clipboard.writeText(DOM.explanationBodyContent.innerText);
      showToast('Explanation copied to clipboard!', 'success');
    });

    DOM.btnGotoQuiz.addEventListener('click', () => {
      switchView('quiz-view');
    });

    DOM.btnGotoRevision.addEventListener('click', () => {
      switchView('revision-view');
    });

    DOM.btnSubmitFollowup.addEventListener('click', handleFollowupQuestion);
    DOM.followupInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleFollowupQuestion();
    });

    DOM.btnRevealSolution.addEventListener('click', () => {
      DOM.hintsSocraticBox.classList.add('hidden');
      const preset = findMatchingPreset(DOM.subjectSelect.value, DOM.topicInput.value);
      if (preset) {
        DOM.explanationBodyContent.innerHTML = formatMarkdownToHTML(preset.step_by_step);
      }
    });

    // Quiz
    DOM.btnSubmitQuiz.addEventListener('click', submitQuiz);
    DOM.btnRetryQuiz.addEventListener('click', retryQuiz);
    DOM.btnGenerateNewQuiz.addEventListener('click', () => {
      prepareQuizForTopic(findMatchingPreset(DOM.subjectSelect.value, DOM.topicInput.value));
      showToast('New practice quiz ready!', 'success');
    });

    // Revision Notes
    DOM.btnCopyAllNotes.addEventListener('click', copyAllNotesToClipboard);

    // Math Diagnostic
    if (DOM.diagScenarioSelect) {
      DOM.diagScenarioSelect.addEventListener('change', (e) => {
        loadDiagnosticScenario(e.target.value);
      });
    }
    if (DOM.btnSubmitDiagnosis) DOM.btnSubmitDiagnosis.addEventListener('click', runStudentDiagnosis);
    if (DOM.btnSubmitRepair) DOM.btnSubmitRepair.addEventListener('click', submitRepairAnswer);
    if (DOM.btnToggleExpected) {
      DOM.btnToggleExpected.addEventListener('click', () => {
        DOM.expectedMethodDrawer.classList.toggle('hidden');
      });
    }
    if (DOM.btnClearWorking) {
      DOM.btnClearWorking.addEventListener('click', () => {
        DOM.workingStepsEditor.value = '';
        updateLineNumbers();
      });
    }
    if (DOM.workingStepsEditor) DOM.workingStepsEditor.addEventListener('input', updateLineNumbers);
    if (DOM.hintToggleBtn) {
      DOM.hintToggleBtn.addEventListener('click', () => {
        DOM.hintContentBody.classList.toggle('hidden');
      });
    }
    if (DOM.repairInputAnswer) {
      DOM.repairInputAnswer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitRepairAnswer();
      });
    }
    if (DOM.btnCopyDiagnosis) DOM.btnCopyDiagnosis.addEventListener('click', copyDiagnosisReport);
    if (DOM.btnExportReport) DOM.btnExportReport.addEventListener('click', exportDiagnosisReport);
    if (DOM.btnClearDiagHistory) DOM.btnClearDiagHistory.addEventListener('click', clearDiagnosisHistory);

    // Teacher View
    if (DOM.btnSimulateClass) DOM.btnSimulateClass.addEventListener('click', simulateClassroomData);
    DOM.teacherSubtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subtab = btn.getAttribute('data-subtab');
        DOM.teacherSubtabBtns.forEach(b => b.classList.remove('active'));
        DOM.teacherSubtabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`subtab-${subtab}`).classList.add('active');
      });
    });

    // Prompt Lab
    if (DOM.btnRunPromptTest) DOM.btnRunPromptTest.addEventListener('click', runPromptTest);

    // Settings Modal
    DOM.btnOpenSettings.addEventListener('click', () => {
      DOM.settingGeminiKey.value = state.apiSettings.geminiKey;
      DOM.settingsModal.classList.remove('hidden');
    });

    DOM.btnCloseSettings.addEventListener('click', () => {
      DOM.settingsModal.classList.add('hidden');
    });

    DOM.settingsModal.addEventListener('click', (e) => {
      if (e.target === DOM.settingsModal) DOM.settingsModal.classList.add('hidden');
    });

    DOM.btnSaveSettings.addEventListener('click', () => {
      state.apiSettings.geminiKey = DOM.settingGeminiKey.value.trim();
      localStorage.setItem('studyforge_gemini_key', state.apiSettings.geminiKey);
      DOM.settingsModal.classList.add('hidden');
      showToast('AI settings saved successfully!', 'success');
    });

    DOM.btnResetSettings.addEventListener('click', () => {
      state.apiSettings.geminiKey = '';
      DOM.settingGeminiKey.value = '';
      localStorage.removeItem('studyforge_gemini_key');
      showToast('Reset to built-in offline engine.', 'success');
    });
  }

  function init() {
    initEventListeners();
    updateLineNumbers();
    loadDiagnosticScenario('partial_dist');
    initPromptLab();
    generateExplanation();
    console.log('StudyForge: All modules connected and initialized.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
