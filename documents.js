
const browserLang = navigator.language.toLowerCase();

const lang = browserLang.startsWith("ar") ? "ar" : "en";

document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
