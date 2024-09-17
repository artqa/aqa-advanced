function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

function handleNum(num, callbackEven, callbackOdd) {
    if (num % 2 == 0) {
        return callbackEven();
    }
    if (num % 2 !==0) {
        return callbackOdd();
    }
}

handleNum(1, handleEven, handleOdd);