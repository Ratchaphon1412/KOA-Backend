import Router from '@koa/router';


const userRouter = Router(
    {
        prefix:'/users'
    
    }
);


userRouter.get('/all',async (ctx,next)=>{

    ctx.body = 'All users';
    ctx.status = 200;
})

userRouter.get('/info/:id',async (ctx,next)=>{
    ctx.body = 'User with id: ' + ctx.params.id;
    ctx.status = 200;

})
userRouter.post('/create',async (ctx,next)=>{

    ctx.body = 'User created';
    ctx.status = 201;

})

userRouter.put('/update',async (ctx,next)=>{
    ctx.body = 'User updated';
    ctx.status = 200;
    
}) 


userRouter.delete('/delete',async (ctx,next)=>{

    ctx.body = 'User deleted';
    ctx.status = 200;

})

export default userRouter;