
//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener("DOMContentLoaded", function() {
    let screen = document.querySelector(".screen-js");
    $60eafcd7eea799ef$var$Reset(screen);
    $60eafcd7eea799ef$var$AddRadioButtonsClickListeners();
    $60eafcd7eea799ef$var$AddButtonsEventListener(screen);
    $60eafcd7eea799ef$var$AddResetButtonEventListener(screen);
    $60eafcd7eea799ef$var$AddDeleteButtonEventListener(screen);
    $60eafcd7eea799ef$var$AddActionButtonsEventListeners(screen);
    $60eafcd7eea799ef$var$AddEqualButtonEventListener(screen);
});
function $60eafcd7eea799ef$var$AddEqualButtonEventListener(screen) {
    let equalButton = document.querySelector(".equal-button-js");
    equalButton.addEventListener("click", function() {
        $60eafcd7eea799ef$var$CalculateResult(screen);
        $60eafcd7eea799ef$var$Reset(screen);
    });
}
function $60eafcd7eea799ef$var$AddActionButtonsEventListeners(screen) {
    let buttons = document.querySelectorAll(".action-button-js");
    for (const button of buttons)button.addEventListener("click", function(e) {
        $60eafcd7eea799ef$var$ActionButtonEventListener(e, screen);
    });
}
function $60eafcd7eea799ef$var$ActionButtonEventListener(e, screen) {
    $60eafcd7eea799ef$var$CalculateResult(screen);
    localStorage.setItem("action", e.target.textContent);
}
function $60eafcd7eea799ef$var$CalculateResult(screen) {
    // in case action button was clicked without changing the value
    let hasChanged = localStorage.getItem("isSubmitted") === "false";
    let result = parseFloat(localStorage.getItem("result"));
    let action = localStorage.getItem("action");
    let value = parseFloat(screen.innerHTML);
    value = isNaN(value) ? 0 : value;
    if (!isNaN(result) && hasChanged) switch(action){
        case "+":
            result = result + value;
            break;
        case "-":
            result = result - value;
            break;
        case "x":
            result = result * value;
            break;
        case "/":
            if (value !== 0) result = result / value;
            else result = "NOT A NUMBER";
            break;
        default:
            break;
    }
    else result = value;
    localStorage.setItem("isSubmitted", "true");
    localStorage.setItem("result", result);
    screen.innerHTML = $60eafcd7eea799ef$var$CountNumberOfIntegerDigits(result) > 12 ? result.toExponential(7) : result;
}
function $60eafcd7eea799ef$var$CountNumberOfIntegerDigits(number) {
    return number.toString().length;
}
function $60eafcd7eea799ef$var$AddButtonsEventListener(screen) {
    let buttons = document.querySelectorAll(".button-js");
    for (const button of buttons)button.addEventListener("click", function() {
        $60eafcd7eea799ef$var$AddCharacterToScreen(screen, button);
    });
}
function $60eafcd7eea799ef$var$AddCharacterToScreen(screen, button) {
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
function $60eafcd7eea799ef$var$AddResetButtonEventListener(screen) {
    let resetButton = document.querySelector(".reset-button-js");
    resetButton.addEventListener("click", function() {
        $60eafcd7eea799ef$var$Reset(screen);
        screen.innerHTML = "";
    });
}
function $60eafcd7eea799ef$var$Reset(screen) {
    localStorage.setItem("result", "");
    localStorage.setItem("action", "");
    localStorage.setItem("isSubmitted", "true");
}
function $60eafcd7eea799ef$var$AddDeleteButtonEventListener(screen) {
    let resetButton = document.querySelector(".del-button-js");
    resetButton.addEventListener("click", function() {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    });
}
function $60eafcd7eea799ef$var$AddRadioButtonsClickListeners() {
    let theme = $60eafcd7eea799ef$var$SetDefaultColorTheme();
    let radioButtons = document.querySelectorAll('input[name="theme"]');
    for (radioButton of radioButtons){
        radioButton.addEventListener("click", function() {
            $60eafcd7eea799ef$var$ChangeColorTheme(this.id);
            $60eafcd7eea799ef$var$SetTogglePositionByTheme(this.id);
        });
        $60eafcd7eea799ef$var$SetFirstRadioButtonValue(radioButton, theme);
    }
}
function $60eafcd7eea799ef$var$SetTogglePositionByTheme(theme) {
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
function $60eafcd7eea799ef$var$SetFirstRadioButtonValue(radioButton1, theme) {
    if (radioButton1.value === theme) {
        radioButton1.checked = true;
        $60eafcd7eea799ef$var$SetTogglePositionByTheme(radioButton1.value);
    }
}
function $60eafcd7eea799ef$var$ChangeColorTheme(theme) {
    const html = document.querySelector("html");
    html.classList.remove(html.classList.value);
    html.classList.add(theme);
    $60eafcd7eea799ef$var$SaveThemeInLocalStorage(theme);
}
function $60eafcd7eea799ef$var$SetDefaultColorTheme() {
    const defaultTheme = localStorage.getItem("theme");
    if (defaultTheme) {
        $60eafcd7eea799ef$var$ChangeColorTheme(defaultTheme);
        return defaultTheme;
    } else {
        let browsertTheme = $60eafcd7eea799ef$var$MatchThemeWithBrowserPreferences("light");
        if (browsertTheme) return browsertTheme;
        browsertTheme = $60eafcd7eea799ef$var$MatchThemeWithBrowserPreferences("dark");
        if (browsertTheme) return browsertTheme;
    }
}
function $60eafcd7eea799ef$var$MatchThemeWithBrowserPreferences(theme) {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches) {
        $60eafcd7eea799ef$var$ChangeColorTheme(theme);
        $60eafcd7eea799ef$var$SaveThemeInLocalStorage(theme);
        return theme;
    }
    return null;
}
function $60eafcd7eea799ef$var$SaveThemeInLocalStorage(theme) {
    localStorage.setItem("theme", theme);
    return theme;
}


//# sourceMappingURL=index.b9af0e58.js.map
