export default async function errorHandler(app) {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status;
      ctx.body = err[0];
      return;
    }
  });
}
