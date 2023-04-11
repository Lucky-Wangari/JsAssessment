//Write a function that takes in a string and returns it when reversed
let food = "eating"
let foods = (food.reverse(food))
console.log(foods)

//Write a function that takes in the following array and consoles the target if it is found else
//null
function binary(arr, target){ 
    let leftSide = 0
    let rightSide = arr.length -1;
    console.log(leftSide)
    console.log(rightSide)
    while(leftSide <= rightSide){
    console.log( leftSide);
    console.log(rightSide)
    let middle = Math.floor((leftSide +rightSide)/2)
    if(arr[middle] === target){
        return middle
    }
    else if(arr[middle] > target){
        right = middle -1
    }
    else{
        left = middle +1
    }
    }
    return null
    }
    
    let middle = Math.floor(arr.length / 2);
     let leftSide = array.slice(0, middle);
     let rightSide = array.slice(middle);
     return merge(mergeSort(leftSide), mergeSort(rightSide));
    
   function merge(leftSide, rightSide)
    let result = [];
    while (leftSide.length && rightSide.length) 
      if (leftSide[0] < rightSide[0]) {
        result.push(leftSide.shift());
      } else {
        result.push(rightSide.shift());}
    
let num= [2,8,0,23,5,45,76]
target = 23
console.log(binary(arr, target))
//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year

let year = [2000,2001,2002,2003,2004];
if(x in year % 2 == 0){
   console.log("2020 is a leap year")
}else{
    console.log("2001 is not a leap year")
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let numbers = 0 <= 100
if(x in numbers % 3 == 0 && x in numbers %5 == 0){
    console.log("FizzBuzz")
} else if(x in numers % 3 == 0){
    console.log("Fizz")

}else if(x in numbers % 5 == 0){
    console.log("Buzz")
}

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”];
// functi on numericals(nums.ParseInt())

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
let mutiple = 0;
let i = 0;
while(i < numArray.length){
    console.log(4 % numArray[i]);
}
      
   
