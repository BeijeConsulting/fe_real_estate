import en from "./common/assets/translations/en";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./common/assets/translations/it";

const resources = {
	en: {
		translation: en,
	},
	it: {
		translation: it,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});
export default i18n;
