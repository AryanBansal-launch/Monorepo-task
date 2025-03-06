const { greet } = require("@repo/testpack");

function getMiddlewareMessage() {
  return greet("Middleware Service");
// return "Middleware Service";
}

module.exports = { getMiddlewareMessage };
