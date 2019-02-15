import { AppError } from './app-error';

export class NotFound extends AppError { }
export class BadInput extends AppError { }
export class UnAuthorized extends AppError { }
export class InternalError extends AppError { }