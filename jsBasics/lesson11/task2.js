const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/users/1';

function getTodos(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function getUser(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

const a = getTodos(url1);
const b = getUser(url2);
const promisesAll = Promise.all([a, b])
  .then(res => {
    return res;
  })
  .catch(err => err);
const promiseRace = Promise.race([a, b])
  .then(res => {
    return res;
  })
  .catch(err => err);

promisesAll.then(res => {
  console.log(res);
});
promiseRace.then(res => {
  console.log(res);
});
