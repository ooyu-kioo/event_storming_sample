import { IPaypalPaymentAttempt } from "../interface/entity/IPaypalPaymentAttempt";
import { IPaymentAttemptable } from "../interface/strategy/IPaymentAttemptable";
import { PaymentMethodType } from "../../payment/type/PaymentMethodType";

export class PaypalPaymentAttempt
  implements IPaymentAttemptable, IPaypalPaymentAttempt
{
  methodName: PaymentMethodType;
  token: string;
  orderId: string;
  success: boolean;
  errorMessage: string | null;

  constructor(
    token: string,
    orderId: string,
    success: boolean,
    errorMessage: string | null
  ) {
    this.methodName = PaymentMethodType.Paypal;
    this.token = token;
    this.orderId = orderId;
    this.success = success;
    this.errorMessage = errorMessage;
  }
}
