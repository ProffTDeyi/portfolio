// <!-- JavaScript Code For Toggle Menu-->
    const navLinks = document.getElementById("navLinks");
    const openMenu = document.querySelector("#viewMenu");
    const closeMenu = document.querySelector("#closeMenu");

    openMenu.addEventListener("click", () =>{
        navLinks.style.top = "0px";
    });

    closeMenu.addEventListener("click", () => {
        navLinks.style.top = "-210px";
    });