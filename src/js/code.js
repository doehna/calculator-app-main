import { round } from 'mathjs'

//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener('DOMContentLoaded', function () {
    let screen = document.querySelector('.screen-js');
    Reset(screen);

    AddRadioButtonsClickListeners();
    AddButtonsEventListener(screen);
    AddResetButtonEventListener(screen);
    AddDeleteButtonEventListener(screen);
    AddActionButtonsEventListeners(screen);
    AddEqualButtonEventListener(screen);
})

function AddEqualButtonEventListener(screen) {
    let equalButton = document.querySelector('.equal-button-js');

    equalButton.addEventListener('click', function () {
        CalculateResult(screen);
        Reset(screen);
    })
}

function AddActionButtonsEventListeners(screen) {
    let buttons = document.querySelectorAll('.action-button-js');
    for (const button of buttons) {
        button.addEventListener('click', function (e) {
            ActionButtonEventListener(e, screen);
        })
    }
}

function ActionButtonEventListener(e, screen) {
    CalculateResult(screen);
    localStorage.setItem('action', e.target.textContent);
}

function CalculateResult(screen) {
    // in case action button was clicked without changing the value
    let hasChanged = localStorage.getItem('isSubmitted') === 'false';
    
    let result = parseFloat(localStorage.getItem('result'));
    let action = localStorage.getItem('action');
    let value = parseFloat(screen.innerHTML);

    value = isNaN(value) ? 0 : value;

    if (!isNaN(result) && hasChanged) {
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
    }
    else {
        result = value;
    }

    localStorage.setItem('isSubmitted', 'true');
    localStorage.setItem('result', result);
    screen.innerHTML = CountNumberOfIntegerDigits(result) > 12 ? result.toExponential(7) : result;
}

function CountNumberOfIntegerDigits(number) {
    return number.toString().length;
}

function AddButtonsEventListener(screen) {
    let buttons = document.querySelectorAll('.button-js');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            AddCharacterToScreen(screen, button);
        })
    }
}

function AddCharacterToScreen(screen, button) {
    let value = screen.innerHTML.trim();
    let isSubmitted = localStorage.getItem('isSubmitted') === 'true';

    if (isSubmitted) {
        screen.innerHTML = button.textContent;
        localStorage.setItem('isSubmitted', 'false');
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

function AddResetButtonEventListener(screen) {
    let resetButton = document.querySelector('.reset-button-js');

    resetButton.addEventListener('click', function () {
        Reset(screen);
        screen.innerHTML = '';
    })
}

function Reset(screen) {
    localStorage.setItem('result', '');
    localStorage.setItem('action', '');
    localStorage.setItem('isSubmitted', 'true');
}

function AddDeleteButtonEventListener(screen) {
    let resetButton = document.querySelector('.del-button-js');

    resetButton.addEventListener('click', function () {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    })
}

function AddRadioButtonsClickListeners() {
    let theme = SetDefaultColorTheme();
    let radioButtons = document.querySelectorAll('input[name="theme"]');

    for (const radioButton of radioButtons) {
        radioButton.addEventListener('click', function () {
            ChangeColorTheme(this.id);
            SetTogglePositionByTheme(this.id);
        });
        SetFirstRadioButtonValue(radioButton, theme);
    }
}

function SetTogglePositionByTheme(theme) {
    let toggleHandle = document.querySelector('.toggle-handle-js');

    let width = toggleHandle.parentElement.clientWidth;
    console.log(width);
    switch (theme) {
        case 'medium':
            toggleHandle.style.transform = 'translateX(0%)';
            break;
        case 'light':
            toggleHandle.style.transform = 'translateX(100%)';
            break;
        case 'dark':
            toggleHandle.style.transform = 'translateX(200%)';
            break;
    }
}

function SetFirstRadioButtonValue(radioButton, theme) {
    if (radioButton.value === theme) {
        radioButton.checked = true;
        SetTogglePositionByTheme(radioButton.value);
    }
}

function ChangeColorTheme(theme) {
    const html = document.querySelector('html');
    html.classList.remove(html.classList.value);
    html.classList.add(theme);
    SaveThemeInLocalStorage(theme);
}

function SetDefaultColorTheme() {
    const defaultTheme = localStorage.getItem('theme');
    if (defaultTheme) {
        ChangeColorTheme(defaultTheme);
        return defaultTheme;
    }
    else {
        let browsertTheme = MatchThemeWithBrowserPreferences('light');
        if (browsertTheme) {
            return browsertTheme;
        }
        browsertTheme = MatchThemeWithBrowserPreferences('dark');
        if (browsertTheme) {
            return browsertTheme;
        }
    }
}

function MatchThemeWithBrowserPreferences(theme) {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches) {
        ChangeColorTheme(theme);
        SaveThemeInLocalStorage(theme);
        return theme;
    }
    return null;
}

function SaveThemeInLocalStorage(theme) {
    localStorage.setItem('theme', theme);
    return theme;
}