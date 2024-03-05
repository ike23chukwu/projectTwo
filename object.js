const user = {
    fullname: "Emeka Daniel",
    email: "emekadaniel@gmail.com",
    phone: [
        {
            home: "02145874566",
            mobile: "74524885694"
        }
    ],
    age: 26,
    children: ["Matthais", "Ikenna"],
    newBirth: function () {
        return `${this.fullname} births a new child`
    }
}

console.log(user)
console.log(user.fullname)
console.log(user.children)
console.log(user.newBirth())



// TASK

// 1.  how to write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task in javascript

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task in javascript

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task in javascript



let fbnci = [0, 1];
let i = 1;
while (fbnci[i] < 100) {
    fbnci.push(fbnci[i] + fbnci[i - 1]);
    i++;
}

console.log(fbnci);

let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];

const sumEvens = (numStr) => {
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] % 2 === 0) {
            sum = sum + numStr[i];
        }
    }
    return sum;
}

console.log(sumEvens(numStr))



const onlyEven = arr => arr.filter(b => b % 2 === 0)

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(onlyEven(data))
