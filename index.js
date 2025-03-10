//Definir selectores
const form = document.querySelector('#form1')
const userInput = document.querySelector('#user')
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const checkPasswordInput = document.querySelector('#check-password');
const paisSelect = document.querySelector('#pais');

//Añadir Event Listener

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const user = userInput.value
    const name = nameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const checkPassword = checkPasswordInput.value
    const pais = paisSelect.value

    // console.log(b)

    let hobbies = "";
    const hobbyCheckboxes = document.querySelectorAll('[name="hobby"]:checked');
    for (let i = 0; i < hobbyCheckboxes.length; i++) {
        hobbies += hobbyCheckboxes[i].value + " ";
    }

    let country = document.form1.pais.value
    let sexo = document.form1.genero.value
    // console.log(country)

    if(user=="" || name=="" || lastName== "" || email== "" || password=="" || checkPassword== "" || pais== "" || hobbies.length == 0){
        alert("Por favor, complete todos los campos")
    }

if(password != checkPassword || password == ""){
    alert("las claves deben ser iguales y no pueden estar en blanco")
}

let formMessage = `Usuario: ${user}\nNombre: ${name}\nApellido: ${lastName}\nEmail: ${email}\nPaís: ${pais}\nHobbies: ${hobbies.trim()}\nGénero: ${sexo}`;

    // Display the form message
    alert(formMessage);
    console.log({
        user,
        name,
        lastName,
        email,
        password,
        checkPassword,
        pais
    });
})