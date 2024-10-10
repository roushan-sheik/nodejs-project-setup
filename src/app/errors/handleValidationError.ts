import { Error as MongooseError } from "mongoose";

const handleValidationError = (err: MongooseError.ValidationError) => {
  const errorSources = Object.values(err.errors).map(
    (singleError: MongooseError.ValidatorError | MongooseError.CastError) => {
      return {
        path: singleError.path,
        message: singleError.message,
      };
    }
  );
  return errorSources;
};

export default handleValidationError;
