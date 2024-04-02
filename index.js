import Koa from 'koa';
import Router from '@koa/router';

import userRouter from './api/users/user.routes.js';
import todoRouter from './api/todo/todo.routes.js';

import TodoModel from './api/todo/todo.model.js';

import Facade from './config/index.js';



const app = new Koa();
export const router = new Router();
const facade = new Facade();


// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// db connection
facade._connectDB();







// router
router.use('/api',userRouter.routes() , userRouter.allowedMethods());
router.use('/api',todoRouter.routes() , todoRouter.allowedMethods());
app.use(router.routes());


// start the server
app.listen(3000, ()=>{
    console.log("server run on port 3000 ...")
});  

export default app;