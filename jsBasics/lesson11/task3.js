async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data;
 }

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await res.json()
    return data;
 }
const todos = getTodos();
const users = getUsers();

const promisesAll = Promise.all([todos, users]).then(res => {return res}).catch(err => err);
const promiseRace = Promise.race([todos, users]).then(res => {return res}).catch(err => err);

promisesAll.then(res => {console.log(res)});
promiseRace.then(res => {console.log(res)});