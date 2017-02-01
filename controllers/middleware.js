module.exports = {
  addHeaders: function(req, res, next){
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    })

    next();
  },
  id:3,
  generateId: function(req, res, next){
    req.body.id = ++module.exports.id
    next();
  }
}
