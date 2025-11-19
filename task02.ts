// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN
if(isNaN(Number(userInput))){
    console.log("Number");
}
else{
    console.log("not number");
}