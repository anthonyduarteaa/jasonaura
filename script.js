function lolzin() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dadinhos => {
            document.getElementById('local').innerText =
                `${dadinhos.nome} - ${dadinhos.idade} anos - ${dadinhos.cidade}`;
        })
}