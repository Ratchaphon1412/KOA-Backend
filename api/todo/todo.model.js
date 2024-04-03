import {Schema} from 'mongoose';
import mongoose from 'mongoose';




const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    

    completed: {
        type: Boolean,
        default: false,
    },  
    created_at: {
        type: Date,
        default: Date.now,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],

});


const CommentSchema = new Schema({
    todo_id: {
        type: Schema.Types.ObjectId,
        ref: 'Todo',
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});



export const Todo = mongoose.model('Todo', TodoSchema);
export const Comment = mongoose.model('Comment', CommentSchema);



 