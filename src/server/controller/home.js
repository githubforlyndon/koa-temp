
module.exports = function (router) {

  router.get('/', function*() {
    yield  this.render('home');
  });

};




