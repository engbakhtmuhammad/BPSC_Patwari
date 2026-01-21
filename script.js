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
