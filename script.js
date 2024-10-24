// script.js
function setupScrollButton() {
    document.getElementById("scrollButton").addEventListener("click", function() {
        const scrollTarget = window.innerHeight; // Rola 100% da altura da tela
        window.scrollTo({
            top: scrollTarget,
            behavior: "smooth" 
        });
    });
}

// Chama a função para configurar o botão após o carregamento da página
window.onload = setupScrollButton;

