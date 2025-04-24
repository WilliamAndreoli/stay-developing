// Elementos do DOM
const colorToggle = document.getElementById('color-toggle');
const body = document.body;
const home = document.getElementById('home');
const barra = document.getElementById('barra-navegacao');
const logo = document.getElementById('img-logo');
const logoRedes = document.getElementById('img-redes-logo');
const iconPath = document.getElementById('icon-path');

// Função para aplicar o tema
function aplicarTema(isDarkMode) {
    // Atualiza as classes
    body.classList.toggle('dark-mode', isDarkMode);
    home.classList.toggle('home-dark', isDarkMode);
    barra.classList.toggle('bg-dark', isDarkMode);
    
    // Atualiza as imagens
    logo.src = isDarkMode ? 'img/logo-branco-roxo.png' : 'img/logo.png';
    logoRedes.src = isDarkMode ? 'img/logo-branco-roxo.png' : 'img/logo.png';
    iconPath.setAttribute('fill', isDarkMode ? '#ffffff' : '#000000');
    
    // Atualiza os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('card-dark', isDarkMode);
        card.classList.toggle('card-light', !isDarkMode);
    });
    
    // Salva a preferência
    localStorage.setItem('darkMode', isDarkMode);
}

// Inicializa o tema baseado na preferência salva ou preferência do sistema
function inicializarTema() {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    let isDarkMode;
    if (savedTheme !== null) {
        isDarkMode = savedTheme === 'true';
    } else {
        isDarkMode = prefersDarkScheme.matches;
    }
    
    aplicarTema(isDarkMode);
    
    // Adiciona listener para mudanças na preferência do sistema
    prefersDarkScheme.addListener((e) => {
        if (localStorage.getItem('darkMode') === null) {
            aplicarTema(e.matches);
        }
    });
}

// Event listener para o botão de troca de tema
colorToggle.addEventListener('click', () => {
    const isDarkMode = !body.classList.contains('dark-mode');
    aplicarTema(isDarkMode);
});

// Inicializa o tema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarTema);

// Configura a navbar inicial
barra.classList.add('bg-light');