document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        if (event.target.textContent === 'Início');
        } else if (event.target.textContent === 'Sobre');
        } else if (event.target.textContent === 'Contato');
    }
});
