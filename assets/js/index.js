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


scrollUp.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
