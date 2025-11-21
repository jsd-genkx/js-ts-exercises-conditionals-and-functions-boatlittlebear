// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

// const num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
// }
// if (num % 3 === 0 && num % 5 !== 0) {
//     console.log("Fizz");
// }
// if (num % 5 === 0 && num % 3 !== 0) {
//     console.log("Buzz");
// }
// if (num % 3 !== 0 && num % 5 !== 0) {
//     console.log("Not divisible by 3 or 5");
// }

const fizzBuzz = (number: number) => {
    if (number % 15 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return "Not divisible by 3 or 5";
    }
};
const result1 = fizzBuzz(15); // "FizzBuzz"
const result2 = fizzBuzz(9);  // "Fizz"
const result3 = fizzBuzz(10); // "Buzz"
const result4 = fizzBuzz(7);  // "Not divisible by 3 or 5"

console.log(result3);