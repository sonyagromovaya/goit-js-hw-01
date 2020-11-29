"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const droidsUserWant = Number(prompt("Сколько дроидов вы хотите купить?"));

if (droidsUserWant === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = droidsUserWant * 3000;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${droidsUserWant} дроидов, на счету осталось ${credits} кредитов.`
  );
}
