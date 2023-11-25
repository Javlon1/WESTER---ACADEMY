const offSet = 100;
const scrollUp = document.querySelector(".scroll-up")
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
        scrollUp.classList.add("active")
    } else {
        scrollUp.classList.remove("active")
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
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


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

// датези шу ерга ташасез болди 
const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const itemsPerPage = 4;

function displayData(pageNumber) {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = ``;

    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <li>
            <p class="icon"><i class="bi bi-caret-right-fill"></i></p>

            <video class="video" autoplay controls>
                <source autoplay src="https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm" type="video/mp4">
            </video>

            <p class="name">${item}</p>
        </li>
        `;
        dataList.appendChild(li);
    });
}

function displayPagination(currentPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('button');
        a.textContent = i;

        if (i === currentPage) {
            a.classList.add('active');
        }

        a.addEventListener('click', function () {
            displayData(i);
            displayPagination(i);
        });

        li.appendChild(a);
        pagination.appendChild(li);
    }
}

displayData(1);
displayPagination(1);


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