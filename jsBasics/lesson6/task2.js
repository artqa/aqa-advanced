
function eligibility(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(eligibility(25));
console.log(eligibility(15));