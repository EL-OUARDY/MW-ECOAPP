import { QueryObject } from './QueryObject';

export class ProductFilter extends QueryObject {

    CategoryId: number;
    SubCategoryId: number;

    MinDate: string;
    MaxDate: string;

    constructor() {
        super();
    }
}
