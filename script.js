const hamburgar = document.querySelector(".hamburgar")
const navmenu = document.querySelector(".nav-menu")

hamburgar.addEventListener("click",() => {
    hamburgar.classList.toggle("active"); 
    navmenu.classList.toggle("active");
})

