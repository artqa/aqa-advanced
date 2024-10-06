function delayedResponse(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

delayedResponse('Hello after 1 sec', 1000);
