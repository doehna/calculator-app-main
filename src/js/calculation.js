import {
    getActionFromLocalStorage, 
    getIsSubmittedFromLocalStorage, 
    getResultFromLocalStorage, 
    setIsSubmittedInLocalStorage, 
    setResultInLocalStorage
} from  "./localStorage";

function calculateResult(screen) {
    // in case action button was clicked without changing the value
    let hasChanged = getIsSubmittedFromLocalStorage() === 'false';

    let result = parseFloat(getResultFromLocalStorage());
    let action = getActionFromLocalStorage();
    let value = parseFloat(screen.innerHTML);

    value = isNaN(value) ? 0 : value;
    result = !isNaN(result) && hasChanged ? performOperation(action, result, value) : value;

    setIsSubmittedInLocalStorage('true');
    setResultInLocalStorage(result);
    screen.innerHTML = countNumberOfIntegerDigits(result) > 12 ? result.toExponential(7) : result;
}

function performOperation(action, result, value) {
    switch (action) {
        case '+':
            result = result + value;
            break;
        case '-':
            result = result - value;
            break;
        case 'x':
            result = result * value;
            break;
        case '/':
            if (value !== 0) {
                result = result / value;
            }
            else {
                result = 'NOT A NUMBER'
            }
            break;
        default:
            break;
    }
    return result;
}

function countNumberOfIntegerDigits(number) {
    return number.toString().length;
}

export { calculateResult }