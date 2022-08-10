// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const stringLen = (a, b, c) => {
    console.log(a.length);
    console.log(b.length);
    console.log(c.length);
}
stringLen('hello world', 'lorem ipsum', 'javascript is cool')

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const stringUpper = (a, b, c) => {
    console.log(a.toUpperCase());
    console.log(b.toUpperCase());
    console.log(c.toUpperCase());
}
stringUpper('hello world', 'lorem ipsum', 'javascript is cool')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const stringLower = (a, b, c) => {
    console.log(a.toLowerCase());
    console.log(b.toLowerCase());
    console.log(c.toLowerCase());
}
stringLower('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL')

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let strToArr = 'Ревуть воли як ясла повні';
const strSplit = (str) => str.split(' ')
console.log(strSplit(strToArr));
//
//
//
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0],
    mappedArr = numArr.map(value => `${value}`);
console.log(mappedArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// його від більшого до меньшого, або навпаки в залежності від значення
// аргументу direction.
let nums = [11, 21, 3];
const sortNums = (numArr, direction) => direction === 'ascending' ? numArr.sort((a, b) => a - b) : numArr.sort((a, b) => b - a)
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration < b.monthDuration) {
        return 1
    } else if (a.monthDuration > b.monthDuration) {
        return -1
    } else {
        return 0
    }
})
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const moreThanFiveMonths = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(moreThanFiveMonths);


// описати колоду карт
const createDeck = () => {
    const cardSuit = ['spade', 'diamond', 'heart', 'clubs'],
        value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'],
        color = ['red', 'black'];
    let rawDeck = [];
    for (let i = 0; i < color.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if (value[j] === 'joker') {
                let card = {color: color[i], value: value[j]};
                rawDeck.push(card)
            } else {
                for (let k = 0; k < cardSuit.length; k++) {
                    if (color[i] === 'red' && (cardSuit[k] === 'diamond' || cardSuit[k] === 'heart') ||
                        color[i] === 'black' && (cardSuit[k] === 'spade' || cardSuit[k] === 'clubs')) {
                        let card = {
                            color: color[i],
                            cardSuit: cardSuit[k],
                            value: value[j]
                        };
                        rawDeck.push(card)
                    }

                }
            }
        }
    }
    return rawDeck
}
const deck = createDeck();

// - знайти піковий туз
const spadeAce = deck.reduce((acc, currentValue)=>{
    if(currentValue.cardSuit === 'spade' && currentValue.value === 'ace'){
        acc.color  = currentValue.color
        acc.value = currentValue.value;
        acc.cardSuit = currentValue.cardSuit;
    }
    return acc
},{})
console.log(spadeAce);

// - всі шістки
const allSix = deck.reduce((acc, currentValue)=>{
    if(currentValue.value === '6'){
        acc.push(currentValue);
    }
    return acc
},[])
console.log(allSix);

// - всі червоні карти
const allRed = deck.reduce((acc, currentValue)=>{
    if(currentValue.color === 'red'){
        acc.push(currentValue);
    }
    return acc
},[])
console.log(allRed);

// - всі буби
const allDiamond = deck.reduce((acc, currentValue)=>{
    if(currentValue.cardSuit === 'diamond'){
        acc.push(currentValue);
    }
    return acc
},[])
console.log(allDiamond);

// - всі трефи від 9 та більше
const allClubs = deck.reduce((acc, currentValue) => {
    if (currentValue.cardSuit === 'clubs' && currentValue.value >= '9') {
        acc.push(currentValue);
    }
    return acc
}, [])
console.log(allClubs);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти
// по "мастях" в об'єкт
const deckCompose = deck.reduce((acc, currentValue) => {
    if (currentValue.cardSuit === 'spade') {
        acc.spades.push(currentValue)
    }else if(currentValue.cardSuit === 'diamond') {
        acc.diamonds.push(currentValue)
    }else if(currentValue.cardSuit === 'heart'){
        acc.hearts.push(currentValue)
    }else if(currentValue.cardSuit === 'clubs'){
        acc.clubs.push(currentValue)
    }else{
        acc.jockers.push(currentValue)
    }
    return acc
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
    jockers: []
})
    console.log(deckCompose);