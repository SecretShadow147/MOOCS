document.addEventListener('DOMContentLoaded', function() {
    // Đối tượng translations có thể dùng làm fallback hoặc cho các ngôn ngữ gốc (Anh, Việt)
    const translations = {
        en: { // Ngôn ngữ gốc - chứa tất cả các key và text gốc tiếng Anh
            page_title: "MOOCs Platform",
            nav_explore_courses: "Explore Courses",
            nav_instructors: "Instructors",
            nav_about_us: "About Us",
            nav_login: "Login",
            nav_register_free: "Register Free",
            hero_title: "Learn anytime, anywhere. Develop skills for the future.",
            hero_subtitle: "Join a global learning community and discover thousands of high-quality courses.",
            search_placeholder: "Search for courses...",
            search_button: "Search",
            feature_flexible: "Flexible Learning",
            feature_instructors: "Top Instructors",
            feature_community: "Supportive Community",
            
            section_global_knowledge_title: "Explore Global Knowledge",
            h_course1_title: "Advanced Python (USA)", // Giữ lại các key cụ thể nếu có
            h_course2_title: "Existential Philosophy (Germany)",
            h_course3_title: "Abstract Algebra (Russia)",
            h_course4_title: "Ancient Indian Mathematics (India)",
            h_course10_title: "Number Theory (Germany)",
            h_course1_theme: "Programming, AI",
            h_course2_theme: "Philosophy, Modern",
            h_course3_theme: "Mathematics, Theory",
            h_course4_theme: "Mathematics, History",
            h_course10_theme: "Mathematics, Pure",
            h_course1_instructor: "Dr. Evelyn Reed",
            h_course2_instructor: "Prof. Klaus Richter",
            h_course3_instructor: "Dr. Anya Petrova",
            h_course4_instructor: "Prof. Rohan Sharma",
            h_course10_instructor: "Prof. Sofia Muller",


            featured_courses_title: "Featured Courses",
            course1_title: "Basic Python Programming",
            course1_desc: "Learn the fundamental principles of the Python programming language.",
            course1_instructor_label: "Instructor: John Doe",
            view_details_button: "View Details",
            course2_title: "Graphic Design with Photoshop",
            course2_desc: "Master professional graphic design tools and techniques.",
            course2_instructor_label: "Instructor: Jane Smith",


            completion_focus_title: "Focusing on Your Success",
            focus_personalized_path_title: "Personalized Learning Path",
            focus_personalized_path_desc: "The system suggests courses suitable for your goals and level.",
            focus_progress_tracking_title: "Visual Progress Tracking",
            focus_progress_tracking_desc: "Easily track your learning progress and identify areas for improvement.",
            focus_reminders_title: "Reminders and Encouragement",
            focus_reminders_desc: "Receive notifications about class schedules, assignments, and motivational messages.",
            focus_practical_exercises_title: "Practical Exercises and Projects",
            focus_practical_exercises_desc: "Apply knowledge to real-world situations through engaging exercises and projects.",
            focus_community_support_title: "Community Interaction and Support",
            focus_community_support_desc: "Participate in forums, interact with peers, and receive support from instructors.",
            focus_certificates_title: "Course Completion Certificates",
            focus_certificates_desc: "Receive valuable certificates upon successful course completion.",
            
            testimonials_title: "What Our Learners Say",
            testimonial1_text: "I am very satisfied with the courses on this platform. Quality content, enthusiastic instructors, and a very supportive learning community.",
            testimonial1_author: "- Jane D.",
            testimonial2_text: "Thanks to the personalized learning path, I found courses that suited my needs and completed them effectively.",
            testimonial2_author: "- John E.",
            testimonial3_text: "The practical exercises are very helpful, allowing me to reinforce my knowledge and apply it to real-world tasks.",
            testimonial3_author: "- Alex F.",

            cta_title: "Ready to start your learning journey?",
            cta_subtitle: "Register today and explore the world of knowledge!",
            cta_join_now_button: "Join Now",
            
            footer_copyright: "&copy; 2023 MOOCs Platform. All rights reserved.",
            footer_terms: "Terms of Service",
            footer_privacy: "Privacy Policy",
            
            login_modal_title: "Login",
            form_email_label: "Email:",
            form_password_label: "Password:",
            login_button: "Login",
            login_no_account: "Don't have an account?",
            register_now_link: "Register now",
            login_alert_developing: "Login function is under development!",
            
            register_modal_title: "Create Account",
            form_name_label: "Full Name:",
            form_confirm_password_label: "Confirm Password:",
            register_button: "Register",
            register_have_account: "Already have an account?",
            login_now_link: "Login",
            register_alert_success: "Registration successful (simulated)! Please log in.",
            password_mismatch_alert: "Password confirmation does not match!",

            chatbot_title: "AI Assistant",
            chatbot_placeholder_type_message: "Type your message...",
            chatbot_send_button: "Send",
            chatbot_response_default: "I am a mock AI. I received: ",
            chatbot_welcome: "Hello! How can I assist you today?",
            chatbot_greeting_response: "Hello there! How can I do for you?",
            chatbot_course_inquiry_response: "You can find courses under 'Explore Courses' or use the search bar."
        },
        vi: { // Bản dịch tiếng Việt
            page_title: "Nền tảng MOOCs",
            nav_explore_courses: "Khám phá khóa học",
            nav_instructors: "Giảng viên",
            nav_about_us: "Về chúng tôi",
            nav_login: "Đăng nhập",
            nav_register_free: "Đăng ký miễn phí",
            hero_title: "Học tập mọi lúc, mọi nơi. Phát triển kỹ năng cho tương lai.",
            hero_subtitle: "Tham gia cộng đồng học tập toàn cầu và khám phá hàng ngàn khóa học chất lượng cao.",
            search_placeholder: "Tìm kiếm khóa học...",
            search_button: "Tìm kiếm",
            feature_flexible: "Học tập linh hoạt",
            feature_instructors: "Giảng viên hàng đầu",
            feature_community: "Cộng đồng hỗ trợ",

            section_global_knowledge_title: "Khám Phá Tri Thức Toàn Cầu",
            h_course1_title: "Advanced Python (Mỹ)",
            h_course2_title: "Triết Học Hiện Sinh (Đức)",
            h_course3_title: "Đại Số Trừu Tượng (Nga)",
            h_course4_title: "Toán Học Ấn Độ Cổ (Ấn Độ)",
            h_course10_title: "Lý Thuyết Số (Đức)",
            h_course1_theme: "Lập trình, AI",
            h_course2_theme: "Triết học, Hiện đại",
            h_course3_theme: "Toán học, Lý thuyết",
            h_course4_theme: "Toán học, Lịch sử",
            h_course10_theme: "Toán học, Thuần túy",
            h_course1_instructor: "TS. Evelyn Reed",
            h_course2_instructor: "GS. Klaus Richter",
            h_course3_instructor: "TS. Anya Petrova",
            h_course4_instructor: "GS. Rohan Sharma",
            h_course10_instructor: "GS. Sofia Muller",
            view_details_button: "Xem Chi Tiết",

            featured_courses_title: "Khóa học nổi bật",
            course1_title: "Lập trình Python cơ bản",
            course1_desc: "Tìm hiểu các nguyên tắc cơ bản của ngôn ngữ lập trình Python.",
            course1_instructor_label: "Giảng viên: Nguyễn Văn A",
            course2_title: "Thiết kế đồ họa với Photoshop",
            course2_desc: "Nắm vững các công cụ và kỹ thuật thiết kế đồ họa chuyên nghiệp.",
            course2_instructor_label: "Giảng viên: Trần Thị B",
            
            completion_focus_title: "Tập trung vào sự thành công của bạn",
            focus_personalized_path_title: "Lộ trình học tập cá nhân hóa",
            focus_personalized_path_desc: "Hệ thống gợi ý khóa học phù hợp với mục tiêu và trình độ của bạn.",
            focus_progress_tracking_title: "Theo dõi tiến độ trực quan",
            focus_progress_tracking_desc: "Dễ dàng theo dõi quá trình học tập và nhận biết những phần cần cải thiện.",
            focus_reminders_title: "Nhắc nhở và động viên",
            focus_reminders_desc: "Nhận thông báo về lịch học, bài tập và lời động viên để duy trì động lực.",
            focus_practical_exercises_title: "Bài tập thực hành và dự án",
            focus_practical_exercises_desc: "Áp dụng kiến thức vào thực tế thông qua các bài tập và dự án hấp dẫn.",
            focus_community_support_title: "Tương tác và hỗ trợ từ cộng đồng",
            focus_community_support_desc: "Tham gia diễn đàn, trao đổi với bạn học và nhận hỗ trợ từ giảng viên.",
            focus_certificates_title: "Chứng chỉ hoàn thành khóa học",
            focus_certificates_desc: "Nhận chứng chỉ có giá trị sau khi hoàn thành khóa học thành công.",

            testimonials_title: "Học viên nói gì?",
            testimonial1_text: "Tôi rất hài lòng với các khóa học trên nền tảng này. Nội dung chất lượng, giảng viên nhiệt tình và cộng đồng học tập rất hỗ trợ.",
            testimonial1_author: "- Nguyễn Thị D",
            testimonial2_text: "Nhờ có lộ trình học tập cá nhân hóa, tôi đã tìm được những khóa học phù hợp với nhu cầu của mình và hoàn thành chúng một cách hiệu quả.",
            testimonial2_author: "- Phạm Văn E",
            testimonial3_text: "Các bài tập thực hành rất hữu ích, giúp tôi củng cố kiến thức và áp dụng vào công việc thực tế.",
            testimonial3_author: "- Hoàng Gia F",
            
            cta_title: "Sẵn sàng để bắt đầu hành trình học tập của bạn?",
            cta_subtitle: "Đăng ký ngay hôm nay và khám phá thế giới kiến thức!",
            cta_join_now_button: "Tham gia ngay",

            footer_copyright: "&copy; 2023 Nền tảng MOOCs. All rights reserved.",
            footer_terms: "Điều khoản dịch vụ",
            footer_privacy: "Chính sách bảo mật",

            login_modal_title: "Đăng nhập",
            form_email_label: "Email:",
            form_password_label: "Mật khẩu:",
            login_button: "Đăng nhập",
            login_no_account: "Chưa có tài khoản?",
            register_now_link: "Đăng ký ngay",
            login_alert_developing: "Chức năng đăng nhập đang được phát triển!",

            register_modal_title: "Đăng ký tài khoản",
            form_name_label: "Họ và tên:",
            form_confirm_password_label: "Xác nhận mật khẩu:",
            register_button: "Đăng ký",
            register_have_account: "Đã có tài khoản?",
            login_now_link: "Đăng nhập",
            register_alert_success: "Đăng ký thành công (giả lập)! Vui lòng đăng nhập.",
            password_mismatch_alert: "Xác nhận mật khẩu không khớp!",
            
            chatbot_title: "Trợ lý AI",
            chatbot_placeholder_type_message: "Nhập tin nhắn của bạn...",
            chatbot_send_button: "Gửi",
            chatbot_response_default: "Tôi là AI giả lập. Tôi đã nhận được: ",
            chatbot_welcome: "Xin chào! Tôi có thể hỗ trợ gì cho bạn hôm nay?",
            chatbot_greeting_response: "Chào bạn! Bạn cần hỗ trợ gì?",
            chatbot_course_inquiry_response: "Bạn có thể tìm khóa học ở mục 'Khám phá khóa học' hoặc sử dụng thanh tìm kiếm."
        }
    };

    const languageSelector = document.getElementById('languageSelector');
    const BASE_LANGUAGE = 'en'; 

    async function callTranslationAPI(text, targetLang, sourceLang = BASE_LANGUAGE) {
        const API_KEY = 'YOUR_TRANSLATION_API_KEY'; 
        // console.log(`Simulating API Call: Translating "${text}" from ${sourceLang} to ${targetLang}`);

        // --- BẮT ĐẦU KHỐI MÃ GIẢ LẬP API ---
        // Trong môi trường thực tế, bạn sẽ sử dụng fetch() để gọi API thật.
        // --- KẾT THÚC KHỐI MÃ GIẢ LẬP API ---
        
        // --- Mã giả lập: Trả về văn bản gốc để tránh hiển thị mã ngôn ngữ không mong muốn ---
        // --- Để có bản dịch thực sự, bạn cần tích hợp một API dịch thuật thực tế. ---
        return new Promise(resolve => {
            setTimeout(() => {
                // console.log(`Mock API: Would translate "${text}" to ${targetLang}. Returning original text as placeholder.`);
                // Để mô phỏng tốt hơn mà không gây rối UI, có thể trả về text gốc.
                // Hoặc một chuỗi tĩnh nếu muốn phân biệt rõ ràng hơn trong quá trình debug:
                // resolve(`(mock translate to ${targetLang}) ${text}`); 
                resolve(text); // Trả về văn bản gốc cho mục đích hiển thị sạch sẽ
            }, 200); 
        });
    }

    function getOriginalTextForKey(element, key) {
        if (element.dataset.originalText) {
            return element.dataset.originalText;
        }
        if (translations[BASE_LANGUAGE] && translations[BASE_LANGUAGE][key]) {
            return translations[BASE_LANGUAGE][key];
        }
        return element.textContent.trim() || (element.placeholder && element.placeholder.trim()) || key;
    }

    async function setLanguage(lang) {
        document.documentElement.lang = lang;
        const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

        for (const element of elementsToTranslate) {
            const key = element.dataset.translateKey;
            let translatedText = null;

            if ((lang === 'en' || lang === 'vi') && translations[lang] && translations[lang][key]) {
                translatedText = translations[lang][key];
            } else if (lang === BASE_LANGUAGE) { 
                 translatedText = getOriginalTextForKey(element, key);
            }
            else { 
                const originalText = getOriginalTextForKey(element, key);
                if (originalText) {
                    try {
                        // Gọi API (hiện tại là mock API đã được chỉnh sửa)
                        translatedText = await callTranslationAPI(originalText, lang, BASE_LANGUAGE);
                    } catch (error) {
                        console.error(`Error translating key "${key}" for lang "${lang}":`, error);
                        translatedText = originalText; 
                    }
                } else {
                    translatedText = key; 
                }
            }
            
            if (translatedText !== null) {
                if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password') && element.placeholder !== undefined) {
                    element.placeholder = translatedText;
                } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                     element.value = translatedText;
                } else if (element.nodeName === 'TITLE') {
                    element.textContent = translatedText;
                } else {
                    let firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
                    if (firstTextNode) {
                        firstTextNode.textContent = translatedText + (element.children.length > 0 ? ' ' : ''); 
                    } else if (!element.children.length) { 
                         element.textContent = translatedText;
                    } else { 
                         if (element.tagName === 'SPAN' || element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'DIV') {
                            let htmlContent = '';
                            let textReplaced = false;
                            Array.from(element.childNodes).forEach(childNode => {
                                if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() !== '' && !textReplaced) {
                                    htmlContent += translatedText;
                                    if (element.children.length > 0) htmlContent += ' '; // Thêm space nếu có icon/element con theo sau text node đó
                                    textReplaced = true; 
                                } else {
                                    htmlContent += childNode.outerHTML || childNode.textContent;
                                }
                            });
                             if (!textReplaced && !element.children.length) {
                                element.innerHTML = translatedText; 
                             } else if (textReplaced) {
                                element.innerHTML = htmlContent;
                             }
                        }
                    }
                }
            }
        }
        localStorage.setItem('selectedLanguage', lang);
        if (languageSelector) languageSelector.value = lang;
        updateChatbotLanguage(lang); 
    }

    function loadLanguage() {
        let savedLang = localStorage.getItem('selectedLanguage');
        if (!savedLang) {
            const browserLang = navigator.language.split('-')[0];
            if (languageSelector && Array.from(languageSelector.options).some(opt => opt.value === browserLang)) {
                savedLang = browserLang;
            } else {
                savedLang = 'vi'; 
            }
        }
        setLanguage(savedLang);
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }

    loadLanguage(); 

    // --- Modal logic ---
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtnHeader = document.getElementById('loginBtnHeader');
    const registerBtnHeader = document.getElementById('registerBtnHeader');
    const registerBtnCallToAction = document.getElementById('registerBtnCallToAction');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const showRegisterModalFromLogin = document.getElementById('showRegisterModalFromLogin');
    const showLoginModalFromRegister = document.getElementById('showLoginModalFromRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    function openModal(modal) {
        if (modal) modal.style.display = 'block';
    }

    function closeModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    if (loginBtnHeader) loginBtnHeader.onclick = () => openModal(loginModal);
    if (registerBtnHeader) registerBtnHeader.onclick = () => openModal(registerModal);
    if (registerBtnCallToAction) registerBtnCallToAction.onclick = (e) => {
        e.preventDefault();
        openModal(registerModal);
    };

    if (closeLoginModal) closeLoginModal.onclick = () => closeModal(loginModal);
    if (closeRegisterModal) closeRegisterModal.onclick = () => closeModal(registerModal);

    if (showRegisterModalFromLogin) {
        showRegisterModalFromLogin.onclick = (e) => {
            e.preventDefault();
            closeModal(loginModal);
            openModal(registerModal);
        };
    }

    if (showLoginModalFromRegister) {
        showLoginModalFromRegister.onclick = (e) => {
            e.preventDefault();
            closeModal(registerModal);
            openModal(loginModal);
        };
    }

    window.onclick = function(event) {
        if (event.target == loginModal) closeModal(loginModal);
        if (event.target == registerModal) closeModal(registerModal);
    }
     if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            // console.log('Attempting login with email:', email);
            const currentLang = localStorage.getItem('selectedLanguage') || BASE_LANGUAGE;
            alert(translations[currentLang]?.login_alert_developing || translations[BASE_LANGUAGE]?.login_alert_developing);
            closeModal(loginModal);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const currentLang = localStorage.getItem('selectedLanguage') || BASE_LANGUAGE;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            if (password !== confirmPassword) {
                 alert(translations[currentLang]?.password_mismatch_alert || translations[BASE_LANGUAGE]?.password_mismatch_alert);
                return;
            }
            alert(translations[currentLang]?.register_alert_success || translations[BASE_LANGUAGE]?.register_alert_success);
            closeModal(registerModal);
            openModal(loginModal);
        });
    }


    // --- Testimonial Slider Logic ---
    const testimonialSliderEl = document.querySelector('.testimonial-slider');
    if (testimonialSliderEl) {
        const testimonials = testimonialSliderEl.querySelectorAll('.testimonial');
        let currentTestimonialIndex = 0;

        function nextTestimonial() {
            if (!testimonials || testimonials.length === 0) return;
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonialSlider();
        }

        function updateTestimonialSlider() {
            if (!testimonialSliderEl || !testimonials || testimonials.length === 0 || !testimonialSliderEl.parentElement) return;
            const testimonialWidth = testimonialSliderEl.parentElement.offsetWidth;
            testimonialSliderEl.style.transform = `translateX(-${currentTestimonialIndex * testimonialWidth}px)`;
        }

        if (testimonials.length > 1) {
            setInterval(nextTestimonial, 5000);
            window.addEventListener('resize', updateTestimonialSlider);
        }
    }


    // --- Horizontal Course Slider Logic ---
    const internationalCoursesSection = document.querySelector('.international-courses');
    if (internationalCoursesSection) {
        const sliderTrack = internationalCoursesSection.querySelector('.slider-track');
        const prevBtn = internationalCoursesSection.querySelector('.prev-btn');
        const nextBtn = internationalCoursesSection.querySelector('.next-btn');
        const coursesSlider = internationalCoursesSection.querySelector('.courses-slider');
        
        if (sliderTrack && prevBtn && nextBtn && coursesSlider) {
            let currentSlide = 0;
            let courseCardWidth = 0;
            let visibleCourses = 0;
            let totalCourses = sliderTrack.children.length;

            function calculateSliderParams() {
                const firstCourseCard = sliderTrack.querySelector('.course-card.horizontal');
                if (!firstCourseCard) return;
                
                const cardStyle = window.getComputedStyle(firstCourseCard);
                courseCardWidth = firstCourseCard.offsetWidth + parseFloat(cardStyle.marginRight);
                visibleCourses = Math.floor(coursesSlider.offsetWidth / courseCardWidth);
                if (visibleCourses < 1) visibleCourses = 1; // Ensure at least 1 is visible
            }

            function updateSliderPosition() {
                sliderTrack.style.transform = `translateX(-${currentSlide * courseCardWidth}px)`;
                prevBtn.disabled = currentSlide === 0;
                nextBtn.disabled = currentSlide >= totalCourses - visibleCourses;
            }
            
            prevBtn.addEventListener('click', () => {
                currentSlide = Math.max(0, currentSlide - 1);
                updateSliderPosition();
            });

            nextBtn.addEventListener('click', () => {
                currentSlide = Math.min(totalCourses - visibleCourses, currentSlide + 1);
                updateSliderPosition();
            });

            window.addEventListener('resize', () => {
                calculateSliderParams();
                updateSliderPosition();
            });
            
            // Initial setup
            calculateSliderParams();
            updateSliderPosition(); // Initial call
        }
    }


    // --- Intersection Observer ---
    const sectionsToAnimate = document.querySelectorAll('.international-courses, .featured-courses, .completion-focus, .testimonials, .call-to-action');
    if (sectionsToAnimate.length > 0 && 'IntersectionObserver' in window) {
        const sectionObserverOptions = { root: null, threshold: 0.1 };
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, sectionObserverOptions);
        sectionsToAnimate.forEach(section => sectionObserver.observe(section));
    } else { // Fallback for older browsers or if no sections
        sectionsToAnimate.forEach(section => section.classList.add('visible'));
    }


    // --- AI Chatbot Logic ---
    const chatbotButton = document.getElementById('aiChatbotButton');
    const chatbotWindow = document.getElementById('aiChatbotWindow');
    const closeChatbotBtn = document.getElementById('closeChatbotBtn');
    const chatbotMessagesEl = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendChatbotMessageBtn = document.getElementById('sendChatbotMessageBtn');

    if (chatbotButton && chatbotWindow && closeChatbotBtn && chatbotMessagesEl && chatbotInput && sendChatbotMessageBtn) {
        chatbotButton.onclick = () => {
            const isHidden = chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '';
            chatbotWindow.style.display = isHidden ? 'flex' : 'none';
            if (isHidden) {
                const currentLang = localStorage.getItem('selectedLanguage') || BASE_LANGUAGE;
                updateChatbotLanguage(currentLang); // Make sure chatbot UI is in correct language
                if (chatbotMessagesEl.children.length === 0) { // Only add welcome if chat is empty
                    const welcomeMsgKey = 'chatbot_welcome';
                    const welcomeMsg = (translations[currentLang] && translations[currentLang][welcomeMsgKey]) 
                                     || (translations[BASE_LANGUAGE] && translations[BASE_LANGUAGE][welcomeMsgKey]) 
                                     || "Hello! How can I help you?"; // Fallback if key not found
                    appendMessageToChatbox(welcomeMsg, 'bot');
                }
            }
        };
    
        closeChatbotBtn.onclick = () => { chatbotWindow.style.display = 'none'; };

        function handleSendUserMessage() {
            const messageText = chatbotInput.value.trim();
            if (messageText) {
                appendMessageToChatbox(messageText, 'user');
                chatbotInput.value = '';
                getAIChatbotResponse(messageText).then(response => {
                    appendMessageToChatbox(response, 'bot');
                });
            }
        }
        sendChatbotMessageBtn.onclick = handleSendUserMessage;
        chatbotInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSendUserMessage(); });
    }


    function appendMessageToChatbox(text, sender) {
        if (!chatbotMessagesEl) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        chatbotMessagesEl.appendChild(messageDiv);
        chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight;
    }

    async function getAIChatbotResponse(userMessage) {
        // console.log("User message to AI:", userMessage);
        return new Promise(resolve => {
            setTimeout(() => {
                const currentLang = localStorage.getItem('selectedLanguage') || BASE_LANGUAGE;
                let botResponse = "";
                const lowerUserMessage = userMessage.toLowerCase();

                if (lowerUserMessage.includes("hello") || lowerUserMessage.includes("xin chào")) {
                     botResponse = (translations[currentLang]?.chatbot_greeting_response) || 
                                   (translations[BASE_LANGUAGE]?.chatbot_greeting_response);
                } else if (lowerUserMessage.includes("course") || lowerUserMessage.includes("khóa học")) {
                     botResponse = (translations[currentLang]?.chatbot_course_inquiry_response) ||
                                   (translations[BASE_LANGUAGE]?.chatbot_course_inquiry_response);
                } else {
                    botResponse = (translations[currentLang]?.chatbot_response_default || translations[BASE_LANGUAGE]?.chatbot_response_default) + `"${userMessage}"`;
                }
                
                // Fallback if any specific response key was missing
                if (!botResponse) {
                     botResponse = (translations[BASE_LANGUAGE]?.chatbot_response_default || "I received: ") + `"${userMessage}"`;
                }

                resolve(botResponse);
            }, 1000);
        });
    }
    
    function updateChatbotLanguage(lang) {
        if (!chatbotWindow) return;
        const chatbotTitleEl = chatbotWindow.querySelector('#chatbotHeader span'); // More specific selector for title
        const chatbotInputEl = chatbotWindow.querySelector('#chatbotInput');
        const chatbotSendBtnEl = chatbotWindow.querySelector('#sendChatbotMessageBtn');

        const currentTranslations = translations[lang] || translations[BASE_LANGUAGE]; 

        if (chatbotTitleEl && currentTranslations.chatbot_title) chatbotTitleEl.textContent = currentTranslations.chatbot_title;
        if (chatbotInputEl && currentTranslations.chatbot_placeholder_type_message) chatbotInputEl.placeholder = currentTranslations.chatbot_placeholder_type_message;
        if (chatbotSendBtnEl && currentTranslations.chatbot_send_button) chatbotSendBtnEl.textContent = currentTranslations.chatbot_send_button;
    }

}); // End DOMContentLoaded
