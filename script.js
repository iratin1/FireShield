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
            if (scrollY === 0){
                feature.style.opacity = "0";
                feature.style.transform = "translateY(30px)";
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

window.onload = () => {
    setTimeout(() => {
        window.scrollTo(0, 0); // Garante que a página seja rolada para o topo
      }, 10);
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    
    
    // Função que verifica a posição da rolagem
    function checkScrollPosition() {
      if (window.scrollY === 0) {
        scrollDownBtn.classList.add('show'); // Mostra o botão de "Role para baixo"
        scrollUpBtn.classList.remove('show'); // Esconde o botão de "Voltar para cima"
      } else {
        scrollDownBtn.classList.remove('show'); // Esconde o botão de "Role para baixo"
        scrollUpBtn.classList.add('show'); // Mostra o botão de "Voltar para cima"
      }
    }
    
    // Chama a função ao carregar a página e sempre que a rolagem mudar
    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    
    // Função para rolar suavemente
    function smoothScrollTo(targetPosition) {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duração da animação em milissegundos
      let startTime = null;
    
      function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOut(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }
    
      function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
    
      requestAnimationFrame(scrollAnimation);
    }
     
    // Ação para o botão "Voltar para cima"
    scrollUpBtn.onclick = () => {
      smoothScrollTo(0); // Rola suavemente para o topo
    };
  };
  


// Botão com efeito de alerta
document.getElementById("infoButton").addEventListener("click", function () {
    alert("Nosso sistema previne incêndios de forma eficiente! Saiba mais.");
});