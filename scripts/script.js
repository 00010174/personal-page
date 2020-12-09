let navbar = document.querySelector("#nav");

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

let menu_btn = document.querySelector("#menu-button");

menu_btn.addEventListener('click', ()=>{
    let menu_items = document.querySelector('#menu-items');

    menu_items.classList.toggle('menu-active');
});
