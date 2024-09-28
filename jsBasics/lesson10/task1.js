import Book from "./Book.js";
import EBook from "./EBook.js";

// Creeate instances from the class Book 
const bookOne = new Book("Animals of the Moon", "Tolya Brehunec", 2019);
bookOne.printInfo();

const bookTwo = new Book("Luke skywalker. Beginning", "Maksymilian Gedz", 2014);
bookTwo.printInfo();

// Creeate instances from the class EBook
const eBookOne = new EBook("Per aspera ad astra", "Wise People", 2011, "PDF");
eBookOne.printInfo();

const eBookTwo = new EBook("Homo homini lupus", "Master of Wisdom", 1999, "PDF")
eBookTwo.printInfo();

// Using "get/set" to update the values
eBookTwo.name = "In vino veritas"
eBookTwo.author = "Singularis"
eBookTwo.fileFomat = "DOC"

eBookTwo.printInfo();


// Calling static method from the EBook
console.log(EBook.sample(eBookOne, "PDF"));


// Getting the oldest book from the array of objects
const arr = [bookOne, bookTwo, eBookOne, eBookTwo];
console.log(Book.getOldestBook(arr));