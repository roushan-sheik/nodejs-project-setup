import { app } from "./app";
import ConnectDB from "./db/ConnectDB";
import { config } from "./config/env.config";

ConnectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(
        `\n Application is running on port: http:localhost://${config.port}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB Connectin Failed!!", error.message);
  });
