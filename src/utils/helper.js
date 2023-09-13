export const isLoggedIn = () => localStorage.getItem("isLoggedin");
export const flag = (lang) =>
  lang === "EN"
    ? "us"
    : lang === "HI"
    ? "in"
    : lang === "FR"
    ? "fr"
    : lang === "RU"
    ? "ru"
    : "";
