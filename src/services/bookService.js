const Book = require('../models/Book');

/**
 * @desc    Create a new book
 * @route   POST /api/books
 */
exports.createBook = async (data) => {
    return await Book.create(data);
};

/**
 * @desc    Get all books with search, filter, sort, and pagination
 * @route   GET /api/books
 */
exports.getBooks = async (query) => {
    const { search, author, from, to, sortBy, order, page = 1, limit = 5 } = query;

    let filter = {};

    // Text search (name and description)
    if (search) {
        filter.$or = [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } }
        ];
    }

    // Filter by author (case-insensitive exact match)
    if (author) {
        filter.author = { $regex: `^${author}$`, $options: 'i' };
    }

    // Filter by publish date range
    if (from || to) {
        filter.publishDate = {};
        if (from) filter.publishDate.$gte = new Date(from);
        if (to) filter.publishDate.$lte = new Date(to);
    }

    // Sorting
    let sort = {};
    if (sortBy) {
        sort[sortBy] = order === 'desc' ? -1 : 1;
    } else {
        sort.createdAt = -1; // Default sort
    }

    // Pagination
    const pageNum = parseInt(page, 10);
    const limitNum = Math.min(parseInt(limit, 10), 50);
    const skip = (pageNum - 1) * limitNum;

    const [books, total] = await Promise.all([
        Book.find(filter).sort(sort).skip(skip).limit(limitNum),
        Book.countDocuments(filter)
    ]);

    return {
        books,
        pagination: {
            total,
            page: pageNum,
            limit: limitNum,
            pages: Math.ceil(total / limitNum)
        }
    };
};
