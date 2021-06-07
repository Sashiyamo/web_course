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


    let deadline = '2020-06-09';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
});