/*--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

const arr1 = [1,2,3,4,5],
    arr2 = ['1','2','3','4','5'],
    arr3 = ['1','2','3','4','5',1,2,3,4,5, false,true]
console.log(arr3)

/*
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
 до конкретного індексу. Вивести в консоль*/
const arr4 = [];
arr4[0] = true;
arr4[1] = 1
console.log(arr4)

//З масиву:
const whileArr = [2,17,13,6,22,31,45,66,100,-18],
    arrLen = whileArr.length;
// 1. перебрати його циклом while
let i=0;
while(i<arrLen){
    console.log(whileArr[i])
    i++
}

// 2. перебрати його циклом for
for(let j = 0; j<arrLen; j++){
    console.log(whileArr[j])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let t=1;
while(t<arrLen){
    console.log(whileArr[t])
    t+=2
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let k = 1; k<arrLen; k+=2){
    console.log(whileArr[k]
    )
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let p=0;
while(p<arrLen){
    if(whileArr[p]%2 === 0){
        console.log(whileArr[p])
    }
    p++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(let q = 1; q<arrLen; q++){
    if(whileArr[q]%2 === 0){
        console.log(whileArr[q])}
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let c = 0; c <arrLen; c++) {
    if(whileArr[c]%3 === 0){
        whileArr[c] = 'okten'
    }
    console.log(whileArr[c])
}

// 8. вивести масив в зворотньому порядку.
for (let e = arrLen-1; e >=0; e--) {
    console.log(whileArr[e])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while
let i=arrLen-1;
while(i>0){
    console.log(whileArr[i])
    i--
}

// 2. перебрати його циклом for
for(let j = arrLen-1; j>0; j--){
    console.log(whileArr[j])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let t = arrLen-1;
while(t>0){
    if(t%2 !== 0){
    console.log(whileArr[t])
    }
    t--
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let k = arrLen-1; k>0; k--){
    if(t%2 !== 0){
        console.log(whileArr[k])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let p=arrLen-1;
while(p>0){
    if(whileArr[p]%2 === 0){
        console.log(whileArr[p])
    }
    p--
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(let q = arrLen-1; q>0; q--){
    if(whileArr[q]%2 === 0){
        console.log(whileArr[q])}
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let c = arrLen-1; c >0; c--) {
    if(whileArr[c]%3 === 0){
        whileArr[c] = 'okten'
    }
    console.log(whileArr[c])
}




/*- Створити масив з 10 числових елементів. Вивести в консоль всі його
 елементи в циклі.*/
const arrNum = [1,32,33,4,54,6,7,38,9,10]
for (const value of arrNum) {
    console.log(value)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const arrStr = ['1','32','33','4','54','6','7','38','9','10']
for (const value of arrStr) {
    console.log(value)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arrMix = ['1','32',true,4,54,6,7,38,9,10]
for (const value of arrMix) {
    console.log(value)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// за допомогою if та typeof вивести тільки булеві елементи
const arrSuperMix = ['1','32',true,4,false,6,7,false,9,10,'string',true,false,true,'false',true,3,true]
for (const value of arrSuperMix) {
    if(typeof(value) === "boolean"){
        console.log(value)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// за допомогою if та typeof вивести тільки числові елементи
for (const value of arrSuperMix) {
    if(typeof(value) === "number"){
        console.log(value)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// за допомогою if та typeof вивести тільки рядкові елементи
for (const value of arrSuperMix) {
    if(typeof(value) === "string"){
        console.log(value)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за
// типами) через звернення до конкретних індексів. Вивести в консоль всі
// його елементи в циклі.
const arrEmpty=[];
arrEmpty[0] = 4
arrEmpty[1] = 'true'
arrEmpty[2] = 2
arrEmpty[3] = true
arrEmpty[4] = false
arrEmpty[5] = 'Alice'
arrEmpty[6] = 6
arrEmpty[7] = 'true'
arrEmpty[8] = true
arrEmpty[9] = 0
for (const arrEmptyElement of arrEmpty) {
    console.log(arrEmptyElement)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер
// кроку через console.log та document.write
for(let y =1; y<=10; y++){
    console.log(y);
    document.write(`${y}`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер
// кроку через console.log та document.write
for(let y =1; y<=100; y++){
    console.log(y);
    document.write(`${y}`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер
// кроку через console.log та document.write
for(let y =1; y<=200; y+=2){
    console.log(y);
    document.write(`${y}`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через
// console.log + document.write
for(let y =1; y<=100; y++){
    if(y%2 === 0) {
        console.log(y);
        document.write(`${y}`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через
// console.log + document.write
for(let y =1; y<=100; y++){
    if(y%2 !== 0) {
        console.log(y);
        document.write(`${y}`);
    }
}

// Створити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{
    title: 'Under the Home',
    pageCount: 100,
    genre: ['Drama', 'Family', 'Screamer'],
    authors: ['S. Prince', 'D. King']
},{
    title: 'Middle of Nowhere',
    pageCount: 88,
    genre: ['Fantasy', 'Reality'],
    authors: ['C.P. Rolling']
}, {
    title: 'Harry Daughter',
    pageCount: 885,
    genre: ['Drama', 'Chinese'],
    authors: ['M.J. Parker']
}, {
    title: 'The Biggest Adventure of the Smallest Dwarf',
    pageCount: 558,
    genre: ['Tragedy'],
    authors: ['G. Gendalf']
}];
// -знайти наібльшу книжку.
let maxBook = 0;
for (const book in books) {
    if(books[book].pageCount>books[maxBook].pageCount){
        maxBook = book
    }
}
console.log(books[maxBook].title)

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenre = 0;
for (const genre in books) {
    if(books[genre].genre.length>books[maxGenre].genre.length){
        maxGenre = genre
    }
}
console.log(books[maxGenre].title)

// - знайти книжку/ки з найдовшою назвою
let maxName = 0;
for (const name in books) {
    if(books[name].title.length>books[maxGenre].title.length){
        maxName = name
    }
}
console.log(books[maxName].title)

// - знайти книжку/ки які писали 2 автори
for (const value of books) {
    if(value.authors.length ===2){
        console.log(value.title)
    }
}

// - знайти книжку/ки які писав 1 автор
for (const value of books) {
    if(value.authors.length ===1){
        console.log(value.title)
    }
}
