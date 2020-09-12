const d = document;
const ls = localStorage;

export default function darkTheme(btnDark) {

    const $btnDark = d.querySelector(btnDark);
    const $datadarkbg = d.querySelectorAll("[data-dark-bg]");
    const $datadarktext = d.querySelectorAll("[data-dark-text]");
    const $datadarkheader = d.querySelectorAll("[data-dark-header]");

    let moon = "🌙";
    let sun = "☀️";

    const lightMode = () => {

        $datadarkbg.forEach(el => el.classList.remove("dark-mode-bg"));
        $datadarktext.forEach(el => el.classList.remove("dark-mode-text"));
        $datadarkheader.forEach(el => el.classList.remove("dark-mode-header"));
        $btnDark.textContent = moon;
        ls.setItem("theme", "light");

    }

    const darkMode = () => {
        $datadarkbg.forEach(el => el.classList.add("dark-mode-bg"));
        $datadarktext.forEach(el => el.classList.add("dark-mode-text"));
        $datadarkheader.forEach(el => el.classList.add("dark-mode-header"));
        $btnDark.textContent = sun;
        ls.setItem("theme", "dark");

    }

    d.addEventListener("click", (e) => {

        if (e.target.matches(btnDark)) {

            if ($btnDark.textContent === moon) {

                darkMode();

            } else {

                lightMode();

            }

        }

    });

    d.addEventListener("DOMContentLoaded", (e) => {
        // alert("hola");

        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
        }

        if (ls.getItem("theme") === "light") {
            lightMode();
        }

        if (ls.getItem("theme") === "dark") {
            darkMode();
        }

    })

}