const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        dueDate: {
            type: Date,
        },
    },
    { timestamps: true }
);

module.exports = model('tasks', taskSchema);

// module.exports = Task;
