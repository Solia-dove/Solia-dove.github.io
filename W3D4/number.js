const readline = require('readline');
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let sum = 0;
function getNumber() {
    read.question('enter a number to add and enter stop to stop  ', (n) => {
        if (n === "stop") {
            console.log("the sum is " + sum);
            read.close();
        }
        else {
            let num = parseInt(n);
            if (isNaN(n)) {
                num = 0;
            }
            sum = sum + num;
            getNumber();
        }
    });
}
getNumber();
