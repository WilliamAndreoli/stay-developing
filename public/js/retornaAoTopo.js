// Selecione o botão de "back to top"
const backToTopButton = document.getElementById('back-to-top');

// Adicione um evento de clique ao botão
backToTopButton.addEventListener('click', () => {
    // Rola a página de volta ao topo suavemente
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adicione um evento de rolagem para mostrar ou ocultar o botão de "back to top"
window.addEventListener('scroll', () => {
    // Se a página estiver rolando para baixo
    if (window.scrollY > 200) {
        // Mostra o botão de "back to top"
        backToTopButton.style.display = 'block';
    } else {
        // Oculta o botão de "back to top"
        backToTopButton.style.display = 'none';
    }
});