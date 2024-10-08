import express, { Request, Response } from "express";
import { MovieRoute } from "./app/modules/Movies/movie.route";
import { globalErrorHandler, notFound } from "./app/middlewares";

const app = express();

app.use(express.json());
app.use("/api/v1/movie", MovieRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(globalErrorHandler);

export { app };
