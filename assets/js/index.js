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

// const initSlider = () => {
//     const sliderList = document.querySelector(".container__list")
//     const slideButtons = document.querySelectorAll(".container__top__button")

//     slideButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//         })
//     })
// }

// window.addEventListener("load", initSlider)

// const sliderList = document.querySelector(".container__list")

// const goPrev = () => {
//     const direction = -1
//     const scrollAmount = `${200 * direction}px`
//     console.log(scrollAmount);
//     sliderList.scrollBy({ left: scrollAmount, behavior: "smooth" })
// }

// const goNext = () => {
//     const direction = 1
//     const scrollAmount = `${200 * direction}px`
//     console.log(scrollAmount);
//     sliderList.scrollBy({ left: 200})
// }

const sliderList = document.querySelector(".container__list")
const btnPrev = document.getElementById("prev")
const btnNext = document.getElementById("next")

sliderList.addEventListener("whell", (e) => {
    e.preventDefault()
    sliderList.scrollLeft += e.deltaY
})

btnNext.addEventListener("click", () => {
    sliderList.scrollLeft += 300
    console.log("n");
})

btnPrev.addEventListener("click", () => {
    sliderList.scrollLeft -= 300
    console.log("p");
})




// Ваш массив данных (замените на свои данные)
const data = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

// Количество элементов на одной странице
const itemsPerPage = 4;

// Отображение данных на странице
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

            <div class="plyr__video-embed video" id="player">
                <iframe
                    loading="lazy"
                    src="https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm"
                    allowfullscreen allowtransparency allow="autoplay"></iframe>
            </div>

            <p class="name">${item}</p>
        </li>
        `;
        dataList.appendChild(li);
    });
}

// Отображение кнопок пагинации
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

// Начальная отрисовка данных и пагинации
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
// 12000
setTimeout(popUp, 12000);