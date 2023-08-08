import { IPaymentAttemptable } from "../interface/strategy/IPaymentAttemptable";
import { ICardPaymentAttempt } from "../interface/entity/ICardPaymentAttempt";
import { PaymentMethodType } from "../../payment/type/PaymentMethodType";

export class CardPaymentAttempt
  implements IPaymentAttemptable, ICardPaymentAttempt
{
  methodName: PaymentMethodType;
  cardNumber: string;
  orderId: string;
  success: boolean;
  errorMessage: string | null;

  constructor(
    cardNumber: string,
    orderId: string,
    success: boolean,
    errorMessage: string | null
  ) {
    this.methodName = PaymentMethodType.Card;
    this.cardNumber = cardNumber;
    this.orderId = orderId;
    this.success = success;
    this.errorMessage = errorMessage;
  }
}
