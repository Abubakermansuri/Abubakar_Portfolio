document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg');
            navbar.classList.replace('py-4', 'py-0'); // If you add padding classes later
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    // Reveal on Scroll Animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Trigger point
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // Trigger once on load
    reveal();

    // Close mobile menu on click
    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

            // Simulate network request
            setTimeout(() => {
                // Show success message
                successMessage.classList.remove('hidden');
                // Small delay to trigger opacity transition
                setTimeout(() => {
                    successMessage.classList.remove('opacity-0');
                    successMessage.classList.add('opacity-100');
                }, 50);

                // Reset button state silently in background
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                contactForm.reset();
            }, 1500);
        });

        // Send another message
        sendAnotherBtn.addEventListener('click', () => {
            successMessage.classList.remove('opacity-100');
            successMessage.classList.add('opacity-0');
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 500);
        });
    }
});
