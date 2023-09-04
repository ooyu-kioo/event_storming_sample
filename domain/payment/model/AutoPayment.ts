import { IChargable } from "./paymentMethod/IChargable";

export class AutoPayment {
  constructor(
    public id: number,
    public paymentId: number,
    public method: IChargable
  ) {}
}
