document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    const sections = [
        { label: "About", id: "about" },
        { label: "Our Mission", id: "mission" },
        { label: "Our Goals", id: "goals" },
        { label: "Our Vision", id: "vision" },
        { label: "Our Values", id: "our-values" },
    ];

    function generateMenuItems() {
        const menuList = document.createElement("ul");
        menuList.classList.add("list-unstyled");
        menuList.classList.add("menu-link");

        sections.forEach((section) => {
            const menuItem = document.createElement("li");
            const link = document.createElement("a");
            link.classList.add("header-menu-item");
            menuItem.classList.add("menu-link");
            link.innerText = section.label;
            link.setAttribute("href", "#" + section.id);
            menuItem.appendChild(link);
            menuList.appendChild(menuItem);

            link.addEventListener("click", function (event) {
                event.preventDefault();
                document.getElementById(section.id).scrollIntoView({ behavior: "smooth" });
                menu.style.display = "none";
            });
        });

        menu.appendChild(menuList);
    }

    generateMenuItems();
});
