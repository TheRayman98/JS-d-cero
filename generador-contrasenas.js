const rangeContainer = document.querySelector('.range-cont');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lengthCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generate-btn');
const passwordHeading = document.querySelector('.password-cont');
const form = document.getElementById('password-form');

const handleChange = () => {
    lengthCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    //aquí se obtienen las opciónes seleccionadas en el html
    const upperCase = document.getElementById('inp-uppercase').checked;
    const lowerCase = document.getElementById('inp-lowercase').checked;
    const numbers = document.getElementById('inp-numbers').checked;
    const symbols = document.getElementById('inp-symbols').checked;

    //aquí están los conjuntos de caracteres disponibles para su uso
    if (upperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characters += '0123456789';
    if (symbols) characters += '!@#$%^&*()_+';

    // por si no selecciona ninguna opción
    if (characters === '') {
        passwordHeading.textContent = 'Por favor selecciona al menos una opción';
        return '';
    }

    //aquí se genera la contraseña
    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));

        // se multiplican por el largo de la cadena para obtener un número aleatorio porque math.random genera un número entre 0 y 1
    }
    return result;
    console.log(result);
};

// aquí se imprime la contraseña
const printPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if (password) {
        passwordHeading.textContent = password; //Muestra la contraseña generada
    }

};

//configurador de eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', printPassword);