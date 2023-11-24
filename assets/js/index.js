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



// Добавляем обработчик событий для отслеживания изменения состояния аккордеона 
document.addEventListener('shown.bs.collapse', function (event) {
    var activeHeader = event.target.parentElement.querySelector('.button');
    if (activeHeader) {
        activeHeader.classList.add('myActive');
    }
});

document.addEventListener('hidden.bs.collapse', function (event) {
    var activeHeader = event.target.parentElement.querySelector('.button');
    if (activeHeader) {
        activeHeader.classList.remove('myActive');
    }
}); 


document.addEventListener("DOMContentLoaded", function () { 
    // Развернуть первый элемент аккордеона 
    var firstAccordionItem = document.querySelector('.accordion-item:first-child'); 
    var firstCollapse = firstAccordionItem.querySelector('.accordion-collapse'); 
     
    firstCollapse.classList.add('myActive'); 
});