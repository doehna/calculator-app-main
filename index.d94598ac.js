//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener("DOMContentLoaded", function() {
    let screen = document.querySelector(".screen-js");
    resetLocalStorage();
    addRadioButtonsClickListeners();
    addButtonsEventListener(screen);
    addResetButtonEventListener(screen);
    addDeleteButtonEventListener(screen);
    addActionButtonsEventListeners(screen);
    addEqualButtonEventListener(screen);
});
function addEqualButtonEventListener(screen) {
    let equalButton = document.querySelector(".equal-button-js");
    equalButton.addEventListener("click", function() {
        calculateResult(screen);
        resetLocalStorage();
    });
}
function addActionButtonsEventListeners(screen) {
    let buttons = document.querySelectorAll(".action-button-js");
    for (const button of buttons)button.addEventListener("click", function(e) {
        actionButtonEventListener(e, screen);
    });
}
function actionButtonEventListener(e, screen) {
    calculateResult(screen);
    localStorage.setItem("action", e.target.textContent);
}
function countNumberOfIntegerDigits(number) {
    return number.toString().length;
}
function addButtonsEventListener(screen) {
    let buttons = document.querySelectorAll(".button-js");
    for (const button of buttons)button.addEventListener("click", function() {
        addCharacterToScreen(screen, button);
    });
}
function addCharacterToScreen(screen, button) {
    let value = screen.innerHTML.trim();
    let isSubmitted = localStorage.getItem("isSubmitted") === "true";
    if (isSubmitted) {
        screen.innerHTML = button.textContent;
        localStorage.setItem("isSubmitted", "false");
    } else {
        let isShorterThen8Char = value.length < 8;
        let isDot = button.textContent === ".";
        let isDotInScreen = screen.innerHTML.indexOf(".") >= 0;
        if (isShorterThen8Char && (!isDot || !isDotInScreen)) screen.innerHTML = screen.innerHTML + button.textContent;
    }
}
function addResetButtonEventListener(screen) {
    let resetButton = document.querySelector(".reset-button-js");
    resetButton.addEventListener("click", function() {
        resetLocalStorage();
        screen.innerHTML = "";
    });
}
function resetLocalStorage() {
    localStorage.setItem("result", "");
    localStorage.setItem("action", "");
    localStorage.setItem("isSubmitted", "true");
}
function addDeleteButtonEventListener(screen) {
    let resetButton = document.querySelector(".del-button-js");
    resetButton.addEventListener("click", function() {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    });
}
function addRadioButtonsClickListeners() {
    let theme = applyColorTheme();
    let radioButtons = document.querySelectorAll('input[name="theme"]');
    for (const radioButton of radioButtons){
        radioButton.addEventListener("click", function() {
            changeColorTheme(this.id);
            setTogglePositionByTheme(this.id);
        });
        matchRadioButtonValueWithTheme(radioButton, theme);
    }
}
function setTogglePositionByTheme(theme) {
    let toggleHandle = document.querySelector(".toggle-handle-js");
    switch(theme){
        case "medium":
            toggleHandle.style.transform = "translateX(0%)";
            break;
        case "light":
            toggleHandle.style.transform = "translateX(100%)";
            break;
        case "dark":
            toggleHandle.style.transform = "translateX(200%)";
            break;
    }
}
function matchRadioButtonValueWithTheme(radioButton, theme) {
    if (radioButton.value === theme) {
        radioButton.checked = true;
        setTogglePositionByTheme(radioButton.value);
    }
}
function changeColorTheme(theme) {
    const html = document.querySelector("html");
    html.classList.remove(html.classList.value);
    html.classList.add(theme);
    saveThemeInLocalStorage(theme);
}
function applyColorTheme() {
    const defaultTheme = localStorage.getItem("theme");
    if (defaultTheme) {
        changeColorTheme(defaultTheme);
        return defaultTheme;
    } else {
        let browsertThemeLight = matchThemeWithBrowserPreferences("light");
        let browsertThemeDark = matchThemeWithBrowserPreferences("dark");
        return browsertThemeLight ?? browsertThemeDark ?? "medium";
    }
}
function matchThemeWithBrowserPreferences(theme) {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches) {
        changeColorTheme(theme);
        saveThemeInLocalStorage(theme);
        return theme;
    }
    return null;
}
function saveThemeInLocalStorage(theme) {
    localStorage.setItem("theme", theme);
    return theme;
}

//# sourceMappingURL=index.d94598ac.js.map
