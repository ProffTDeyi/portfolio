// <!-- JavaScript Code For Toggle Menu-->
    const navLinks = document.getElementById("navLinks");
    const openMenu = document.querySelector("#viewMenu");
    const closeMenu = document.querySelector("#closeMenu");

    openMenu.addEventListener("click", () =>{
        navLinks.style.top = "0px";
    });

    closeMenu.addEventListener("click", () => {
        navLinks.style.top = "-265px";
    });


        // code for the social icons

    const social_Icons = document.querySelectorAll(".social-media-icon img");
    for (let icon of Array.from(social_Icons).slice(1)){
        icon.style.borderRadius = "50%";
    }

    
    // code for calling icons

    let callNum = document.querySelectorAll(".number");
    document.querySelector(".call_me")
    .addEventListener("click", e => {
        for (let num of Array.from(callNum)){
        alert(`You Can Quickly Call Me On These Number(s): ${num.textContent}`);
        e.preventDefault();
    }
    });