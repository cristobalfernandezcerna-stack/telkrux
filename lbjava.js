// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    if (menuIcon && navMenu) {
        // Abrir/cerrar menú al hacer clic en el ícono
        menuIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });

        // Cerrar menú al hacer clic en cualquier enlace del menú (útil en móvil)
        const navLinks = document.querySelectorAll(".nav-menu a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove("active");
                }
            });
        });

        // Cerrar menú si se hace clic fuera de él (en móvil)
        document.addEventListener("click", (event) => {
            if (window.innerWidth <= 768 && navMenu.classList.contains("active")) {
                if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                    navMenu.classList.remove("active");
                }
            }
        });
    }

    // Resaltar enlace activo según la URL actual
    const currentPage = window.location.pathname.split("/").pop() || "lb.html";
    document.querySelectorAll(".nav-menu a").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});
