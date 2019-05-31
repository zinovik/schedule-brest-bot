const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'canvas': path.join(__dirname, '/empty-module.js'),
      'hiredis': path.join(__dirname, '/empty-module.js')
    }
  }
};
