document.addEventListener('DOMContentLoaded', function() {
    // ... existing translations object ...

    // ... existing setLanguage, loadLanguage functions ...

    // --- Mobile Menu Toggle Logic ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const languageSwitcher = document.querySelector('.language-switcher');

    if (mobileMenuToggle && mainNav && languageSwitcher) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            languageSwitcher.classList.toggle('active');
            // Optional: Change icon from bars to times when open
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a nav link is clicked (optional, but good UX)
    const navLinks = document.querySelectorAll('#mainNav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                languageSwitcher.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // ... rest of your existing JS code ...
});


document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            // Bạn có thể thêm lớp vào main-content để làm mờ hoặc đẩy nội dung khi sidebar mở
            // mainContent.classList.toggle('sidebar-open'); 
        });
    }
});