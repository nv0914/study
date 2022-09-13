// document.addEventListener('DOMContentLoaded', () => {
//     const menuItems = document.querySelectorAll('.menu-item'),
//         menuParent = document.querySelector('.menu-wrap'),
//         pictureItems = document.querySelectorAll('.item-photo-wrap'),
//         backgroundImage = document.querySelector('.background');
//
//     const hideEverything = () => {
//         pictureItems.forEach(picture => picture.classList.add('hide'))
//         menuItems.forEach(item => item.classList.remove('selected'))
//     }
//     const showElementOfContent = (index = 0) => {
//         pictureItems[index].classList.add('fade', 'show')
//         pictureItems[index].classList.remove('hide')
//         menuItems[index].classList.add('selected')
//         backgroundImage.style.backgroundImage = `url("img/${index+1}.jpg")`
//     }
//     hideEverything()
//     showElementOfContent()
//
//     menuParent.addEventListener('click', event => {
//         const target = event.target;
//         if (target.classList.contains('menu-item')) {
//             menuItems.forEach((item, index) => {
//                 if (target === item) {
//                     hideEverything()
//                     showElementOfContent(index)
//                 }
//             })
//         }
//     })
//
//
// })


// let arr = []
// function addNum() {
//     arr.push(Math.floor(Math.random()*100))
//     if (arr.length <= 20){
//         return addNum()
//     }else {
//         return arr
//     }
// }
// console.log(addNum())


// 4. Дни недели;
//
// аргументы функции
//
// int - номера дня недели
//
// int - время, часов
//
// enum Lang - язык (ru, eng)
//
//
//
//
// Если число равно 1, выводим то это 'Понедельник', 2 –”Вторник” и так далее. Если 6 или 7 – “Выходной”.
//
// Так же по времени - от 0 до 8 - ночь, от 8 до 12 - утро, от 12 до 20 день, от 20 до 23 - вечер.
//
//     если Lang.ru - выводить на русском, если Lang.eng - на английском
//
//
// function giveMeToday(day, hour) {
//     function giveMeHour(){
//         if (hour > 0 && hour < 24) {
//             if (hour < 8) {
//                 return 'Night'
//             } else if (hour < 12) {
//                 return 'Morning'
//             } else if (hour < 20) {
//                 return 'Day'
//             } else {
//                 return 'Evening'
//             }
//         } else {
//             return 'Error, bitch!'
//         }
//     }
//     function giveMeDay(){
//         switch (day) {
//             case 1:
//                 return 'Monday';
//             case 2:
//                 return 'Tuesday';
//             case 3:
//                 return 'Wednesday';
//             case 4:
//                 return 'Thursday';
//             case 5:
//                 return 'Friday';
//             case 6:
//                 return 'Saturday';
//             case 7:
//                 return 'Sunday';
//             default:
//                 return 'Error, bitch!';
//         }
//     }
//     const thisDay = giveMeDay(),
//         thisHour = giveMeHour()
//     if(thisHour === 'Error, bitch!' || thisDay === 'Error, bitch!'){
//         return 'Error, bitch!'
//     }else{
//         return `Today is ${thisDay} and it's ${thisHour}`
//     }
// }
//
// console.log(giveMeToday(5, 9));
//
// а) Обработать невалидные аргументы
//
// б) функция должна возвращать например, 'Понедельник, день' или то же самое на английском языке
//
// в) сделать у функции необязательный четвертый аргумент - коллбек, возвращающий результат.
//
//     г) дважды вызвать функцию и вывести в консоль значения из коллбека и из ретерна
//
// д) создание вспомогательных функций приветствуется
//
// function giveMeToday(day, hour, lang) {
//     function giveMeHour() {
//         switch (lang) {
//             case 'eng':
//                 if (hour > 0 && hour < 24) {
//                     if (hour < 8) {
//                         return 'Night';
//                     } else if (hour < 12) {
//                         return 'Morning';
//                     } else if (hour < 20) {
//                         return 'Day';
//                     } else {
//                         return 'Evening';
//                     }
//                 } else {
//                     return 'Error!';
//                 }
//             case 'ru':
//                 if (hour > 0 && hour < 24) {
//                     if (hour <= 8) {
//                         return 'Ночь';
//                     } else if (hour <= 12) {
//                         return 'Утро';
//                     } else if (hour <= 20) {
//                         return 'День';
//                     } else {
//                         return 'Вечер';
//                     }
//                 } else {
//                     return 'Ошибка!';
//                 }
//
//         }
//     }
//
//     function giveMeDay() {
//         switch (lang) {
//             case 'ru':
//                 if (day <= 0 && day >= 8) {
//                     if (day === 1) {
//                         return 'Понедельник';
//                     } else if (day === 2) {
//                         return 'Вторник';
//                     } else if (day === 3) {
//                         return 'Среда';
//                     } else if (day === 4) {
//                         return 'Четверг';
//                     } else if (day === 5) {
//                         return 'Пятница';
//                     } else if (day === 6) {
//                         return 'Суббота';
//                     } else if (day === 7) {
//                         return 'Воскресенье';
//                     }
//                 } else {
//                     return 'Ошибка!';
//                 }
//                 break;
//             case 'eng':
//                 if (day <= 0 && day >= 8) {
//                     if (day === 1) {
//                         return 'Monday';
//                     } else if (day === 2) {
//                         return 'Tuesday';
//                     } else if (day === 3) {
//                         return 'Wednesday';
//                     } else if (day === 4) {
//                         return 'Thursday';
//                     } else if (day === 5) {
//                         return 'Friday';
//                     } else if (day === 6) {
//                         return 'Saturday';
//                     } else if (day === 7) {
//                         return 'Sunday';
//                     }
//                     break
//                 } else {
//                     return 'Error!';
//                 }
//         }
//     }
//
//     const thisDay = giveMeDay();
//     const thisHour = giveMeHour();
//         if (thisHour === 'Error!' || thisDay === 'Error!') {
//             return 'Error!';
//         } else {
//             return `Today is ${thisDay} and its ${thisHour}`;
//         }
//
// }
//
// console.log(giveMeToday(5, 18, 'ru'));



const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)
