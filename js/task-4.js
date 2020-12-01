"use strict";

let credits = 23580;
const pricePerDroid = 3000;

const droidsUserWant = prompt('Сколько дроидов вы хотите купить?');

let totalPrice = droidsUserWant * pricePerDroid;

if(droidsUserWant === null){
    console.log("Отменено пользователем!");
}else if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
} else{
    console.log(`Вы купили ${droidsUserWant} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}