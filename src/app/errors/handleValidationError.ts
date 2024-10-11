import { Error as MongooseError } from "mongoose";
import { TErrorSources } from "../interfaces/error.interface";

const handleValidationError = (err: MongooseError.ValidationError) => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (singleError: MongooseError.ValidatorError | MongooseError.CastError) => {
      return {
        path: singleError?.path,
        message: singleError?.message,
      };
    }
  );
  return errorSources;
};

export default handleValidationError;
