//Task2
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        alert(i);
    }
}

//Task3
function factorial(nuber) {
    if (number < 0) return "Факториал не определён для отрицательных чисел";
    if (number === 0 || number === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = prompt("Введите число:");
const fact = factorial(parseInt(number));
alert(`Факториал числа ${number} равен ${fact}`);