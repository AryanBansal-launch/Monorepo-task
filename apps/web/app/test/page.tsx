import React from "react";
import { getMiddlewareMessage } from "../../../middleware/api";

const Page = () => {
  return (
    <div>
      <h1>This is a test page</h1>
      <p>Middleware says: {getMiddlewareMessage()}</p>
    </div>
  );
};

export default Page;
