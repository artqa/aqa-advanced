class GetTodosAndUsers {
    constructor(url, method, headers = {}){
        this.url = url;
        this.method = method;
        this.headers = headers
    }

    async #fetchUrl(){
        const response = await fetch(this.url, {
            method: this.method,
            headers: this.headers
        });
        return response.json();
    }

    async handleFetchUrl(){
        try {
            const fetchResult = await this.#fetchUrl()
            return fetchResult
        } catch (err) {
            return err

        }
    }
}

const fetchCallTodo = async () => {
    const fetchGetTodos = new GetTodosAndUsers('https://jsonplaceholder.typicode.com/todos/1', 'GET');
    console.log(await fetchGetTodos.handleFetchUrl())
}

fetchCallTodo();


const fetchCallUsers = async () => {
    const fetchGetUsers = new GetTodosAndUsers('https://jsonplaceholder.typicode.com/users/1', 'GET');
    console.log(await fetchGetUsers.handleFetchUrl())
}

fetchCallUsers();