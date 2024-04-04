import errorHandler from "../../middleware/error.middleware.js";
//library
import { koaBody } from "koa-body";
//cronjob
import { jobsStart } from "../../config/components/jobs.config.js";

async function registerApp(app) {
  //middleware
  errorHandler(app);
  // logger

  app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get("X-Response-Time");
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });

  // register library
  app.use(koaBody());

  //cron job start
  jobsStart();
}

export default registerApp;
