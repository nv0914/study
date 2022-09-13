/*// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let minutes = 2;
// let seconds = 59;
// const timer = () => {
//     if (!minutes && !seconds) {
//         console.log('00:00')
//     } else {
//         if (minutes >= 0 && seconds > 0) {
//             seconds--
//             console.log(`0${minutes}:${seconds}`)
//             setTimeout(timer, "1000")
//         } else if (!seconds) {
//             minutes--
//             seconds = 59
//             console.log(`0${minutes}:${seconds}`)
//             setTimeout(timer, "1000")
//         }
//     }
// }
// timer()

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//

// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]
//
//     [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]

// let arr = [1,8,8,4,5,6,6,6,6,7,7,7,2,2,2,2,8,8,8,5,5,5,5,6,4,3,7]
// let newArr = arr.filter((value, index)=> value !== arr[index+2])

// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
const separatist = (num) => {
    let str = num + ''
    let newArr = []
    for (const strKey in str) {
        newArr.push(`${str[strKey]}` + "0".repeat(str.length - strKey - 1))
    }
    return newArr.join(" + ")
}
// console.log(separatist(5987));


// Дан массив целых чисел, найдите тот, который встречается нечетное
// количество раз.Всегда будет только одно целое число, которое встречается
// нечетное количество раз
let arr = [1, 2, 3, 4, 5, 5, 5, 2, 4, 1, 3, 5, 5]
const repeatCount = (arr) => {
    return arr
        .sort()
        .filter((value, index) => value !== arr[index + 3])
        .find(((value, index) => value === arr[index + 2]))
}
// console.log(repeatCount(arr))

// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

let word1 = 'good',
    word2 = 'gode';

const findCrypt = (str1, str2) => {
    return str1
        .split('').sort().join() === str2.split('').sort().join()
}
// console.log(findCrypt(word1, word2));

// Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
// let num = 16
// while(num>2){
//     num /= 2
// }
// if (num === 2){
//     console.log('Yes')
// }else {
//     console.log('No')
// }

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)
const sumNumbersRecursion = (number) => {
    let digit = number % 10;
    if (number > 0) {
        return digit + sumNumbersRecursion((number - digit) / 10);
    }
    return digit;
}
console.log(sumNumbersRecursion(2555));


// ______________________________________________________________
//
// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте,
// является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами.
const palindrome = (word) => {
    if (word === word.split('').reverse().join('')) {
        return "Yes"
    } else {
        return 'No'
    }
}
// console.log(palindrome('kayak'));
// _______________________________________________________________
//
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя
// числами 0 подряд. Определите, сколько раз в этой последовательности
// встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
let num = 2176491947586100
const countOne = (num) => {
    let arr = `${num}`.split('00')
    let count = 0
    for (let i = 0; i < arr[0].length; i++) {
        if (+arr[0][i] === 1) {
            count++
        }
    }
    return count
}
console.log(countOne(num));

// _________________________________________________________________
//
// Вирівняти багаторівневий масив в однорівневий
//
// flat використовувати заборонено.
// let megaArr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9]
// const flatMe = (arr) => {
//   let newArr = []
//     function inner(array) {
//         for (const argument of array) {
//             if (Array.isArray(argument)){
//                 inner(argument)
//             }else {
//                 newArr.push(argument)
//             }
//         }
//     }
//     inner(arr)
//     return newArr
// }
// console.log(flatMe(megaArr));


//     ___________________________________________________________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// console.log([1, 6, 9, 0, 17, 88, 4, 7].reduce((acc, value) => {
//     if(acc<value){
//         acc=value
//     }
//     return acc
// }, 0));
//
//
// Отримати масив лише унікальних значень за допомогою reduce
//     [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]

let arr1 = [1, 9, 0, 1, 5, 9, 1, 6]
let arrT = arr1.reduce((acc, value) => {
    if (acc.includes(value)) {
        return acc
    } else {
        return [...acc, value]
    }
}, []);
console.log(arrT);


// ____________________________________________________________________
// Знайти найблільше число поліндром яке утворюється завдяки добутку
// двох простих пятизначних чисел.
const pizdec = () => {
    let i = 99999,
        j = 99999;
    while (!(`${j * i}` === `${j * i}`.split('').reverse().join(''))) {
        i--
        while (!j){
            j--
        }
        console.log(j * i);
    }
}
//     ____________________________________________________________________
//
// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
const typeMe = (text) => {

setTimeout(()=>{
    return 'H'
}, 600)
}*/
//
// const calc = (str) => {
//     let act = str.split('').find(value => value.match(/[+\-*(/)]/)),
//         [num1, num2] = str.split(act);
//
//   switch (act) {
//       case '+':
//           return +num1 + +num2
//       case '-':
//           return +num1 - +num2
//       case '*':
//           return +num1 * +num2
//       case '/':
//           if (num2){
//               return +num1/+num2
//           }else {
//               return 'Infinity, bitch'
//           }
//   }
// }
// console.log(calc('12+87'));
console.log('+1'.split('+')[0] === ' ')

