// 1. Створити пустий масив
let arr = [];
// та :
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; arr.length <= 50; i++) {
   if(i%2 === 0){
       arr.push(i)
   }
    }
console.log(arr)
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; arr.length <= 100; i++) {
    if(i%2 !== 0){
        arr.push(i)
    }
}
console.log(arr)
//     c. Заповнити масив 20ма рандомними числами.
for (let i = 0; arr.length <= 120; i++) {
        arr.push(Math.floor(Math.random() * 100))
}
console.log(arr)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
for (let i = 0; arr.length <= 140; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8)
}
console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемен
for (const arrKey in arr) {
    if(arrKey%3 === 0){
        console.log(arr[arrKey])
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей
// елемент є парним.
for (const arrKey in arr) {
    if(arrKey%3 === 0){
        if(arr[arrKey]%2 === 0){
            console.log(arr[arrKey])
        }
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки
// якщо цей елемент є парним та записати їх в новий масив
const newArr = [];
for (const arrKey in arr) {
    if(arrKey%3 === 0){
        if(arr[arrKey]%2 === 0){
            newArr.push(arr[arrKey])
        }
    }
}
console.log(newArr)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] ->
// Має бути виведено 1, 9, 56
for (let i = 0; i < arr.length; i++) {
    if(arr[i+1]%2 === 0){
        console.log(arr[i])
    }
}
// 6. Є масив з числами
const price = [100,250,50,168,120,345,188];
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
let sum = 0;
for (const number of price) {
    sum += number
}
console.log(Math.floor(sum/price.length))

// 7. Створити масив з рандомними значеннями, помножити всі його
// елементи на 5 та перемістити їх в інший масив.
const randArr = [],
    randArrFiveTimes = [];
for (let i = 0; randArr.length <= 20; i++) {
    randArr.push(Math.floor(Math.random() * 10))
}
console.log(randArr)
for (const randArrElement of randArr) {
    randArrFiveTimes.push(randArrElement*5)
}
console.log(randArrFiveTimes)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
const chaosArr = [5,8,9,'test', 9, true, 'somnambula',8, false],
    numArr = [];
for (const chaosArrElement of chaosArr) {
    if(typeof(chaosArrElement) === 'number'){
    numArr.push(chaosArrElement)}
}
console.log(numArr)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та
// "user_id" Записати цей об'єкт в новий масив
const newData = [];

for (const valueUsers of usersWithId) {
    for (const valueCities of citiesWithId) {
        if (valueUsers.id === valueCities.user_id) {
            newData.push(valueUsers)
            valueUsers.adress = valueCities
        }
    }
}
console.log(newData)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті
// елементи, значення яких є парними.
const tenNum = [];

for (let i = 0; tenNum.length <= 10; i++) {
    tenNum.push(Math.floor(Math.random() * 10))
}
for (const tenNumElement of tenNum) {
    if(tenNumElement%2 === 0 && tenNumElement !== 0){
        console.log(tenNumElement)
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
const anotherTenNum = [],
    emptyArr = [];

for (let i = 0; anotherTenNum.length <= 10; i++) {
    anotherTenNum.push(Math.floor(Math.random() * 10))
}
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
for (const anotherTenNumElement of anotherTenNum) {
    emptyArr.push(anotherTenNumElement)
}
console.log(emptyArr)


// - Дано масив:
const letters = [ 'a', 'b', 'c'];
// За допомогою циклу for зібрати всі букви в слово.
let wordFor = ''
for (let i = 0; i < letters.length; i++) {
    wordFor += `${letters[i]}`;
}
console.log(wordFor)

// За допомогою циклу while зібрати всі букви в слово.
let wordWhile = '',
    o = 0;
while(o<letters.length){
    wordWhile += `${letters[o]}`;
    o++
}
console.log(wordWhile)
// За допомогою циклу for of зібрати всі букви в слово.
let wordForOf = '';
for (const value of letters) {
    wordForOf += `${value}`;
}
console.log(wordForOf)