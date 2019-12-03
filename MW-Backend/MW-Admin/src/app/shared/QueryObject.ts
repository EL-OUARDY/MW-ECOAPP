
// all filter classes will inherit from this one
export class QueryObject {
    Search: string;
    OnSale: string;

    PageSize: number;
    CurrentPage: number;

    OrderBy: string;
    IsSortAscending: boolean;

    constructor() {
        this.OnSale = null;
        this.PageSize = 10;
        this.CurrentPage = 0;
        this.OrderBy = 'Id';
        this.IsSortAscending = true;
    }
}
