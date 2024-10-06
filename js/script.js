document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(
        "input.benefit__input:not(.counted)"
    );
    inputs.forEach((input) => {
        input.addEventListener("input", countBenefit);
    });
    openMobMenu();
    initialisingSwiper();
    countBenefit();
});

function openMobMenu() {
    const burgerBtn = document.querySelector(".burger");
    const mobMenu = document.querySelector(".mob-menu");
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        mobMenu.classList.toggle("active");
    });
}

function initialisingSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            630: {
                slidesPerView: 2,
            },
            890: {
                slidesPerView: 3,
            },
        },
    });
}
function countBenefit() {
    const a = parseFloat(document.getElementById("credit_sum").value);
    const b = parseInt(document.getElementById("term").value);
    const c = parseFloat(document.getElementById("bank_rate").value);
    const d = parseFloat(document.getElementById("broker_rate").value);
    const result =
        ((a * (c / 1200)) / (1 - 1 / Math.pow(1 + c / 1200, b))) * b - a;
    document.getElementById("overpayment1").value = parseInt(result);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {
        // Расчет переплаты по ставке банка
        let overpayment_value1 = parseInt(
            ((a * (c / 1200)) / (1 - 1 / Math.pow(1 + c / 1200, b))) * b - a
        );
        document.getElementById("overpayment1").value = overpayment_value1;

        // Расчет переплаты по ставке брокера с учетом комиссии
        let overpayment_value2 = parseInt(
            ((a * (d / 1200)) / (1 - 1 / Math.pow(1 + d / 1200, b))) * b -
                a +
                a * 0.15
        );
        document.getElementById("overpayment2").value = overpayment_value2;

        // Расчет комиссии брокера
        let commission_value = a * 0.15;
        document.getElementById("comission").value = parseInt(commission_value);

        // Расчёт выгоды
        let benefit_value = overpayment_value1 - overpayment_value2;
        document.getElementById("benefit-input").value = benefit_value;
    } else {
        inputs = document.querySelectorAll(
            "input.benefit__input:not(.counted)"
        );
        countedInputs = document.querySelectorAll(
            "input.benefit__input.counted"
        );
        countedInputs.forEach((input) => {
            input.value = "";
        });
        if (a) {
            let commission_value = a * 0.15;
            document.getElementById("comission").value =
                parseInt(commission_value);
        }
    }
}

const title = document.querySelector(".title");

const Visible = function (target) {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top + 400,
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
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right
    ) {
        console.log("Вы видите элемент :)");
        target.classList.add('highlight');
    } else {
        target.classList.remove('highlight');
    }
};

window.addEventListener("scroll", function () {
    Visible(document.querySelector(".denial__title"));
    Visible(document.querySelector(".ways__title"));
    Visible(document.querySelector(".experience_title"));
    Visible(document.querySelector(".reviews__title"));
    Visible(document.querySelector(".ot__title"));
    Visible(document.querySelector(".work__title"));
    Visible(document.querySelector(".benefit__title"));
    Visible(document.querySelector(".questions__title"));
});

Visible(title);
