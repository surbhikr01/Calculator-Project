let screen = document.getElementById('screen');
let screenValue = '';
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText; CustomElementRegistry
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}