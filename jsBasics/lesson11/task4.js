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

/* 
need to update it using this class:
export class FetchHandler1 {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    // config is {headers ={}, body = {}, method = 'GET'}
    async #fetchUrl(url, config){
        const response = await fetch(url, config);
        return response.json();
    }

    async handleFetchUrl(url, config){
        try {
            return this.#fetchUrl(url, config)
        } catch (err) {
            return err
        }
    }
}


export class StarWarsApi extends FetchHandler1{
    constructor(baseUrl){
        super(baseUrl)
        this.usersApiUrl = `${this.baseUrl}/api/people`
        this.planetsApiUrl = `${this.baseUrl}/api/planets`
    }
  
    async getUserById(id){
        return this.handleFetchUrl(`${this.usersApiUrl}/${id}`, {method: 'GET'})
    };


    async getPlanetById(id){
        return this.handleFetchUrl(`${this.planetsApiUrl}/${id}`, {method: 'GET'})
    };
}

const swApi = new StarWarsApi('https://swapi.dev')
console.log(await swApi.getUserById(1));
console.log(await swApi.getPlanetById(3));
*/