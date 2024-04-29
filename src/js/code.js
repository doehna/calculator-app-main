import { calculateResult } from "./calculate";
import * as localStorage from "./localStorage";
import * as theme from './theme'
import * as calcScreen from "./screen";

//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener('DOMContentLoaded', function () {
    let screen = document.querySelector('.screen-js');
    localStorage.clear();
    theme.setDefaultColor();

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
        localStorage.clear();
    })
}

function addActionButtonsEventListeners(screen) {
    let buttons = document.querySelectorAll('.action-button-js');
    for (const button of buttons) {
        button.addEventListener('click', function (e) {
            calculateResult(screen);
            localStorage.setAction(e.target.textContent);
        })
    }
}

function addButtonsEventListener(screen) {
    let buttons = document.querySelectorAll('.button-js');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            calcScreen.addCharacter(screen, button);
        })
    }
}

function addResetButtonEventListener(screen) {
    let resetButton = document.querySelector('.reset-button-js');

    resetButton.addEventListener('click', function () {
        localStorage.clear();
        screen.innerHTML = '';
    })
}

function addDeleteButtonEventListener(screen) {
    let resetButton = document.querySelector('.del-button-js');

    resetButton.addEventListener('click', function () {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        localStorage.setIsSubmitted('false');
    })
}

function addRadioButtonsClickListeners() {
    let radioButtons = document.querySelectorAll('input[name="theme"]');

    for (const radioButton of radioButtons) {
        radioButton.addEventListener('click', function () {
            theme.changeColor(this.id);
            theme.setTogglePosition(this.id);
        });
    }
}
