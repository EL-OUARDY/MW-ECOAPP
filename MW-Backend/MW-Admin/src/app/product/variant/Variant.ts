export class Variant {
  Id: number;
  Label: string;
  Value: string;
  Price_Diff: number;
  Quantity: number;
  Last_Update: string;
  Image: string;
  constructor() {
    this.Label = null;
    this.Value = null;
    this.Price_Diff = null;
    this.Quantity = null;
  }
}