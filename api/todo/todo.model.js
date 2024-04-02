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
});

const Todo = mongoose.model('Todo', TodoSchema);


export default Todo;
 