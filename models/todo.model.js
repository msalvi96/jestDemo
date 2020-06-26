const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
});

const TodoModel = mongoose.model("Todo", ToDoSchema);
module.exports = TodoModel;