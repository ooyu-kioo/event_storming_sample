import { IPaymentAttemptable } from "../interface/strategy/IPaymentAttemptable";

export class PaymentAttempts {
  payerId: string;
  attempts: IPaymentAttemptable[];

  constructor(payerId: string, attempts: IPaymentAttemptable[]) {
    this.payerId = payerId;
    this.attempts = attempts;
  }
}
