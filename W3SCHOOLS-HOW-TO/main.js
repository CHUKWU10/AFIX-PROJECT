function animateBurger(){
    const burger = document.getElementById("burger");

    burger.classList.add("move");
    burger.addEventListener("animationend", () => {
        burger.classList.remove("move");
    }, {once: true});

}

console.log("Js file loaded");