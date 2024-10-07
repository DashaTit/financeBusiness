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
        targetPosition.bottom >= windowPosition.top || 
        targetPosition.top <= windowPosition.bottom ||
        targetPosition.right >= windowPosition.left ||
        targetPosition.left <= windowPosition.right
    ) {
        target.classList.add('highlight');
    } else {
        target.classList.remove('highlight');
    }
};

document.querySelector('.time').addEventListener('click', () => {
	Visible(document.getElementById('time1'));
})

document.querySelector('.ok').addEventListener('click', () => {
	Visible(document.getElementById('time2'));
})

document.querySelector('.time1').addEventListener('click', () => {
	Visible(document.getElementById('time1'));
})

document.querySelector('.ok1').addEventListener('click', () => {
	Visible(document.getElementById('time2'));
})

document.querySelector('.time3').addEventListener('click', () => {
	Visible(document.getElementById('time1'));
})

document.querySelector('.ok3').addEventListener('click', () => {
	Visible(document.getElementById('time2'));
})

