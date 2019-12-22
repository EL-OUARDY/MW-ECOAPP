import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { handleExpectedErrors } from "../shared/errors/http-errors";

@Injectable({
  providedIn: "root"
})
export class ProductVariantService {
  private readonly END_POINT = "api/ProductVariants/";

  constructor(private http: HttpClient) {}

  GetProductVariants(id) {
    return this.http.get(this.END_POINT + id);
  }

  PostVariant(variant) {
    return this.http
      .post(this.END_POINT, variant)
      .pipe(catchError(handleExpectedErrors));
  }

  UpdateVariant(id, variant) {
    return this.http
      .put(`${this.END_POINT + id}`, variant)
      .pipe(catchError(handleExpectedErrors));
  }

  DeleteVariant(id: number) {
    return this.http
      .delete(`${this.END_POINT + id}`)
      .pipe(catchError(handleExpectedErrors));
  }
}
