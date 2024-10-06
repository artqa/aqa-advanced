function handleEven() {
  console.log('number is even');
}

function handleOdd() {
  console.log('number is odd');
}

function handleNumV1(num, callbackEven, callbackOdd) {
  if (num % 2 == 0) {
    return callbackEven();
  } else {
    return callbackOdd();
  }
}

function handleNumV2(num, callbackEven, callbackOdd) {
  num % 2 == 0 ? callbackEven() : callbackOdd();
}

handleNumV2(1, handleEven, handleOdd);
handleNumV1(2, handleEven, handleOdd);
