document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const modal = document.getElementById("impressumModal");
    const impressumBtn = document.getElementById("impressumBtn");
    const closeModalBtn = document.querySelector(".modal .close");

    impressumBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


    menuButton.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        } else {
            menu.style.display = "block";
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        }
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
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            });
        });

        menu.appendChild(menuList);
    }

    generateMenuItems();
});
