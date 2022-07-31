/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let x = -1;
if(x !== 0){
    console.log('Correct');
}else{
    console.log('Error');
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який
перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
let time = 47;
if(time < 0 || time >= 60){
    console.log('Error')
}else if(time <= 15){
    console.log('First quarter')
}else if(time <= 30){
    console.log('Second quarter')
}else if(time <= 45){
    console.log('Third quarter')
}else if(time <= 59){
    console.log('Forth quarter')
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
let day = 30;
if(day <= 0 || day >= 32){
    console.log('Error')
}else if(day <= 10){
    console.log('First decade')
}else if(day <= 20){
    console.log('Second decade')
}else if(day <= 31){
    console.log('Third decade')
}

/* - Скласти розклад на тиждень за домопоги switch. Користувач вводить
 порядковий
номер дня тижня і на екрані відображається інфа що заплановано на цей день
(можна замість плану на день, назву дня англійською).*/
let date = +prompt('Day pls')
switch (date) {
    case 1: alert('Monday');
        break;
    case 2: alert('Tuesday');
        break;
    case 3: alert('Wednesday');
        break;
    case 4: alert('Thursday');
        break;
    case 5: alert('Friday');
        break;
    case 6: alert('Saturday');
        break;
    case 7: alert('Sunday');
        break;
    default: alert('Error')
}


/*  - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/
let a = +prompt('Give me a Number');
let b = +prompt('Give me a Number again');

if(!a || !b){
    alert('A number!')
}else if(a === b){
    alert('Same values')
}else if(a>b){
alert(`${a} is max`)
}else{
    alert(`${b} is max`)
}

/* - є змінна х, яка може прийняти будь-яке значення (стрінг, число,
 undefined, null  і тд включно). Напишіть код який, за допомоги  оператора
  || буде присвоювати змінній х значення "default" якщо значення змінної х
   являється falsy (хибноподыбне, тобто кастується до false)*!/
*/
let y = prompt('Type something');
if(y === '' || y === 0 || isNaN(y) || y === undefined || y === null){
    y = `default`;
    console.log(y)
}