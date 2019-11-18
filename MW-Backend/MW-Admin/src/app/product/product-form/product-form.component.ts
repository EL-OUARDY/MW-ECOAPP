import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProductService } from '../../services/admin-product.service';
import { AdminProduct } from '../../models/adminProduct';
import { ToastrService } from 'ngx-toastr';
import { MiniProduct } from 'src/app/models/miniProduct';
import { BadInput, NotFound } from 'src/app/common/errors/http-errors';
import { NgForm } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { Router, ActivatedRoute } from '@angular/router';
import { FormJob } from 'src/app/common/GlobalConstants';
import { AdminUploadService } from 'src/app/services/admin-upload.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: "product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  expand = false;
  hasNoColor = false;
  _formJob: string = FormJob.Add; // what operation the form will achieve adding, editing ..
  colors = [
    "white",
    "red",
    "green",
    "yellow",
    "gray",
    "orange",
    "blue",
    "pink",
    "brown",
    "purple",
    "black"
  ];
  @ViewChild("f") ngForm: NgForm;
  _maxG = 7; // Max gallery images
  _maxD = 5; // Max description images

  categories;
  subCategories;
  shipping;
  MainImage: File;
  imgPath: string;
  GalleryImgs: IPath[] = [];
  DescImgs: IPath[] = [];

  GalleryImgsDrop: string[] = []; // images names to drop from server
  DescImgsDrop: string[] = [];

  lastProducts: MiniProduct[];
  _Product = new AdminProduct();

  copyingId = 0; // store the product id that the new product will copy from
  mainImgFromCopy;

  constructor(
    private productService: AdminProductService,
    private categoryService: CategoryService,
    private uploadService: AdminUploadService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private toaster: ToastrService
  ) {
    this.getCategories();
  }

  private getCategories(locally = true) { // use it with locally=false to bring new categories from server
    this.categories = this.categoryService.getCategoriesLocally();
    
    if (!this.categories || !locally){
      this.getNewCategoriesAndStoreThem();
    }
  }

  private getNewCategoriesAndStoreThem() {
    this.categoryService.getCategoriesFromServer().subscribe(cats => {
      localStorage.setItem("MWCategories", JSON.stringify(cats));
      this.categories = cats;
    });
  }

  // implements ngOnDestroy to Remove all subscriptions

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe(p => {
      const editId = +p.get("editId");
      if (editId) {
        this._formJob = FormJob.Update;
        this.getProduct(editId, FormJob.Update);
      }

      const copyId = +p.get("copyId");
      if (copyId) {
        this._formJob = FormJob.Copy;
        this.getProduct(copyId, FormJob.Copy);
      }
      this.mainImgFromCopy = null;
      this.ngForm.resetForm();
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
      // update case
      this.updateProduct();
    else this.addProduct();
  }

  private checkImages(): boolean {
    if (
      (this._formJob === FormJob.Add &&
        (!this.MainImage || this.GalleryImgs.length === 0)) ||
      (this._formJob !== FormJob.Add &&
        (this.GalleryImgs.length === 0 &&
          this._Product.galleryImgs.length === 0))
    ) {
      this.toaster.warning("Main Image and Gallery images are Mandatory");
      return false;
    }
    return true;
  }

  addProduct() {
    if (!this.checkImages()) return;

    this._Product.Slug = this._Product.Name.replace(/\s+/g, "-"); // on server side
    this.productService.PostProduct(this._Product).subscribe(
      (ProductId: string) => {
        this.toaster.success("Product has been added " + ProductId, "Success");
        this.uploadProductImages(ProductId);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          console.log(error.originalError);
          this.toaster.warning("ModelState is not valid .."); // Display the error within Form errors and Wrap it with JSON pipe
        } else {
          throw error;
        }
      }
    );
  }
  updateProduct() {
    if (!this.checkImages()) return;

    if (!this.ngForm.pristine) {
      // the form has changed (dirty)
      this.productService
        .UpdateProduct(this._Product.Id, this._Product)
        .subscribe(
          (ProductId: string) => {
            this.toaster.success("Product modified " + ProductId, "Success");
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              console.log(error.originalError);
              this.toaster.warning("ModelState is not valid .."); // Display the error within Form errors and Wrap it with JSON pipe
            } else if (error instanceof NotFound) {
              console.log(error.originalError);
              this.toaster.warning("Can't update a none existing product !!");
              this.resetForm();
            } else {
              throw error;
            }
          }
        );
    }
    if (
      this.MainImage || // the cases when we have to call upload method ..
      this.GalleryImgs.length > 0 ||
      this.DescImgs.length > 0 ||
      this.GalleryImgsDrop.length > 0 ||
      this.DescImgsDrop.length > 0
    ) {
      this.uploadProductImages(this._Product.Id.toString());
    }

    this.resetForm(); // just reset the form !
  }
  //////////////////////

  private uploadProductImages(ProductId: string) {
    const form = new FormData();
    form.append("ProductId", ProductId);

    if (this.MainImage) {
      form.append("MainImg", this.MainImage, this.MainImage.name);
    }

    this.GalleryImgs.forEach(e => {
      form.append("GalleryImgs", e.img, e.img.name);
    });

    this.DescImgs.forEach(e => {
      form.append("DescImgs", e.img, e.img.name);
    });

    if (this._formJob === FormJob.Copy) {
      form.append("CopyingId", this.copyingId.toString());
      form.append("mainImgFromCopy", this.mainImgFromCopy);
    }

    // Updating case, or copying case
    if (this._formJob !== FormJob.Add) {
      form.append("GalleryImgsDrop", JSON.stringify(this.GalleryImgsDrop));
      form.append("DescImgsDrop", JSON.stringify(this.DescImgsDrop));
    }

    const action =
      this._formJob === FormJob.Add
        ? this.uploadService.addProductImages(form)
        : this._formJob === FormJob.Update
        ? this.uploadService.updateProductImages(form)
        : this.uploadService.copyProductImages(form);

    action.subscribe(
      Product => {
        this.addToHistory(<MiniProduct>Product);
        this.toaster.success("Images Uploaded !", "Success");
        this.resetForm();
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.toaster.warning(err.originalError.error.Message); // Display the error within Form errors
        } else {
          throw err;
        }
      }
    );
  }

  getLastAddedProducts() {
    this.productService.GetLastProducts().subscribe(data => {
      this.lastProducts = <MiniProduct[]>data;
    });
  }

  private resetForm() {
    this.ngForm.resetForm();
    this._Product = new AdminProduct();
    this.copyingId = 0;
    this._formJob = FormJob.Add;
    this.freeImages();
    this.GalleryImgsDrop = [];
    this.DescImgsDrop = [];
    this.mainImgFromCopy = null;
    this.router.navigateByUrl("/admin/product-form");
  }

  addToHistory(item: MiniProduct) {
    const array = this.lastProducts;

    const ex_item = array.find(x => x.Id === item.Id);
    if (ex_item) array.splice(array.indexOf(ex_item), 1);

    if (array.length >= 6)
      // Magic Number 6 => item had to display within history
      array.pop(); // Remove The Last

    array.unshift(item); // Insert at The start
  }

  getSub(cat, reset) {
    try {
      if (cat)
        this.subCategories = this.categories.find(
          x => x.Id === Number(cat)
        ).SubCategories;
      if (reset) this._Product.SubCategoryId = null;
    } catch (e) {}
  }

  getProduct(id: number, mode: string) {
    this.productService.getProduct(id).subscribe(
      p => {
        this.freeImages();
        this._Product = p as AdminProduct;
        this.hasNoColor = this._Product.Color ? false : true;
        this.getSub(this._Product.CategoryId, false);
        if (mode === FormJob.Copy) {
          this.copyingId = id;
          this._Product.Id = 0;
        }
      },
      (err: AppError) => {
        if (err instanceof NotFound) {
          this.toaster.warning("Product Not Found Or Deleted");
        } else {
          throw err;
        }
      }
    );
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
    if (this.MainImage) {
      // image exist
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        this.imgPath = (<FileReader>e.target).result.toString();
      };
      reader.readAsDataURL(this.MainImage);
    }
  }

  addGalleryImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = this.GalleryImgs.find(x => x.name === files[i].name)
        ? true
        : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };
          const _length =
            this.GalleryImgs.length + this._Product.galleryImgs.length;

          if (_length < this._maxG) {
            this.GalleryImgs.push(item);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  addDescImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = this.DescImgs.find(x => x.name === files[i].name)
        ? true
        : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          const _length = this.DescImgs.length + this._Product.descImgs.length;

          if (_length < this._maxD) {
            this.DescImgs.push(item);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  asMainImage(img: File) {
    this.mainImgFromCopy = null;
    this.MainImage = img;
    this.previewMainImg();
  }

  asMainImagePlus(img: File) {
    this._Product.mainImg = null;
    this.asMainImage(img);
  }

  asMainImageServer(img) {
    // this method will call the server once it raised !
    if (this._formJob === FormJob.Copy) {
      this.imgPath = this.MainImage = null;
      this.mainImgFromCopy = img;
      return;
    }
    this.uploadService.ReplaceMainImg(this._Product.Id, img).subscribe(
      () => {
        this.toaster.success("main image changed", "Success");
        this._Product.mainImg = img;
        this.imgPath = this.MainImage = null;
        this.getLastAddedProducts();
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          console.log(error.originalError);
          this.toaster.warning("Something's Wrong ..");
        } else {
          throw error;
        }
      }
    );
  }

  removeGalleryImage(name) {
    const elem = this.GalleryImgs.find(x => x.name === name);
    this.GalleryImgs.splice(this.GalleryImgs.indexOf(elem), 1);
  }

  removeGalleryImageServer(name) {
    const elem = this._Product.galleryImgs.find(x => x === name);
    this._Product.galleryImgs.splice(
      this._Product.galleryImgs.indexOf(elem),
      1
    );

    this.GalleryImgsDrop.push(name);
  }

  removeDescImage(name) {
    const elem = this.DescImgs.find(x => x.name === name);
    this.DescImgs.splice(this.DescImgs.indexOf(elem), 1);
  }
  removeDescImageServer(name) {
    const elem = this._Product.descImgs.find(x => x === name);
    this._Product.descImgs.splice(this._Product.descImgs.indexOf(elem), 1);

    this.DescImgsDrop.push(name);
  }
  Reset() {
    this.resetForm();
  }
  setNoColor() {
    if (this.hasNoColor) this._Product.Color = null;
    else this._Product.Color = "white";
  }

  OnsaleChanged() {
    if (this._Product.OnSale === false) this._Product.Quantity = 0;
    else this._Product.Quantity = null;
  }

  QteBlured() {
    if (this._Product.Quantity === 0) this._Product.OnSale = false;
    else this._Product.OnSale = true;
  }
}
// interface helps to store both img file and img data that display on template,
// plus the name that identify every image
interface IPath { 
  img: File;
  name: string;
  data: string;
}
