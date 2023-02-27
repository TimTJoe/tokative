function useAuth(err, req, res, next) {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
      res.send("User not authenticated.")
      next(err)
  }
}

module.exports = useAuth;
