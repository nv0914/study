// Всі функції повинні бути описані стрілочним типом!!!!
// створити функцію яка приймає три числа та виводить найменьше. (Без
// Math.min!)
const minOfNumbers = (a, b, c) => {
    if (a < b && a < b) {
        return a
    } else if (b < a && b < c) {
        return b
    } else {
        return c
    }


}
console.log(minOfNumbers(2, 5, 9))

// - створити функцію яка приймає три числа та виводить найбільше.
const maxOfNumbers = (a, b, c) => {
    if (a > b && a > b) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }


}
console.log(maxOfNumbers(2, 5, 9))

// - створити функцію яка повертає найбільше число з масиву
const listOfNumbers = [1, 6, 8, 9, 0, 5, 4, 3, 2, 67, 8, 9,]
const maxOfArray = (arr) => {
    let max = arr[0];
    for (const aKey in arr) {
        if (arr[aKey] > max) {
            max = arr[aKey]
        }
    }
    return max
}
console.log(maxOfArray(listOfNumbers))

// - створити функцію яка повертає найменьше число з масиву
const minOfArray = (arr) => {
    let max = arr[0];
    for (const aKey in arr) {
        if (arr[aKey] < max) {
            max = arr[aKey]
        }
    }
    return max
}
console.log(minOfArray(listOfNumbers))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
const sumOfElements = (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement
    }
    return sum
}
console.log(sumOfElements(listOfNumbers))

// - Дано натуральное число n. Выведите все числа от 1 до n.
const listToN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
listToN(10)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const listToAB = (a, b) => {
    if (a < b) {
        while (a <= b) {
            console.log(a)
            a++
        }
    } else {
        while (b <= a) {
            console.log(a)
            a--
        }
    }
}
listToAB(7, 9)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
const swingTheNumber = (arr, i) => {
    for (let j = 0; j < arr.length; j++) {
        if (j === i) {
            let swing = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swing;
        }
    }
    return arr
}
console.log(listOfNumbers)
console.log(swingTheNumber(listOfNumbers, 2))

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
const testZeroArr = [1, 0, 6, 0, 3];

const zeroOutsiderV = (arr) => {
    let notZeroArr = [],
        i = 0,
        j = 0;
    while (i < arr.length) {
        if (arr[i] !== 0) {
            notZeroArr[j] = arr[i]
            j++
        }
        i++
    }
    while (arr.length > notZeroArr.length) {
        notZeroArr[notZeroArr.length] = 0
    }
    return notZeroArr
}
console.log(zeroOutsiderV(testZeroArr))
