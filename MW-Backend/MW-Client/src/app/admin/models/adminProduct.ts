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
        this.Id = -1;
        this.Color = 'white';
        this.Status = 'on-sale';

        this.Name = 'Lorem Ipsum';
        this.Price = 9;
        this.Description = 'Some Dummy Text ..';
        this.SubCategoryId = 3;
    }
}
