//var radioButtonValue = document.querySelectorAll('input[name="theme"]:checked').value;
document.addEventListener('DOMContentLoaded', function () {
    let theme = SetDefaultColorTheme();
    let radioButtons = document.querySelectorAll('input[name="theme"]');

    for (radioButton of radioButtons) {
        radioButton.addEventListener('click', function (e) {
            ChangeColorTheme(this.id);
            SetTogglePositionByTheme(this.id);
        });
        SetFirstRadioButtonValue(radioButton, theme);
    }
})

function SetTogglePositionByTheme(theme) {
    let toggleHandle = document.querySelector('.toggle-handle-js');
    switch(theme) {
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