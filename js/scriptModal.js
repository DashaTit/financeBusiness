
document.addEventListener("DOMContentLoaded", () => {
    openMobMenu();
});

function openMobMenu() {
    const burgerBtn = document.querySelector(".burger");
    const mobMenu = document.querySelector(".mob-menu");
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        mobMenu.classList.toggle("active");
    });
}

const llc = document.querySelector('.llc');
const sp = document.querySelector('.sp');
const modalLlc = document.querySelector('.modal')
const modalSp = document.querySelector('.modalSp')

const esc = document.querySelector('.esc')
const esc1 = document.querySelector('.esc1')

llc.addEventListener('click', () => {
    console.log('open')
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    modalLlc.classList.add('active');
});

sp.addEventListener('click', () => {
    console.log('open')
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    modalSp.classList.add('active');
});


esc.addEventListener('click', () => {
    console.log('close')
    
    modalLlc.classList.remove('active');
});

esc1.addEventListener('click', () => {
    console.log('close')
    
    modalSp.classList.remove('active');
});

modalSp.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modalSp.classList.remove("active");
        document.body.style = "";
    }
});

// document.querySelector('.time').addEventListener('click', () => {
// 	Visible(document.getElementById('time1'));
// })

// document.querySelector('.ok').addEventListener('click', () => {
// 	Visible(document.getElementById('time2'));
// })

// document.querySelector('.time1').addEventListener('click', () => {
// 	Visible(document.getElementById('time1'));
// })

// document.querySelector('.ok1').addEventListener('click', () => {
// 	Visible(document.getElementById('time2'));
// })

// document.querySelector('.time3').addEventListener('click', () => {
// 	Visible(document.getElementById('time1'));
// })

// document.querySelector('.ok3').addEventListener('click', () => {
// 	Visible(document.getElementById('time2'));
// })


// window.addEventListener("scroll", function () {
//     Visible(document.querySelector(".procent"));
//     Visible(document.querySelector(".time5"));
// });


document.querySelector('.i1').addEventListener('click', () => {
    const burgerBtn = document.querySelector(".burger");
    const mobMenu = document.querySelector(".mob-menu");
    console.log('click')
    burgerBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
}) 
document.querySelector('.i2').addEventListener('click', () => {
    const burgerBtn = document.querySelector(".burger");
    const mobMenu = document.querySelector(".mob-menu");
    console.log('click')
    burgerBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
}) 
document.querySelector('.i3').addEventListener('click', () => {
    const burgerBtn = document.querySelector(".burger");
    const mobMenu = document.querySelector(".mob-menu");
    console.log('click')
    burgerBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
}) 
document.querySelector('.i4').addEventListener('click', () => {
    const burgerBtn = document.querySelector(".burger");
    const mobMenu = document.querySelector(".mob-menu");
    console.log('click')
    burgerBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
}) 

