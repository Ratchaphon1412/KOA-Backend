import Router from '@koa/router';
import { 
    getAllTodolist,
    createTodo

} from './todo.controller.js';
import Todo from './todo.model.js';

const todoRouter = Router({
    prefix: '/todo'
})

todoRouter.get('/all', getAllTodolist)

todoRouter.get('/:id', async (ctx, next) => {
    ctx.body = 'Todo with id: ' + ctx.params.id;
    ctx.status = 200;
})

todoRouter.post('/create',createTodo)


export default todoRouter;