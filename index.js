import Koa from 'koa';

// routers
import Router from '@koa/router';
import userRouter from './api/users/user.routes.js';
import todoRouter from './api/todo/todo.routes.js';

// utilities
import Facade from './config/index.js';

//library
import {koaBody}  from 'koa-body';

//middleware
import errorHandler from './middleware/error.middleware.js';

//cronjob
import {jobsStart} from './config/components/jobs.config.js';


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




// register library
app.use(koaBody())


// register middleware

app.use(errorHandler);

// router
router.use('/api',userRouter.routes() , userRouter.allowedMethods());
router.use('/api',todoRouter.routes() , todoRouter.allowedMethods());
app.use(router.routes());


//cron job start
jobsStart();




// start the server
app.listen(3000, ()=>{
    console.log("server run on port 3000 ...")
});  

export default app;