//program for calculate BMI

const rl = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
});


rl.question('Enter your name: ',(name) => {
    rl.question('Enter your weight (in kg) :',(weight) => {
        rl.question('Enter your height (in m): ',(height) => {

            //calculate BMI
            let bmi = weight/(height*height);

            //Display
            console.log(`${name},your BMI is  ${bmi.toFixed(2)} `);

            rl.close();


        });
    });
});