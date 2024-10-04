/* eslint-disable no-console */
import { app } from "./app";
import ConnectDB from "./db/ConnectDB";
import config from "./config";

ConnectDB()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log("Global log:::::>", config.GLOBAL);
      console.log(
        `\n Application is running on port: http:localhost://${config.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB Connectin Failed!!", error.message);
  });
