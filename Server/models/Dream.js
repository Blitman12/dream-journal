const {Schema} = require('mongoose');

const dreamSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    dreamContent: {
        type: String,
        required: true
    }
})

module.exports = dreamSchema