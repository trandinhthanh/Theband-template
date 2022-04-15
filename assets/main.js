//Close|Open Modal
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const closeModal = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.js-modal-container')

//OpenModal
function showFormTicket() {
    modal.classList.add('open-modal')
}

//CloseModal
function hideForm() {
    modal.classList.remove('open-modal')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showFormTicket)
}
closeModal.addEventListener('click', hideForm)

modal.addEventListener('click', hideForm)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

//Close|Open Menu
const hiddenMenu = document.getElementById('hidden-menu')
const elementNav = document.getElementById('nav')

hiddenMenu.addEventListener('click', function () {
    if (elementNav.classList.contains('open-hidden-menu') == false) {
        elementNav.classList.add('open-hidden-menu')
    } else {
        elementNav.classList.remove('open-hidden-menu')
    }
})

//auto close when click menuItems
const elementItemsMenu = document.querySelectorAll('#nav li a')
for (let index = 0; index < elementItemsMenu.length; index++) {
    elementItemsMenu[index].addEventListener('click', function (event) {
        //dùng nextElementSibling để lấy ra node <ul> sau đó kiểm tra
        isSubnav = elementItemsMenu[index].nextElementSibling && elementItemsMenu[index].nextElementSibling.classList.contains('subnav')
        if (isSubnav) {
            event.preventDefault();
        } else {
            elementNav.classList.remove('open-hidden-menu')
        }
    })
}


