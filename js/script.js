// NUM 1


let num1 = 0.1;
let num2 = 0.2;
let result1 = num1 + num2;
alert("0.1 + 0.2="+ result1);
 // NUM 2
let x = +"1";
let y = 2;
let result2 = x + y;
alert("1+2="+ result2);
function calculateMb() {
    const standardSize = 1024;
    const fileSize = 820;
    let flashSize = (document.getElementById("flash_size").value);
    let numFiles = Math.round((flashSize * standardSize) / fileSize);
    document.getElementById("1result-files").textContent = `На флешку поміститься ${numFiles} файлів розміром ${fileSize} Мб`;
}

function calculateChocolate() {
    let manyMoney = (document.getElementById("moneyMany").value);
    let priceChocolate = (document.getElementById("priceChocolate").value);
    let resultChocolateMany = Math.floor(manyMoney / priceChocolate);
    let moneyOst = manyMoney - (resultChocolateMany * priceChocolate)
    document.getElementById("2result-chocolate-many").textContent = "Можна отримати " + resultChocolateMany + " штук та залишиться "+ moneyOst + "грн";
}
function resNum() {
    let number = (document.getElementById("3numb").value);
    let oneDia = number % 10;
    let twoDia = Math.floor(number / 10) % 10;
    let resultNum = Math.floor(number / 100);
    let numRes = oneDia * 100 + twoDia * 10 + resultNum;
    document.getElementById("3result-files").textContent = "Результат: " + numRes;
}
function banking(){
    const interest = 5/100;
    let budgetInBank = (document.getElementById("moneyKs").value);
    let manyMounts = (document.getElementById("manyMounts").value);
    let profit = budgetInBank * interest * manyMounts;
    document.getElementById("4result-files").textContent = "Прибуток буде" + profit + "грн";
}
function one(){
    let OneMatchRes =  2 && 0 && 3;
    document.getElementById("OneMatch").textContent = OneMatchRes;
}
function two(){
    let TwoMatchRes =  2 || 0 || 3;
    document.getElementById("TwoMatch").textContent = TwoMatchRes;
}
function three(){
    let ThreeMatchRes =  2 && 0 || 3;
    document.getElementById("ThreeMatch").textContent = ThreeMatchRes;
}