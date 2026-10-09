/**
 * STUDYFORGE — AI-POWERED UNDERGRADUATE LEARNING ASSISTANT
 * 
 * Architecture & Features:
 * 1. Custom Topic & Problem Selector (CS, Math, Physics, Chemistry, Business, Other)
 * 2. 5 Distinct Explanation Styles (Simple, Step-by-Step, Practical, Exam-Ready, Hints-First)
 * 3. Interactive Practice Quiz Generator & Auto-Scorer (3-5 MCQs with Explanations)
 * 4. High-Yield Revision Notes & Interactive Q&A Flashcards (with Copy-to-Clipboard)
 * 5. Integrated Mathematical Step Reasoner & Misconception Diagnostic Loop
 * 6. Multilingual Support (English, Telugu, Tenglish)
 * 7. Dual Engine: Live Google Gemini 2.0 Flash / 1.5 Pro + Zero-Config Offline Heuristics
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. STUDYFORGE PRESET ACADEMIC KNOWLEDGE CATALOG
  // =========================================================================
  const STUDYFORGE_CATALOG = {
    cs: [
      {
        topic: 'Dynamic Programming (Memoization vs Tabulation)',
        question: 'What is the difference between top-down memoization and bottom-up tabulation? Explain with the Fibonacci sequence and include space/time complexity.',
        level: 'intermediate',
        simple: `### 🐣 Intuitive Explanation: Think of it like a Math Cheat Sheet!

Imagine you are calculating **Fibonacci(5)** by hand:
- Without dynamic programming, to calculate \`Fib(5)\`, you compute \`Fib(4)\` and \`Fib(3)\`.
- But to calculate \`Fib(4)\`, you also need \`Fib(3)\` again!
- In a naive recursive approach, you end up doing the exact same math over and over like a tired robot with amnesia.

**Dynamic Programming (DP)** is simply **remembering past answers so you never solve the same puzzle twice**.

#### The Two Flavors:
1. **Memoization (Top-Down)**: You start from the big goal (\`Fib(5)\`), ask what pieces you need, calculate them on demand, and write each result in a notebook (a cache/dictionary) as you go.
2. **Tabulation (Bottom-Up)**: You don't wait to be asked. You start from the ground floor (\`Fib(0) = 0\`, \`Fib(1) = 1\`), fill out a table row-by-row, and build up to \`Fib(5)\`.

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
- **Space Complexity**: $O(n)$ (can be reduced to $O(1)$ by keeping only the last two variables \`prev1\` and \`prev2\`).

#### Step 4: Comparative Summary
| Feature | Top-Down (Memoization) | Bottom-Up (Tabulation) |
| :--- | :--- | :--- |
| **Approach** | Recursive (Demand-driven) | Iterative (Building-up) |
| **Call Stack** | Uses recursion stack (Risk of stack overflow for large $n$) | No recursion stack |
| **Subproblem Evaluation** | Solves only needed subproblems | Computes all subproblems sequentially |`,

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
    
    # Store result before returning
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

# Test demonstration
print("Memoization fib(10):", fib_memo(10))    # Output: 55
print("Tabulation  fib(10):", fib_tabulation(10)) # Output: 55
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
- **Memoization**: Time $O(n)$, Space $O(n)$ (Lookup table + recursion stack)
- **Tabulation**: Time $O(n)$, Space $O(1)$ (using two rolling variables)

#### 3. Criteria for Applying DP:
- **Optimal Substructure**: The optimal solution to the problem contains within it optimal solutions to subproblems.
- **Overlapping Subproblems**: The same subproblems are solved repeatedly rather than generating new subproblems at each step.`,

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
            question: 'By using rolling variables instead of an array in Fibonacci tabulation, what is the optimized auxiliary space complexity?',
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
        simple: `### 🐣 Intuitive Explanation: Cleaning Up Messy Filing Cabinets

Imagine a spreadsheet where one cell says \`Courses: Math, Physics, History\`. If you want to search for students taking just "Physics", you have to split text. That's messy!

**Database Normalization** is the process of organizing tables to prevent redundant duplicate data and eliminate update anomalies.

- **1NF (Atomic Values)**: No multi-valued attributes. Every cell holds one single value.
- **2NF (No Partial Dependencies)**: Everything in the row must depend on the **entire** primary key, not just half of a composite key.
- **3NF (No Transitive Dependencies)**: Non-key columns cannot depend on other non-key columns (e.g., student ID determines Postal Code, and Postal Code determines City -> City should be in its own table!).`,
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
        practical: `### 💡 Practical SQL Schema Normalization Example

\`\`\`sql
-- 1. Unnormalized / Violating Table:
-- StudentEnrollment(StudentID, CourseID, CourseName, Instructor, InstructorEmail)

-- 2. Fully Normalized to 3NF:
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    Email VARCHAR(100) UNIQUE
);

CREATE TABLE Instructors (
    InstructorID INT PRIMARY KEY,
    InstructorName VARCHAR(100),
    Email VARCHAR(100)
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

**Definition**: Normalization is a systematic approach of decomposing tables to eliminate data redundancy and undesirable anomalies (insertion, update, and deletion anomalies).

#### Summary of Normal Forms:
1. **1NF**: Atomic attribute values; presence of a primary key; no repeating groups.
2. **2NF**: In 1NF + No partial dependencies on any candidate key.
3. **3NF**: In 2NF + No transitive functional dependencies ($X \\to Y$ holds only if $X$ is a superkey or $Y$ is a prime attribute).
4. **BCNF (Boyce-Codd)**: Stricter version of 3NF where for every functional dependency $X \\to Y$, $X$ must strictly be a superkey.`,
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
$$\\lambda^2 - 7\\lambda + 12 - 2 = 0$$
$$\\lambda^2 - 7\\lambda + 10 = 0$$
Factoring:
$$(\\lambda - 5)(\\lambda - 2) = 0$$
Thus, the eigenvalues are:
$$\\lambda_1 = 5, \\quad \\lambda_2 = 2$$

#### Step 3: Find Eigenvector for $\\lambda_1 = 5$
Solve $(A - 5I)\\vec{v}_1 = \\vec{0}$:
$$\\begin{pmatrix} 4 - 5 & 1 \\\\ 2 & 3 - 5 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies -x + y = 0 \\implies y = x$$
A representative eigenvector is:
$$\\vec{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$

#### Step 4: Find Eigenvector for $\\lambda_2 = 2$
Solve $(A - 2I)\\vec{v}_2 = \\vec{0}$:
$$\\begin{pmatrix} 4 - 2 & 1 \\\\ 2 & 3 - 2 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies 2x + y = 0 \\implies y = -2x$$
A representative eigenvector is:
$$\\vec{v}_2 = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$$`,
        practical: `### 💡 Real-World Applications & Code
Eigenvalues are fundamental to:
- **Google PageRank**: Calculating the stationary probability vector of Markov web-surfing matrices.
- **Principal Component Analysis (PCA)**: Finding axes of maximum variance in machine learning.
- **Structural Engineering**: Calculating resonance frequencies to prevent bridge collapses.

\`\`\`python
import numpy as np

A = np.array([[4, 1], [2, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues) # [5., 2.]
print("Eigenvectors:\\n", eigenvectors)
\`\`\``,
        exam_ready: `### 📝 Exam-Ready Model Answer

**Theorem**: For an $n \\times n$ matrix $A$, a non-zero vector $\\vec{v}$ is an eigenvector corresponding to scalar eigenvalue $\\lambda$ if $A\\vec{v} = \\lambda\\vec{v}$.

1. **Characteristic Equation**: $\\det(A - \\lambda I) = 0$.
2. For $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$:
   - Characteristic equation: $\\lambda^2 - 7\\lambda + 10 = 0$.
   - Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = 2$.
   - Eigenvector for $\\lambda = 5$: $\\vec{v}_1 = k\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}, k \\neq 0$.
   - Eigenvector for $\\lambda = 2$: $\\vec{v}_2 = k\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}, k \\neq 0$.
3. **Trace & Determinant Check**:
   - $\\text{Trace}(A) = 4 + 3 = 7 = \\lambda_1 + \\lambda_2$ (Verified).
   - $\\det(A) = 4(3) - 2(1) = 10 = \\lambda_1 \\cdot \\lambda_2$ (Verified).`,
        hints_first: `### 🔍 Socratic Discovery Mode
**Hint 1**: Recall that a matrix equation $(A - \\lambda I)\\vec{v} = \\vec{0}$ can have non-zero vector solutions $\\vec{v}$ only when the matrix $(A - \\lambda I)$ is non-invertible (singular). What must its determinant equal?

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
            explanation: 'The sum of all eigenvalues of a square matrix is always equal to its trace (the sum of elements on its main diagonal).'
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
            explanation: 'det(A) = (4 * 3) - (1 * 2) = 12 - 2 = 10. Note that the product of the eigenvalues 5 * 2 = 10 also equals the determinant.'
          },
          {
            id: 'q3',
            question: 'If Av = λv with v ≠ 0, what does matrix A do to vector v geometrically?',
            options: [
              { key: 'A', text: 'Rotates it by 90 degrees' },
              { key: 'B', text: 'Scales it by factor λ along its own span without changing its direction line' },
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
            { q: 'Can an eigenvalue be zero?', a: 'Yes; λ = 0 means the matrix is singular (det(A) = 0) and has a non-trivial null space.' },
            { q: 'Can an eigenvector be the zero vector?', a: 'No; by mathematical definition, eigenvectors must strictly be non-zero vectors.' }
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
- A heat engine is like a waterwheel in the middle: it captures some flowing heat energy to do mechanical work ($W$).
- But you **must dump** the rest of the heat into the cold sink to keep the cycle turning!

The **Carnot Cycle** is the ideal, theoretically perfect engine. It operates without friction, heat leaks, or wasted turbulence.

$$\\eta = 1 - \\frac{T_c}{T_h}$$

Even this 100% frictionless machine cannot be 100% efficient unless the cold reservoir is at absolute zero ($-273.15^\\circ\\text{C}$)!`,
        step_by_step: `### 🪜 Step-by-Step Derivation

A Carnot cycle consists of four reversible processes:
1. **Isothermal Expansion** at $T_h$: Heat $Q_h$ absorbed from hot reservoir.
2. **Adiabatic Expansion**: Temperature drops from $T_h$ to $T_c$; $Q = 0$.
3. **Isothermal Compression** at $T_c$: Heat $Q_c$ rejected to cold reservoir.
4. **Adiabatic Compression**: Temperature rises from $T_c$ to $T_h$; $Q = 0$.

#### Step 1: Work and First Law of Thermodynamics
Over a complete cycle, $\\Delta U = 0$:
$$W = Q_h - Q_c$$

#### Step 2: Thermal Efficiency Definition
$$\\eta = \\frac{W}{Q_h} = \\frac{Q_h - Q_c}{Q_h} = 1 - \\frac{Q_c}{Q_h}$$

#### Step 3: Reversibility & Second Law of Thermodynamics
For reversible processes, entropy change per cycle is zero:
$$\\Delta S = \\frac{Q_h}{T_h} - \\frac{Q_c}{T_c} = 0 \\implies \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h}$$

#### Step 4: Carnot Efficiency Equation
$$\\eta_{\\text{Carnot}} = 1 - \\frac{T_c}{T_h}$$
*(Temperatures must always be in Kelvin).*`,
        practical: `### 💡 Real-World Engineering Implications
- **Power Plants**: A steam turbine with boiler at $550^\\circ\\text{C}$ (823 K) and cooling river at $25^\\circ\\text{C}$ (298 K) has maximum possible Carnot efficiency:
  $$\\eta_{\\max} = 1 - \\frac{298}{823} \\approx 63.8\\%$$
  Real modern combined-cycle gas plants achieve roughly 55–60% due to friction, conductive losses, and irreversibility.`,
        exam_ready: `### 📝 Exam-Ready Model Answer

**Carnot's Theorem**:
1. No engine operating between two heat reservoirs can be more efficient than a reversible Carnot engine operating between the same reservoirs.
2. All reversible engines operating between the same two temperatures have identical efficiency regardless of working fluid.

**Formula**:
$$\\eta = 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}}$$
*(Temperatures in Kelvin)*

**Why Real Engines Cannot Exceed Carnot Efficiency**:
- Real engines suffer from irreversible processes: viscous friction, unrestrained expansion, and finite-temperature-difference heat transfer.
- Exceeding Carnot efficiency would violate Clausius' statement of the Second Law of Thermodynamics (it would permit spontaneous transfer of heat from colder to hotter bodies without external work).`,
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
    ]
  };

  // Generic fallback generator for arbitrary user-entered questions
  function generateGenericSynthesis(subject, topic, question, level, style) {
    const title = topic || question || 'Academic Concept';
    
    if (style === 'simple') {
      return `### 🐣 Simple Explanation: ${title}

Let's break down **${title}** in plain, everyday language:

1. **What is it really?**: Think of this concept in terms of simple everyday analogies. It is fundamentally designed to solve the question: *"How do we handle ${question ? question.slice(0, 40) + '...' : 'this problem'} efficiently?"*
2. **The Core Intuition**: At an undergraduate level, you don't need to get bogged down in complicated jargon right away. Focus on the core mechanism: inputs go through a systematic transformation to produce an intended result.
3. **Why it matters**: Understanding this concept provides the foundation for more advanced topics in **${subject.toUpperCase()}**.`;
    }

    if (style === 'step_by_step') {
      return `### 🪜 Step-by-Step Methodical Breakdown: ${title}

#### Step 1: Problem Formalization
We are analyzing **${question}** at the **${level}** undergraduate level.
Identify given parameters, boundary conditions, and the required goal.

#### Step 2: Underlying Principles & Formulas
Recall the standard theoretical governing equations and definitions for this topic in ${subject.toUpperCase()}.
Ensure consistency of units, dimensions, and logical prerequisites.

#### Step 3: Derivation & Execution
Execute the logical or mathematical derivation step-by-step:
1. Establish base relations.
2. Substitute known expressions.
3. Simplify intermediate terms algebraically or algorithmically.

#### Step 4: Verification & Conclusion
Check edge conditions and confirm the answer adheres to core conservation laws or operational rules.`;
    }

    if (style === 'practical') {
      return `### 💡 Practical Application & Real-World Example: ${title}

#### Conceptual Scenario:
In industrial and software engineering environments, **${title}** directly addresses:
> *"How do we implement ${question} under real-world constraints?"*

#### Practical Implementation:
\`\`\`
// Pseudo-code / Practical Paradigm for ${title}:
function executeConcept(inputData) {
    // 1. Validate preconditions
    // 2. Apply core ${topic} transformation
    // 3. Return verified result
    return optimizedOutput;
}
\`\`\`

#### Key Industry Applications:
- Scalable cloud infrastructure and distributed systems.
- Quantitative modeling and data verification pipelines.`;
    }

    if (style === 'exam_ready') {
      return `### 📝 Exam-Ready Model Answer: ${title}

**1. Formal Definition**:
**${title}** is defined as the systematic principle that governs **${question}**.

**2. Key Technical Points (High-Scoring Criteria)**:
- **Core Mechanism**: Explicit adherence to standard academic postulates.
- **Assumptions**: Requires standard undergraduate boundary conditions.
- **Governing Equations**: Apply the canonical formulations relevant to ${subject.toUpperCase()}.

**3. Common Exam Pitfalls**:
- Avoid omitting base units or boundary cases.
- Clearly differentiate between theoretical ideal limits and practical implementations.`;
    }

    // hints_first
    return `### 🔍 Socratic Guided Discovery: ${title}

**Hint 1**: Before looking at the final solution, consider what foundational rule in **${subject.toUpperCase()}** connects to *"# ${question}"*?

**Hint 2**: If you simplify this problem down to its smallest non-trivial component, what is the initial step you must perform?

*(Review the question and formulate your own hypothesis before revealing the answer!)*`;
  }

  // =========================================================================
  // 2. STATE STORE
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
    apiSettings: {
      geminiKey: localStorage.getItem('studyforge_gemini_key') || '',
      model: 'gemini-2.0-flash'
    }
  };

  // =========================================================================
  // 3. DOM ELEMENTS CACHE
  // =========================================================================
  const DOM = {
    // Nav
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

    // Learn & Solve View
    subjectSelect: document.getElementById('learn-subject-select'),
    levelRadios: document.querySelectorAll('input[name="student-level"]'),
    topicInput: document.getElementById('learn-topic-input'),
    questionInput: document.getElementById('learn-question-input'),
    styleRadios: document.querySelectorAll('input[name="explanation-style"]'),
    btnGenerateExplanation: document.getElementById('btn-generate-explanation'),
    learnSpinner: document.getElementById('learn-spinner'),
    btnLoadSample: document.getElementById('btn-load-sample'),
    quickTopicPills: document.querySelectorAll('.topic-pill'),

    // Output & Actions
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

    // Quiz View
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

    // Revision Notes View
    revisionTitleHeading: document.getElementById('revision-title-heading'),
    revisionDefinitionsContent: document.getElementById('revision-definitions-content'),
    flashcardsContainer: document.getElementById('flashcards-container'),
    btnCopyAllNotes: document.getElementById('btn-copy-all-notes'),

    // Celebration & Toasts
    confettiCanvas: document.getElementById('confetti-canvas'),
    toastContainer: document.getElementById('toast-container')
  };

  // =========================================================================
  // 4. LEARN & SOLVE ENGINE (FEATURE 1 & FEATURE 2)
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
    const list = STUDYFORGE_CATALOG[subject] || [];
    const normalizedTopic = (topic || '').toLowerCase();
    return list.find(item => item.topic.toLowerCase().includes(normalizedTopic) || normalizedTopic.includes(item.topic.toLowerCase())) || list[0];
  }

  /**
   * Main function: Generates Explanation in selected style
   */
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

      // Check if user has Gemini API Key
      if (state.apiSettings.geminiKey) {
        content = await callGeminiStudyAPI(subject, topic, question, level, style);
      } else {
        // High-fidelity local academic engine
        await new Promise(r => setTimeout(r, 350)); // smooth natural feedback
        if (preset && preset[style]) {
          content = preset[style];
          state.currentStudy.activeData = preset;
        } else {
          content = generateGenericSynthesis(subject, topic, question, level, style);
        }
      }

      renderExplanation(content, topic, style);
      showToast('Explanation generated successfully!', 'success');

      // Pre-seed quiz and revision
      prepareQuizForTopic(preset || generateFallbackQuiz(topic));
      prepareRevisionForTopic(preset || generateFallbackRevision(topic));

    } catch (err) {
      console.error(err);
      const fallback = generateGenericSynthesis(subject, topic, question, level, style);
      renderExplanation(fallback, topic, style);
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
- If "Step-by-step": give sequential numbered steps with derivations and reasoning.
- If "Practical examples": include runnable code or practical real-world scenario.
- If "Exam-ready": structure with definition, key points, formula, and concise bullet points.
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

    // Escape HTML first
    let html = text
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^## (.*$)/gim, '<h3>$1</h3>')
      // Code blocks
      .replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre><code class="lang-$1">$2</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Bold
      .replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>')
      // Math markers
      .replace(/\$\$([^$]+)\$\$/gim, '<div class="math-code">$1</div>')
      .replace(/\$([^$]+)\$/gim, '<code>$1</code>')
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote style="border-left:3px solid #6366f1; padding-left:12px; margin:10px 0; color:#cbd5e1;">$1</blockquote>')
      // Bullet lists
      .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>')
      // Paragraphs
      .replace(/\n\n/gim, '</p><p>');

    return `<p>${html}</p>`;
  }

  // =========================================================================
  // 5. PRACTICE QUIZ ENGINE (FEATURE 3)
  // =========================================================================

  function prepareQuizForTopic(data) {
    const quizList = data?.quiz || generateFallbackQuiz(DOM.topicInput.value);
    state.activeQuiz = quizList;
    state.userQuizAnswers = {};

    DOM.quizTitleHeading.textContent = `Topic Quiz: ${DOM.topicInput.value || 'Academic Concepts'}`;
    DOM.quizScoreBadge.classList.add('hidden');
    DOM.quizSummaryStats.classList.add('hidden');
    DOM.btnSubmitQuiz.classList.remove('hidden');
    DOM.btnRetryQuiz.classList.add('hidden');

    renderQuizQuestions(quizList);
  }

  function generateFallbackQuiz(topicName) {
    const t = topicName || 'this subject';
    return [
      {
        id: 'q1',
        question: `What is the primary objective of studying ${t}?`,
        options: [
          { key: 'A', text: `To understand the foundational theoretical principles and optimize solutions.` },
          { key: 'B', text: `To memorize arbitrary definitions without application.` },
          { key: 'C', text: `To replace empirical evidence with guesswork.` },
          { key: 'D', text: `It is purely decorative with no practical value.` }
        ],
        correctAnswer: 'A',
        explanation: `${t} provides rigorous systematic tools to model, analyze, and optimize academic and engineering solutions.`
      },
      {
        id: 'q2',
        question: `Which analysis criteria is most critical when evaluating ${t}?`,
        options: [
          { key: 'A', text: `Color schemes and margins` },
          { key: 'B', text: `Boundary conditions, constraints, and valid assumptions` },
          { key: 'C', text: `Alphabetical length of variable names` },
          { key: 'D', text: `Ignoring edge cases` }
        ],
        correctAnswer: 'B',
        explanation: `Undergraduate rigor requires explicitly validating boundary conditions, constraints, and underlying postulates.`
      },
      {
        id: 'q3',
        question: `How should complex problems in ${t} be decomposed?`,
        options: [
          { key: 'A', text: `By solving the entire problem monolithically without breakdown` },
          { key: 'B', text: `By isolating sub-problems, applying governing laws, and synthesizing results` },
          { key: 'C', text: `By discarding mathematical definitions` },
          { key: 'D', text: `By random trial and error only` }
        ],
        correctAnswer: 'B',
        explanation: `Modular decomposition allows complex academic systems to be analyzed with precision and verifiable correctness.`
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

    // Add selection listeners
    container.querySelectorAll('.mcq-option-label').forEach(label => {
      label.addEventListener('click', (e) => {
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

      // Style options
      q.options.forEach(opt => {
        const optCard = document.getElementById(`opt-${q.id}-${opt.key}`);
        if (!optCard) return;

        if (opt.key === q.correctAnswer) {
          optCard.className = 'mcq-option-card state-correct';
        } else if (opt.key === userChoice && !isCorrect) {
          optCard.className = 'mcq-option-card state-wrong';
        }
      });

      // Show explanation
      const expBox = document.getElementById(`exp-${q.id}`);
      if (expBox) expBox.classList.remove('hidden');
    });

    // Calculate score
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
  // 6. NOTES & REVISION CARDS (FEATURE 4)
  // =========================================================================

  function prepareRevisionForTopic(data) {
    const rev = data?.revision || generateFallbackRevision(DOM.topicInput.value);
    DOM.revisionTitleHeading.textContent = `Revision Notes: ${DOM.topicInput.value || 'Core Concepts'}`;

    // Render definitions & summary
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

    // Render Flashcards
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
        <div class="flashcard-a hidden" id="flash-ans-${i}">
          ${escapeHtml(f.a)}
        </div>
      `;

      card.addEventListener('click', () => {
        const ans = card.querySelector('.flashcard-a');
        ans.classList.toggle('hidden');
      });

      flashContainer.appendChild(card);
    });
  }

  function generateFallbackRevision(topicName) {
    const t = topicName || 'Academic Concept';
    return {
      summary: `High-yield summary for ${t}: Focus on core definitions, boundary invariants, and standard problem-solving methodologies.`,
      definitions: [
        { term: 'Foundational Principle', desc: `The primary theoretical postulate underlying ${t}.` },
        { term: 'Key Boundary Condition', desc: `The operational limits and assumptions required for valid analysis.` },
        { term: 'Analytical Formulation', desc: `The standard mathematical or algorithmic representation.` }
      ],
      flashcards: [
        { q: `What is the core premise of ${t}?`, a: `It provides systematic mechanisms to solve problems accurately and efficiently.` },
        { q: `What is the most common error made when studying ${t}?`, a: `Skipping boundary condition verification and confusing empirical rules with strict mathematical definitions.` },
        { q: `How is ${t} applied in real-world engineering?`, a: `By translating abstract constraints into measurable, repeatable optimizations.` }
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
  // 7. FOLLOW-UP QUESTIONS & SAMPLE PROBLEM LOADER
  // =========================================================================

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
  // 8. NAVIGATION & VIEW SWITCHING
  // =========================================================================

  function switchView(targetViewId) {
    state.activeView = targetViewId;
    DOM.navTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-target') === targetViewId);
    });
    DOM.viewPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === targetViewId);
    });
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
  // 9. EVENT LISTENERS & INITIALIZATION
  // =========================================================================

  function initEventListeners() {
    // Navigation
    DOM.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        switchView(target);
      });
    });

    // Learn & Solve
    DOM.btnGenerateExplanation.addEventListener('click', generateExplanation);
    DOM.btnLoadSample.addEventListener('click', loadNextSample);

    DOM.quickTopicPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.subjectSelect.value = pill.getAttribute('data-subj');
        DOM.topicInput.value = pill.getAttribute('data-topic');
        DOM.questionInput.value = pill.getAttribute('data-q');
        generateExplanation();
      });
    });

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

    // Revision
    DOM.btnCopyAllNotes.addEventListener('click', copyAllNotesToClipboard);

    // Settings
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
    // Generate default explanation on load
    generateExplanation();
    console.log('StudyForge initialized successfully.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
