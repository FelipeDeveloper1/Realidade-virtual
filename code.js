let header = document.querySelector('.header')
let contatos = document.querySelector('.contatos')
let sidebar = false

opensider = () => {
    sidebar = !sidebar
    console.log(sidebar)
    if (sidebar == true) {
        contatos.style.marginLeft = '0vw'
        contatos.style.animationName = 'showsidebar'

    } else {
        contatos.style.marginLeft = '-100vw'
        contatos.style.animationName = ''
    }
}