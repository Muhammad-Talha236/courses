function addnumber(num1, num2) {
    return num1 + num2;
}

const result = addnumber(5, 10);
console.log(result);

const addnumber2 = function(num1, num2) {
    return num1 + num2;
}
const result2 = addnumber2(5, 10);
console.log(result2);

//arrow function
const addnumber3 = (num1, num2) => {
    return num1 + num2;
};
const result3 = addnumber3(5, 10);
console.log(result3);

// immediately invoked function expressoin 

(function addnumber4() {
    console.log("this is immediately invoked function expressoin");
})();

((talha)=>{
    console.log(`this is immediately invoked function expressoin Two ${talha}`);
})("talha")