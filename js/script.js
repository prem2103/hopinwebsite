// On load animation or interactions
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Scroll animation effect
    const img = document.querySelector("main img");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        img.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Reveal menu cards on scroll
    const cards = document.querySelectorAll(".menu-card");

    const revealOnScroll = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

    // Initial state
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
    });
});
