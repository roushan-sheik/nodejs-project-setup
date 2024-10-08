export interface IErrorSources {
  path: string;
  message: string;
}

export interface ICustomGlobalError {
  success: boolean;
  statusCode: number;
  message: string;
  errorSources: IErrorSources[];
}
