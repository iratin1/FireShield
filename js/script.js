document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");
    const img1 = document.getElementById("img1");  // Primeira imagem
    const img2 = document.getElementById("img2");  // Segunda imagem

    const fadeInOnScroll = () => {
        features.forEach((feature, index) => {
            const rect = feature.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                feature.style.opacity = "1";
                feature.style.transform = "translateY(0)";
                feature.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            }
            if (scrollY === 0) {
                feature.style.opacity = "0";
                feature.style.transform = "translateY(30px)";
            }
        });

        // Manipulação para a primeira imagem
        const img1Rect = img1.getBoundingClientRect();
        if (img1Rect.top < window.innerHeight) {
            img1.style.opacity = "1";
            img1.style.transform = "translateY(0)";
            img1.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        }

        // Manipulação para a segunda imagem
        const img2Rect = img2.getBoundingClientRect();
        if (img2Rect.top < window.innerHeight) {
            img2.style.opacity = "1";
            img2.style.transform = "translateY(0)";
            img2.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        }
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Chama a função uma vez ao carregar a página
});

// Obtendo elementos
const features = document.querySelectorAll('.feature'); // Todas as features
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// Função para abrir o popup com imagem
function openPopup(title, content, imageSrc) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupContent').innerText = content;
    document.getElementById('popupImage').src = imageSrc; // Define a imagem no popup
    popup.style.display = 'flex'; // Exibe o popup
}

// Função para fechar o popup
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Esconde o popup
});

// Fechar o popup clicando fora dele
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Esconde o popup se o clique for fora dele
    }
});

// Adicionando evento de clique nas features
features.forEach(feature => {
    feature.addEventListener('click', () => {
        // Dependendo do id da feature, exibe um popup diferente
        switch (feature.id) {
            case 'popSensor':
                openPopup('🔥 Sensor de Fumaça', 'O sistema comporta 4 sensores que quando no mínimo 2 são acionados, permitem a atuação do sistema.', 'path_to_your_image/sensor_image.jpg');
                break;
            case 'popAlerta':
                openPopup('🔔 Alerta Automático', 'Após a atuação dos sensores, é acionada a sinalização audiovisual.', 'path_to_your_image/alert_image.jpg');
                break;
            case 'popAcionamento':
                openPopup('🛡️ Acionamento Manual', 'A partir disso o operador pode realizar o acionamento do sistema que se dá por um simples botão localizado em pontos estratégicos e no painel.', 'path_to_your_image/manual_activation_image.jpg');
                break;
            default:
                break;
        }
    });
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
        (e.ctrlKey && e.key === "U")) {
      e.preventDefault();
    }
  });

  setInterval(function () {
    let before = new Date().getTime();
    debugger;
    let after = new Date().getTime();
    if (after - before > 100) {
      window.location.href = "https://www.google.com"; // Redireciona para outra página
    }
  }, 1000);
