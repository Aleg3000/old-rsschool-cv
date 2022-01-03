// alert('Hello world')

let burgerButton = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu-active')
let burgerLink = document.querySelectorAll('.active-item')
let burgerClose = document.querySelector('.burger-close-button')
let navLink = document.querySelectorAll('.nav-link')

burgerButton.addEventListener('click', () => {
    burgerMenu.style.display = 'block'
});
for (let i = 0; i < burgerLink.length; i++){
burgerLink[i].addEventListener('click', () => {
    burgerMenu.style.display = 'none';
    setTimeout(() => document.documentElement.scrollTop -= 32, 0)
    
})
}

for (let link of navLink) {
    link.addEventListener('click', () => {
        console.log('click')
       setTimeout(() => document.documentElement.scrollTop -= 32, 0)
        
    })
}

burgerClose.addEventListener('click', () => {
    burgerMenu.style.display = 'none'
})

