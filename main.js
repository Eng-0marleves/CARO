let body = document.querySelector("body")
// NavBar
body.innerHTML += `
<nav>
    <div class="logo">
        <img src="images/logo.png" alt="">
        <p>CARO</p>
    </div>

    <ul class="navBar">
        <li><a href="index.html" class="${body.classList.contains("Home")? "active" : "disabled"}">Home</a></li>
        <li><a href="cars.html" class="${body.classList.contains("Cars")? "active" : "disabled"}">Cars</a></li>
        <li><a href="buy.html" class="${body.classList.contains("Buy")? "active" : "disabled"}">Buy</a></li>
        <li><a href="contact.html" class="${body.classList.contains("Contact")? "active" : "disabled"}">Contact</a></li>
    </ul>

    <div class="menue-btn">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</nav>
`

// modeBtn
body.innerHTML += `
    <div class="modeBtn"><span>☽</span></div>
`
// start add NavBar for each html files and mode button


// menuebtn Start
const menuebtn = document.querySelector(".menue-btn");
const navBar = document.querySelector(".navBar");
menuebtn.addEventListener("click", () => {
    menuebtn.classList.toggle("active")
    navBar.classList.toggle("active")
})
// menuebtn End


// start home images
let homeImages = document.querySelectorAll(".home-slider img");
setInterval(() => {
    for (let i = 0; i < homeImages.length; i++) {
        if (homeImages[i].classList.contains("active")) {
            homeImages[i].classList.remove("active")
            if (i == homeImages.length - 1) {
                i=  0
            } else {
                i++;
            }
            homeImages[i].classList.add("active")
        }
    }
},5000)
// end home images


// start change mode
const modeBtn = document.querySelector(".modeBtn");
const modeBtnSpan = document.querySelector(".modeBtn span");
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
let mode;
function applyMode() {
    mode = "dark";
    localStorage.setItem("mode", `${mode}`)
    modeBtnSpan.innerHTML = "☀ "
    root.style.setProperty("--description-color", "#e4e4e4")
    root.style.setProperty("--box-shadow-color", "rgba(255, 255, 255, 0.3)")
    root.style.setProperty("--box-shadow-color-hover", "rgba(255, 255, 255, 0.2)")
}
modeBtn.addEventListener("click", () => {
    localStorage.setItem("mode", `${mode}`)
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        applyMode()
    } else {
        mode = null;
        localStorage.setItem("mode", `${mode}`)
        modeBtnSpan.innerHTML = "☽"
        root.style.setProperty("--description-color", "#333")
        root.style.setProperty("--box-shadow-color", "rgba(0, 0, 0, 0.3)")
        root.style.setProperty("--box-shadow-color-hover", "rgba(0, 0, 0, 0.2)")
    }
})
if (localStorage.getItem("mode") == "dark") {
    body.classList.add("dark")
    applyMode()
}
// end change mode