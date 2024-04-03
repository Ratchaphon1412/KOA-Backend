import {Todo,Comment} from './todo.model.js';
import mongoose from 'mongoose';

export async function getAllTodolist(ctx) {
    const todos = await Todo.find().populate('comments');
    ctx.body = todos;
    ctx.status = 200;
}

export async function createTodo(ctx) {
    console.log(ctx)
    const {title, content } = ctx.request.body;
    console.log(title, content);
    const todo = new Todo({
        title,
        content,
        "comments": [],
    })
    await todo.save();
    ctx.body = todo;
    ctx.status = 201;
}

export async function updateTodoById(ctx) {
   
    const { id, title, content, completed } = ctx.request.body;
    const todoId = new mongoose.Types.ObjectId(id);
    const todo = await Todo.findByIdAndUpdate(todoId, { title,  content, completed }, { new: true });
    ctx.body = todo;

    if (!todo) {
        ctx.status = 404;
    }
    ctx.status = 200;

}

export async function getTodoById(ctx) {

    const {todo_id} = ctx.params;
    const todoId = new mongoose.Types.ObjectId(todo_id);
    const todo = await Todo.findById(todoId).populate('comments');
    if (!todo) {
        ctx.status = 404;
        return;
    }
    ctx.body = todo;
    ctx.status = 200;

}


export async function deleteTodoById(ctx) {
    let {id} = ctx.params;
    id = new mongoose.Types.ObjectId(id);
    const todo = await Todo.findById(id);
    
    
    if (!todo) {
        ctx.status = 404;
        return;
    }
    // delete all comments associated with the todo
    const comments = todo.comments;
    comments.forEach(async (comment) => {
        await Comment.findByIdAndDelete (comment._id);

    });

    // delete the todo
    await Todo.findByIdAndDelete(id);



    ctx.status = 204;
    ctx.body = "Todo deleted successfully";
}



export async function addCommentToTodoById(ctx) {
    
    const {todo_id,content} = ctx.request.body;
    const id = new mongoose.Types.ObjectId(todo_id);

    const todo = await Todo.findById (id);

    if (!todo) {
        ctx.status = 404;
        return;
    }


    const comment = new Comment({
        todo_id: id,
        content,
    });

    const newComment = await Comment.create(comment);
    todo.comments.push(newComment._id);

    await todo.save();
    ctx.body = newComment;

    ctx.status = 201;

}

export async function updateCommentToTodoById(ctx) {
    const {comment_id, content} = ctx.request.body;
    const commentId = new mongoose.Types.ObjectId(comment_id);
    const comment = await Comment.findByIdAndUpdate (commentId, {content}, {new: true});

    if (!comment) {
        ctx.status = 404;
        return
    }

    ctx.body = comment;
    ctx.status = 200;
}



export async function deleteCommentFromTodoById(ctx) {
    const {comment_id} = ctx.params;
    const id = new mongoose.Types.ObjectId(comment_id);

    const comment = await Comment.findByIdAndDelete(id);
   
    if (!comment) {
        ctx.status = 404;
        return;
    }


   
    ctx.status = 204;
    ctx.body = "Comment deleted successfully";
  


    
    


}




