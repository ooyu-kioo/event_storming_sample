import { IPaymentMethod } from "../strategy/IPaymentMethod";

export interface IAutoPayment {
  id: number;
  method: IPaymentMethod;

  paymentName(): string;
}
