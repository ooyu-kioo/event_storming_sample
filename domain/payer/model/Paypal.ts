import { IPaypal } from "../interface/entity/IPaypal";
import { IPaymentMethod } from "../interface/strategy/IPaymentMethod";
import { PaymentMethodType } from "../../payment/type/PaymentMethodType";

export class Paypal implements IPaypal, IPaymentMethod {
  name: PaymentMethodType.Paypal;

  constractor() {
    this.name = PaymentMethodType.Paypal;
  }

  public execute(amount: number): void {}
}
