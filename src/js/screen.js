import * as localStorage from './localStorage'

function addCharacter(screen, button) {
    let value = screen.innerHTML.trim();
    let isSubmitted = localStorage.getIsSubmitted() === 'true';

    if (isSubmitted) {
        screen.innerHTML = button.textContent;
        localStorage.setIsSubmitted('false');
    }
    else {
        let isShorterThen8Char = value.length < 8;
        let isDot = button.textContent === '.';
        let isDotInScreen = screen.innerHTML.indexOf('.') >= 0;
        if (isShorterThen8Char && (!isDot || !isDotInScreen)) {
            screen.innerHTML = screen.innerHTML + button.textContent;
        }
    }
}

export { addCharacter }