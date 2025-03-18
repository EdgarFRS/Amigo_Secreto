let amigos = [];

function agregarAmigo (){
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Agrega el nombre de tu amigo');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Tu amigo ya fue agregado');
        return;
    }

        let lista = document.getElementById('listaAmigos');

        amigos.push(amigo.value);

        if (lista.textContent == '') {
        lista.textContent = amigo.value;
        } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
        }

     amigo.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega por lo menos un amigo para el sorteo');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}