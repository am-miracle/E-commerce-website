const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.burger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav');

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if (navLeft < 0){
        menu.classList.add('show');
        document.body.classList.add('show');
        navBar.classList.add('show');
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0){
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove('show');
    }
});

//fixed navbar
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener('scroll', () =>{
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
    }else{
        navBar.classList.remove("fix-nav");
    }
});

//scroll to 
const links = [...document.querySelectorAll(".scroll-link")];

links.map(link =>{
    if(!link) return;
    link.addEventListener("click", e =>{
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);

        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });


        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove('show');
    });
});


gsap.from('.logo', {opacity: 0, duration: 1, delay: .5, y: -10 });
gsap.from('.burger', {opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from('.header-img', {opacity: 0, duration: 1, delay: 1.5, x: 200 });
gsap.from('.head-content h2', {opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from('.head-content h1', {opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from('.head-content p', {opacity: 0, duration: 1, delay: 3, x: 10 });
gsap.from('.head-content a', {opacity: 0, duration: 1, delay: 3.5, y: 50 });


