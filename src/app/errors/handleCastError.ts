import { Error as MongooseError } from "mongoose";
import { TErrorSources } from "../interfaces/error.interface";

const handleCastError = (err: MongooseError.CastError) => {
  const errorSources: TErrorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];
  return errorSources;
};

export default handleCastError;
