const btnMobile = document.getElementById('btn-mobile');
const menuLink = document.querySelectorAll('.link')

menuLink.forEach(link =>{
    link.addEventListener('click', fecharMenu);
    link.addEventListener('touchstart', fecharMenu);
})


function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefaul()

    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

function fecharMenu(event) {
    if(event.type === 'touchstart') event.preventDefaul()

    const nav = document.querySelector('nav');
    nav.classList.remove('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
