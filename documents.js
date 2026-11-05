
const translations = {
  en: {
        title: "Welcome to Our Website",
        description: "We provide graphic design and website development services.",
        contact: "Contact Us"
    }

   ar: {
        title: "مرحباً بك في موقعنا",
        description: "نقدم خدمات التصميم وتطوير المواقع الإلكترونية.",
        contact: "تواصل معنا"
    },
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ?  "ltr" :  "rtl";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.getElementById("langBtn").textContent =
        lang === "ar" ? "English" : "العربية";

    localStorage.setItem("websiteLanguage", lang);
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    setLanguage(currentLang === "ar" ? "en" : "ar");
}

// تحديد لغة المتصفح عند أول زيارة
const savedLanguage = localStorage.getItem("websiteLanguage");

const browserLanguage = navigator.language
    .toLowerCase()
    .startsWith("ar") ? "ar" : "en";

setLanguage(savedLanguage || browserLanguage);
