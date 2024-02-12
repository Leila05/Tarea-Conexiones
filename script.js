console.log("page loaded...");

function change() {
    var h1 = document.querySelector("h1");
    h1.innerText = "Leila Vera";
}

function form() {
    document.getElementById('editProfile').style.display = 'block';
}

function guardarUsuario() {
    var newUsername = document.getElementById('newUsername').value;
    document.getElementById('username').textContent = newUsername;
    document.getElementById('editProfile').style.display = 'none';
}

//Elimina users
function decrementra_eliminar(id) {
    const elemento = document.getElementById(id);
    const span = document.getElementById('conec');
    var valor = span.textContent;
    console.log(valor);
    valor--;
    span.textContent = valor;
    if (elemento) {
        elemento.remove();
    } else {
        console.log("Error! No se encontró el usuario.");
    }
}

function incrementar_ocultar(id) {
    const elemento = document.getElementById('conec');
    const accept = document.getElementById(id);
    var valor = elemento.textContent;
    console.log(valor);
    valor++;
    elemento.textContent = valor;
    accept.style.display = "none";
}




