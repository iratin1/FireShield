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

// Função para abrir o popup com título, conteúdo e imagem
function openPopup(title, content, imageSrc) {
    // Obtendo o elemento do popup
    const popup = document.getElementById('popup');
    
    // Definindo o título
    document.getElementById('popupTitle').innerText = title;

    // Definindo o conteúdo com suporte para HTML (usando innerHTML)
    document.getElementById('popupContent').innerHTML = content;

    // Definindo a imagem do popup
    document.getElementById('popupImage').src = imageSrc;

    // Exibe o popup
    popup.style.display = 'flex'; // Exibe o popup, tornando-o visível
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
                openPopup('🔦 Sensor Fotossensível',
                    '<b>Sensor fotossensível com saída a relé NA</b><br><br>' + 
                    'Instalação a 4 fios, positivo, negativo e relé NA.',
                     'css/Imagens/Fotossensivel.jpeg');
                break;
            case 'popAlerta':
                openPopup('🔔 Alerta Automático', '<b>Sinalizador audiovisual.</b><br><br>'+
                    'Sinalização após a atuação dos sensores.', 
                    'css/Imagens/Sinal.jpeg');
                break;
            case 'popAcionamento':
                openPopup('🛡️ Acionamento Manual', 
                    '<b>Botão de emergencia estilo soco.</b><br><br>' +
                     'Responsavel pela atuação do sistema na injeção de CO2 no interior do painel (Contato NA).', 
                    'css/Imagens/Botao.png');
                break;
            case 'popFoto':
                openPopup('🔥 Sensor de Fumaça', 
        '<b>Sensor / Detector de Fumaça com Saída Relé NA tipo Convencional.</b><br><br>' +
        'Instalação a 4 fios, positivo, negativo e relé NA.',
        'css/Imagens/Sensor.jpg'
    );
                break;    
            default:
                break;
        }
    });
});

 /*document.addEventListener("contextmenu", function (e) {
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
  }, 1000);*/
