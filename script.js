document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    const fadeInOnScroll = () => {
        features.forEach((feature, index) => {
            const rect = feature.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                feature.style.opacity = "1";
                feature.style.transform = "translateY(0)";
                feature.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

// Botão com efeito de alerta
document.getElementById("infoButton").addEventListener("click", function () {
    alert("Nosso sistema previne incêndios de forma eficiente! Saiba mais.");
});