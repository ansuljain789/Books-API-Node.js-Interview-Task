const bookService = require('../services/bookService');
const { validateBook } = require('../middleware/validator');
const ApiResponse = require('../utils/ApiResponse');
const ErrorResponse = require('../utils/ErrorResponse');

/**
 * @desc    Create book
 * @route   POST /api/books
 * @access  Public
 */
exports.createBook = async (req, res, next) => {
    try {
        const { error } = validateBook(req.body);
        if (error) {
            return next(new ErrorResponse(error.details[0].message, 400));
        }

        const book = await bookService.createBook(req.body);

        res.status(201).json(ApiResponse.success(book, 'Book created successfully'));
    } catch (err) {
        next(err);
    }
};

/**
 * @desc    Get all books
 * @route   GET /api/books
 * @access  Public
 */
exports.getBooks = async (req, res, next) => {
    try {
        const result = await bookService.getBooks(req.query);

        res.status(200).json(ApiResponse.success(
            result.books, 
            'Books retrieved successfully', 
            result.pagination
        ));
    } catch (err) {
        next(err);
    }
};
