function $3fe305b0363c2590$export$42ffd38884aecdac() {
    localStorage.setItem("result", "");
    localStorage.setItem("action", "");
    localStorage.setItem("isSubmitted", "true");
}
const $3fe305b0363c2590$export$ec795fdf61e2a255 = ()=>{
    return localStorage.getItem("result");
};
const $3fe305b0363c2590$export$6ca3170acb89054 = ()=>{
    return localStorage.getItem("action");
};
const $3fe305b0363c2590$export$533ef263786c0941 = ()=>{
    return localStorage.getItem("isSubmitted");
};
const $3fe305b0363c2590$export$89cbf1a0881c8b9c = ()=>{
    return localStorage.getItem("theme");
};
const $3fe305b0363c2590$export$f2b7b6f0f9624116 = (result)=>localStorage.setItem("result", result);
const $3fe305b0363c2590$export$a0c65badd8d09883 = (action)=>localStorage.setItem("action", action);
const $3fe305b0363c2590$export$c5718730d5f23b76 = (isSubmitted)=>localStorage.setItem("isSubmitted", isSubmitted);
const $3fe305b0363c2590$export$2e49b867b7a0847c = (theme)=>localStorage.setItem("theme", theme);


function $422fadd531b276d8$export$9ea73367ae41ae3c(screen) {
    // in case action button was clicked without changing the value
    let hasChanged = $3fe305b0363c2590$export$533ef263786c0941() === "false";
    let result = parseFloat($3fe305b0363c2590$export$ec795fdf61e2a255());
    let action = $3fe305b0363c2590$export$6ca3170acb89054();
    let value = parseFloat(screen.innerHTML);
    value = isNaN(value) ? 0 : value;
    result = !isNaN(result) && hasChanged ? $422fadd531b276d8$var$performOperation(action, result, value) : value;
    $3fe305b0363c2590$export$c5718730d5f23b76("true");
    $3fe305b0363c2590$export$f2b7b6f0f9624116(result);
    screen.innerHTML = $422fadd531b276d8$var$countNumberOfIntegerDigits(result) > 12 ? result.toExponential(7) : result;
}
function $422fadd531b276d8$var$performOperation(action, result, value) {
    switch(action){
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
            result = value !== 0 ? result / value : "NOT A NUMBER";
            break;
        default:
            break;
    }
    return result;
}
function $422fadd531b276d8$var$countNumberOfIntegerDigits(number) {
    return number.toString().length;
}




function $c861477e6985d277$export$ce5f913445634e45(theme) {
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
function $c861477e6985d277$export$ddc6b8c1c13484cf(theme) {
    let radioButtons = document.querySelectorAll('input[name="theme"]');
    for (const radioButton of radioButtons)if (radioButton.value === theme) {
        radioButton.checked = true;
        $c861477e6985d277$export$ce5f913445634e45(radioButton.value);
    }
}
function $c861477e6985d277$export$917538e4f4eb20f9(theme) {
    const html = document.querySelector("html");
    html.classList.remove(html.classList.value);
    html.classList.add(theme);
    $3fe305b0363c2590$export$2e49b867b7a0847c(theme);
}
function $c861477e6985d277$export$23054a52c6f586f3() {
    const defaultTheme = $3fe305b0363c2590$export$89cbf1a0881c8b9c();
    let theme;
    if (defaultTheme) {
        $c861477e6985d277$export$917538e4f4eb20f9(defaultTheme);
        theme = defaultTheme;
    } else {
        let browsertThemeLight = $c861477e6985d277$var$matchBrowserPreferences("light");
        let browsertThemeDark = $c861477e6985d277$var$matchBrowserPreferences("dark");
        theme = browsertThemeLight ?? browsertThemeDark ?? "medium";
    }
    $c861477e6985d277$export$ddc6b8c1c13484cf(theme);
    return theme;
}
function $c861477e6985d277$var$matchBrowserPreferences(theme) {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches) {
        $c861477e6985d277$export$917538e4f4eb20f9(theme);
        $3fe305b0363c2590$export$2e49b867b7a0847c(theme);
        return theme;
    }
    return null;
}



function $cc3a19689421dbf4$export$d0674d8d6d79c24c(screen, button) {
    let value = screen.innerHTML.trim();
    let isSubmitted = $3fe305b0363c2590$export$533ef263786c0941() === "true";
    if (isSubmitted) {
        screen.innerHTML = button.textContent;
        $3fe305b0363c2590$export$c5718730d5f23b76("false");
    } else {
        let isShorterThen8Char = value.length < 8;
        let isDot = button.textContent === ".";
        let isDotInScreen = screen.innerHTML.indexOf(".") >= 0;
        if (isShorterThen8Char && (!isDot || !isDotInScreen)) screen.innerHTML = screen.innerHTML + button.textContent;
    }
}


//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener("DOMContentLoaded", function() {
    let screen = document.querySelector(".screen-js");
    $3fe305b0363c2590$export$42ffd38884aecdac();
    $c861477e6985d277$export$23054a52c6f586f3();
    $60eafcd7eea799ef$var$addRadioButtonsClickListeners();
    $60eafcd7eea799ef$var$addButtonsEventListener(screen);
    $60eafcd7eea799ef$var$addResetButtonEventListener(screen);
    $60eafcd7eea799ef$var$addDeleteButtonEventListener(screen);
    $60eafcd7eea799ef$var$addActionButtonsEventListeners(screen);
    $60eafcd7eea799ef$var$addEqualButtonEventListener(screen);
});
function $60eafcd7eea799ef$var$addEqualButtonEventListener(screen) {
    let equalButton = document.querySelector(".equal-button-js");
    equalButton.addEventListener("click", function() {
        (0, $422fadd531b276d8$export$9ea73367ae41ae3c)(screen);
        $3fe305b0363c2590$export$42ffd38884aecdac();
    });
}
function $60eafcd7eea799ef$var$addActionButtonsEventListeners(screen) {
    let buttons = document.querySelectorAll(".action-button-js");
    for (const button of buttons)button.addEventListener("click", function(e) {
        (0, $422fadd531b276d8$export$9ea73367ae41ae3c)(screen);
        $3fe305b0363c2590$export$a0c65badd8d09883(e.target.textContent);
    });
}
function $60eafcd7eea799ef$var$addButtonsEventListener(screen) {
    let buttons = document.querySelectorAll(".button-js");
    for (const button of buttons)button.addEventListener("click", function() {
        $cc3a19689421dbf4$export$d0674d8d6d79c24c(screen, button);
    });
}
function $60eafcd7eea799ef$var$addResetButtonEventListener(screen) {
    let resetButton = document.querySelector(".reset-button-js");
    resetButton.addEventListener("click", function() {
        $3fe305b0363c2590$export$42ffd38884aecdac();
        screen.innerHTML = "";
    });
}
function $60eafcd7eea799ef$var$addDeleteButtonEventListener(screen) {
    let resetButton = document.querySelector(".del-button-js");
    resetButton.addEventListener("click", function() {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        $3fe305b0363c2590$export$c5718730d5f23b76("false");
    });
}
function $60eafcd7eea799ef$var$addRadioButtonsClickListeners() {
    let radioButtons = document.querySelectorAll('input[name="theme"]');
    for (const radioButton of radioButtons)radioButton.addEventListener("click", function() {
        $c861477e6985d277$export$917538e4f4eb20f9(this.id);
        $c861477e6985d277$export$ce5f913445634e45(this.id);
    });
}


//# sourceMappingURL=index.4a5ed3dc.js.map
