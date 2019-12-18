import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from 'src/app/shared/validators/product.validators';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { COMMUN_COLORS } from 'src/app/shared/GlobalConstants';
import { ProductVariantService } from 'src/app/services/product-variant.service';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html'
})

export class VariantComponent implements OnInit {
  
  form = new FormGroup({
    Label: new FormControl('', [Validators.required, ProductValidators.cannotContainSpace]),
    Value: new FormControl('', [Validators.required, ProductValidators.cannotContainSpace]),
    Price: new FormControl(null),
    Image: new FormControl(null),
  });

  _VariantList: IVariantModel;
  imgPath: string;

  get Label() {
    return this.form.get('Label').value;
  }
  
  set Label(value) {
    this.form.get('Label').setValue(value);
  }

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productVariants: ProductVariantService) { }

  ngOnInit() {
    this.loadVariantsList();
  }

  loadVariantsList() {
    this.productVariants.GetProductVariants(this.data.id).subscribe((model: IVariantModel) => {
      this._VariantList = model;
    });
  }

  addVariant() {

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

}

interface IVariantModel {
  Id: number;
  Name: string;
  Price: number;
  Image: string;
  Color: string;
  Variants: IVariant[];
}

interface IVariant {
  Label: string;
  Value: string;
  Price: number;
  Image: string;
}
