butt.onclick = function () {
  let val = document.getElementById("elem1").value;
  document.getElementById("str").innerHTML = "Вы ввели: " + val;

  let userInput = val.split("").map(Number);
  console.log(userInput);

  let masLenght = userInput.length;
  console.log("Длина массива " + masLenght);
  let a = masLenght / 2; //  Разделил длину массива на 2

  //проверяю, что число кратное 2
  if (Number.isInteger(masLenght / 2)) {
    console.log("ОК ввели номер билета кратный двум");
  } else {
    alert("ошибка ввода (номер билета долже быть кратный двум)");
  }

  if (val !== null && !isNaN(val)) {
    console.log("ОК ввели номер билета кратный двум");
  } else {
    alert("ошибка ввода (номер билета должен быть без букв и пробелов)");
  }

  let first = [];
  let second = [];

  for (i = 0; i < a; i++) {
    first[i] = userInput[i];
  }

  for (i = a; i < masLenght; i++) {
    second[i] = userInput[i];
  }
  console.log("Первый блок чисел " + first);
  console.log("Второй блок чисел " + second);

  let res1 = first.reduce((sum, curent) => sum + curent, 0);
  console.log(" сумма первых трёх чисел массива  " + res1);

  let res2 = second.reduce((sum, curent) => sum + curent, 0);
  console.log("Сумма вторых трёх чисел массива " + res2);
  let results
  if (res1 === res2) {
    console.log("true");
      results = 'Счастливый';
  } else {
    console.log("false");
      results = 'увы, пробуй дальше';
  }
  document.getElementById("result").innerHTML = "Ваш билет: " + results;
};



// let bilet = prompt('insert number');
// let userInput = bilet.split('')

//  console.log(userInput)

// let test = '1,2,3,4,5,6'

// let a = test.split('');

// let a = [1,2,3,4,5,6]

//  let res1 = a.reduce((sum, curent) => sum + curent, 0)
// console.log (res1)

// let bilet = prompt('insert number');
// let userInput = bilet.split('')

//  console.log(+userInput)

// console.log (res);
// let b = +a.slice(0,1)

// console.log(b)

// let c = +a.slice(2,3)
// console.log(c)
// let res = b + c

// console.log (res)

// let money, time;
// function start() {
//   money = prompt("Ваш бюджет на месяц?");
//   time = prompt("Введите дату в формате YYYY-MM-DD");
//   while (isNaN(money) || money == "" || money == null) {
//     money = prompt("Ваш бюджет на месяц?");
//   }
// }

// start();

// let appData = {
//   budjet: money,
//   moneyPerDay: [],
//   timeData: time,
//   epenses: {},
//   optionalExpenses: {},
//   income: [],
//   savings: true,
// };

// function chooseExpenses() {
//   for (i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");

//     console.log(typeof a);

//     if (a !== null && isNaN(a)) {
//       console.log("Первый вопрос всё ок - заполненная строка");
//       if (b !== null && !isNaN(b)) {
//         console.log("Второй вопрос всё ок - цифра");
//         appData.epenses[a] = b;
//       } else {
//         alert("error string");
//         console.log(
//           "Второй вопрос - ошибка ввода ( ввели не цифру/пустую строку)"
//         );
//         i--;
//       }
//     } else {
//       alert("error string");
//       console.log(
//         "Первый вопрос - ошибка ввода ( ввели не строку/пустую строку)"
//       );
//       i--;
//     }
//   }
// }

// chooseExpenses();

// function detectDayBudjet() {
//   appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
//   alert("Суточный расход " + appData.moneyPerDay);
// }

// detectDayBudjet();

// function detectLevel() {
//   if (appData.moneyPerDay < 100) {
//     alert("Низкий уровень дохода");
//   } else if (appData.moneyPerDay < 1000) {
//     alert("Средний доход");
//   } else {
//     alert("Всё ок!");
//   }
// }

// detectLevel();

//  function chooseOptExpenses() {
//    for (i=0; i<3; i++) {
// let a = prompt('Статья необязательных расходов')
// appData.optionalExpenses[i] = a;
//   }
//  };

//  chooseOptExpenses();

// function checkSavings (){
//   if (appData.savings == true){
//     let save = +prompt('Введите сумму накоплений');
//     let persent = +prompt('Под какой процент');
//     appData.monthIncome = save/100/12*persent;
//     alert("Процент от дохода" + appData.monthIncome)
//   }
// }
// checkSavings();

// console.log(appData);
// console.log(appData.epenses);
// console.log(appData.budjet);
