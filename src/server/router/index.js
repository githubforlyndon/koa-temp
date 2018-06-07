
var router = require('koa-router')({
    prefix : '/api'
});

module.exports = function (app) {

    require('../controller/home')(router);

    require('../controller/about')(router);

    app.use(router.routes()).use(router.allowedMethods());

};



// const Router = require('koa-router');
// const home = require('../controller/home');
// const about =  require('../controller/about');
//
// const appRoutes = () => {
//     const router = new Router();
//
//     router.get('/', home);
//     router.get('/about', about);
//     return router;
// };
//
// module.exports = appRoutes;
