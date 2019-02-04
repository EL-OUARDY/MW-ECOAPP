import { MiniProduct } from './miniProduct';


export class CartItem {
    constructor(public product: MiniProduct, public quantity: number) {
    }

    get totalPrice() {
        return this.product.Price * this.quantity;
    }
}
