import { IPaymentMethod } from "../interface/strategy/IPaymentMethod";

export class AutoPayment {
  private readonly id: number;
  private readonly method: IPaymentMethod;

  constructor(id: number, method: IPaymentMethod) {
    this.id = id;
    this.method = method;
  }

  paymentName(): string {
    return this.method.name;
  }
}
