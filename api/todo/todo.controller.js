import Todo from './todo.model.js';


export async function getAllTodolist(ctx) {
    const todos = await Todo.find();
    ctx.body = todos;
    ctx.status = 200;
}

export async function createTodo(ctx) {
    const {title, content} = ctx.request.body;
    const todo = new Todo({
        title,
        content,
    })
    await todo.save();
    ctx.body = todo;
    ctx.status = 201;
}