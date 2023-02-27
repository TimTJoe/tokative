function isAuth(req,res,next){
    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        res.redirect("/login");
        res.send("User not logged in")
    }
}

module.exports = isAuth;