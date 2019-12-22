import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { COMMUN_COLORS } from 'src/app/shared/GlobalConstants';
import { ProductVariantService } from 'src/app/services/product-variant.service';
import { DateTime } from 'luxon';
import { NgForm } from '@angular/forms';
import { Variant } from './Variant';
import { ToastrService } from 'ngx-toastr';
import { AppError } from 'src/app/shared/errors/app-error';
import { BadInput, NotFound } from 'src/app/shared/errors/http-errors';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html'
})

export class VariantComponent implements OnInit {
  
  @ViewChild("form") form: NgForm;

  _variant = new Variant();
  _productObject: IVariantModel;
  fd = new FormData();
  
  _dateTime = DateTime;
  imgPath: string;

  common_variants = [
    {
        "label": "color",
        "options": COMMUN_COLORS
    },
    {
        "label": "size",
        "options": [ "xm", "sm", "m", "l", "xl" ]
    },
    {
        "label": "storage"
    },
    {
        "label": "length"
    },
    {
      "label": "weight"
    },
    {
      "label": "width"
    }
];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private variantService: ProductVariantService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.loadVariantsList();
  }

  loadVariantsList() {
    this.variantService.GetProductVariants(this.data.id).subscribe((model: IVariantModel) => {
      this._productObject = model;
      this._variant.ProductId = this._productObject.Id;
    });
  }

  fillForm(variant) {
    this.fd = new FormData();
    this.imgPath = null;
    this._variant = variant;
  }

  saveVariant() {
    if (this.form.invalid) return;
    
    if (this._variant.Id > 0)
      this.updateVariant();
    else
      this.addVariant();
  }
  addVariant() {
    this.fillFormData();

    this.variantService.PostVariant(this.fd).subscribe(
      (variant: Variant) => {
      this._productObject.Variants.push(variant);
      
      this.toaster.success("success");
      this.resetForm();
    },
    (error: AppError) => {
      if (error instanceof BadInput)
        this.toaster.error(error.originalError);
      else throw error;
    });
  }
  
  updateVariant() {
    this.fillFormData();

    this.variantService.UpdateVariant(this._variant.Id, this.fd).subscribe(
      (variant: Variant) => {
      const index = this._productObject.Variants.findIndex(x => x.Id === variant.Id);
      this._productObject.Variants.splice(index, 1, variant);

      this.toaster.success("success");
      this.resetForm();
    },
    (error: AppError) => {
      if (error instanceof BadInput)
        this.toaster.error(error.originalError);
      else throw error;
    });
  }

  private fillFormData() {
    this.fd.append('Label', this._variant.Label.toLowerCase());
    this.fd.append('Value', this._variant.Value);
    this.fd.append('ProductId', this._variant.ProductId.toString());
    if (this._variant.Price_Diff != null)
      this.fd.append('Price_Diff', this._variant.Price_Diff.toString());
    if (this._variant.Quantity != null)
      this.fd.append('Quantity', this._variant.Quantity.toString());
    if (this._variant.Id > 0)
      this.fd.append('Id', this._variant.Id.toString());
  }

  
  deleteVariant(id) {
    this.variantService.DeleteVariant(id).subscribe(
      () => {
      const index = this._productObject.Variants.findIndex(x => x.Id === id);
      this._productObject.Variants.splice(index, 1);
      
      this.toaster.success("Deleted Successfuly");
      this.resetForm();
    },
    (error: AppError) => {
      if (error instanceof NotFound)
        this.toaster.error("Could Not Found This Record !!");
      if (error instanceof BadInput)
        this.toaster.error(error.originalError);
      else throw error;
    });
  }

  resetForm() {
    this._variant = new Variant();
    this._variant.ProductId = this._productObject.Id;
    this.fd = new FormData();
    this.imgPath = null;
    this.form.resetForm();
  }

  imageChanged(files){
    this.fd.delete('Image');
    this.fd.append('Image', files[0], files[0].name);
    this.previewMainImg(files[0]);
  }

  previewMainImg(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        this.imgPath = (<FileReader>e.target).result.toString();
      };
      reader.readAsDataURL(file);
    }
  }

  trackById(index, variant) {
    return variant ? variant.Id : undefined;
  }

}

interface IVariantModel {
  Id: number;
  Name: string;
  Price: number;
  Image: string;
  Color: string;
  Quantity: number;
  Last_Update: string;
  Variants: Variant[];
}

