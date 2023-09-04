import { IChargable } from "./interface/IChargable";
import { Card } from "./Card";
import { Paypal } from "./Paypal";
import { PaymentMethodArgs, PaymentMethodType } from "./type/PaymentMethodType";

export class PaymentMethodFactory {
  static create(type: PaymentMethodType, args: PaymentMethodArgs): IChargable {
    switch (type) {
      case "card":
        return new Card(args.token, args.paymentId);
      case "paypal":
        return new Paypal(args.token, args.paymentId);
      default:
        throw new Error("invalid payment method type");
    }
  }
}
