document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    const navigationLinks = document.querySelectorAll(".navigation a");
    const currentYear = document.querySelector("#current-year");
    const curriculumLink = document.querySelector("#curriculo-link");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const menuIsOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                menuIsOpen ? "true" : "false"
            );

            menuButton.textContent = menuIsOpen ? "✕" : "☰";
        });

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });

        });

    }

    if (curriculumLink) {

        curriculumLink.addEventListener("click", function (event) {

            if (
                curriculumLink.getAttribute("href") === "#" ||
                curriculumLink.getAttribute("href") === ""
            ) {
                event.preventDefault();

                alert(
                    "O currículo será disponibilizado após adicionarmos o arquivo PDF ao portfólio."
                );
            }

        });

    }

});
