console.log("FIRST TASK-----------------------" + "\n");

const transactions = [
    {
        id: 101,
        userId: 1,
        amount: 4500,
        status: "success",
        location: "India",
    },
    {
        id: 102,
        userId: 1,
        amount: 15000,
        status: "success",
        location: "USA",
    },
    {
        id: 103,
        userId: 2,
        amount: 300,
        status: "failed",
        location: "India",
    },
    {
        id: 104,
        userId: 3,
        amount: 22000,
        status: "success",
        location: "UK",
    },
];

function fraudDetection(transactions) {
    const susTransactionFirstParameter = transactions.filter((transaction) => {
        return transaction.amount > 10000;
    });

    const susTransactionSecondParameter = transactions.filter((transaction) => {
        return transaction.status === "failed" && transaction.amount > 200;
    });

    const susTransactionThirdParameter = transactions.filter((transaction) => {
        return transaction.location !== "India" && transaction.amount > 5000;
    });

    if (susTransactionFirstParameter.length > 0 || susTransactionSecondParameter.length > 0 || susTransactionThirdParameter.length > 0) {
        if (susTransactionFirstParameter.length > 0) {
            console.log("Fraud Transactions Found based on First Parameter");
            console.log(susTransactionFirstParameter);
        }
        if (susTransactionSecondParameter.length > 0) {
            console.log("Fraud Transactions Found based on Second Parameter");
            console.log(susTransactionSecondParameter);
        }
        if (susTransactionThirdParameter.length > 0) {
            console.log("Fraud Transactions Found based on Third Parameter");
            console.log(susTransactionThirdParameter);
        }
        return console.log("Fraud Transactions Found");
    }

    return console.log("No Fraud Transactions Found");

}
fraudDetection(transactions);
