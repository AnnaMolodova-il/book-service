import * as bookRepository from '../repositories/book.repository.js';
import * as authorRepository from '../repositories/author.repository.js';
import * as publisherRepository from '../repositories/publisher.repository.js';

export const addBook = async (book) => {
    const {isbn, title} = book;
    if (await bookRepository.findBookById(isbn)) {
        throw new Error('Book with the same isbn already exists');
    }
    // Create or find the publisher
    let publisher = await publisherRepository.findPublisherById(book.publisher);
    if (!publisher) {
        await publisherRepository.addPublisher(book.publisher);
    }
    // Process the authors
    const authors = [];
    for (const a of book.authors){
        let author = await authorRepository.findAuthorById(a.name);
        if (!author) {
            author = await authorRepository.addAuthor(a);
        }
        authors.push(author);
    }
    // Create a new Book
    book = await bookRepository.addBook({isbn, title, publisher: book.publisher});
    await book.setAuthors(authors);
}

export const findBookByIsbn = async (isbn) => {
    const book = await bookRepository.findBookById(isbn);
    if (!book) {
        throw new Error(`Book with ISBN ${isbn} not found`);
    }
    return book;
}

export const removeBook = async (isbn) => {
    const book = await findBookByIsbn(isbn);
    await bookRepository.removeBook(book);
    return book;
}

export const updateBookTitle = async (isbn, title) => {
    const book = await findBookByIsbn(isbn);
    return bookRepository.updateBookTitle(book, title);
}

export const findBooksByAuthor = async (authorName) => {
    // TODO: Implement findBooksByAuthor service
}

export const findBooksByPublisher = async (publisherName) => {
    // TODO: Implement findBooksByPublisher service
}
