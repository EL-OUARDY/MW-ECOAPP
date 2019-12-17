import { QueryObject } from './QueryObject';

export class ProductFilter extends QueryObject {
    OnSale: string;
    Search: string;
    
    CategoryId: number;
    SubCategoryId: number;
    
    MinDate: string;
    MaxDate: string;

    Deleted: boolean;
    
    constructor() {
        super();
        this.OnSale = null;
        this.Deleted = false;
    }

    resetFields() {
        this.OnSale = null;
        this.CategoryId = undefined;
        this.SubCategoryId = undefined;
        this.Search = undefined;
        this.MinDate = undefined;
        this.MaxDate = undefined;
        this.Deleted = false;
    }
}
