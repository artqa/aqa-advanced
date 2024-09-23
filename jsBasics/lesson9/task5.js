const users = [
    { name: "Tolya", email: "tolya@gmail.com", age: 21 },
    { name: "Borya", email: "borya@gmail.com", age: 22 },
    { name: "Kolya", email: "kolya@gmail.com", age: 23 }
  ];


for (const { name, email, age } of users) {
    console.log(`${name} is ${age} years old and has email: ${email}`);
  }