//ИГРА УГАДАЙ ЧИСЛО

// Игра угадай число на JavaScript
// В этой игре компьютер загадывает число от 1 до 10.
//  В инпут на экране игрок вводит число от 1 до 10, пытаясь угадать, что же загадал компьютер.

buttRandomNam.onclick = function () {

let userNum = document.getElementById('userRandomNam').value;
document.getElementById('user_namber').innerHTML = 'Ваше число: ' + userNum;
let  pcnumber = [];
for (i=0; i<11; i++){
   pcnumber.push(i) //Метод push() добавляет элемент в конец массива
}
console.log (pcnumber)

let random = Math.floor(Math.random() * pcnumber.length) //Получить случайный элемент массива 
console.log(random)
document.getElementById('computer').innerHTML = 'Компьютер загадал число ' + random

if (+userNum === random){
  console.log('ok')
  document.getElementById('result').innerHTML = 'Угадали'
}
  else {
    console.log('no')
    document.getElementById('result').innerHTML = 'не угадали'
}
}
//КОННЕЦ ИГРА УГАДАЙ ЧИСЛО



//ПРОВЕРКА СЧАСЛИВОГО БИЛЕТА

buttBilet.onclick = function () {
  let val = document.getElementById("userBilet").value;
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
  let resultBilet
  if (res1 === res2) {
    console.log("true");
    resultBilet = 'Счастливый';
  } else {
    console.log("false");
    resultBilet = 'увы, пробуй дальше';
  }
  document.getElementById("resultBilet").innerHTML = "Ваш билет: " + resultBilet;
};
// КОНЕЦ СЧАСЛИВОГО БИЛЕТА
