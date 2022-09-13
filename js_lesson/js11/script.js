const wakeUp = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I wake up')
        }, 800)
    })
}

const walkWithDog = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Morning walk with Charlie')
        }, 3000)
    })
}

const washMyDog = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Cleaning paws...')
        }, 200)
    })
}

const showerMe = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Cold morning shower')
        }, 700)
    })
}

const breakfast = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Having breakfast & feeding the dog')
        }, 2000)
    })
}

const goingToWork = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Going to work by bus')
        }, 300)
    })
}

const workingMyBest = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Working as God')
        }, 400)
    })
}

const timeToGoHome = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Bus is waiting')
        }, 900)
    })
}

const eveningWalk = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Taking Charlie for a walk')
        }, 1200)
    })
}

const havingDinner = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Having dinner and feeding dog')
        }, 200)
    })
}

const sleepTime = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Going to sleep')
        }, 4000)
    })
}

// wakeUp()
//     .then(value => {
//         console.log(value)
//         return walkWithDog()
//     })
//     .then(value => {
//         console.log(value)
//         return washMyDog()
//     })
//     .then(value =>{
//         console.log(value);
//         return showerMe()
//     })
//     .then(value =>{
//         console.log(value);
//         return breakfast()
//     })
//     .then(value =>{
//         console.log(value);
//         return goingToWork()
//     })
//     .then(value =>{
//         console.log(value);
//         return workingMyBest()
//     })
//     .then(value =>{
//         console.log(value);
//         return timeToGoHome()
//     })
//     .then(value =>{
//         console.log(value);
//         return eveningWalk()
//     })
//     .then(value =>{
//         console.log(value);
//         return havingDinner()
//
//     })
//     .then(value =>{
//         console.log(value);
//         return sleepTime()
//     })
//     .then(value =>{
//         console.log(value);
//     })

async function myDay() {
    const func1 = await wakeUp()
    console.log(func1)
    const func2 = await walkWithDog()
    console.log(func2)
    const func3 = await washMyDog()
    console.log(func3)
    const func4 = await showerMe()
    console.log(func4)
    const func5 = await breakfast()
    console.log(func5)
    const func6 = await goingToWork()
    console.log(func6)
    const func7 = await workingMyBest()
    console.log(func7)
    const func8 = await timeToGoHome()
    console.log(func8)
    const func9 = await eveningWalk()
    console.log(func9)
    const func10 = await havingDinner()
    console.log(func10)
    const func11 = await sleepTime()
    console.log(func11)
}
myDay()