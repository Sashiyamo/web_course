let month_budget = prompt("Ваш бюджет на месяц", ''),
        date = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: month_budget,
    timeData: date,
    expanses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');
 
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);