// Initialize Lucide icons
lucide.createIcons();

// Custom Cursor Blob
const blob = document.querySelector('.cursor-blob');
window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Reveal animations on scroll
    revealOnScroll();
};

// Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.glass-card, .project-card, .section-header');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
        }
    });
}

// Initial state for reveal
document.querySelectorAll('.glass-card, .project-card, .section-header').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
});

// Staggered reveal for skills
document.querySelectorAll('.skill-category').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
});

// Run initially
revealOnScroll();

// Smooth reveal for text (Hero)
const revealText = document.querySelector('.reveal-text');
if (revealText) {
    revealText.style.opacity = "0";
    revealText.style.transform = "translateY(20px)";
    setTimeout(() => {
        revealText.style.opacity = "1";
        revealText.style.transform = "translateY(0)";
    }, 500);
}
