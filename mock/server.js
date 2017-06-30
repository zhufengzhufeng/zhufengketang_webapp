//提供接口
let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
let router = new Router;
let cors = require('koa-cors');
//模拟轮播图接口
app.use(cors());
let sliders = require('./slider');
router.get('/api/getSliders',ctx=>{
    ctx.body = sliders
});
//模拟下拉刷新接口
let lessonList = require('./lessonList');
router.get('/api/getLessons/:type/:limit/:offset',ctx=>{
    console.log(ctx.params.type);
    console.log(ctx.params.limit);
    console.log(ctx.params.offset);
    ctx.body = lessonList;
});

app.use(router.routes())
    .use(router.allowedMethods());
app.listen(4000);
// /api/getSliders