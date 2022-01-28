// EASY 1 - Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

// let random = [2, 4, 7, 11, 15, 16]
// function seperateNum(number) {
//     let odd = number % 2 === 0;
// }
// console.log(seperateNum)

const random = [2, 4, 7, 11, 15, 16];

// const even = random.filter(function(separateNum) {
//     return separateNum % 2 === 0;
// })
// const odd = random.filter(function(separateNum) {
//     return separateNum % 2 === 1;
// })

// console.log(even)
// console.log(odd)

const even = random.filter((separateNum) => separateNum % 2 === 0);
const odd = random.filter((separateNum) => separateNum % 2 === 1);

console.log(even, odd)

// EASY 2 - Create a function that checks an array for prime numbers then inserts any pimes into a new array.                              

// const NumArray = [1,2,3,4,5,6,7,8,9,10]
// function checkPrime(num){
//     for(i=2; i<NumArray.length; i++){
//         if (num[i]% i==0){
//             console.log('prime numbers')
//         }
//     }
// }
// checkPrime(6)

const numArray = [1,2,3,4,5,6,7,8,9,10]

function checkArray(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return num !== 1;
}
// console.log(checkArray(19))



const primes = numArray.filter(checkArray)
console.log(primes)

// MEDIUM 1 - Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel

// function isVowel(char)
// {
//   if (char.length == 1)
//   {
//     let vowels = "aeiou";
//     let isVowel = vowels.indexOf(char) >= 0 ? true : false;
//     return isVowel;
//   }
// }

function vowelChecker(x) {
    let vowel = x.toLowerCase()
    if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel ==='o' || vowel === 'u'){
        console.log('this is a vowel')
    }else{
        console.log('this is not a vowel')}
}
vowelChecker("b")

// MEDIUM 2 - Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.

// function checkString(string1, string2) {
//     if (string1.length == string2.length){
//         console.log(`this is an anagram`)
//     }else {
//         console.log(`this is not an anagram`)
//     }
// }
// checkString("drew", "werd")

function isAnagram(string1, string2){
    const checkAnagram = function(str){
        return str.toLowerCase().split("").sort().join("")
    }
    return checkAnagram(string1) == checkAnagram(string2)
}
console.log(isAnagram("drew","werd"))
console.log(isAnagram("drew","word"))

// Medium 3 - Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.

/*
function gcd(x, y) {
    let answer
    let counter = 1;
    let biggestNum
    //calculate the biggest number so we know which ones to try
    if (x > y) {
        biggestNum = x
    } else {
        biggestNum = y
    }
    let possibleGCD = 1
    //finds all numbers that divide the two numbers without a remander
    while (counter <= biggestNum) {
        //for this loop try to divide a number into both x and y
        //divide x by number we're trying to see if there is a remainder
        xRemainder = x % counter
        //divide y by same number trying to see if there is a remainder
        yRemainder = y % counter
        //if there is no remainder from x and from y then we know this is a common denominator
       if( xRemainder === 0 && yRemainder === 0 ){
        // for now since we're counting up this would be the gcd
        possibleGCD = counter
       }
        //remember it but it might not be the BIGGEST common denominator
        // console.log(counter)
        counter = counter + 1
    }
    //return the biggest common denoinator that we found inside the loop
    return possibleGCD
}
console.log(gcd(45, 90))
*/

// cleaning up code // 

function gcd2(x, y) {
    let counter = 1;
    //calculate the biggest number so we know which ones to try
    const biggestTry = Math.min(x,y)
    let possibleGCD = 1
    //finds all numbers that divide the two numbers without a remander
    while (counter <= biggestTry) {
        //for this loop try to divide a number into both x and y
        //divide x by number we're trying to see if there is a remainder
        //divide y by same number trying to see if there is a remainder
        //if there is no remainder from x and from y then we know this is a common denominator
       if( x % counter === 0 && y % counter === 0 ){
        // for now since we're counting up this would be the gcd
        possibleGCD = counter
       }
        //remember it but it might not be the BIGGEST common denominator
        // console.log(counter)
        counter = counter + 1
    }
    //return the biggest common denoinator that we found inside the loop
    return possibleGCD
}

console.log(gcd2(45, 90))

// let bigInt = function(x, y) {
//     while( x != y ){
//         if ( x > y){
//             x = x - y
//         }else {
//             y = y - x
//         }
//     }
//     return y
// }

// console.log(bigInt(10, 2))

// MEDIUM 4 - Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.

let car = {
        make:"Tesla",
        model: "Model-S",
        year: "2020",
        milage: 20000,
        color: "Black",
      };
     let driveToWork = () => {
        alert(`Old Milage is ${car.milage}`);
        car.milage =  car.milage + 15;
        console.log(`New milage is ${car.milage}`);
      };
      let driveAroundTheWorld  =() => {
        alert(`Old Milage is ${car.milage}`);
        (car.milage = car.milage + 2300);
        console.log(`New milage is ${car.milage}`);
      };
      let runErrands  =() => {
        alert(`Old Milage is ${car.milage}`);
        car.milage = car.milage + 45;
        console.log(`New milage is ${car.milage}`);
      };

    driveToWork(car)
    driveAroundTheWorld(car)
    runErrands(car)

// class Car1 {
//     constructor(make, model, year, milage, color){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.milage = 0;
//         this.color = color;
//     }
//     carInfo(){
//         console.log(`You drive a ${this.make} ${this.model} from ${this.year} with ${this.milage} with an awesome color of ${this.color}`)
//     }

//     driveToWork(distance){
//         this.milage += distance
//         console.log(`${this.make} ${this.model} has been driven ${distance} miles`)
//         return this
//     }

//     driveAroundWorld(distance){
//         this.milage += distance
//         console.log(`${this.make} ${this.model} has been driven ${distance} miles around the world`)
//         return this
//     }
//     runArrands(){
//         this.milage += distance
//         console.log(`${this.make} ${this.model} has been driven ${distance} miles to run erracnds`)
//         return this
//     }
// }

// const myCar = new Car1("Tesla", "Model-S", 2021, "0", "Rapid Blue")
// myCar.carInfo()
// myCar.driveToWork(15)
// console.log(myCar.milage)
// myCar.driveToWork(20)
// console.log(myCar.milage)
// myCar.driveAroundWorld(2300)
// console.log(myCar.milage)
// myCar.driveAroundWorld(50)
// console.log(myCar.milage)



// HARD - Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value

let textInput = prompt("Please enter in a set of brackets of your choice ex. ( {}, [], () ) ")
let findBracket = (str) => {
    let openPos = -1
    let closePos = -1
    if (str.indexOf("(") >= 0) {
        openPos = str.indexOf("(")
        closePos = str.indexOf(")")
    } else if (str.indexOf("{") >= 0) {
        openPos = str.indexOf("{")
        closePos = str.indexOf("}")
    } else if (str.indexOf("[") >= 0) {
        openPos = str.indexOf("[")
        closePos = str.indexOf("]")
    }
    return openPos < closePos
}
console.log(findBracket(textInput))