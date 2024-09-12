function checkOrder(available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    }
    if (ordered === 0) {
        return "Your order is empty.";
    }
        return "Your order is accepted.";
}

console.log(checkOrder(100, 150));
console.log(checkOrder(100, 0));
console.log(checkOrder(100, 10));