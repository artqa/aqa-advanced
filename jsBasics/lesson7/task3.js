function divide(numerator, denominator) {
    
    if ((denominator === 0) || (typeof numerator !== 'number' || typeof denominator !== 'number')) {
        throw new Error ("Denominator is equal to zero or one of arguments is not a number.")
    }
    return numerator / denominator;
}

try {
    divide(2, 2);
} catch (error) {
    console.log('error message: ', error.message);
}
try {
    divide(3, 0);
} catch (error) {
    console.log('error message: ', error.message);
}
try {
    divide(4, "a");
} catch (error) {
    console.log('error message: ', error.message);
} finally {
    console.log("The job is done");
}