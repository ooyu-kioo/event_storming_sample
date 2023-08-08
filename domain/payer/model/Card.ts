import { ICard } from "../interface/entity/ICard";
import { IPaymentMethod } from "../interface/strategy/IPaymentMethod";
import { PaymentMethodType } from "../../payment/type/PaymentMethodType";

export class Card implements ICard, IPaymentMethod {
  name: PaymentMethodType.Paypal;
  cardNumber: string;

  constractor() {
    this.name = PaymentMethodType.Paypal;
  }

  public execute(amount: number): void {}
}
