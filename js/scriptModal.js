
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

const Visible = function (target) {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

    if (
        targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom
    ) {
        console.log("Вы видите элемент :)");
        target.classList.add('highlight');
    } else {
        target.classList.remove('highlight');
    }
};

document.querySelector('.time').addEventListener('click', () => {
    console.log('hi!')
	// Visible(document.getElementById('time1'));
    target = document.querySelector('.procent')
    target.classList.add('highlight');
    document.querySelector('.time5').classList.remove('highlight');
})

document.querySelector('.ok').addEventListener('click', () => {
    console.log('proc')
    target = document.querySelector('.time5')
    target.classList.add('highlight');
    document.querySelector('.procent').classList.remove('highlight');
})

document.querySelector('.time1').addEventListener('click', () => {
	target = document.querySelector('.procent')
    target.classList.add('highlight');
    document.querySelector('.time5').classList.remove('highlight');
})

document.querySelector('.ok1').addEventListener('click', () => {
	target = document.querySelector('.time5')
    target.classList.add('highlight');
    document.querySelector('.procent').classList.remove('highlight');
})

document.querySelector('.time3').addEventListener('click', () => {
	target = document.querySelector('.procent')
    target.classList.add('highlight');
    document.querySelector('.time5').classList.remove('highlight');
    // setTimeout(() => {
    //     target.classList.remove('highlight');
    // }, 2000)
})

document.querySelector('.ok3').addEventListener('click', () => {
	target = document.querySelector('.time5')
    target.classList.add('highlight');
    document.querySelector('.procent').classList.remove('highlight');
    // setTimeout(() => {
    //     target.classList.remove('highlight');
    // }, 2000)
})

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

