import { QueryObject } from './QueryObject';

export class ProductFilter extends QueryObject {

    CategoryId: number;
    SubCategoryId: number;

    DateMin: Date;
    DateMax: Date;

    constructor() {
        super();
    }
}
