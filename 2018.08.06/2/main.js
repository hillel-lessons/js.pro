window.onload = function () {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal__content');

    modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal__content')) {
            console.log(e.target);
            modal.classList.remove('active');
        }
    });

    document.querySelector('.modal-btn').addEventListener('click', function () {
       modal.classList.add('active');
    });
};