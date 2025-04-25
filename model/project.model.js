const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Iltimos loyiha rasmini yuklang']
    },
    title: {
        type: String,
        required: [true, 'Iltimos loyiha nomini kiriting'],
        trim: true,
        maxlength: [50, 'Loyiha nomi 50 ta belgidan oshmasligi kerak']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', ProjectSchema);