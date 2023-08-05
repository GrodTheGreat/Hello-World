const button = document.getElementById('helloButton');
let buttonPressed = false;
const buttonMessage = document.getElementById('buttonMessage');

button.addEventListener('click', () => {
    buttonPressed = !buttonPressed;
    if (buttonPressed) {
        buttonMessage.textContent = 'Hello to you!';
    }
    else {
        buttonMessage.textContent = '';
    }
})
