import createPrompt from "prompt-sync";
const prompt = createPrompt();

console.log("SECOUND TASK---------------------" + "\n");
let payment = prompt("Enter the amount to pay: ");

// secound input method for secound task sir

// const payment = [1000, 5000, 7000, 60000, 3000];
// payment.forEach(payment => {
//     paymentProcessing(payment);
// });

function paymentProcessing(payment) {
    console.log("Processing the payment...");
    setTimeout(() => {
        if (payment <= 0) {
            return console.log("Payment rejected: amount is less than or equal to 0");
        }
        else if (payment > 50000) {
            return console.log("Payment rejected: amount is greater than 50000");
        }
        else {
            const transactionId = Math.floor(Math.random() * 100000);
            return console.log(`Payment accepted: your transaction id is ${transactionId}`);
        }
    }, 2000);
}

payment ? paymentProcessing(payment) : console.log("No payment made");
