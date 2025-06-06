document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'vi';
    const examId = params.get('exam');

    const questionsContainer = document.getElementById('questions-container');
    const timerEl = document.getElementById('timer');
    const warningCountEl = document.getElementById('warning-count');
    const submitBtn = document.getElementById('submit-btn');
    const examTitleEl = document.querySelector('.exam-title');
    const proctoringStatusEl = document.getElementById('proctoring-status');
    const webcamFeedEl = document.querySelector('.webcam-feed');

    const translations = {
        en: {
            title: "General Knowledge Test",
            timeLeft: "Time Left:",
            warning: "Warnings:",
            proctoring_status: "Proctoring",
            submit: "Submit",
            submitted: "Submitted",
            confirmSubmit: "Are you sure you want to submit?",
            resultCorrect: "Correct!",
            resultIncorrect: "Incorrect. The correct answer is:",
            finalScore: "You answered",
            questions: "questions correctly.",
            outOfFocus: "Warning! You have lost focus on the test window.",
            copyWarning: "Warning! Copying question text is not allowed.",
            devToolsAutoSubmit: "Developer tools were opened. The test will be submitted automatically.",
            maxWarnings: "You have reached the maximum number of warnings. The test will be submitted automatically.",
            timeUp: "Time is up! The test will be submitted automatically.",
            question_prefix: "Question",
            footer_text: "© By ThunderBolt 45 - Good luck with your exam! | ",
            policy_link_text: "Academic Integrity Policy"
        },
        vi: {
            title: "Bài Thi Trắc Nghiệm Tổng Hợp",
            timeLeft: "Thời gian còn lại:",
            warning: "Cảnh báo:",
            proctoring_status: "Đang giám sát",
            submit: "Nộp Bài",
            submitted: "Đã Nộp",
            confirmSubmit: "Bạn có chắc chắn muốn nộp bài không?",
            resultCorrect: "Chính xác!",
            resultIncorrect: "Không chính xác. Đáp án đúng là:",
            finalScore: "Bạn đã trả lời đúng",
            questions: "câu.",
            outOfFocus: "Cảnh báo! Bạn đã thoát khỏi màn hình làm bài.",
            copyWarning: "Cảnh báo! Không được phép sao chép nội dung câu hỏi.",
            devToolsAutoSubmit: "Công cụ cho nhà phát triển đã được mở. Bài thi sẽ được tự động nộp.",
            maxWarnings: "Bạn đã đạt đến số lần cảnh báo tối đa. Bài thi sẽ được tự động nộp.",
            timeUp: "Hết giờ! Bài thi sẽ được tự động nộp.",
            question_prefix: "Câu",
            footer_text: "© By ThunderBolt 45 - Chúc bạn làm bài thi tốt! | ",
            policy_link_text: "Chính sách Liêm chính"
        }
    };
    const currentTrans = translations[lang];

    let questions = [];
    let timerInterval;
    let warningCount = 0;
    const MAX_WARNINGS = 3;
    let isSubmitted = false;

    // --- CÁC TÍNH NĂNG MỚI ĐƯỢC THÊM ---

    /**
     * Thuật toán xáo trộn Fisher-Yates.
     * @param {Array} array Mảng cần xáo trộn.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    function initExam() {
        // Set language for the page
        document.documentElement.lang = lang;
        document.querySelector('title').textContent = lang === 'vi' ? 'Đang Làm Bài Thi - TB45.Courses' : 'Test In Progress - TB45.Courses';
        examTitleEl.textContent = currentTrans.title;
        submitBtn.textContent = currentTrans.submit;
        document.querySelector('#timer-container span').textContent = currentTrans.timeLeft;
        document.querySelector('#warning-container span').textContent = currentTrans.warning;
        proctoringStatusEl.querySelector('span').textContent = currentTrans.proctoring_status;
        const footerP = document.querySelector('.exam-footer p');
        footerP.innerHTML = `${currentTrans.footer_text}<a href="../academic-integrity.html" target="_blank">${currentTrans.policy_link_text}</a>`;


        // Load questions
        if (examId && allQuestions[lang] && allQuestions[lang][examId]) {
            // Lấy một bản sao để không thay đổi mảng gốc
            questions = [...allQuestions[lang][examId]];
            
            // **TÍNH NĂNG MỚI: Xáo trộn câu hỏi**
            shuffleArray(questions);

        } else {
            questionsContainer.innerHTML = `<p>Error: Could not load the exam. Please go back and try again.</p>`;
            return;
        }

        renderQuestions();
        startTimer(15 * 60); // 15 minutes timer
        setupEventListeners();
        setupWebcamSimulation();
    }

    function renderQuestions() {
        questionsContainer.innerHTML = '';
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.id = `question-${index}`;

            // **TÍNH NĂNG MỚI: Xáo trộn câu trả lời**
            const originalCorrectIndex = q.correct;
            let answerOptions = q.answers.map((answer, i) => ({ text: answer, originalIndex: i }));
            shuffleArray(answerOptions);
            
            // Tìm vị trí mới của đáp án đúng sau khi xáo trộn
            const newCorrectIndex = answerOptions.findIndex(opt => opt.originalIndex === originalCorrectIndex);
            // Lưu lại vị trí đúng mới vào đối tượng câu hỏi
            q.newCorrectIndex = newCorrectIndex;

            const answersHtml = answerOptions.map((answer, i) => `
                <label for="q${index}_a${i}">
                    <input type="radio" name="question${index}" id="q${index}_a${i}" value="${i}">
                    <span>${answer.text}</span>
                </label>
            `).join('');

            questionDiv.innerHTML = `
                <div class="question-title">${currentTrans.question_prefix} ${index + 1}: ${q.question}</div>
                <div class="answers">${answersHtml}</div>
                <div class="result" style="display: none;"></div>
            `;
            questionsContainer.appendChild(questionDiv);

            questionDiv.addEventListener('copy', (event) => {
                event.preventDefault();
                handleCheating(currentTrans.copyWarning);
            });
        });

        document.querySelectorAll('.answers label').forEach(label => {
            label.addEventListener('click', () => {
                if (isSubmitted) return;
                const questionName = label.querySelector('input').name;
                document.querySelectorAll(`input[name="${questionName}"]`).forEach(radio => {
                    radio.parentElement.classList.remove('selected');
                });
                label.classList.add('selected');
            });
        });
    }

    function startTimer(duration) {
        let time = duration;
        timerInterval = setInterval(() => {
            if (isSubmitted) {
                clearInterval(timerInterval);
                return;
            }
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            timerEl.textContent = `${minutes}:${seconds}`;

            if (--time < 0) {
                alert(currentTrans.timeUp);
                handleSubmit();
            }
        }, 1000);
    }

    function handleCheating(warningMessage) {
        if (isSubmitted) return;
        warningCount++;
        warningCountEl.textContent = warningCount;
        
        // Cải thiện giao diện cảnh báo
        proctoringStatusEl.classList.add('warning');
        webcamFeedEl.classList.add('warning-flash');
        setTimeout(() => {
            proctoringStatusEl.classList.remove('warning');
            webcamFeedEl.classList.remove('warning-flash');
        }, 1500);

        alert(`${warningMessage} (${warningCount}/${MAX_WARNINGS})`);

        if (warningCount >= MAX_WARNINGS) {
            alert(currentTrans.maxWarnings);
            handleSubmit();
        }
    }
    
    // --- CÁC HÀM CÓ SẴN (giữ nguyên) ---
    function handleVisibilityChange() {
        if (document.hidden) {
            handleCheating(currentTrans.outOfFocus);
        }
    }

    function checkDevTools() {
        if (isSubmitted) return;
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            alert(currentTrans.devToolsAutoSubmit);
            handleSubmit();
        }
    }

    function setupWebcamSimulation() {
        // Trong thực tế, bạn sẽ dùng navigator.mediaDevices.getUserMedia() ở đây
        // Đây chỉ là mô phỏng
        console.log("Khởi tạo giám sát webcam (mô phỏng)...");
    }
    
    function setupEventListeners() {
        submitBtn.addEventListener('click', () => {
            if (confirm(currentTrans.confirmSubmit)) {
                handleSubmit();
            }
        });
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('resize', checkDevTools);
    }

    function handleSubmit() {
        if (isSubmitted) return;
        isSubmitted = true;

        clearInterval(timerInterval);
        submitBtn.disabled = true;
        submitBtn.textContent = currentTrans.submitted;

        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('resize', checkDevTools);
        proctoringStatusEl.classList.remove('warning');

        let correctCount = 0;
        questions.forEach((q, index) => {
            const selectedRadio = document.querySelector(`input[name="question${index}"]:checked`);
            const questionDiv = document.getElementById(`question-${index}`);
            const resultDiv = questionDiv.querySelector('.result');
            
            questionDiv.querySelectorAll('input').forEach(input => input.disabled = true);
            
            // Lấy ra đáp án đúng ban đầu (trước khi xáo trộn) để hiển thị
            const correctAnswerText = q.answers[q.correct];

            if (selectedRadio) {
                const userAnswerIndex = parseInt(selectedRadio.value);
                // So sánh với vị trí đúng MỚI sau khi đã xáo trộn
                if (userAnswerIndex === q.newCorrectIndex) {
                    correctCount++;
                    resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${currentTrans.resultCorrect}`;
                    resultDiv.className = 'result correct';
                } else {
                    resultDiv.innerHTML = `<i class="fas fa-times-circle"></i> ${currentTrans.resultIncorrect} "${correctAnswerText}"`;
                    resultDiv.className = 'result incorrect';
                }
            } else {
                 resultDiv.innerHTML = `<i class="fas fa-times-circle"></i> ${currentTrans.resultIncorrect} "${correctAnswerText}"`;
                 resultDiv.className = 'result incorrect';
            }
            resultDiv.style.display = 'block';
        });

        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'submission-area';
        scoreDiv.style.fontSize = '1.5rem';
        scoreDiv.innerHTML = `${currentTrans.finalScore} ${correctCount}/${questions.length} ${currentTrans.questions}`;
        questionsContainer.appendChild(scoreDiv);
        window.scrollTo(0, document.body.scrollHeight);
    }

    initExam();
});