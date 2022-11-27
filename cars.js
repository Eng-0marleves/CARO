// Switcher Start
const switcherList = document.querySelectorAll(".switchers .switcher");
const cards = Array.from(document.querySelectorAll("#Cars .container .cards .card"))
switcherList.forEach((li) => { 
    li.addEventListener("click", ()=> {
        switcherList.forEach((li) => { 
            li.classList.remove("active");
        })
        li.classList.add("active");
        cards.forEach(ele => {
            ele.style.display = "none";    
        });
        document.querySelectorAll(li.dataset.car).forEach((el) => { 
            el.style.display = "block"
        })
    })
})
// Switcher End


// Toggle Detailes Start
const detailesBtn = document.querySelector(".detailes-btn");
const detailes = document.querySelector(".detailes");
// show
cards.forEach((card) => {
    card.addEventListener("click", () => {
        detailes.style.display = "flex"
    })
})
// close
function closeDetailes() {
    detailes.style.transition = "all .3s ease-in-out"
    detailes.style.opacity  = "0"
    setTimeout(() => {
        detailes.style.opacity  = "1"
        detailes.style.display  = "none"
    }, 300)
}
detailes.addEventListener("click", (e) => {
    if(e.target.classList.contains("detailes")) {
        closeDetailes()
    }
})
// Toggle Detailes End


// Fetch Data Car Detailes Start
fetch("./cars.json")
.then(response => {
    return response.json()
})
.then(data => {
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (card.dataset.model) {
                for (let i of data) {
                    if (i.model == card.dataset.model) {
                        detailes.innerHTML = `
                        <div class="container">   
                            <div class="view">
                                <img src="${i.img}" alt="">
                            </div>
                            <div class="description">
                                <div class="info"><span>Manufacturer: </span>${i.manufacturer}</div>
                                <div class="info"><span>Model: </span>${i.model}</div>
                                <div class="info"><span>Motor: </span>${i.motor}</div>
                                <div class="info"><span>Color: </span>${i.color}</div>
                                <div class="buying">
                                    <h1 class="price">${i.price}</h1>
                                    <a href="buy.html" class="btn buyBtn">Buy Now</a>
                                </div>
                            </div>  
                
                            <div class="detailes-btn" onclick="closeDetailes()">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                            
                        </div>`;
                        // set model
                        let buyBtn = document.querySelector(".buyBtn");
                        buyBtn.addEventListener("click", () => {
                            let setManufacturer = i.manufacturer
                            localStorage.setItem("manufacturer", `${setManufacturer}`)
                            let setModel = i.model
                            localStorage.setItem("model", `${setModel}`)
                        })
                    }
                }
            }
        })
    })
})
// Fetch Data Car Detailes End