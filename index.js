import Koa from 'koa';

// routers
import Router from '@koa/router';
import userRouter from './api/users/user.routes.js';
import todoRouter from './api/todo/todo.routes.js';

// utilities
import Facade from './config/index.js';

//register

import registerApp from './config/components/server.config.js';




const app = new Koa();
export const router = new Router();
const facade = new Facade();




// db connection
facade._connectDB();


// register app
registerApp(app);





// router
router.use('/api',userRouter.routes() , userRouter.allowedMethods());
router.use('/api',todoRouter.routes() , todoRouter.allowedMethods());
app.use(router.routes());






// start the server
app.listen(3000, ()=>{
    console.log("server run on port 3000 ...")
});  

export default app;