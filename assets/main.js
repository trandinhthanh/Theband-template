const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const closeModal = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.js-modal-container')


function showFormTicket(){  
    modal.classList.add('open-modal')
}

function hideForm(){
    modal.classList.remove('open-modal')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showFormTicket)
}
closeModal.addEventListener('click',hideForm )

modal.addEventListener('click',hideForm)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})


//Hamberger-menu

const hiddenMenu = document.getElementById('hidden-menu')
const elementNav = document.getElementById('nav')

hiddenMenu.addEventListener('click',function() {
    // elementNav.style.display = 'block'
    
    if (elementNav.style.display == 'block') {
        elementNav.style.display = 'none'
    } else {
        elementNav.style.display = 'block'
    }
})



