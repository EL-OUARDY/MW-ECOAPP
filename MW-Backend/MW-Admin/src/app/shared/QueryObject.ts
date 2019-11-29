
export class QueryObject {
    Search: string;
    OnSale: string;

    PageSize: number;
    CurrentPage: number;

    CategoryId: number;
    SubCategoryId: number;
    

    DateMin: Date;
    DateMax: Date;

    OrderBy: string;
    IsSortAscending: boolean;

    constructor() {
        this.OnSale = null;
        this.PageSize = 2;
        this.CurrentPage = 0;
        this.IsSortAscending = true;
    }
}
