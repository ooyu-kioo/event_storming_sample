import { IPayment } from "../interface/strategy/IPayment";
import { IInstantPayment } from "../interface/entity/IInstantPayment";
import { IPaymentMethod } from "../interface/strategy/IPaymentMethod";

export class InstantPayment implements IPayment, IInstantPayment {
  payerId: number;
  amount: number;
  paymentMethod: IPaymentMethod;

  constructor(paymentMethod: IPaymentMethod, amount: number) {
    this.paymentMethod = paymentMethod;
    this.amount = amount;
  }

  makePayment(): void {
    this.paymentMethod.execute(this.amount);
  }
}
