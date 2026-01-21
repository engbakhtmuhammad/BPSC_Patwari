// Tab switching functionality
function showSubject(subjectId) {
    // Hide all subject contents
    const allContents = document.querySelectorAll('.subject-content');
    allContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected subject
    document.getElementById(subjectId).classList.add('active');

    // Add active class to clicked tab
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize Q&A accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Wait for content to load
    setTimeout(() => {
        initializeQA();
    }, 500);
});

function initializeQA() {
    const questions = document.querySelectorAll('.qa-question');
    
    questions.forEach(question => {
        // Remove any existing event listeners
        const newQuestion = question.cloneNode(true);
        question.parentNode.replaceChild(newQuestion, question);
        
        newQuestion.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other answers in the same section
            const allQuestions = this.closest('.topic-section').querySelectorAll('.qa-question');
            const allAnswers = this.closest('.topic-section').querySelectorAll('.qa-answer');
            
            allQuestions.forEach(q => q.classList.remove('active'));
            allAnswers.forEach(a => a.classList.remove('active'));
            
            // Toggle current answer
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Helper function to create Q&A items
function createQAItem(question, answer) {
    return `
        <div class="qa-item">
            <div class="qa-question">${question}</div>
            <div class="qa-answer">${answer}</div>
        </div>
    `;
}

// Helper function to create topic section
function createTopicSection(icon, title, description, qaItems) {
    return `
        <div class="topic-section">
            <h3>${icon} ${title}</h3>
            ${description ? `<div class="topic-description">${description}</div>` : ''}
            ${qaItems}
        </div>
    `;
}

// Reload Q&A functionality when content changes
function reloadQA() {
    initializeQA();
}

// MCQ Test Functionality
let currentQuestionIndex = 0;
let userAnswers = {};
let currentSubject = '';

function createMCQTest(subject, questions) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    userAnswers = {};
    
    return `
        <div class="mcq-test-section">
            <h3>🎯 Practice Test - Check Your Preparation!</h3>
            <div class="test-info">
                <p>📝 Total Questions: ${questions.length} | ⏱️ Answer all questions to get your score</p>
            </div>
            <div id="mcq-questions-${subject}">
                ${questions.map((q, index) => `
                    <div class="mcq-question-item" data-index="${index}">
                        <div class="question-number">Question ${index + 1} of ${questions.length}</div>
                        <div class="question-text">${q.question}</div>
                        <div class="mcq-options">
                            ${q.options.map((option, optIndex) => `
                                <label class="mcq-option">
                                    <input type="radio" name="q${subject}${index}" value="${optIndex}" onchange="saveAnswer('${subject}', ${index}, ${optIndex})">
                                    <span class="option-text">${option}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="test-actions">
                <button class="submit-test-btn" onclick="submitTest('${subject}')">✅ Submit Test & Check Score</button>
            </div>
            <div id="test-result-${subject}" class="test-result"></div>
        </div>
    `;
}

function saveAnswer(subject, questionIndex, answerIndex) {
    if (!userAnswers[subject]) {
        userAnswers[subject] = {};
    }
    userAnswers[subject][questionIndex] = answerIndex;
}

function submitTest(subject) {
    const questions = window[`${subject}MCQs`];
    if (!questions) return;
    
    const answers = userAnswers[subject] || {};
    let correctCount = 0;
    let totalQuestions = questions.length;
    
    // Check answers and mark them
    questions.forEach((q, index) => {
        const userAnswer = answers[index];
        const questionItem = document.querySelector(`[data-index="${index}"]`);
        const options = questionItem.querySelectorAll('.mcq-option');
        
        options.forEach((option, optIndex) => {
            option.classList.remove('correct', 'incorrect');
            if (optIndex === q.correct) {
                option.classList.add('correct');
            }
            if (userAnswer !== undefined && optIndex === userAnswer && userAnswer !== q.correct) {
                option.classList.add('incorrect');
            }
        });
        
        if (userAnswer === q.correct) {
            correctCount++;
        }
    });
    
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);
    const resultDiv = document.getElementById(`test-result-${subject}`);
    
    let resultClass = 'result-excellent';
    let emoji = '🌟';
    let message = 'Excellent! You are well prepared!';
    
    if (percentage < 50) {
        resultClass = 'result-poor';
        emoji = '📚';
        message = 'Keep studying! You need more practice.';
    } else if (percentage < 75) {
        resultClass = 'result-good';
        emoji = '👍';
        message = 'Good work! A bit more practice will help.';
    }
    
    resultDiv.innerHTML = `
        <div class="result-card ${resultClass}">
            <div class="result-emoji">${emoji}</div>
            <div class="result-score">
                <h3>Your Score: ${correctCount}/${totalQuestions}</h3>
                <div class="result-percentage">${percentage}%</div>
            </div>
            <p class="result-message">${message}</p>
            <button class="retry-btn" onclick="retryTest('${subject}')">🔄 Try Again</button>
        </div>
    `;
    
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function retryTest(subject) {
    userAnswers[subject] = {};
    
    // Clear all selections
    const questionItems = document.querySelectorAll(`#mcq-questions-${subject} .mcq-question-item`);
    questionItems.forEach(item => {
        const options = item.querySelectorAll('.mcq-option');
        options.forEach(option => {
            option.classList.remove('correct', 'incorrect');
            const input = option.querySelector('input');
            if (input) input.checked = false;
        });
    });
    
    // Clear result
    document.getElementById(`test-result-${subject}`).innerHTML = '';
    
    // Scroll to top of test
    document.querySelector('.mcq-test-section').scrollIntoView({ behavior: 'smooth' });
}
