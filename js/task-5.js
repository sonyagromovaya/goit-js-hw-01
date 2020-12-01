"use strict";

let country = prompt("В какой стране вы живете?");

if(country === null){
  console.log('Вы отменили доставку!');
}else{
  country = country.toLowerCase();

switch (country) {
  case "китай": {
    const chinaPrice = 100;
    alert(`Доставка в Китай будет стоить ${chinaPrice} кредитов`);
    break;
  }
  case "чили": {
    const chilePrice = 250;
    alert(`Доставка в Чили будет стоить ${chilePrice} кредитов`);
    break;
  }
  case "австралия": {
    const australiaPrice = 170;
    alert(`Доставка в Австралия будет стоить ${australiaPrice} кредитов`);
    break;
  }
  case "индия": {
    const indiaPrice = 80;
    alert(`Доставка в Индия будет стоить ${indiaPrice} кредитов`);
    break;
  }
  case "ямайка": {
    const jamaicaPrice = 120;
    alert(`Доставка в Ямайка будет стоить ${jamaicaPrice} кредитов`);
    break;
  }
  default: {
    alert("В вашей стране доставка не доступна");
  }
}
}