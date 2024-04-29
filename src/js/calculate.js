import * as localStorage from  "./localStorage";

function calculateResult(screen) {
    // in case action button was clicked without changing the value
    let hasChanged = localStorage.getIsSubmitted() === 'false';

    let result = parseFloat(localStorage.getResult());
    let action = localStorage.getAction();
    let value = parseFloat(screen.innerHTML);

    value = isNaN(value) ? 0 : value;
    result = !isNaN(result) && hasChanged ? performOperation(action, result, value) : value;

    localStorage.setIsSubmitted('true');
    localStorage.setResult(result);
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
            result = value !== 0 ? result / value : 'NOT A NUMBER';
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