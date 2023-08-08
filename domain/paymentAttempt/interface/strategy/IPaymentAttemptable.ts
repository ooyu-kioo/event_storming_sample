import { PaymentMethodType } from "../../../payment/type/PaymentMethodType";

export interface IPaymentAttemptable {
  methodName: PaymentMethodType;
  orderId: string;
  success: boolean;
  errorMessage: string | null;
}
