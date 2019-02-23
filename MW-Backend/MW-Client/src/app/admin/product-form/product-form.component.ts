import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../services/admin-product.service';
import { AdminProduct } from '../models/adminProduct';
import { ToastrService } from 'ngx-toastr';
import { MiniProduct } from 'src/app/models/miniProduct';
import { BadInput } from 'src/app/common/errors/http-errors';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories; subCategories; shipping; MainImage: File;
  imgPath: string; PImages = new Array<IPath>(); DesImages = new Array<IPath>(); 
  colors = ['white', 'red', 'pink', 'grey', 'yellow', 'blue', 'orange', 'green', 'black'];

  lastProducts: MiniProduct[];
  _Product = new AdminProduct();
  serverError;

  constructor(private aps: AdminProductService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.aps.getCategories().subscribe(res => {
          this.categories = res;
    });
    this.aps.GetLastProducts().subscribe(data => {
      this.lastProducts = <MiniProduct[]> data;
    });

    this.shipping = this.aps.getShippings();
  }


  // Posting The Product
  onSubmit(f: NgForm) {
    this._Product.Slug = this._Product.Name.replace(/\s+/g, '-');

    this.aps.PostProduct(this._Product).subscribe(
      data => {
        this.addToHistory(<MiniProduct>data);
        f.resetForm( new AdminProduct() );
    }, error => {
        if (error instanceof BadInput) {
          this.serverError = error.originalError ; // Display the error within Form errors and Wrap it with JSON pipe
          console.log(this.serverError);
        } else throw error;
    });
  }

  addToHistory(data: MiniProduct) {
    const array = this.lastProducts;

    array.pop(); // Remove The Last
    array.unshift(data); // Insert at The start
  }

  getSub(c) {
    if (c)
      this.subCategories = this.categories.find(x => x.Id === Number(c)).SubCategories;
  }


  /* Images Functions */

  setMainImage(files) {
    this.MainImage = files[0];
    this.previewMainImg();
  }
  previewMainImg() {
    if (this.MainImage) { // image exist
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        this.imgPath = (<FileReader>e.target).result.toString();
      };
      reader.readAsDataURL(this.MainImage);
    }
  }

  addProductImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = (this.PImages.find(x => x.name === files[i].name)) ? true : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          if (this.PImages.length < 8) { this.PImages.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  addDescImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = (this.DesImages.find(x => x.name === files[i].name)) ? true : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          if (this.DesImages.length < 8) { this.DesImages.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  removeImage(name) {
    const elem = this.PImages.find(x => x.name === name);
    this.PImages.splice(this.PImages.indexOf(elem), 1);
  }
  removeDescImage(name) {
    const elem = this.DesImages.find(x => x.name === name);
    this.DesImages.splice(this.DesImages.indexOf(elem), 1);
  }


  getProductPhotos() {
    const array: File[] = [];
    this.PImages.forEach(e => {
      array.push(e.img);
    });
    return array;
  }
  getDescriptionPhotos() {
    const array: File[] = [];
    this.DesImages.forEach(e => {
      array.push(e.img);
    });
    return array;
  }

  logImgs() {
    console.log(this.MainImage);
    console.log(this.getProductPhotos());
    console.log(this.getDescriptionPhotos());
  }
}

interface IPath {
  img: File;
  name: string;
  data: string;
}

interface IProductData {
  Product: AdminProduct;
  mainImg: File;
  productImgs: File[];
  descImgs: File[];
}

