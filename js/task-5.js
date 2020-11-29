"use strict";

const country = prompt("В какой стране вы живете?").toLowerCase();
const china = "китай";
const chinaPrice = 100;
const chile = "чили";
const chilePrice = 250;
const australia = "австралия";
const australiaPrice = 170;
const india = "индия";
const indiaPrice = 80;
const jamaica = "ямайка";
const jamaicaPrice = 120;

switch (country) {
  case china: {
    alert(`Доставка в Китай будет стоить ${chinaPrice} кредитов`);
    break;
  }
  case chile: {
    alert(`Доставка в Чили будет стоить ${chilePrice} кредитов`);
    break;
  }
  case australia: {
    alert(`Доставка в Австралия будет стоить ${australiaPrice} кредитов`);
    break;
  }
  case india: {
    alert(`Доставка в Индия будет стоить ${indiaPrice} кредитов`);
    break;
  }
  case jamaica: {
    alert(`Доставка в Ямайка будет стоить ${jamaicaPrice} кредитов`);
    break;
  }
  default: {
    alert("В вашей стране доставка не доступна");
  }
}
