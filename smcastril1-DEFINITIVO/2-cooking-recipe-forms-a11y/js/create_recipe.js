// Variable para almacenar la referencia de el botón
'use strict';

const btn_save = document.querySelector('#btn_save');

const validate = () => {
    let required_inputs = document.querySelectorAll('#recipe_form [required]');
    
    // required_inputs.forEach(element => {
    //     if (element.value === "") {
    //         console.log(element);
    //         element.classList.add('input-error');
    //     } else {
    //         element.classList.remove('input-error');
    //     }
    // });

    // for (const element of required_inputs) {
    //     if (element.value === "") {
    //         console.log(element);
    //         element.classList.add('input-error');
    //     } else {
    //         element.classList.remove('input-error');
    //     }
    // }


    
}

btn_save.addEventListener('click', validate)