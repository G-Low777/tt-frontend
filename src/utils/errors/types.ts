export interface TErrorHandler {
  code: string;
  title: string;
  message: string;
  description: string;
}

export interface TErrorHandlers {
  [key: string]: TErrorHandler;
}
