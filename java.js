let btnmenu = document.getElementById("btnmenu");
    let Navlinks = document.querySelector(".links");

    btnmenu.onclick = function() {
        btnmenu.classList.toggle("fa-times");
        Navlinks.classList.toggle(".active");
    }
