import Router from '@koa/router';

const todoRouter = Router({
    prefix: '/todo'
})

todoRouter.get('/all', async (ctx, next) => {
    ctx.body = 'All todos';
    ctx.status = 200;
})

todoRouter.get('/:id', async (ctx, next) => {
    ctx.body = 'Todo with id: ' + ctx.params.id;
    ctx.status = 200;
})


export default todoRouter;