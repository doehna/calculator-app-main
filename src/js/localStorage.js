function resetLocalStorage() {
    localStorage.setItem('result', '');
    localStorage.setItem('action', '');
    localStorage.setItem('isSubmitted', 'true');
}

export const getResultFromLocalStorage = () => { return localStorage.getItem('result')};

export const getActionFromLocalStorage = () => { return localStorage.getItem('action')};

export const getIsSubmittedFromLocalStorage = () => { return localStorage.getItem('isSubmitted') };

export const getThemeFromLocalStorage = () => { return localStorage.getItem('theme') };

export const setResultInLocalStorage = (result) => localStorage.setItem('result', result);

export const setActionInLocalStorage = (action) => localStorage.setItem('action', action);

export const setIsSubmittedInLocalStorage = (isSubmitted) => localStorage.setItem('isSubmitted', isSubmitted);

export const setThemeInLocalStorage = (theme) => localStorage.setItem('theme', theme);

export { resetLocalStorage };

