let array = [1, 2, 3, 4, 5];
console.log(array.length);

console.log(array[0]);

console.log(array[array.length - 1]);

console.log(array.includes(3));

console.log(array.indexOf(9));
array.push(6)
console.log(array);
array.pop()
console.log(array);
array.shift()
console.log(array);
array.unshift(0)
console.log(array);

const remove = array.splice(2, 1)
console.log(array);

console.log(remove);


array.splice(2, 0, 2)
console.log(array);

const string = array.join(',')

console.log(string);

console.log(array.reverse());
console.log(array.sort());
console.log(array.sort((a, b) => a - b));
console.log(array.sort((a, b) => b - a));

//looping through an array

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(let i of array){
    console.log(i);
}   

array.forEach((element) => {
    console.log(element);
})

let numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

let numberss = [1, 2, 3, 4, 5, 6];

let evenNumbers = numberss.filter((num) => {
    return num % 2 === 0;
});
console.log(numberss);
console.log(evenNumbers);


let numberrs = [10, 20, 30, 40];

let result = numberrs.find((num) => {
    return num > 25;
});

console.log(result);

let numbbers = [1, 3, 5, 8];

let results = numbbers.some((num) => {
    return num % 2 === 0;
});

console.log(results);

let nummbers = [2, 4, 6, 8];

let resuult = nummbers.every((num) => {
    return num % 2 === 0;
});

console.log(resuult);

let reduced = [10, 20, 30, 40];

let sum = reduced.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);