
module.exports = function (router) {

  router.get('/about', function*() {
    this.body = 'about';
  });

};