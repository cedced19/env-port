/**
 * Normalize a port into a number or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return false;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

module.exports = function (port) {
  return normalizePort(process.env.PORT) || normalizePort(port);
};
