import * as localStorage from './localStorage'

function setTogglePosition(theme) {
    let toggleHandle = document.querySelector('.toggle-handle-js');

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

function matchRadioButtonValue(theme) {
    let radioButtons = document.querySelectorAll('input[name="theme"]');

    for (const radioButton of radioButtons) {
        if (radioButton.value === theme) {
            radioButton.checked = true;
            setTogglePosition(radioButton.value);
        }
    }
}

function changeColor(theme) {
    const html = document.querySelector('html');
    html.classList.remove(html.classList.value);
    html.classList.add(theme);
    localStorage.setTheme(theme);
}

function setDefaultColor() {
    const defaultTheme = localStorage.getTheme();
    let theme;
    if (defaultTheme) {
        changeColor(defaultTheme);
        theme = defaultTheme;
    }
    else {
        let browsertThemeLight = matchBrowserPreferences('light');
        let browsertThemeDark = matchBrowserPreferences('dark');
        theme = browsertThemeLight ?? browsertThemeDark ?? 'medium';
    }
    matchRadioButtonValue(theme);
    return theme;
}

function matchBrowserPreferences(theme) {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches) {
        changeColor(theme);
        localStorage.setTheme(theme);
        return theme;
    }
    return null;
}

export { setDefaultColor, matchRadioButtonValue, setTogglePosition, changeColor }