document.addEventListener("DOMContentLoaded", () => {
    // Menú responsive
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const navMenu = document.querySelector(".nav-menu");
    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Resaltar enlace activo según la página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        } else if (currentPage === "index.html" && href === "index.html") {
            link.classList.add("active");
        }
    });
});