import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../services/admin-product.service';
import { AdminProduct } from '../models/adminProduct';
import { ToastrService } from 'ngx-toastr';
import { MiniProduct } from 'src/app/models/miniProduct';
import { BadInput } from 'src/app/common/errors/http-errors';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories; subCategories; shipping; MainImage: File;
  imgPath: string; PImages = new Array<IPath>(); DesImages = new Array<IPath>(); 
  colors = ['white', 'red', 'pink', 'grey', 'yellow', 'blue', 'orange', 'green', 'black'];

  lastProducts: MiniProduct[] = [];
  _Product = new AdminProduct();
  serverError: string;

  constructor(private aps: AdminProductService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.aps.getCategories().subscribe(res => {
          this.categories = res;
    });

    this.shipping = this.aps.getShippings();
  }


  // Posting The Product
  onSubmit() {
    this._Product.Slug = this._Product.Name.replace(/\s+/g, '-');
    this.aps.PostProduct(this._Product)
    .subscribe(data => {
        this.toaster.success('Product Added', 'Success');
        this.lastProducts.push(<MiniProduct>data);
        console.log(this.lastProducts);
    }, error => {
        if (error instanceof BadInput) {
          this.serverError = 'Incorrect Passed Data ..'; // Display the error within Form errors
        } else throw error;
    });
  }

  getSub(c) {
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
    const array = [];
    this.PImages.forEach(e => {
      array.push(e.img);
    });
    return array;
  }
  getDescriptionPhotos() {
    const array = [];
    this.DesImages.forEach(e => {
      array.push(e.img);
    });
    return array;
  }
}

interface IPath {
  img: File;
  name: string;
  data: string;
}

