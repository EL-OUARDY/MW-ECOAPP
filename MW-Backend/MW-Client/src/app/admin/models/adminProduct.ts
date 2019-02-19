export class AdminProduct {
    Id: number;
    Name: string;
    Slug: string;
    Price: number;
    Color: string;
    Size: string;
    Description: string;
    Status: string;
    OldPrice: number;
    Discount: number;
    SubCategoryId: number;
    
    constructor() {
        this.Color = 'white';
        this.Status = 'on-sale';
    }
}
