function darkMode() {
    const body = document.querySelector('.body')
    const header = document.querySelector('.header')
    const navLink = document.querySelector('.nav__link--inicio')
    const btnCart = document.querySelector('.btn--cart')
    const btnMenu = document.querySelector('.btn--menu')
    const h2 = document.querySelector('.products__title')
    const btnDark = document.querySelector('.btn__dark')
    const navProductsLink = document.querySelector('.nav__link--productos')
    const notify = document.querySelector('.notify')

    btnDark.addEventListener('click', function () {
        body.classList.toggle('dark__mode')
        header.classList.toggle('dark__mode--header')
        navLink.classList.toggle('dark__mode--link')
        btnCart.classList.toggle('dark__mode--shopping')
        btnMenu.classList.toggle('dark__mode--close')
        h2.classList.toggle('dark__mode--title')
        navProductsLink.classList.toggle('dark__mode--link')
        notify.classList.toggle('dark__mode--notify')
    })
}

export default darkMode