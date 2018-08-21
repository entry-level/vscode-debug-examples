const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log('debug');
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('server is running');
});