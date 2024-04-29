import { calculateResult } from "./calculation";
import { resetLocalStorage, setActionInLocalStorage } from "./localStorage";
import { setDefaultColorTheme, setTogglePositionByTheme, changeColorTheme } from './themeHelper'
import { addCharacterToScreen } from "./screen";

//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener('DOMContentLoaded', function () {
    let screen = document.querySelector('.screen-js');
    resetLocalStorage();
    setDefaultColorTheme();

    addRadioButtonsClickListeners();
    addButtonsEventListener(screen);
    addResetButtonEventListener(screen);
    addDeleteButtonEventListener(screen);
    addActionButtonsEventListeners(screen);
    addEqualButtonEventListener(screen);
})

function addEqualButtonEventListener(screen) {
    let equalButton = document.querySelector('.equal-button-js');

    equalButton.addEventListener('click', function () {
        calculateResult(screen);
        resetLocalStorage();
    })
}

function addActionButtonsEventListeners(screen) {
    let buttons = document.querySelectorAll('.action-button-js');
    for (const button of buttons) {
        button.addEventListener('click', function (e) {
            calculateResult(screen);
            setActionInLocalStorage(e.target.textContent);
        })
    }
}

function addButtonsEventListener(screen) {
    let buttons = document.querySelectorAll('.button-js');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            addCharacterToScreen(screen, button);
        })
    }
}

function addResetButtonEventListener(screen) {
    let resetButton = document.querySelector('.reset-button-js');

    resetButton.addEventListener('click', function () {
        resetLocalStorage();
        screen.innerHTML = '';
    })
}

function addDeleteButtonEventListener(screen) {
    let resetButton = document.querySelector('.del-button-js');

    resetButton.addEventListener('click', function () {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    })
}

function addRadioButtonsClickListeners() {
    let radioButtons = document.querySelectorAll('input[name="theme"]');

    for (const radioButton of radioButtons) {
        radioButton.addEventListener('click', function () {
            changeColorTheme(this.id);
            setTogglePositionByTheme(this.id);
        });
    }
}
