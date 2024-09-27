export default class Book {
    constructor(name, author, yearPublished) {
        this.name = name;
        this.author = author;
        this.yearPublished = yearPublished;
    }
 
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length <= 3) {
            throw new Error (`Please, enter at least three characters.`)
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value == 'number') {
            throw new Error (`Please, double check your entry!`)
        }
        this._author = value;
    }

    get yearPublished() {
        return this._yearPublished;
    }

    set yearPublished(value) {
        if (typeof value !== 'number') {
            throw new Error (`Please, double check your entry, it should be a number`)
        }
        this._yearPublished = value;
    } 

    printInfo () {
        console.log(`Book: The book "${this.name}" was written by ${this.author} in ${this.yearPublished}.`);
      }
    
    // method to get the oldest book inthe array
    static getOldestBook(books) {
    return books.reduce((oldest, current) => {
        return (current.yearPublished < oldest.yearPublished) ? current : oldest;
    });
    }
}