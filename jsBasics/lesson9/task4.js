const person = {
    firstName: "Ustym",
    lastName: "Karmaliuk",
    age: 30
};

person.email = "ustym.karmaliuk@gmail.com";
delete person.age;

console.log(person);