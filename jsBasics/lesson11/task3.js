async function getTodos(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return res.json();
 }

async function getUsers(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
 }

const todos = getTodos(1);
const users = getUsers(3);

const promisesAll = Promise.all([todos, users]).then(res => {return res}).catch(err => err);
const promiseRace = Promise.race([todos, users]).then(res => {return res}).catch(err => err);

promisesAll.then(res => {console.log(res)});
promiseRace.then(res => {console.log(res)});