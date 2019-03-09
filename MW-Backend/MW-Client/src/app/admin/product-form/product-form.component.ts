import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProductService } from '../services/admin-product.service';
import { AdminProduct } from '../models/adminProduct';
import { ToastrService } from 'ngx-toastr';
import { MiniProduct } from 'src/app/models/miniProduct';
import { BadInput } from 'src/app/common/errors/http-errors';
import { NgForm } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('f') ngForm: NgForm;

  categories; subCategories; shipping; MainImage: File;
  imgPath: string; GalleryImgs = new Array<IPath>(); DescImgs = new Array<IPath>();
  colors = ['white', 'red', 'pink', 'green', 'grey', 'yellow', 'blue', 'orange', 'brown', 'violet', 'black'];

  lastProducts: MiniProduct[];
  _Product = new AdminProduct();

  constructor(private aps: AdminProductService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.aps.getCategories().subscribe(res => {
      this.categories = res;
    });
    this.aps.GetLastProducts().subscribe(data => {
      this.lastProducts = <MiniProduct[]>data;
    });

    this.shipping = this.aps.getShippings();
  }


  // Posting The Product
  onSubmit(f: NgForm) {
    if (f.invalid || !this.MainImage || this.GalleryImgs.length === 0) {
      this.toaster.warning("You've to fill the required areas ..");
      return;
    }

    this._Product.Slug = this._Product.Name.replace(/\s+/g, '-');
    this.aps.PostProduct(this._Product).subscribe(
      (ProductId: string) => {
        this.toaster.success('Product has been added ' + ProductId, 'Success');
        this.uploadProductImages(ProductId);

      }, (error: AppError) => {
        if (error instanceof BadInput) {
          this.toaster.warning('ModelState is not valid ..'); // Display the error within Form errors and Wrap it with JSON pipe
        } else throw error;
      });
  }

  private uploadProductImages(ProductId: string) {
    const form = new FormData();
    form.append('ProductId', ProductId);

    form.append('MainImg', this.MainImage, this.MainImage.name);

    this.GalleryImgs.forEach(e => {
      form.append('GalleryImgs', e.img, e.img.name);
    });

    this.DescImgs.forEach(e => {
      form.append('DescImgs', e.img, e.img.name);
    });

    this.aps.UploadImages(form).subscribe(
      (Product) => {
        this.addToHistory(<MiniProduct>Product);
        this.toaster.success('Images Uploaded !', 'Success');
        this.resetForm();
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.toaster.warning(err.originalError.error.Message); // Display the error within Form errors
        } else throw err;
      });
  }

  private resetForm() {
    this.ngForm.resetForm(new AdminProduct());
    this.MainImage = undefined;
    this.imgPath = undefined;
    this.GalleryImgs = new Array<IPath>();
    this.DescImgs = new Array<IPath>();
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
      const exist = (this.GalleryImgs.find(x => x.name === files[i].name)) ? true : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          if (this.GalleryImgs.length < 8) { this.GalleryImgs.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  addDescImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = (this.DescImgs.find(x => x.name === files[i].name)) ? true : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          if (this.DescImgs.length < 8) { this.DescImgs.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  removeImage(name) {
    const elem = this.GalleryImgs.find(x => x.name === name);
    this.GalleryImgs.splice(this.GalleryImgs.indexOf(elem), 1);
  }
  removeDescImage(name) {
    const elem = this.DescImgs.find(x => x.name === name);
    this.DescImgs.splice(this.DescImgs.indexOf(elem), 1);
  }
}

interface IPath {
  img: File;
  name: string;
  data: string;
}
