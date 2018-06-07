
const koa = require('koa');
const app = new koa();

const router = require('./router/index') ;
const render = require('koa-ejs');


const PORT = process.env.HTTP_PORT || 3000;
const IP = process.env.HTTP_IP || undefined;


router(app);

// 渲染模板
render(app, {
    root: 'src/server/view',
    viewExt: 'ejs',
    layout: false
});

// response
app.listen(PORT, IP, () => {
    /* eslint no-console: 0 */
    console.log(`============= [app started at http://${IP ? IP : 'localhost'}:${PORT}]============= `);
});