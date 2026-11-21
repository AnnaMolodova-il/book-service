import {Book} from '../models/index.js'

export const addBook = async (book, options = {}) => Book.create(book, options);

export const findBookById = async (id, options = {}) => Book.findByPk(id, options);

export const findBooks = async (options = {}) => Book.findAll(options);

export const booksSummary = async(field, functionName, options = {}) => await Book.aggregate(field, functionName, options);