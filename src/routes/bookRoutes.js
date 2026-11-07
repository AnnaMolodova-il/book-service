import {Router} from 'express';
import {
    addBook,
    findBook,
    deleteBook,
    updateBookTitle,
    findBooksByAuthor,
    findBooksByPublisher,
    findBookAuthors,
    findPublishersByAuthor,
    deleteAuthor
} from '../controller/bookController.js';

const router = Router();

router.post('/book', addBook);
router.get('/book/:isbn', findBook);
router.delete('/book/:isbn', deleteBook);
router.patch('/book/:isbn/title/:title', updateBookTitle);
router.get('/books/author/:author', findBooksByAuthor);
router.get('/books/publisher/:publisher', findBooksByPublisher);
router.get('/authors/book/:isbn', findBookAuthors);
router.get('/publishers/author/:author', findPublishersByAuthor);
router.delete('/author/:author', deleteAuthor);

export default router;
