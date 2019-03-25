export class AdminProduct {
    Id: number;
    Name: string;
    Slug: string;
    Price: number;
    Color: string;
    Description: string;
    OnSale: boolean;
    Quantity: number;
    OldPrice: number;
    Discount: number;
    ShippingMethod: string;
    SubCategoryId: number;
    Date_Added: Date;

    get Qte() {
        if (!this.OnSale) {
            return 0;
        }
        return this.Quantity; 
    }
    set Qte(value: number) {

        if (value === 0) {
            this.OnSale = false;
        } else this.OnSale = true;

        this.Quantity = value;
    }

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
