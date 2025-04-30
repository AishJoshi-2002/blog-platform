const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    content: {
        type: String,
        required: true,
        maxlength: 800
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, { timestamps: true })

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;