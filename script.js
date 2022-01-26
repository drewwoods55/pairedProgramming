// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15

// let random = [2, 4, 7, 11, 15, 16]

// function seperateNum(number) {
//     let odd = number % 2 === 0;
// }

// console.log(seperateNum)

const random = [2, 4, 7, 11, 15, 16];

const even = random.filter(function(separateNum) {
    return separateNum % 2 === 0;
})
const odd = random.filter(function(separateNum) {
    return separateNum % 2 === 1;
})

console.log(even)
console.log(odd)

// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1: 
// Input: umArray = n[1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:		
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

const NumArray = [1,2,3,4,5,6,7,8,9,10]

function checkPrime(num){
    for(i=2; i<NumArray.length; i++){
        if (num[i]% i==0){
            console.log('prime numbers')
        }
    }

}
checkPrime(6)


const numArray = [1,2,3,4,5,6,7,8,9,10]
function checkArray(num){
    for(i=2; i < numArray.length; i++){
        if(num[i] % 2 === 0){
            console.log("prime numbers")
        }
    }
}


checkArray(numArray)

// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

//function vowelChecker(a)

// function isVowel(char)
// {
//   if (char.length == 1)
//   {
//     let vowels = "aeiou";
//     let isVowel = vowels.indexOf(char) >= 0 ? true : false;

//     return isVowel;
//   }
// }

function vowelChecker(x){
    if(x=='a'&& 'e'&& 'i'&&'o'&&'u'){
        console.log('this is a vowel')
    }else{console.log('this is not a vowel')}


}
console.log(vowelChecker('A'))

// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

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