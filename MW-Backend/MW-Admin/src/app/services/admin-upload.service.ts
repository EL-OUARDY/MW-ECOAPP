import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleExpectedErrors } from '../common/errors/http-errors';

@Injectable({
  providedIn: 'root'
})
export class AdminUploadService {
  private readonly END_POINT = 'api/upload/';
  constructor(private http: HttpClient) { }

  
  UploadImages(form: FormData) {
    return this.http.post( this.END_POINT + 'productImages', form).pipe(
      catchError(handleExpectedErrors)
    );
  }

  addProductImages(form: FormData) {
    return this.http.post( this.END_POINT + 'addProductImages', form).pipe(
      catchError(handleExpectedErrors)
    );
  }
  updateProductImages(form: FormData) {
    return this.http.post( this.END_POINT + 'updateProductImages', form).pipe(
      catchError(handleExpectedErrors)
    );
  }
  copyProductImages(form: FormData) {
    return this.http.post( this.END_POINT + 'copyProductImages', form).pipe(
      catchError(handleExpectedErrors)
    );
  }


  ReplaceMainImg(id: number, img: string) {
    const data =  { id: id, filename: img };    
    return this.http.post( this.END_POINT + 'ReplaceMainImg', data).pipe(
      catchError(handleExpectedErrors)
    );
  }
}
