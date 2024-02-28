import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from "./lang/en.json";
import azTranslation from "./lang/az.json";
import ruTranslation from "./lang/ru.json"

export const DEFAULT_LANG = 'az'

const resources = {
    az: azTranslation,
    en: enTranslation,
    ru: ruTranslation
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: DEFAULT_LANG,
        interpolation: {
            escapeValue: false,
        },
    })


export default i18n