import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AdminProductService } from '../../services/admin-product.service';
import { AdminProduct } from '../../models/adminProduct';
import { ToastrService } from 'ngx-toastr';
import { MiniProduct } from 'src/app/models/miniProduct';
import { BadInput, NotFound } from 'src/app/common/errors/http-errors';
import { NgForm } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  expand = false;
  hasNoColor = false;
  colors = ['white', 'red', 'green', 'yellow', 'gray', 'orange', 'blue', 'pink', 'brown', 'purple', 'black'];
  @ViewChild('f') ngForm: NgForm;
  _maxG = 7; // Max gallery images
  _maxD = 5; // Max description images

  categories; subCategories; shipping; MainImage: File;
  imgPath: string; GalleryImgs = new Array<IPath>(); DescImgs = new Array<IPath>();

  GalleryImgsDrop: string[] = []; // images names to drop from server
  DescImgsDrop: string[] = [];

  lastProducts: MiniProduct[];
  _Product = new AdminProduct();

  constructor(private aps: AdminProductService, private router: Router, private activeRoute: ActivatedRoute, private toaster: ToastrService) {
    this.aps.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  // implements ngOnDestroy to Remove all subscriptions

  ngOnInit() {

    this.activeRoute.paramMap.subscribe(p => {
      const id = Number(p.get('id'));
      if ( id ) {
        this.getProduct(id);
      }
    });

    this.getLastAddedProducts();
    // this.shipping = this.aps.getShippings();
  }

  // Posting The Product
  onSubmit(f: NgForm) {
    if (f.invalid) {
      this.toaster.warning("Form Is Not Valid ..");
      return;
    }
    if (this._Product.Id > 0)
      this.updateProduct();
    else this.addProduct();
  }

  addProduct() {
    if ( !this.MainImage || this.GalleryImgs.length === 0) {
      this.toaster.warning("Main Image and Gallery images are Mandatory");
      return;
    }
    this._Product.Slug = this._Product.Name.replace(/\s+/g, '-'); // on server side
    this.aps.PostProduct(this._Product).subscribe(
      (ProductId: string) => {
        this.toaster.success('Product has been added ' + ProductId, 'Success');
        this.uploadProductImages(ProductId);

      }, (error: AppError) => {
        if (error instanceof BadInput) {
          console.log(error.originalError);
          this.toaster.warning('ModelState is not valid ..'); // Display the error within Form errors and Wrap it with JSON pipe
        } else { throw error; }
      });
  }
  updateProduct() {
    // validation of images ..
    this.aps.UpdateProduct(this._Product.Id, this._Product).subscribe(
      (ProductId: string) => {
        this.toaster.success('Product modified ' + ProductId, 'Success');
        this.resetForm();
        // UpdateImages(ProductId);

      }, (error: AppError) => {
        if (error instanceof BadInput) {
          console.log(error.originalError);
          this.toaster.warning('ModelState is not valid ..'); // Display the error within Form errors and Wrap it with JSON pipe
        } else { throw error; }
      });
    console.log('from update');
  }
  //////////////////////

  getLastAddedProducts() {
    this.aps.GetLastProducts().subscribe(data => {
      this.lastProducts = <MiniProduct[]>data;
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
        } else { throw err; }
      });
  }

  private resetForm() {
    this._Product = new AdminProduct();
    this.freeImages();
    this.router.navigateByUrl('/admin/add-product');
  }

  addToHistory(data: MiniProduct) {
    const array = this.lastProducts;

    array.pop(); // Remove The Last
    array.unshift(data); // Insert at The start
  }

  getSub(cat, reset) {
    try {
      if (cat)
        this.subCategories = this.categories.find(x => x.Id === Number(cat)).SubCategories;
          if (reset) this._Product.SubCategoryId = null;
    } catch (e) {}
  }

  getProduct(id: number){
    this.aps.getProduct(id)
      .subscribe(
        (p) => {
          this.freeImages();
          this._Product = p as AdminProduct;
          this.hasNoColor = this._Product.Color ? false : true;
          this.getSub(this._Product.CategoryId, false);
        },
        (err: AppError) => {
          if (err instanceof NotFound) {
            this.toaster.warning('Product Not Found Or Deleted');
          } else { throw err; }
        });
  }
  freeImages() {
    this.imgPath = null;
    this.MainImage = null;
    this.GalleryImgs = [];
    this.DescImgs = [];
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

  addGalleryImages(files: File[]) {
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

          if (this.GalleryImgs.length < this._maxG) { this.GalleryImgs.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  addGalleryImagesServer(files){
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

          if ( (this.GalleryImgs.length + this._Product.galleryImgs.length) < this._maxG) 
            { this.GalleryImgs.push(item); }
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

          if (this.DescImgs.length < this._maxD) { this.DescImgs.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  addDescImagesServer(files){
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

          if ((this.DescImgs.length + this._Product.descImgs.length) < this._maxD) { this.DescImgs.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  asMainImage(img: File) {
      this.MainImage = img;
      this.previewMainImg();
  }

  asMainImagePlus(img: File) {
    this._Product.mainImg = null;
    this.asMainImage(img);
  }

  asMainImageServer(img) { // this method will call the server once it raised !
    this.aps.ReplaceMainImg(this._Product.Id, img).subscribe(
      () => {
        this.toaster.success('main image changed', 'Success');
        this._Product.mainImg = img;
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          console.log(error.originalError);
          this.toaster.warning("Something's Wrong ..");
        } else { throw error; }
      });
  }

  removeGalleryImage(name) {
    const elem = this.GalleryImgs.find(x => x.name === name);
    this.GalleryImgs.splice(this.GalleryImgs.indexOf(elem), 1);
  }

  removeGalleryImageServer(name) {
    const elem = this._Product.galleryImgs.find(x => x === name);
    this._Product.galleryImgs.splice(this._Product.galleryImgs.indexOf(elem), 1);

    this.GalleryImgsDrop.push(name);
  }

  removeDescImage(name) {
    const elem = this.DescImgs.find(x => x.name === name);
    this.DescImgs.splice(this.DescImgs.indexOf(elem), 1);
  }
  removeDescImageServer(name){
    const elem = this._Product.descImgs.find(x => x === name);
    this._Product.descImgs.splice(this._Product.descImgs.indexOf(elem), 1);
    
    this.DescImgsDrop.push(name);
  }
  Reset() {
    this.resetForm();
  }
  setNoColor() {
    if (this.hasNoColor) this._Product.Color = null;
    else this._Product.Color = 'white';
  }
}

interface IPath {
  img: File;
  name: string;
  data: string;
}
