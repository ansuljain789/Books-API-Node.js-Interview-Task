const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Book name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});


bookSchema.index({ author: 1 });
bookSchema.index({ publishDate: 1 });

bookSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Book', bookSchema);
