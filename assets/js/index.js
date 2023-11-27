const offSet = 100;
const offSetSection1 = 0;
const offSetSection2 = 400;
const offSetSection3 = 1400;
const offSetSection4 = 2200;
const offSetSection5 = 3500;
const offSetSection6 = 5000;

const scrollUp = document.querySelector(".scroll-up")
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
const voiceSection1 = document.querySelector(".voice__container__section1")
const voiceSection2 = document.querySelector(".voice__container__section2")
const voiceSection3 = document.querySelector(".voice__container__section3")
const voiceSection4 = document.querySelector(".voice__container__section4")
const voiceSection5 = document.querySelector(".voice__container__section5")
const voiceSection6 = document.querySelector(".voice__container__section6")

// activeVideo
const voice = document.querySelector(".voice")

voice.addEventListener("click", () => {
    voice.classList.toggle("activeVideo")
})

window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
        scrollUp.classList.add("active")
        if (getTop() <= offSetSection1) {
            voiceSection1.classList.add("actVoice")
            voiceSection2.classList.remove("actVoice")
            voiceSection3.classList.remove("actVoice")
            voiceSection4.classList.remove("actVoice")
            voiceSection5.classList.remove("actVoice")
            voiceSection6.classList.remove("actVoice")
        } else if (getTop() <= offSetSection2) {
            voiceSection1.classList.remove("actVoice")
            voiceSection2.classList.add("actVoice")
            voiceSection3.classList.remove("actVoice")
            voiceSection4.classList.remove("actVoice")
            voiceSection5.classList.remove("actVoice")
            voiceSection6.classList.remove("actVoice")
        } else if (getTop() <= offSetSection3) {
            voiceSection1.classList.remove("actVoice")
            voiceSection2.classList.remove("actVoice")
            voiceSection3.classList.add("actVoice")
            voiceSection4.classList.remove("actVoice")
            voiceSection5.classList.remove("actVoice")
            voiceSection6.classList.remove("actVoice")
        } else if (getTop() <= offSetSection4) {
            voiceSection1.classList.remove("actVoice")
            voiceSection2.classList.remove("actVoice")
            voiceSection3.classList.remove("actVoice")
            voiceSection4.classList.add("actVoice")
            voiceSection5.classList.remove("actVoice")
            voiceSection6.classList.remove("actVoice")
        } else if (getTop() <= offSetSection5) {
            voiceSection1.classList.remove("actVoice")
            voiceSection2.classList.remove("actVoice")
            voiceSection3.classList.remove("actVoice")
            voiceSection4.classList.remove("actVoice")
            voiceSection5.classList.add("actVoice")
            voiceSection6.classList.remove("actVoice")
        } else if (getTop() <= offSetSection6) {
            voiceSection1.classList.remove("actVoice")
            voiceSection2.classList.remove("actVoice")
            voiceSection3.classList.remove("actVoice")
            voiceSection4.classList.remove("actVoice")
            voiceSection5.classList.remove("actVoice")
            voiceSection6.classList.add("actVoice")
        }
    } else {
        scrollUp.classList.remove("active")
        voiceSection1.classList.add("actVoice")
        voiceSection2.classList.remove("actVoice")
        voiceSection3.classList.remove("actVoice")
        voiceSection4.classList.remove("actVoice")
        voiceSection5.classList.remove("actVoice")
        voiceSection6.classList.remove("actVoice")
    }
})


scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})



document.addEventListener('shown.bs.collapse', function (event) {
    var activeHeader = event.target.parentElement.querySelector('.butt');
    if (activeHeader) {
        activeHeader.classList.add('myActivee');
    }
});

document.addEventListener('hidden.bs.collapse', function (event) {
    var activeHeader = event.target.parentElement.querySelector('.butt');
    if (activeHeader) {
        activeHeader.classList.remove('myActivee');
    }
});

// slider start
let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-container__list");
const items = document.querySelectorAll(".slider-container__list__slider");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const itemsCount = items.length;
const itemWidth = 320 //container.clientWidth / slidesToShow;
const movePosition = container.clientWidth === 400 ? 320 : container.clientWidth === 767 ? 600 : slidesToScroll * itemWidth;


btnNext.addEventListener("click", () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};


checkBtns();
// slider end


function openModal() {
    document.getElementById('pop-up').style.display = 'flex';
    document.getElementById('pop-up-close').style.display = 'block';
}

function closeModal() {
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('pop-up-close').style.display = 'none';
    document.body.style.overflow = 'visible'; // or 'auto'
}

const popUp = () => {
    openModal()
    document.body.style.overflow = 'hidden';
}

const time = 40000

setTimeout(popUp, time);