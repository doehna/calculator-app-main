function clear() {
    localStorage.setItem('result', '');
    localStorage.setItem('action', '');
    localStorage.setItem('isSubmitted', 'true');
}

export const getResult = () => { return localStorage.getItem('result')};

export const getAction = () => { return localStorage.getItem('action')};

export const getIsSubmitted = () => { return localStorage.getItem('isSubmitted') };

export const getTheme = () => { return localStorage.getItem('theme') };

export const setResult = (result) => localStorage.setItem('result', result);

export const setAction = (action) => localStorage.setItem('action', action);

export const setIsSubmitted = (isSubmitted) => localStorage.setItem('isSubmitted', isSubmitted);

export const setTheme = (theme) => localStorage.setItem('theme', theme);

export { clear };

