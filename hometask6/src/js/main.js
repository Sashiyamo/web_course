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


start.addEventListener('click', () => {
    let money, time, reg;

    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    reg = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
    while (time.search(reg) == -1 || time == "" || time == null) {
        time = prompt ("Введите корректную дату!", ""); 
    }

    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Введите свой настоящий бюджет!", ""); 
    }
    appData.timeData = time;
    date[0].defaultValue = time.match(/\d{4}/);
    date[1].defaultValue = +time.match(/\d{2}/g)[2];
    date[2].defaultValue = +time.match(/\d{2}/g)[3];

    appData.budget = money;
    right[0].textContent = money.toFixed();
})

utverd1.addEventListener('click', () => {
    for (let i = 0; i < inp.length; i++) {
        let a = inp[i].value,
            b = inp[++i];
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
            appData.expenses[a] = b;
            

        } else {
            console.log ("bad result");
            i--;
        }
    
    }
})


    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach((elem, i) => console.log('Статья доходов №' + ++i + ' : ' + elem));

    }
};


for (let i in appData) {
    // console.log("Наша программа включает в себя данные: " + i + " - " + appData[i]);
}