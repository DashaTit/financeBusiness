
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
        target.classList.add('highlight');
    } else {
        target.classList.remove('highlight');
    }
};

document.querySelector('.time').addEventListener('click', () => {
    target = document.querySelector('.procent')
    
    // target.classList.add('highlight');
    // document.querySelector('.time5').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollProcent();
    }, 1000)
})

document.querySelector('.ok').addEventListener('click', () => {
    console.log('proc')
    target = document.querySelector('.time5')
    // target.classList.add('highlight');
    // document.querySelector('.procent').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollTime();
    }, 1000)
})

document.querySelector('.time1').addEventListener('click', () => {
	target = document.querySelector('.procent')
    setTimeout(()=>{
        Visible(target)
        scrollProcent();
    }, 1000)
})

document.querySelector('.ok1').addEventListener('click', () => {
	target = document.querySelector('.time5')
//     window.addEventListener("scroll", function () {
//     Visible(target);
// });
    // target.classList.add('highlight');
    // document.querySelector('.procent').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollTime();
    }, 1000)
})

document.querySelector('.time3').addEventListener('click', () => {
	target = document.querySelector('.procent')
    setTimeout(()=>{
        Visible(target)
        scrollProcent();
    }, 1000)
    // setTimeout(() => {
    //     target.classList.remove('highlight');
    // }, 2000)
})

document.querySelector('.ok3').addEventListener('click', () => {
	target = document.querySelector('.time5')
    // target.classList.add('highlight');
    // document.querySelector('.procent').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollTime();
    }, 1000)
})

document.querySelector('.mini').addEventListener('click', () => {
	target = document.querySelector('.min200')
    // target.classList.add('highlight');
    // document.querySelector('.procent').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollMin();
    }, 1000)
})

document.querySelector('.mini2').addEventListener('click', () => {
	target = document.querySelector('.min200')
    // target.classList.add('highlight');
    // document.querySelector('.procent').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollMin();
    }, 1000)
})

document.querySelector('.mini3').addEventListener('click', () => {
	target = document.querySelector('.min200')
    // target.classList.add('highlight');
    // document.querySelector('.procent').classList.remove('highlight');
    setTimeout(()=>{
        Visible(target)
        scrollMin();
    }, 1000)
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

// window.addEventListener('scroll', () => {
    
//     target = document.getElementById('time');
//     var targetPosition = {
//         top: window.pageYOffset + target.getBoundingClientRect().top,
//         left: window.pageXOffset + target.getBoundingClientRect().left,
//         right: window.pageXOffset + target.getBoundingClientRect().right,
//         bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
//     },
//     windowPosition = {
//         top: window.pageYOffset,
//         left: window.pageXOffset,
//         right: window.pageXOffset + document.documentElement.clientWidth,
//         bottom: window.pageYOffset + document.documentElement.clientHeight,
//     };
//     if (
        
//         targetPosition.bottom < windowPosition.top ||
//         targetPosition.top > windowPosition.bottom
//     ) {
//         document.querySelector('.time5').classList.remove('highlight');
//         console.log('scr');
//     }
// })

// setInterval(() => {
//     target = document.getElementById('approval-procent');

//     var targetPosition = {
//                 top: window.pageYOffset + target.getBoundingClientRect().top,
//                 left: window.pageXOffset + target.getBoundingClientRect().left,
//                 right: window.pageXOffset + target.getBoundingClientRect().right,
//                 bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
//             },
//             windowPosition = {
//                 top: window.pageYOffset,
//                 left: window.pageXOffset,
//                 right: window.pageXOffset + document.documentElement.clientWidth,
//                 bottom: window.pageYOffset + document.documentElement.clientHeight,
//             };
//             if (
                
//                 targetPosition.bottom < windowPosition.top ||
//                 targetPosition.top > windowPosition.bottom
//             ) {
//                 document.querySelector('.procent').classList.remove('highlight');
//                 console.log('scr');
//             }  else {
//                 console.log('time stop')
//             }

// }, 1000)

window.addEventListener('load', () => {
    console.log(window.location.href)
    if (window.location.href.includes('approval-procent')) {
        target = document.querySelector('.procent')
        // target.classList.add('highlight');
        setTimeout(()=>{
            Visible(target)
            scrollProcent();
        }, 1000)
    } else if (window.location.href.includes('approval-time')) {
        target = document.querySelector('.time5')
        // target.classList.add('highlight');
        setTimeout(()=>{
            Visible(target)
            scrollTime();
        }, 1000)
    }  else if (window.location.href.includes('issue')) {
        target = document.querySelector('.min200')
        // target.classList.add('highlight');
        setTimeout(()=>{
            Visible(target)
            scrollMin();
        }, 1000)
    }
})

function scrollProcent() {
    console.log('scroll')
    window.addEventListener('scroll', () => {
        let target = document.getElementById('approval-procent')
        // let rect = element.getBoundingClientRect();
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
        let isVisible = targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
        if (!isVisible) {
            console.log('remove')
            document.querySelector('.procent').classList.remove('highlight');
        }
    })
}

function scrollTime() {
    console.log('scroll')
    window.addEventListener('scroll', () => {
        let target = document.getElementById('approval-time')
        // let rect = element.getBoundingClientRect();
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
        let isVisible = targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
        if (!isVisible) {
            console.log('remove')
            document.querySelector('.time5').classList.remove('highlight');
        }
    })
}

function scrollMin() {
    console.log('scroll')
    window.addEventListener('scroll', () => {
        let target = document.querySelector('.min200')
        // let rect = element.getBoundingClientRect();
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
        let isVisible = targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
        if (!isVisible) {
            console.log('remove')
            document.querySelector('.min200').classList.remove('highlight');
        }
    })
}