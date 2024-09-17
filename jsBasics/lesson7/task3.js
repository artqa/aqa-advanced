function divide(numerator, denominator) {
    
    if ((denominator === 0) || (typeof numerator !== 'number' || typeof denominator !== 'number')) {
        throw new Error ("Denominator is equal to zero or one of arguments is not a number.")
    }
    return numerator / denominator;
}

function run(num1, num2) {
    try {
        divide(num1, num2);
    } catch (error) {
        console.error('error message: ', error.message); 
    } finally {
        console.log("The job is done");
    }
}

run(2, 2);
run(3, 0);
run(4, "a");