window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    
    let info = document.querySelector('.info-header'),
        content = document.querySelectorAll('.info-tabcontent'),
        but = document.querySelectorAll('.info-header-tab');

    
    let hideshow = (a) => {
        for (let i = 0; i < content.length; i++) {
            if (i == a) {
                content[i].classList.remove('hide');
                content[i].classList.add('show');
            } else {
                content[i].classList.remove('show');
                content[i].classList.add('hide');
            }
        }
    };
    hideshow(0);

    info.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < but.length; i++)
                if (but[i] == e.target)
                    hideshow(i);
        }
    });
});