const allQuestions = {
    // English Exams
    en: {
        'mid-term-math': [
            { question: "What is the limit of f(x) = (x^2 - 4) / (x - 2) as x approaches 2?", answers: ["0", "4", "Does not exist", "Infinity"], correct: 1 },
            { question: "Which function is continuous everywhere?", answers: ["f(x) = 1/x", "f(x) = tan(x)", "f(x) = x^3 - 2x + 1", "f(x) = ln(x)"], correct: 2 },
            { question: "The derivative of f(x) = 5x^4 is:", answers: ["20x^3", "5x^3", "20x^4", "4x^5"], correct: 0 },
            { question: "What is the domain of the function f(x) = sqrt(x-3)?", answers: ["x > 3", "x < 3", "x >= 3", "All real numbers"], correct: 2 },
            { question: "An inflection point occurs where the...?", answers: ["First derivative is zero", "Second derivative is zero or undefined", "Function is zero", "Slope is constant"], correct: 1 },
            { question: "What is the value of sin(π/2)?", answers: ["0", "1", "-1", "0.5"], correct: 1 },
            { question: "If a function is differentiable at a point, it must also be...", answers: ["Integrable", "Discontinuous", "Undefined", "Continuous"], correct: 3 },
            { question: "The limit of (sin x)/x as x approaches 0 is:", answers: ["0", "1", "Infinity", "Undefined"], correct: 1 },
            { question: "What type of discontinuity does f(x) = |x|/x have at x=0?", answers: ["Removable", "Infinite", "Jump", "Continuous"], correct: 2 },
            { question: "The function f(x) = x^3 - 6x^2 + 5 is concave down on which interval?", answers: ["(-∞, 2)", "(2, ∞)", "(-∞, ∞)", "(0, 2)"], correct: 0 }
        ],
        'final-physics': [
            { question: "Newton's First Law is also known as the law of:", answers: ["Inertia", "Action-Reaction", "Universal Gravitation", "Energy Conservation"], correct: 0 },
            { question: "What is the unit of electric charge?", answers: ["Ampere", "Volt", "Ohm", "Coulomb"], correct: 3 },
            { question: "The first law of thermodynamics is a statement of:", answers: ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Entropy increase"], correct: 1 },
            { question: "Which of these is a vector quantity?", answers: ["Speed", "Mass", "Temperature", "Velocity"], correct: 3 },
            { question: "What type of energy is stored in a compressed spring?", answers: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy"], correct: 1 },
            { question: "Sound waves are what type of waves?", answers: ["Transverse", "Longitudinal", "Electromagnetic", "Surface"], correct: 1 },
            { question: "The phenomenon of light bending as it passes from one medium to another is called:", answers: ["Reflection", "Diffraction", "Refraction", "Interference"], correct: 2 },
            { question: "In a series circuit, the total resistance is:", answers: ["Less than the smallest resistance", "The average of all resistances", "The sum of all resistances", "Equal to the largest resistance"], correct: 2 },
            { question: "What does 'c' represent in the equation E=mc^2?", answers: ["Charge", "Mass", "The speed of light", "Energy"], correct: 2 },
            { question: "Which law states that for every action, there is an equal and opposite reaction?", answers: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Ohm's Law"], correct: 2 }
        ],
        '15-minute-chemistry': [
            { question: "What is the chemical symbol for Gold?", answers: ["Ag", "Au", "Pb", "Fe"], correct: 1 },
            { question: "Which element has the atomic number 1?", answers: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correct: 2 },
            { question: "What type of bond is formed by the transfer of electrons?", answers: ["Covalent", "Ionic", "Metallic", "Hydrogen"], correct: 1 },
            { question: "What is the pH of a neutral solution?", answers: ["0", "14", "7", "1"], correct: 2 },
            { question: "What are isotopes?", answers: ["Atoms of the same element with different numbers of protons", "Atoms of the same element with different numbers of neutrons", "Atoms of different elements with the same number of neutrons", "Atoms with a positive charge"], correct: 1 },
            { question: "Which of the following is a noble gas?", answers: ["Oxygen", "Nitrogen", "Neon", "Chlorine"], correct: 2 },
            { question: "The process of a solid turning directly into a gas is called:", answers: ["Evaporation", "Condensation", "Melting", "Sublimation"], correct: 3 },
            { question: "What is the main component of natural gas?", answers: ["Ethane", "Propane", "Butane", "Methane"], correct: 3 },
            { question: "In the periodic table, which group are the halogens in?", answers: ["Group 1", "Group 18", "Group 17", "Group 2"], correct: 2 },
            { question: "What is the formula for table salt?", answers: ["H2O", "CO2", "NaCl", "C6H12O6"], correct: 2 }
        ],
        'soft-skills-assessment': [
            { question: "Which of these is a key component of active listening?", answers: ["Interrupting to ask questions", "Formulating your response while the other person is talking", "Summarizing and paraphrasing what was said", "Thinking about something else"], correct: 2 },
            { question: "What does the 'S' in SMART goals stand for?", answers: ["Simple", "Strategic", "Specific", "Sincere"], correct: 2 },
            { question: "When receiving constructive criticism, it is best to:", answers: ["Become defensive and justify your actions", "Listen openly and ask for clarification", "Blame others for the issue", "Ignore the feedback completely"], correct: 1 },
            { question: "Which of the following is a characteristic of good teamwork?", answers: ["Poor communication", "Individual goals over team goals", "Mutual respect and collaboration", "Lack of accountability"], correct: 2 },
            { question: "Effective time management involves:", answers: ["Doing the easiest tasks first", "Prioritizing tasks based on importance and urgency", "Multitasking on all projects simultaneously", "Waiting until the last minute"], correct: 1 },
            { question: "Which communication style is typically the most effective in a professional setting?", answers: ["Passive", "Aggressive", "Passive-Aggressive", "Assertive"], correct: 3 },
            { question: "Empathy is the ability to:", answers: ["Feel sorry for someone", "Understand and share the feelings of another", "Give good advice", "Solve someone's problems"], correct: 1 },
            { question: "A key aspect of problem-solving is:", answers: ["Ignoring the problem until it goes away", "Finding someone to blame", "Defining the problem clearly before seeking solutions", "Choosing the first solution that comes to mind"], correct: 2 },
            { question: "How can you best demonstrate reliability?", answers: ["Being consistently late", "Making promises you can't keep", "Meeting deadlines and fulfilling commitments", "Avoiding responsibility"], correct: 2 },
            { question: "Networking is primarily about:", answers: ["Collecting as many business cards as possible", "Building mutually beneficial relationships", "Only asking for favors", "Talking about yourself"], correct: 1 }
        ],
        'macroeconomics-test': [
            { question: "What is Gross Domestic Product (GDP)?", answers: ["The total value of all goods and services produced by a country's citizens, regardless of location.", "The total value of all goods and services produced within a country's borders in a specific time period.", "The total income received by a country from overseas.", "The total amount of government spending."], correct: 1 },
            { question: "Inflation is best described as:", answers: ["A decrease in the general price level", "An increase in the general price level", "A decrease in the unemployment rate", "An increase in economic output"], correct: 1 },
            { question: "Monetary policy is typically controlled by a country's:", answers: ["President or Prime Minister", "Congress or Parliament", "Central Bank", "Chamber of Commerce"], correct: 2 },
            { question: "When a government's spending exceeds its tax revenue, it results in a:", answers: ["Budget surplus", "Budget deficit", "Balanced budget", "Trade surplus"], correct: 1 },
            { question: "Which of the following would likely increase Aggregate Demand?", answers: ["An increase in taxes", "A decrease in government spending", "A decrease in interest rates", "An increase in imports"], correct: 2 },
            { question: "The unemployment rate measures the percentage of the:", answers: ["Total population that is not working", "Labor force that is unemployed", "Adult population that is not working", "Labor force that is underemployed"], correct: 1 },
            { question: "What is the primary tool of fiscal policy?", answers: ["The money supply", "Interest rates", "Government spending and taxation", "International trade regulations"], correct: 2 },
            { question: "A recession is generally defined as a period of:", answers: ["Rising inflation", "Significant decline in economic activity lasting more than a few months", "Increasing government surpluses", "Rapid population growth"], correct: 1 },
            { question: "What is 'opportunity cost'?", answers: ["The price paid for a good or service", "The cost of the next-best alternative when a choice is made", "The total cost of production", "The tax on an imported good"], correct: 1 },
            { question: "Which organization works to foster global monetary cooperation and secure financial stability?", answers: ["The World Bank", "The World Trade Organization (WTO)", "The International Monetary Fund (IMF)", "The United Nations (UN)"], correct: 2 }
        ],
        'general-knowledge': [
            { question: "What is the capital of Japan?", answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
            { question: "Who wrote 'Hamlet'?", answers: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"], correct: 1 },
            { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
            { question: "What is the largest mammal in the world?", answers: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"], correct: 2 },
            { question: "In which year did the Titanic sink?", answers: ["1905", "1912", "1918", "1923"], correct: 1 },
            { question: "What is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Quartz", "Diamond"], correct: 3 },
            { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: 2 },
            { question: "What is the chemical formula for water?", answers: ["CO2", "O2", "H2O", "NaCl"], correct: 2 },
            { question: "Which country is home to the kangaroo?", answers: ["South Africa", "India", "Australia", "Brazil"], correct: 2 },
            { question: "What is the currency of the United Kingdom?", answers: ["Euro", "Dollar", "Pound Sterling", "Yen"], correct: 2 }
        ]
    },
    // Vietnamese Exams
    vi: {
        'bai-kiem-tra-giua-ky-toan': [
            { question: "Giới hạn của f(x) = (x^2 - 4) / (x - 2) khi x tiến tới 2 là bao nhiêu?", answers: ["0", "4", "Không tồn tại", "Vô cực"], correct: 1 },
            { question: "Hàm số nào sau đây liên tục trên toàn bộ tập xác định?", answers: ["f(x) = 1/x", "f(x) = tan(x)", "f(x) = x^3 - 2x + 1", "f(x) = ln(x)"], correct: 2 },
            { question: "Đạo hàm của hàm số f(x) = 5x^4 là:", answers: ["20x^3", "5x^3", "20x^4", "4x^5"], correct: 0 },
            { question: "Tập xác định của hàm số f(x) = sqrt(x-3) là gì?", answers: ["x > 3", "x < 3", "x >= 3", "Tất cả các số thực"], correct: 2 },
            { question: "Điểm uốn xảy ra khi...?", answers: ["Đạo hàm cấp một bằng không", "Đạo hàm cấp hai bằng không hoặc không xác định", "Hàm số bằng không", "Hệ số góc không đổi"], correct: 1 },
            { question: "Giá trị của sin(π/2) là bao nhiêu?", answers: ["0", "1", "-1", "0.5"], correct: 1 },
            { question: "Nếu một hàm số khả vi tại một điểm, nó cũng phải...?", answers: ["Khả tích", "Gián đoạn", "Không xác định", "Liên tục"], correct: 3 },
            { question: "Giới hạn của (sin x)/x khi x tiến tới 0 là:", answers: ["0", "1", "Vô cực", "Không xác định"], correct: 1 },
            { question: "Hàm số f(x) = |x|/x có loại gián đoạn nào tại x=0?", answers: ["Gián đoạn có thể loại bỏ", "Gián đoạn vô cực", "Gián đoạn bước nhảy", "Liên tục"], correct: 2 },
            { question: "Hàm số f(x) = x^3 - 6x^2 + 5 lõm trên khoảng nào?", answers: ["(-∞, 2)", "(2, ∞)", "(-∞, ∞)", "(0, 2)"], correct: 0 }
        ],
        'bai-kiem-tra-cuoi-ky-vat-ly': [
            { question: "Định luật I Newton còn được gọi là định luật:", answers: ["Quán tính", "Tương tác", "Hấp dẫn vũ trụ", "Bảo toàn năng lượng"], correct: 0 },
            { question: "Đơn vị của điện tích là gì?", answers: ["Ampe", "Volt", "Ohm", "Coulomb"], correct: 3 },
            { question: "Định luật thứ nhất của nhiệt động lực học là một phát biểu của:", answers: ["Bảo toàn khối lượng", "Bảo toàn năng lượng", "Bảo toàn động lượng", "Sự tăng của entropy"], correct: 1 },
            { question: "Đại lượng nào sau đây là đại lượng vector?", answers: ["Tốc độ", "Khối lượng", "Nhiệt độ", "Vận tốc"], correct: 3 },
            { question: "Năng lượng nào được lưu trữ trong một lò xo bị nén?", answers: ["Động năng", "Thế năng", "Nhiệt năng", "Hóa năng"], correct: 1 },
            { question: "Sóng âm là loại sóng gì?", answers: ["Sóng ngang", "Sóng dọc", "Sóng điện từ", "Sóng bề mặt"], correct: 1 },
            { question: "Hiện tượng ánh sáng bị bẻ cong khi đi từ môi trường này sang môi trường khác gọi là:", answers: ["Phản xạ", "Nhiễu xạ", "Khúc xạ", "Giao thoa"], correct: 2 },
            { question: "Trong một mạch điện nối tiếp, tổng điện trở là:", answers: ["Nhỏ hơn điện trở nhỏ nhất", "Giá trị trung bình của tất cả điện trở", "Tổng của tất cả các điện trở", "Bằng với điện trở lớn nhất"], correct: 2 },
            { question: "'c' trong phương trình E=mc^2 đại diện cho điều gì?", answers: ["Điện tích", "Khối lượng", "Tốc độ ánh sáng", "Năng lượng"], correct: 2 },
            { question: "Định luật nào phát biểu rằng với mỗi lực tác động, luôn có một phản lực bằng về độ lớn và ngược chiều?", answers: ["Định luật I Newton", "Định luật II Newton", "Định luật III Newton", "Định luật Ohm"], correct: 2 }
        ],
        'bai-kiem-tra-15-phut-hoa-hoc': [
            { question: "Ký hiệu hóa học của Vàng là gì?", answers: ["Ag", "Au", "Pb", "Fe"], correct: 1 },
            { question: "Nguyên tố nào có số hiệu nguyên tử là 1?", answers: ["Heli", "Oxy", "Hydro", "Carbon"], correct: 2 },
            { question: "Loại liên kết nào được hình thành do sự cho và nhận electron?", answers: ["Liên kết cộng hóa trị", "Liên kết ion", "Liên kết kim loại", "Liên kết hydro"], correct: 1 },
            { question: "Độ pH của dung dịch trung tính là bao nhiêu?", answers: ["0", "14", "7", "1"], correct: 2 },
            { question: "Đồng vị là gì?", answers: ["Các nguyên tử của cùng một nguyên tố có số proton khác nhau", "Các nguyên tử của cùng một nguyên tố có số neutron khác nhau", "Các nguyên tử của các nguyên tố khác nhau có cùng số neutron", "Các nguyên tử có điện tích dương"], correct: 1 },
            { question: "Chất nào sau đây là khí hiếm?", answers: ["Oxy", "Nitơ", "Neon", "Clo"], correct: 2 },
            { question: "Quá trình một chất rắn chuyển thẳng thành thể khí được gọi là:", answers: ["Bay hơi", "Ngưng tụ", "Nóng chảy", "Thăng hoa"], correct: 3 },
            { question: "Thành phần chính của khí thiên nhiên là gì?", answers: ["Etan", "Propan", "Butan", "Metan"], correct: 3 },
            { question: "Trong bảng tuần hoàn, nhóm halogen là nhóm nào?", answers: ["Nhóm 1", "Nhóm 18", "Nhóm 17", "Nhóm 2"], correct: 2 },
            { question: "Công thức hóa học của muối ăn là gì?", answers: ["H2O", "CO2", "NaCl", "C6H12O6"], correct: 2 }
        ],
        'danh-gia-ky-nang-mem': [
            { question: "Yếu tố nào sau đây là thành phần chính của việc lắng nghe chủ động?", answers: ["Ngắt lời để đặt câu hỏi", "Hình thành câu trả lời của bạn trong khi người khác đang nói", "Tóm tắt và diễn giải lại những gì đã được nói", "Suy nghĩ về một điều gì đó khác"], correct: 2 },
            { question: "Chữ 'S' trong mục tiêu SMART là viết tắt của từ gì?", answers: ["Đơn giản (Simple)", "Chiến lược (Strategic)", "Cụ thể (Specific)", "Chân thành (Sincere)"], correct: 2 },
            { question: "Khi nhận được những lời chỉ trích mang tính xây dựng, tốt nhất bạn nên:", answers: ["Trở nên phòng thủ và biện minh cho hành động của mình", "Lắng nghe cởi mở và yêu cầu làm rõ", "Đổ lỗi cho người khác về vấn đề", "Hoàn toàn phớt lờ phản hồi"], correct: 1 },
            { question: "Điều nào sau đây là đặc điểm của làm việc nhóm tốt?", answers: ["Giao tiếp kém", "Mục tiêu cá nhân hơn mục tiêu của nhóm", "Tôn trọng lẫn nhau và hợp tác", "Thiếu trách nhiệm"], correct: 2 },
            { question: "Quản lý thời gian hiệu quả bao gồm:", answers: ["Làm những công việc dễ nhất trước", "Ưu tiên công việc dựa trên tầm quan trọng và tính cấp bách", "Đa nhiệm trên tất cả các dự án cùng một lúc", "Chờ đến phút cuối"], correct: 1 },
            { question: "Phong cách giao tiếp nào thường hiệu quả nhất trong môi trường chuyên nghiệp?", answers: ["Thụ động (Passive)", "Hung hăng (Aggressive)", "Thụ động-Hung hăng (Passive-Aggressive)", "Quả quyết (Assertive)"], correct: 3 },
            { question: "Sự đồng cảm là khả năng:", answers: ["Cảm thấy tiếc cho ai đó", "Hiểu và chia sẻ cảm xúc của người khác", "Cho lời khuyên tốt", "Giải quyết vấn đề của ai đó"], correct: 1 },
            { question: "Một khía cạnh quan trọng của việc giải quyết vấn đề là:", answers: ["Lờ đi vấn đề cho đến khi nó biến mất", "Tìm người để đổ lỗi", "Xác định vấn đề rõ ràng trước khi tìm giải pháp", "Chọn giải pháp đầu tiên xuất hiện trong đầu"], correct: 2 },
            { question: "Làm thế nào bạn có thể thể hiện sự đáng tin cậy một cách tốt nhất?", answers: ["Thường xuyên đi trễ", "Hứa những điều bạn không thể giữ", "Hoàn thành đúng hạn và giữ đúng cam kết", "Trốn tránh trách nhiệm"], correct: 2 },
            { question: "Xây dựng mạng lưới quan hệ (Networking) chủ yếu là về:", answers: ["Thu thập càng nhiều danh thiếp càng tốt", "Xây dựng các mối quan hệ cùng có lợi", "Chỉ yêu cầu sự giúp đỡ", "Nói về bản thân"], correct: 1 }
        ],
        'kiem-tra-kinh-te-vi-mo': [
            { question: "Tổng sản phẩm quốc nội (GDP) là gì?", answers: ["Tổng giá trị của tất cả hàng hóa và dịch vụ do công dân một nước sản xuất, không phân biệt địa điểm.", "Tổng giá trị của tất cả hàng hóa và dịch vụ được sản xuất trong biên giới một quốc gia trong một khoảng thời gian cụ thể.", "Tổng thu nhập mà một quốc gia nhận được từ nước ngoài.", "Tổng số chi tiêu của chính phủ."], correct: 1 },
            { question: "Lạm phát được mô tả chính xác nhất là:", answers: ["Sự sụt giảm mức giá chung", "Sự gia tăng mức giá chung", "Sự sụt giảm tỷ lệ thất nghiệp", "Sự gia tăng sản lượng kinh tế"], correct: 1 },
            { question: "Chính sách tiền tệ thường được kiểm soát bởi:", answers: ["Tổng thống hoặc Thủ tướng", "Quốc hội", "Ngân hàng Trung ương", "Phòng Thương mại"], correct: 2 },
            { question: "Khi chi tiêu của chính phủ vượt quá doanh thu từ thuế, điều đó dẫn đến:", answers: ["Thặng dư ngân sách", "Thâm hụt ngân sách", "Ngân sách cân bằng", "Thặng dư thương mại"], correct: 1 },
            { question: "Yếu tố nào sau đây có khả năng làm tăng Tổng cầu?", answers: ["Sự gia tăng thuế", "Sự sụt giảm chi tiêu của chính phủ", "Sự sụt giảm lãi suất", "Sự gia tăng nhập khẩu"], correct: 2 },
            { question: "Tỷ lệ thất nghiệp đo lường phần trăm của:", answers: ["Tổng dân số không có việc làm", "Lực lượng lao động đang thất nghiệp", "Dân số trưởng thành không có việc làm", "Lực lượng lao động thiếu việc làm"], correct: 1 },
            { question: "Công cụ chính của chính sách tài khóa là gì?", answers: ["Cung tiền", "Lãi suất", "Chi tiêu và thuế của chính phủ", "Quy định thương mại quốc tế"], correct: 2 },
            { question: "Suy thoái kinh tế thường được định nghĩa là một giai đoạn:", answers: ["Lạm phát gia tăng", "Sụt giảm đáng kể hoạt động kinh tế kéo dài hơn một vài tháng", "Thặng dư chính phủ tăng", "Tăng trưởng dân số nhanh chóng"], correct: 1 },
            { question: "'Chi phí cơ hội' là gì?", answers: ["Giá phải trả cho một hàng hóa hoặc dịch vụ", "Chi phí của phương án thay thế tốt nhất tiếp theo khi một lựa chọn được đưa ra", "Tổng chi phí sản xuất", "Thuế đánh vào hàng hóa nhập khẩu"], correct: 1 },
            { question: "Tổ chức nào hoạt động để thúc đẩy hợp tác tiền tệ toàn cầu và đảm bảo ổn định tài chính?", answers: ["Ngân hàng Thế giới (World Bank)", "Tổ chức Thương mại Thế giới (WTO)", "Quỹ Tiền tệ Quốc tế (IMF)", "Liên Hợp Quốc (UN)"], correct: 2 }
        ],
        'kiem-tra-kien-thuc-tong-hop': [
            { question: "Thủ đô của Nhật Bản là gì?", answers: ["Bắc Kinh", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
            { question: "Ai đã viết vở kịch 'Hamlet'?", answers: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"], correct: 1 },
            { question: "Hành tinh nào được mệnh danh là 'Hành tinh Đỏ'?", answers: ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thổ"], correct: 1 },
            { question: "Loài động vật có vú lớn nhất thế giới là gì?", answers: ["Voi", "Hươu cao cổ", "Cá voi xanh", "Cá mập trắng lớn"], correct: 2 },
            { question: "Tàu Titanic bị chìm vào năm nào?", answers: ["1905", "1912", "1918", "1923"], correct: 1 },
            { question: "Chất tự nhiên cứng nhất trên Trái Đất là gì?", answers: ["Vàng", "Sắt", "Thạch anh", "Kim cương"], correct: 3 },
            { question: "Ai đã vẽ bức tranh Mona Lisa?", answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: 2 },
            { question: "Công thức hóa học của nước là gì?", answers: ["CO2", "O2", "H2O", "NaCl"], correct: 2 },
            { question: "Quốc gia nào là quê hương của loài kangaroo?", answers: ["Nam Phi", "Ấn Độ", "Úc", "Brazil"], correct: 2 },
            { question: "Đơn vị tiền tệ của Vương quốc Anh là gì?", answers: ["Euro", "Dollar", "Bảng Anh", "Yen"], correct: 2 }
        ]
    }
};