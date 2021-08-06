const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

//Q1
function driverLicenseTest() {
    readline.question('What is your name? ', name => {
        console.log(`Welcome ${name}`);
        readline.question('How old are you? ', age => {
            if (age < 16) {
                console.log("You're not allowed to drive in Iowa");
            } else {
                console.log("You're allowed to get a drivers license in Iowa");
            }
            readline.close();
        });
    });
}

//Q2
function numbers() {
    let sum = 0;
    const getNumber = function () {
        readline.question('Enter a number or enter "stop" to exit: ', inp => {
            if (inp.toLowerCase() === 'stop') {
                console.log("Sum is: " + sum);
                readline.close();
            } else {
                sum += parseInt(inp);
                getNumber();
            }
        })
    }
    getNumber();
}

// Q3
function doMath() {
    const math = require('./my_math');
    console.log("3 + 5 = ", math.add(3, 5));
    console.log("3 - 5 = ", math.subtract(3, 5));
    console.log("3 * 5 = ", math.multiply(3, 5));
    console.log("3 / 5 = ", math.divide(3, 5));
    console.log("PI = ", math.pi);
}


// Q4
function car() {
    const myCar = require('./my_car');
    myCar.drive();
    myCar.turn(20);
    myCar.turn(-10);
    myCar.break();
}