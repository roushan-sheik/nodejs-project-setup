import express, { Request, Response } from "express";
import { MovieRoute } from "./app/modules/Movies/movie.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app = express();

app.use(express.json());
app.use("/api/v1/movie", MovieRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

export { app };
