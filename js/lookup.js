var apiKey = require('./../.env').apiKey;

exports.lookUp =  function(username) {
  this.username = username;
};

exports.lookUp.prototype.findUser = function() {
  return 'https://api.github.com/users/' + this.username + '/repos?access_token=' + apiKey;
};