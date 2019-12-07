import { QueryObject } from './QueryObject';

export class ProductFilter extends QueryObject {
    OnSale: string;
    Search: string;
    
    CategoryId: number;
    SubCategoryId: number;
    
    MinDate: string;
    MaxDate: string;
    
    constructor() {
        super();
        this.OnSale = null;
    }

    resetFields() {
        this.CategoryId = undefined;
        this.SubCategoryId = undefined;
        this.Search = undefined;
        this.MinDate = undefined;
        this.MaxDate = undefined;
    }
}
