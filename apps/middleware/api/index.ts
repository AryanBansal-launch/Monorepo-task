// import { greet } from "@repo/testpack/index";
import {greet} from "@repo/fakestore-api"

export function getMiddlewareMessage() {
  return greet("Middleware Service");
// return "Middleware Service";
}

