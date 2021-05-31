let but = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    columns = document.querySelectorAll('.column'),
    ad = document.querySelector('.adv'),
    title = document.querySelector('#title'),
    prom_block = document.querySelector('#prompt'),
    prom = prompt("Как вы относитесь к технике Apple?", '');

let newli = document.createElement('li');
newli.innerHTML = 'Пятый пункт';
newli.classList.add('menu-item');

menu.insertBefore(but[2], but[1]);
menu.appendChild(newli);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.innerHTML = 'Мы продаем только подлинную технику Apple'; 

columns[1].removeChild(ad);

prom_block.textContent = prom;

