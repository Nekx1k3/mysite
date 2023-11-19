const navSlide = () => {
    const burger = document.querySelector('.ham-burger');
    const nav = document.querySelector('.nav__link');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}
navSlide();
