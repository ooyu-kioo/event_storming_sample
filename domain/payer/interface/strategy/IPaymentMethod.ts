import { PaymentMethodType } from "../../../payment/type/PaymentMethodType";

export interface IPaymentMethod {
  name: PaymentMethodType;

  execute(amount: number): void;
}
