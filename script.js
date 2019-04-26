"use strict"
//1) Задание
var arr = [2, -5, 1, -2, 0, -3, 2, -14]
var posArr = arr.filter(function(number){
    return number >= 0;
});
var sqrtArr = posArr.map(function(value){
    return  Math.sqrt(value);
});
console.log(sqrtArr);

//2) Задание
var arr2 = [0, 3, 5, 5, 1, 4, 0, 6];
var result = 0; // сумма чисел
var isChange=false; // проверка на случай если в массиве больше одного ноля
arr2.reduce(function(sum, current){
    if (current == 0 && !isChange){
        result = sum;
        isChange = true;
    }
    return sum + current
}, 0);
console.log(result);

//3) Задание
function summArguments(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(summArguments(10, 1, 2, 5));