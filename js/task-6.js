"use strict";

let input;
let total = 0;
do{
    input = prompt("Введите число");
    if(Number.isNaN(Number.parseInt(input)) === true){
        continue;
    }
    else if(input === null){
        break;
    }
    total += Number.parseInt(input);
}
while(input !== null)
alert(`Общая сумма чисел равна ${total}`);