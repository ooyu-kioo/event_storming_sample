import { IPaymentMethod } from "./IPaymentMethod";

export interface IPayment {
  amount: number;
  paymentMethod: IPaymentMethod;

  makePayment(): void;
}
