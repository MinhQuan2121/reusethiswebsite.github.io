// Modal

const modalViews = document.querySelectorAll('.classify__modal-container');
const modalBtns = document.querySelectorAll('.classify__grid-item-btn');
const modalCloses = document.querySelectorAll('.modal__closeBtn');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('actived');
    document.body.style = 'height: 100%; overflow-y: hidden;'
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('actived');
            document.body.style = 'height: 1000vh; overflow-y: normal;'
        })
    })
})
