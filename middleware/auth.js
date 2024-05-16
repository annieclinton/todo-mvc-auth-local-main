module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) { //this method comes from passport
        return next() // if user is logged in, proceed
      } else {
        res.redirect('/') //else refresh to homepage 
      }
    }
  }
  