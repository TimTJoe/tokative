function isLoggedIn(request, response, done) {
   if (request.user) {
      return done();
   }
   
   return res.redirect("/login");
};

module.exports isLoggedIn