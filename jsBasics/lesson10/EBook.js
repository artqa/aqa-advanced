import Book from './Book.js';

export default class EBook extends Book {
  constructor(name, author, yearPublished, fileFormat) {
    super(name, author, yearPublished);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFomat;
  }

  set fileFormat(value) {
    const format = ['XML', 'DOC', 'PDF'];
    if (!format.includes(value.toUpperCase())) {
      throw new Error(
        `File must be one of these: ${format.join(',')} I know this not my validation, but I want to remember it.`,
      );
    }
    this._fileFomat = value;
  }

  printInfo() {
    console.log(
      `EBook: The book "${this.name}" was written by ${this.author} in ${this.yearPublished}. This book will be sent to you in ${this.fileFormat} file format.`,
    );
  }

  static sample(book, fileFormat) {
    if (book instanceof Book) return new EBook(book.name, book.author, book.yearPublished, fileFormat);
  }
}
