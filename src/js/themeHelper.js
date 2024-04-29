import { setThemeInLocalStorage, getThemeFromLocalStorage } from './localStorage'

function setTogglePositionByTheme(theme) {
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

function matchRadioButtonValueWithTheme(theme) {
    let radioButtons = document.querySelectorAll('input[name="theme"]');

    for (const radioButton of radioButtons) {
        if (radioButton.value === theme) {
            radioButton.checked = true;
            setTogglePositionByTheme(radioButton.value);
        }
    }
}

function changeColorTheme(theme) {
    const html = document.querySelector('html');
    html.classList.remove(html.classList.value);
    html.classList.add(theme);
    setThemeInLocalStorage(theme);
}

function setDefaultColorTheme() {
    const defaultTheme = getThemeFromLocalStorage();
    let theme;
    if (defaultTheme) {
        changeColorTheme(defaultTheme);
        theme = defaultTheme;
    }
    else {
        let browsertThemeLight = matchThemeWithBrowserPreferences('light');
        let browsertThemeDark = matchThemeWithBrowserPreferences('dark');
        theme = browsertThemeLight ?? browsertThemeDark ?? 'medium';
    }
    matchRadioButtonValueWithTheme(theme);
    return theme;
}

function matchThemeWithBrowserPreferences(theme) {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches) {
        changeColorTheme(theme);
        setThemeInLocalStorage(theme);
        return theme;
    }
    return null;
}

export { setDefaultColorTheme, matchRadioButtonValueWithTheme, setTogglePositionByTheme, changeColorTheme }