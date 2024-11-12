import express, { Request, Response } from "express";
import { globalErrorHandler, notFound } from "./app/middlewares";

const app = express();
app.use(express.json());

// routes
import MovieRoute from "./app/modules/Movies/movie.route";
import UserRoute from "./app/modules/User/user.route";

app.use("/api/v1/movie", MovieRoute);
app.use("/api/v1/user", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(globalErrorHandler);

export { app };
