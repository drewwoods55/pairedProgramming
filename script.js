// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15

// let random = [2, 4, 7, 11, 15, 16]

// function seperateNum(number) {
//     let odd = number % 2 === 0;
// }
<<<<<<< HEAD

// console.log(seperateNum)

const random = [2, 4, 7, 11, 15, 16];

const even = random.filter(function(separateNum) {
    return separateNum % 2 === 0;
})
const odd = random.filter(function(separateNum) {
    return separateNum % 2 === 1;
})

=======

// console.log(seperateNum)

const random = [2, 4, 7, 11, 15, 16];

const even = random.filter(function(separateNum) {
    return separateNum % 2 === 0;
})
const odd = random.filter(function(separateNum) {
    return separateNum % 2 === 1;
})

>>>>>>> c5dd8243a808e4228022f6a2e8d47432ad7725e7
console.log(even)
console.log(odd)

// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1: 
<<<<<<< HEAD
// Input: umArray = n[1,2,3,4,5,6,7,8,9,10]
=======
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
>>>>>>> c5dd8243a808e4228022f6a2e8d47432ad7725e7
// Output: primeArray = [2,3,5,7]
// Example 2:		
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

<<<<<<< HEAD
const NumArray = [1,2,3,4,5,6,7,8,9,10]

function checkPrime(num){
    for(i=2; i <= num/2; i++){
        if (num[i]% i==0){
            console.log('prime numbers')
        }
    }

}
console.log(checkPrime[NumArray])
=======
>>>>>>> c5dd8243a808e4228022f6a2e8d47432ad7725e7
