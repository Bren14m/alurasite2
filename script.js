// Funcionalidade de alternar o menu lateral
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px'; // Fecha o menu
    } else {
        sideMenu.style.left = '0px'; // Abre o menu
    }
});

// Para melhorar a navegação do carrossel
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        // Configuração básica do carrossel
        loop: true, // Faz o carrossel voltar ao início automaticamente
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // Alterne as imagens a cada 3 segundos
        },
        effect: 'fade', // Transição suave
        speed: 1000, // Duração da transição
    });
});
