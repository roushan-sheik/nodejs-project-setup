import { ICustomGlobalError } from "../interfaces/error.interface";

type TMongoDuplicateError = {
  code?: number;
  keyValue?: Record<string, string>;
};

const handleDuplicateError = (err: TMongoDuplicateError) => {
  const keyValue = err?.keyValue;
  if (keyValue) {
    const fields = Object.keys(keyValue);
    const errorSources = fields.map((field: string) => {
      return {
        path: field,
        message: `${keyValue[field]} is already exists!`,
      };
    });
    const simplified: ICustomGlobalError = {
      success: false,
      statusCode: 400,
      message: "Invalid Field",
      errorSources,
    };
    return simplified;
  }
};
export default handleDuplicateError;
