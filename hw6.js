const Koa = require('koa');
var Router = require('koa-router');
const path = require('path');
const render = require('koa-ejs');
var app = new Koa();
var router = new Router();

app
  .use(router.routes())
  .use(router.allowedMethods());
  
render(app,{
    root:path.join(__dirname+'/views'),
    layout:'layout',
    viewExt:'html',
    cache:false,
    debug:false
})


router.get('/', async (ctx, next) => {
    await ctx.render('index')
    
});
router.get('/about', async (ctx, next) => {
    await ctx.render('about')
});
router.get('/contact', async (ctx, next) => {
    await ctx.render('contact')
});






// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(3000);