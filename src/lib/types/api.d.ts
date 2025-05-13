declare type SuccessResponse<T> = {
  message: 'success';

}&T;

declare type ErrorResponse= {
  message: string;
  code: number;
};
declare type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

// more generic
// declare type APIResponse<T> = {
//   message: string;
// } & T;
