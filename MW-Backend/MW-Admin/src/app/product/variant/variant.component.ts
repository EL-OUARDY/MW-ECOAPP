import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { COMMUN_COLORS } from 'src/app/shared/GlobalConstants';
import { ProductVariantService } from 'src/app/services/product-variant.service';
import { DateTime } from 'luxon';
import { NgForm } from '@angular/forms';
import { Variant } from './Variant';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html'
})

export class VariantComponent implements OnInit {
  
  @ViewChild("form") ngForm: NgForm;
  
  _variant = new Variant();
  _productObject: IVariantModel;
  imgPath: string;
  
  _dateTime = DateTime;

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productVariants: ProductVariantService) {
  }

  ngOnInit() {
    this.loadVariantsList();
  }

  loadVariantsList() {
    this.productVariants.GetProductVariants(this.data.id).subscribe((model: IVariantModel) => {
      this._productObject = model;
    });
  }

  fillForm(variant) {
    this._variant = variant;
  }

  saveVariant() {
    if (this._variant.Id > 0)
      this.updateVariant();
    else
      this.addVariant();
  }
  updateVariant() {
    // call service
    // this.resetForm();
  }
  addVariant() {
    // call service
    // this.resetForm();
  }

  deleteVariant(id) {
    // call service
  }

  resetForm() {
    this._variant = new Variant();
    this.ngForm.resetForm();
  }
  previewMainImg(files) {
    if (files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        this.imgPath = (<FileReader>e.target).result.toString();
      };
      reader.readAsDataURL(files[0]);
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

