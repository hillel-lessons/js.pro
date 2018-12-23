window.onload = function () {
    const input = document.querySelector('.input');
    const close = document.querySelector('.close');
    const formElem = document.querySelector('.form__elem');
    
    function clearText(input, direction) {
        direction = direction || 'left';

        input.addEventListener('keyup', function () {
            if (input.value.length !== 0) {
                close.classList.add('visible');

                if (direction === 'right') {
                    formElem.classList.add('right')
                } else {
                    formElem.classList.add('left')
                }
            } else {
                close.classList.remove('visible');
                formElem.classList.remove('left');
                formElem.classList.remove('right');
            }
        });

        close.addEventListener('click', function () {
            input.value = '';
            close.classList.remove('visible');
            formElem.classList.remove('left');
            formElem.classList.remove('right');
        })
    }
  
    clearText(input);
};