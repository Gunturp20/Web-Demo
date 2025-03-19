document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        // Sembunyikan semua section
        const sections = document.querySelectorAll("section");
        sections.forEach(section => section.style.display = "none");

        // Tampilkan hanya section yang dipilih
        document.getElementById(sectionId).style.display = "block";
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
            let header = document.querySelector("header");
            if (window.scrollY > 50) {
                header.classList.add("scrolled"); // Tambahkan efek scroll
            } else {
                header.classList.remove("scrolled");
            }
        });
    });

    // Ambil semua link di menu
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman
            const targetSection = this.getAttribute("href").substring(1); // Ambil ID target
            showSection(targetSection);
        });
    });

    // Tampilkan HOME saat pertama kali dibuka
    showSection("HOME");
});

document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector("footer");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            // Scroll ke bawah -> footer muncul
            footer.style.bottom = "0";
        } else {
            // Scroll ke atas -> footer menghilang
            footer.style.bottom = "-100px";
        }
        lastScrollY = window.scrollY;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".section-content").forEach(content => {
        content.classList.add("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
