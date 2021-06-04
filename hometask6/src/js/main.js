'use strict';

let start = document.querySelector('#start'),
    right = document.querySelectorAll('div[class$="-value"]'),
    inp = document.querySelectorAll('.expenses-item'),
    utverd1 = document.querySelector('.expenses-item-btn'),
    utverd2 = document.querySelector('.optionalexpenses-btn'),
    rassch = document.querySelector('.count-budget-btn'),
    options = document.querySelectorAll('.optionalexpenses-item'),
    vozmogn = document.querySelector('.choose-income'),
    check = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    date = document.querySelectorAll('input[class$="-value"]');

let money, time;

start.addEventListener('click', () => {
    utverd1.disabled = 0;
    utverd2.disabled = 0;
    rassch.disabled = 0;
    
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    let reg = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
    while (time.search(reg) == -1 || time == "" || time == null) {
        time = prompt ("Введите корректную дату!", ""); 
    }

    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Введите свой настоящий бюджет!", ""); 
    }
    appData.timeData = time;
    date[0].defaultValue = +time.match(/\d{4}/);
    date[1].defaultValue = +time.match(/\d{2}/g)[2];
    date[2].defaultValue = +time.match(/\d{2}/g)[3];

    appData.budget = money;
    right[0].textContent = money.toFixed();
});

utverd1.addEventListener('click', () => {
    let sum = 0;
    
    for (let i = 0; i < inp.length; i++) {
        let a = inp[i].value,
            b = inp[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            //console.log ("done");
            appData.expenses[a] = b;
            sum += +b;

        } else {
            console.log ("bad result");
            i--;
        }
    }
    right[3].textContent = sum;
});

utverd2.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        let questionOptExpenses = options[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        right[4].textContent += appData.optionalExpenses[i] + ', ';
    }
});

rassch.addEventListener('click', () => {
    if (appData.budget != undefined && right[3].textContent != '') {
        appData.moneyPerDay = ((appData.budget - +right[3].textContent) / 30).toFixed();
        right[1].textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
        right[2].textContent = "Минимальный";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            right[2].textContent = "Средний";
        } else if (appData.moneyPerDay > 2000) {
            right[2].textContent = "Высокий";
        } else {
            right[2].textContent = "Вышла ошибочка...!";
        }
    } else if (appData.budget == undefined) {
        alert('Вы еще не ввели бюджет!!!');
    } else if (right[3].textContent == '') {
        alert('Вы еще не ввели обязательные траты!!!');
    } else {
        alert('Произошла ошибка!');
    }
});

vozmogn.addEventListener('input', () => {
    let voz = vozmogn.value;
    right[5].textContent = voz;
    appData.income = voz.split(", ");
    if (voz.search(/\s/) != -1 && voz.search(/,/) == -1) {
        alert('Вводите данные через запятую!!!');
        vozmogn.value = vozmogn.value.replace(/\s/, '');
    }
});

window.onload = () => {
    utverd1.disabled = 1;
    utverd2.disabled = 1;
    rassch.disabled = 1;

    if (appData.savings) {
        check.checked = true;
    } else {
        sum.disabled = 1;
        percent.disabled = 1;
    }
};

check.addEventListener('click', () => {
    appData.savings = check.checked;
    if (!appData.savings) {
        sum.disabled = 1;
        sum.style.backgroundColor = 'gray';
        percent.disabled = 1;
        percent.style.backgroundColor = 'gray';
    } else {
        sum.disabled = 0;
        sum.style.backgroundColor = '';
        percent.disabled = 0;
        percent.style.backgroundColor = '';
    }
});

sum.addEventListener('input', () => {
    let summ = +sum.value,
        per = +percent.value;

    if (!isNaN(summ) && !isNaN(per)) {
        appData.monthSave = summ/100/12*per;
        appData.yearSave = summ/100*per;

        right[6].textContent = appData.monthSave.toFixed();
        right[7].textContent = appData.yearSave.toFixed();
    } else {
        alert('Вводите сумму и проценты в целых числах!!!');
        sum.value = '';
        percent.value = '';
        
        appData.monthSave = 0;
        appData.yearSave = 0;

        right[6].textContent = '';
        right[7].textContent = '';
    }
});

percent.addEventListener('input', () => {
    let summ = +sum.value,
        per = +percent.value;

    if (!isNaN(summ) && !isNaN(per)) {
        appData.monthSave = summ/100/12*per;
        appData.yearSave = summ/100*per;

        right[6].textContent = appData.monthSave.toFixed();
        right[7].textContent = appData.yearSave.toFixed();
    } else {
        alert('Вводите сумму и проценты в целых числах!!!');
        sum.value = '';
        percent.value = '';

        appData.monthSave = 0;
        appData.yearSave = 0;

        right[6].textContent = '';
        right[7].textContent = '';
    }
});
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


// for (let i in appData) {
//      console.log("Наша программа включает в себя данные: " + i + " - " + appData[i]);
// }