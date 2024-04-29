import { getIsSubmittedFromLocalStorage, setIsSubmittedInLocalStorage} from './localStorage'

function addCharacterToScreen(screen, button) {
    let value = screen.innerHTML.trim();
    let isSubmitted = getIsSubmittedFromLocalStorage() === 'true';

    if (isSubmitted) {
        screen.innerHTML = button.textContent;
        setIsSubmittedInLocalStorage('false');
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

export { addCharacterToScreen }