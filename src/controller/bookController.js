import * as service from '../service/bookService.js';

export const addBook = async (req, res) => {
    const success = await service.addBook(req.body);
    return res.json(success);
};

export const findBook = async (req, res) => {
    const book = await service.findBook(req.params.isbn);
    return res.json(book);
};

export const deleteBook = async (req, res) => {
    const book = await service.deleteBook(req.params.isbn);
    return res.json(book);
};

export const updateBookTitle = async (req, res) => {
    const book = await service.updateBookTitle(req.params.isbn, req.params.title);
    return res.json(book);
};

export const findBooksByAuthor = async (req, res) => {
    const books = await service.findBooksByAuthor(req.params.author);
    return res.json(books);
};

export const findBooksByPublisher = async (req, res) => {
    const books = await service.findBooksByPublisher(req.params.publisher);
    return res.json(books);
};

export const findBookAuthors = async (req, res) => {
    const authors = await service.findBookAuthors(req.params.isbn);
    return res.json(authors);
};

export const findPublishersByAuthor = async (req, res) => {
    const publishers = await service.findPublishersByAuthor(req.params.author);
    return res.json(publishers);
};

export const deleteAuthor = async (req, res) => {
    const author = await service.deleteAuthor(req.params.author);
    return res.json(author);
};
