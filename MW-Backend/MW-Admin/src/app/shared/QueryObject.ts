
// all filter classes will inherit from this one
export class QueryObject {

    PageSize: number;
    CurrentPage: number;

    OrderBy: string;
    IsSortAscending: boolean;

    constructor() {
        this.PageSize = 10;
        this.CurrentPage = 0;
        this.OrderBy = 'Id';
        this.IsSortAscending = false;
    }
}
