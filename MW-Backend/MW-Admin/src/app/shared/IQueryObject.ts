
export class QueryObject {
    OnSale: string;
    PageSize: number;
    CurrentPage: number;

    constructor() {
        this.OnSale = null;
        this.PageSize = 2;
        this.CurrentPage = 0;
    }
}
