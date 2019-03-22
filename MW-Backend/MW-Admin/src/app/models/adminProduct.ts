export class AdminProduct {
    Id: number;
    Name: string;
    Slug: string;
    Price: number;
    Color: string;
    Description: string;
    OnSale: boolean;
    OldPrice: number;
    Discount: number;
    ShippingMethod: string;
    SubCategoryId: number;

    constructor() {
        this.Id = -1;
        this.Color = 'white';
        this.OnSale = true;
        this.ShippingMethod = 'gearbest';

        this.Name = 'Lorem Ipsum';
        this.Price = 17;
        this.OldPrice = 23;
        this.Description = 'Some Dummy Text ..';
    }
}
