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
    let flashSize = parseInt(document.getElementById("flash_size").value);
    let numFiles = Math.round((flashSize * standardSize) / fileSize);
    document.getElementById("1result-files").textContent = `На флешку поміститься ${numFiles} файлів розміром ${fileSize} Мб`;
}

function calculateChocolate() {
    let manyMoney = parseInt(document.getElementById("moneyMany").value);
    let priceChocolate = parseInt(document.getElementById("priceChocolate").value);
    let resultChocolateMany = Math.floor(manyMoney / priceChocolate);
    let moneyOst = manyMoney - (resultChocolateMany * priceChocolate)
    document.getElementById("2result-chocolate-many").textContent = "Можна отримати " + resultChocolateMany + " штук та залишиться "+ moneyOst + "грн";
}
function resNum() {
    let number = parseInt(document.getElementById("3numb").value);
    let oneDia = number % 10;
    let twoDia = Math.floor(number / 10) % 10;
    let resultNum = Math.floor(number / 100);
    let numRes = oneDia * 100 + twoDia * 10 + resultNum;
    document.getElementById("3result-files").textContent = "Результат: " + numRes;
}