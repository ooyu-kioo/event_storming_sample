import { Payment } from "../../payment/model/root/Payment";
import { PaymentRequest } from "../model/PaymentRequest";

export class chargePaymentRequest {
  constructor(
    private methodToken: string,
    private payment: Payment,
    private paymentRequest: PaymentRequest
  ) {}

  execute(): void {
    this.payment.makePayment(this.methodToken, this.paymentRequest.amount);
    this.paymentRequest.togglePaid();
  }
}
