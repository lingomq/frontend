import { Cookies } from "react-cookie"

const cookies = new Cookies;

export const getCurrentLocale = () => {
    let locale = cookies.get('locale');
    let localesArray = Object.keys(LOCALES);

    for (let i = 0; i < localesArray.length; i++) {
        if (localesArray[i].toUpperCase() === locale.toUpperCase()) {
            locale = localesArray[i];
            break;
        }
    }

    return locale === undefined ? LOCALES["ru-RU"] : LOCALES[locale];
}

export const setCurrentLocale = (localeName) => {
    let locale;
    let localesArray = Object.values(LOCALES);

    for (let i = 0; i < localesArray.length; i++) {
        if (localesArray[i].toUpperCase() === localeName.toUpperCase()) {
            locale = localesArray[i];
            break;
        }
    }

    if (locale === undefined)
        console.warn('locale wasn\'t found. Actual: ' + localeName);
    else
        cookies.set('locale', Object.keys(LOCALES).find(key => LOCALES[key] === locale));
}

export const LOCALES = {
    "en-US": 'ENGLISH',
    "ru-RU": 'RUSSIAN',
    "fr-FR": 'FRENCH',
    "de-DE": 'GERMAN',
    "ja-JA": 'JAPANESE'
}