document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1); // remove o "#"
            mostrarSecao(id);
        });
    });

    function mostrarSecao(id) {
        const secoes = document.querySelectorAll('.secao');
        secoes.forEach(secao => {
            secao.classList.remove('ativa');
        });
        const alvo = document.getElementById(id);
        if (alvo) {
            alvo.classList.add('ativa');
        }
    }
});
