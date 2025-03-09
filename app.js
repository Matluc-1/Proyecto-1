const amigos = []

// Actualizar lista de amigos en el DOM
const actualizarLista = () => {
    const listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('')
}

// Agregar amigo a la lista
const agregarAmigo = () => {
    const inputAmigo = document.getElementById('amigo')
    const nombreAmigo = inputAmigo.value.trim()

    if (!nombreAmigo) {
        alert('Por favor ingresa un nombre.')
        inputAmigo.style.border = '2px solid red'
        return
    }

    if (amigos.includes(nombreAmigo)) {
        alert('El amigo ya se encuentra en la lista.')
        return
    }

    inputAmigo.style.border = ''
    amigos.push(nombreAmigo)
    inputAmigo.value = ''
    actualizarLista()
}

// Mostrar la lista de amigos (innecesario ya que actualizarLista ya lo hace)
const mostrarAmigo = () => actualizarLista()

// Sorteo de amigo secreto
const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.')
        return
    }
    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSorteado}`
}
