import { AppError } from "./app-error";
import { throwError } from "rxjs";

export class NotFound extends AppError {}
export class BadInput extends AppError {}
export class UnAuthorized extends AppError {}
export class InternalError extends AppError {}

export function handleExpectedErrors(err: Response) {
  if (err.status === 400) {
    return throwError(new BadInput(err));
  }
  if (err.status === 404) {
    return throwError(new NotFound(err));
  }
}
