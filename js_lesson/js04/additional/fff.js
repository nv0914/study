/*
let str = "The quick brown fox jumped over the lazy dog"
    let arr = str.split(" ");
    let index = 0;
    for(let i in arr){
        if(arr[i].length>arr[index].length){
            index = i
        }
    }

console.log(arr[index])*/
const listOfNumbers = [1,6,8,9,0,5,4,3,2,67,8,9,]
const minValueOfArray = (arr) =>{
    arr.sort((a,b) => a - b);
    console.log(arr)
}

minValueOfArray(listOfNumbers)