document.addEventListener('DOMContentLoaded', function() {
    // Mảng chứa các key có chứa thẻ HTML và cần được render bằng innerHTML
    const keysForInnerHTML = [
        'policy_intro',
        'policy_plagiarism', 
        'policy_exam_cheating', 
        'policy_account_sharing', 
        'policy_assisting_cheating',
        'policy_measures_desc',
        'policy_shuffling', 
        'policy_webcam', 
        'policy_tab_switching', 
        'policy_anti_copy', 
        'policy_time_limit',
        'policy_permanent_ban'
        // 'policy_proctoring' được xử lý riêng do có cấu trúc HTML đặc biệt (chứa <ul>)
    ];

    const translations = {
        en: { // English translations
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
            h_course1_title: "Advanced Python (USA)",
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
            chatbot_course_inquiry_response: "You can find courses under 'Explore Courses' or use the search bar.",

            // Keys for courses.html
            courses_page_title: "Explore Courses - TB45.Courses",
            sidebar_home: "Home",
            sidebar_courses: "Courses",
            sidebar_exam: "Exam",
            sidebar_practice: "Practice",
            sidebar_competition: "Competition",
            sidebar_info: "Information",
            sidebar_integrity: "Academic Integrity",
            sidebar_toc: "Table of Contents",
            sidebar_curriculum: "Curriculum",
            sidebar_events: "Events",
            sidebar_ranking: "Ranking",
            filter_math: "Mathematics",
            filter_literature: "Literature",
            filter_physics: "Physics",
            filter_chemistry: "Chemistry",
            filter_architecture: "Architecture",
            filter_geology: "Geology",
            section_title_math: "Mathematics",
            course_large_title: "Functions & Limits",
            course_large_instructor: "Mrs. Mai Ha",
            course_button_enter: "Enter Course",
            course_soft_skills_title: "Soft Skills",
            course_soft_skills_instructor: "Mrs. Ha Nguyen",
            course_macroeconomics_title: "Macroeconomics",
            course_macroeconomics_instructor: "Mr. Quoc Anh",
            course_english_title: "English",
            course_english_instructor: "Mr. James",
            course_mexican_title: "Mexican Language",
            course_mexican_instructor: "Mr. Rob",
            course_button_coming_soon: "Coming Soon",
            chatbot_header_title: "AI Assistant",
            chatbot_input_placeholder: "Ask the AI assistant...",

            // == UPDATED KEYS FOR ACADEMIC INTEGRITY POLICY ==
            policy_page_title: "Academic Integrity Policy - TB45.Courses",
            policy_back_button: "Back to Courses",
            policy_main_heading: "Academic Integrity Policy",
            policy_intro: "At <strong>TB45.Courses</strong>, we are committed to building a fair, transparent, and high-quality learning environment. Academic integrity is the foundation of the value of the knowledge and certificates you receive. To protect our learning community, we strictly enforce anti-cheating policies.",
            policy_prohibited_heading: "Prohibited Actions",
            policy_prohibited_desc: "The following behaviors are considered serious violations of the integrity policy and will be handled accordingly:",
            policy_plagiarism: "<strong>Plagiarism:</strong> Copying assignments, ideas, or content from others without proper citation.",
            policy_exam_cheating: "<strong>Cheating on exams:</strong> Using unauthorized materials, receiving help from others, or leaving the test screen without a valid reason.",
            policy_account_sharing: "<strong>Sharing accounts:</strong> Allowing others to use your account to study or take tests on your behalf.",
            policy_assisting_cheating: "<strong>Assisting in cheating:</strong> Helping others to commit fraudulent acts.",
            policy_measures_heading: "Measures We Apply",
            policy_measures_desc: "To maintain a fair learning environment, <strong>TB45.Courses</strong> uses advanced technologies to monitor and detect cheating:",
            policy_shuffling: "<strong>Shuffling questions and answers:</strong> Exam questions are randomized so that each candidate has a unique set of questions and answer order.",
            policy_proctoring: "<strong>Online Exam Proctoring:</strong> For important exams, we may require:", // This key is intentionally simple
            policy_webcam: "<strong>Webcam Monitoring (Simulated):</strong> The system will monitor you via webcam to ensure no one else is in the exam room.",
            policy_tab_switching: "<strong>Tab Switching Detection:</strong> The system will record and warn if you leave the exam window.",
            policy_anti_copy: "<strong>Anti-Copy/Paste:</strong> You cannot copy question content or paste content from outside.",
            policy_time_limit: "<strong>Strict Time Limits:</strong> Each exam has a specific time limit and will be submitted automatically when the time is up.",
            policy_consequences_heading: "Consequences of Violation",
            policy_consequences_desc: "Any violation of the integrity policy will be dealt with strictly, including but not limited to the following forms:",
            policy_warning: "Receiving a warning (Maximum of 3 times in one exam).",
            policy_nullify_test: "Cancellation of test or assignment results.",
            policy_nullify_course: "Cancellation of the entire course result.",
            policy_permanent_ban: "Permanent account suspension from <strong>TB45.Courses</strong>.",
            policy_conclusion: "We believe that adhering to these rules will help enhance the learning value for yourself and the entire community. Thank you for your cooperation."
        },
        vi: { // Vietnamese translations
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
            chatbot_course_inquiry_response: "Bạn có thể tìm khóa học ở mục 'Khám phá khóa học' hoặc sử dụng thanh tìm kiếm.",

            // Keys for courses.html
            courses_page_title: "Khám Phá Khóa Học - TB45.Courses",
            sidebar_home: "Trang Chủ",
            sidebar_courses: "Khóa học",
            sidebar_exam: "Bài Thi",
            sidebar_practice: "Luyện tập",
            sidebar_competition: "Thi Đấu",
            sidebar_info: "Thông tin",
            sidebar_integrity: "Liêm chính Học thuật",
            sidebar_toc: "Mục lục",
            sidebar_curriculum: "Giáo trình",
            sidebar_events: "Sự kiện",
            sidebar_ranking: "Xếp hạng",
            filter_math: "Toán học",
            filter_literature: "Văn học",
            filter_physics: "Vật lý",
            filter_chemistry: "Hóa học",
            filter_architecture: "Kiến Trúc",
            filter_geology: "Địa Chất",
            section_title_math: "Toán Học",
            course_large_title: "Hàm số & Giới hạn",
            course_large_instructor: "Mrs. Mai Hà",
            course_button_enter: "Vào Học",
            course_soft_skills_title: "Kỹ năng mềm",
            course_soft_skills_instructor: "Mrs. Hà Nguyễn",
            course_macroeconomics_title: "Kinh tế vĩ mô",
            course_macroeconomics_instructor: "Mr. Quốc Anh",
            course_english_title: "Tiếng Anh",
            course_english_instructor: "Mr. James",
            course_mexican_title: "Tiếng Mexico",
            course_mexican_instructor: "Mr. Rob",
            course_button_coming_soon: "Sắp ra mắt",
            chatbot_header_title: "AI Assistant",
            chatbot_input_placeholder: "Hỏi trợ lý AI...",

            // == UPDATED KEYS FOR ACADEMIC INTEGRITY POLICY ==
            policy_page_title: "Chính sách Liêm chính Học thuật - TB45.Courses",
            policy_back_button: "Quay lại Khóa học",
            policy_main_heading: "Chính sách Liêm chính Học thuật",
            policy_intro: "Tại <strong>TB45.Courses</strong>, chúng tôi cam kết xây dựng một môi trường học tập công bằng, minh bạch và chất lượng. Sự liêm chính trong học thuật là nền tảng cho giá trị của kiến thức và chứng chỉ mà bạn nhận được. Để bảo vệ cộng đồng học tập của chúng ta, chúng tôi nghiêm túc thực hiện các chính sách chống gian lận.",
            policy_prohibited_heading: "Các hành vi bị cấm",
            policy_prohibited_desc: "Các hành vi sau đây được coi là vi phạm nghiêm trọng chính sách liêm chính và sẽ bị xử lý:",
            policy_plagiarism: "<strong>Đạo văn:</strong> Sao chép bài làm, ý tưởng, hoặc nội dung của người khác mà không trích dẫn nguồn đúng cách.",
            policy_exam_cheating: "<strong>Gian lận thi cử:</strong> Sử dụng tài liệu không được phép, nhận sự trợ giúp từ người khác, hoặc thoát khỏi màn hình làm bài thi mà không có lý do chính đáng.",
            policy_account_sharing: "<strong>Chia sẻ tài khoản:</strong> Cho phép người khác sử dụng tài khoản của bạn để học hoặc làm bài kiểm tra hộ.",
            policy_assisting_cheating: "<strong>Tiếp tay cho gian lận:</strong> Giúp đỡ người khác thực hiện các hành vi gian lận.",
            policy_measures_heading: "Các biện pháp chúng tôi áp dụng",
            policy_measures_desc: "Để duy trì một môi trường học tập công bằng, <strong>TB45.Courses</strong> sử dụng các công nghệ tiên tiến để giám sát và phát hiện gian lận:",
            policy_shuffling: "<strong>Xáo trộn câu hỏi và câu trả lời:</strong> Đề thi được tạo ngẫu nhiên để mỗi thí sinh có một bộ câu hỏi và thứ tự đáp án riêng.",
            policy_proctoring: "<strong>Giám sát thi trực tuyến:</strong> Đối với các kỳ thi quan trọng, chúng tôi có thể yêu cầu:", // This key is intentionally simple
            policy_webcam: "<strong>Giám sát qua Webcam (Mô phỏng):</strong> Hệ thống sẽ theo dõi bạn qua webcam để đảm bảo không có ai khác trong phòng thi.",
            policy_tab_switching: "<strong>Phát hiện chuyển tab:</strong> Hệ thống sẽ ghi nhận và cảnh báo nếu bạn rời khỏi cửa sổ làm bài thi.",
            policy_anti_copy: "<strong>Chống Sao chép/Dán:</strong> Bạn không thể sao chép nội dung câu hỏi hoặc dán nội dung từ bên ngoài.",
            policy_time_limit: "<strong>Giới hạn Thời gian Nghiêm ngặt:</strong> Mỗi bài thi đều có thời gian làm bài cụ thể và sẽ tự động nộp khi hết giờ.",
            policy_consequences_heading: "Hậu quả của việc vi phạm",
            policy_consequences_desc: "Bất kỳ hành vi vi phạm chính sách liêm chính nào cũng sẽ bị xử lý nghiêm khắc, bao gồm nhưng không giới hạn ở các hình thức sau:",
            policy_warning: "Nhận cảnh cáo (Tối đa 3 lần trong một bài thi).",
            policy_nullify_test: "Hủy kết quả bài kiểm tra hoặc bài tập.",
            policy_nullify_course: "Hủy kết quả toàn bộ khóa học.",
            policy_permanent_ban: "Khóa tài khoản vĩnh viễn khỏi <strong>TB45.Courses</strong>.",
            policy_conclusion: "Chúng tôi tin rằng việc tuân thủ các quy tắc này sẽ giúp nâng cao giá trị học tập cho chính bạn và cho toàn bộ cộng đồng. Cảm ơn sự hợp tác của bạn."
        }
    };

    const languageSelector = document.getElementById('languageSelector');
    const BASE_LANGUAGE = 'en'; 

    async function callTranslationAPI(text, targetLang, sourceLang = BASE_LANGUAGE) {
        const API_KEY = 'YOUR_TRANSLATION_API_KEY';
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(text);
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
                // *** START OF THE FIX ***
                if (keysForInnerHTML.includes(key)) {
                    element.innerHTML = translatedText;
                } else if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password') && element.placeholder !== undefined) {
                    element.placeholder = translatedText;
                } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                     element.value = translatedText;
                } else if (element.nodeName === 'TITLE') {
                    element.textContent = translatedText;
                } else {
                    // This logic handles elements with children (like icons) that should not be overwritten.
                    let firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
                    if (firstTextNode) {
                        firstTextNode.textContent = translatedText + (element.children.length > 0 ? ' ' : ''); 
                    } else if (!element.children.length) { 
                         element.textContent = translatedText;
                    } else {
                        // Fallback for more complex elements without a simple leading text node.
                        // This part is complex and should be avoided if possible by structuring HTML better.
                        // For this project, it mainly handles cases where a key is on a container.
                        let textReplaced = false;
                        let newHTML = '';
                        element.childNodes.forEach(child => {
                            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '' && !textReplaced) {
                                newHTML += translatedText;
                                textReplaced = true;
                            } else {
                                newHTML += child.outerHTML || child.textContent;
                            }
                        });
                        if (textReplaced) {
                            element.innerHTML = newHTML;
                        }
                    }
                }
                // *** END OF THE FIX ***
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
                if (visibleCourses < 1) visibleCourses = 1; 
            }

            function updateSliderPosition() {
                if (!sliderTrack || !prevBtn || !nextBtn) return;
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
            
            calculateSliderParams();
            updateSliderPosition();
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
    } else {
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
                updateChatbotLanguage(currentLang);
                if (chatbotMessagesEl.children.length === 0) {
                    const welcomeMsgKey = 'chatbot_welcome';
                    const welcomeMsg = (translations[currentLang] && translations[currentLang][welcomeMsgKey]) 
                                     || (translations[BASE_LANGUAGE] && translations[BASE_LANGUAGE][welcomeMsgKey]) 
                                     || "Hello! How can I help you?";
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
                
                if (!botResponse) {
                     botResponse = (translations[BASE_LANGUAGE]?.chatbot_response_default || "I received: ") + `"${userMessage}"`;
                }

                resolve(botResponse);
            }, 1000);
        });
    }
    
    function updateChatbotLanguage(lang) {
        if (!chatbotWindow) return;
        const chatbotTitleEl = chatbotWindow.querySelector('[data-translate-key="chatbot_header_title"]') || chatbotWindow.querySelector('#chatbotHeader span');
        const chatbotInputEl = chatbotWindow.querySelector('[data-translate-key="chatbot_input_placeholder"]') || chatbotWindow.querySelector('#chatbotInput');
        const chatbotSendBtnEl = chatbotWindow.querySelector('#sendChatbotMessageBtn');

        const currentTranslations = translations[lang] || translations[BASE_LANGUAGE]; 

        if (chatbotTitleEl) {
            const key = chatbotTitleEl.dataset.translateKey || 'chatbot_header_title';
            chatbotTitleEl.textContent = currentTranslations[key] || translations[BASE_LANGUAGE][key];
        }
        if (chatbotInputEl) {
            const key = chatbotInputEl.dataset.translateKey || 'chatbot_input_placeholder';
            chatbotInputEl.placeholder = currentTranslations[key] || translations[BASE_LANGUAGE][key];
        }
        if (chatbotSendBtnEl && currentTranslations.chatbot_send_button) {
            chatbotSendBtnEl.textContent = currentTranslations.chatbot_send_button;
        }
    }

}); // End DOMContentLoaded