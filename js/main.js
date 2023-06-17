const navbarClose = document.querySelector('.navbar__close'),
     navbarOpen = document.querySelector('.navbar__open'),
     navbarMenu = document.querySelector('.navbar__menu'),
     header = document.querySelector('.header'),
     navbarLink = document.querySelectorAll('.link')

// Pc, tablet..
navbarOpen.addEventListener('click', () => {
    navbarMenu.classList.add('open')
})

navbarClose.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})

// section active link
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 300;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
            const target = section.getAttribute("id");
            const navLinks = document.querySelectorAll(".navbar__menu .navbar__list li");

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.querySelector("a").getAttribute("href") === `#${target}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});

// Mobile

function linkAction(){
    const navMenu = document.getElementById('navbar-menu')
    navbarMenu.classList.remove('open')
}
navbarLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

// Copy-to-clipboard

const text = document.querySelector('.clipboard');
const copyBtn = document.querySelector('.copy-btn');

copyBtn.addEventListener('click', async () => {
    try {
        text.select()
        await navigator.clipboard.writeText(text.value);
        copyBtn.innerText = 'Copied';

        setTimeout(() => {
            getSelection().removeAllRanges();
            copyBtn.innerText = 'Copy';
        }, 1500);
    } catch (error) {
        alert(error);
    }
})

// SR

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
})

sr.reveal('.home__title, .home__description, .home__action')
sr.reveal('.home__stats, .model__container, .product__container, .faq__container, .product__container, .news__container', {origin: 'bottom' }) 
sr.reveal('.about__content', {origin: 'left' })
sr.reveal('.about__article, .about__image-wrapper-alt', {origin: 'right' })
sr.reveal('.stats ,.marquee, .video__container, .home__image-wrapper', {distance: '0px'})