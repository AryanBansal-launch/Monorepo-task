const { greet } = require("@repo/testpack/index");

function getMiddlewareMessage() {
  return greet("Middleware Service");
// return "Middleware Service";
}

module.exports = { getMiddlewareMessage };
