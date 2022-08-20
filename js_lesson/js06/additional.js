// - Напишите функцию cutString(str, n), которая делит строку на подстроки,
// состоящие из n символов.
const cutTheString = (str, n) => {
    const arr = []
    for (let i = 0; i < str.length; i+=n) {
        arr.push(str.substring(i, i+n))
    }
    return arr
}
console.log(cutTheString('наслаждение',3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
let str = 'Каждый охотник желает знать'
const subString = (str, n) => str.slice(0, n)
console.log(subString(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і
// вставляє тире (-) між словами. При цьому всі символи рядка необхідно
// перевести у верхній регістр.
let str0 = "HTML JavaScript PHP";
const dash = (str) => {
    let newS = str.replaceAll(' ', '-')
    return newS.toUpperCase()
}
console.log(dash(str0));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.
const str1 = (str) => `${str[0].toUpperCase()}${str.slice(1)}`
console.log(str1('name'));

// - Дано список імен.
let n1 = 'Harry..Potter',
n2 = 'Ron---Whisley',
n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує
// його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
const symb = (str) => {
 return str.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ')
 }
console.log(symb(n2));


// - створити функцію, яка генерує масив рандомних числових цілих значень в
// діапазоні від 0 до 100.
const randArr = () => {
    arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}
console.log(randArr());

// - створити (або згенерувати, за допомоги попередньої функції) масив
//  рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(randArr().sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив
// рандомних цілих числових значень. відфільтрувати  його за допомоги
// filter, залишивши тільки парні числа (без 0!)
const newArr = randArr().filter(value => value%2 === 0)
console.log(newArr);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне
// слово починається з великої літери
const lowerCase = 'san francisco disco style city',
    capitalize = (str) => str.split(' ').map(value => `${value[0].toUpperCase()}${value.slice(1)}`).join(' ')
console.log(capitalize(lowerCase));
// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність
// равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після
// равлика, функція не чутлива до регістру
const emailVerify = (str) => {
    const letsTest = str.toLowerCase().split('')
    console.log(letsTest);
    if (letsTest.includes(' ')) {
        console.log('Error');
    } else if (!letsTest.includes('@')) {
        console.log('Error @');
    } else if (letsTest.indexOf('.') <= letsTest.indexOf('@') + 1) {
        console.log('Error dot');
    }
}
emailVerify('some@EMAIL.com')
//
//
// (some@email.com,SOME@EMAIL.COM,
// some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
const sorted = coursesArray.sort((a,b) => b.modules.length - a.modules.length)
console.log(sorted)


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symbol = "а",
    str = "Астрономия это наука о небесных объектах";
const count = (str, stringSearch) => str.length - str.toLowerCase().replaceAll(stringSearch, '').length
console.log(count(str, symbol));

// - Напишіть функцію
// яка видаляє зайві слова з рядка str, залишивши
// у ній n слів.
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let string = "Сила тяжести приложена к центру масс тела";
const cutString = (str, n) => str.split(' ').splice(0, n).join(' ')
console.log(cutString(string, 2));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{
    title: 'Under the Home',
    pageCount: 100,
    genre: ['Drama', 'Family', 'Screamer'],
    authors: ['S. Prince', 'D. King']
}, {
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
const biggestBook = books.sort((a, b) => b.pageCount - a.pageCount)[0]
console.log(biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
const genres = books.reduce((acc, currentValue) => {
    if(acc.genre.length > currentValue.genre.length){
        return acc
    }else {
        return currentValue}
})
console.log(genres);

// - знайти книжку/ки з найдовшою назвою
const name = books.reduce((acc, currentValue) => {
    if(acc.title.length > currentValue.title.length){
        return acc
    }else {
        return currentValue}
})
console.log(name);

// - знайти книжку/ки які писали 2 автори
const authors = books.filter(value => value.authors.length === 2)
console.log(authors);

// - знайти книжку/ки які писав 1 автор
const author = books.filter(value => value.authors.length === 1)
console.log(author);

// - вісортувати книжки по кількості сторінок по зростанню
const sortBook = books.sort((a, b) => a.pageCount - b.pageCount)
console.log(sortBook);
