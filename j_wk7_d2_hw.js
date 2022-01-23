//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


const favoriteFood = (person) => {
    for (key in person){
        console.log(person[key])

    }
}

favoriteFood(person3)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method   
   this.printInfo = () => {
        console.log(`My name is ${name} and my age is ${age}`)
   };
   this.addAge = () => {
        age++
    };
};   


    
const Will = new Person('Will', 22)
Will.printInfo()
Will.addAge()
Will.printInfo()

const Mark = new Person('Mark', 25)
Mark.printInfo()
Mark.addAge()
Mark.addAge()
Mark.addAge()
Mark.printInfo()

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/ 
const theLength = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big Word")
        } else if (string.length < 10) {
            reject("Small Number")
        }
    })
};
theLength("hello")
    .then((result) => {
        console.log("Big Word")
    })
    .catch((error) => {
        console.log("Small Number")
    })






// 4. CodeWars Problem
// This function should test if the factor is a factor of base.
//Return true if it is a factor or false if it is not.
//About factors
// are numbers you can multiply together to get another number.
//2 and 3 are factors of 6 because: 2 * 3 = 6
//You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//You can use the mod operator (%) in most languages to check for a remainder
//For example 2 is not a factor of 7 because: 7 % 2 = 1
//Note: base is a non-negative number, factor is a positive number.

const check_for_factor = (base,factor) => {
    return new Promise((resolve, reject) => {
        if (base % factor ==0) {
            resolve("Is a factor")
        } else if (base % factor != 0) {
            reject("It's not a factor")
        }

    })

};

console.log(check_for_factor(10,6))


//5. CodeWars Problem
//Implement a function which multiplies two numbers.

const mySalary = (pay,bonus ) => {
    const new_salary = (pay+ bonus);
    console.log("New Salary: ", new_salary)
    return new_salary
};

const slowMultiply = (num1,num2) => {
    return new Promise((resolve) => {setTimeout(() => {resolve(num1*num2)}, 3000)})
};

const inc_bonus_slow = (pay,bonus) => {
    const new_salary = slowMultiply(pay, bonus);
    console.log("New Salary: ", new_salary)
    return new_salary
};

const inc_bonus_slow_async = async (pay,bonus) => {
    const new_salary = await slowMultiply(pay, bonus);
    console.log("New Salary: ", new_salary)
    return new_salary
};


inc_bonus_slow(2000,50000)
inc_bonus_slow_async(2000,50000)