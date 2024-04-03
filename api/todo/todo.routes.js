import Router from '@koa/router';
import { 
    getAllTodolist,
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById,
    addCommentToTodoById,
    updateCommentToTodoById,
    deleteCommentFromTodoById
} from './todo.controller.js';


const todoRouter = Router({
    prefix: '/todo'
})


// todolist
todoRouter.get('/all', getAllTodolist)
todoRouter.get('/:todo_id',getTodoById )
todoRouter.post('/create',createTodo)
todoRouter.put('/update',updateTodoById)
todoRouter.del('/delete/:id', deleteTodoById)

// comments
todoRouter.post('/comment/add',addCommentToTodoById)
todoRouter.put('/comment/update',updateCommentToTodoById)
todoRouter.del('/comment/delete/:comment_id',deleteCommentFromTodoById)

export default todoRouter;