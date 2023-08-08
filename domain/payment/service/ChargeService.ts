import { PaymentFactory } from "../factory/PaymentFactory";
import { PaymentMethodFactory } from "../factory/PaymentMethodFactory";
import { PaymentMethodType } from "../type/PaymentMethodType";
import { PaymentType } from "../type/PaymentType";

export class ChargeService {
  constructor(
    private type: PaymentType,
    private paymentMethodType: PaymentMethodType,
    private amount: number
  ) {}

  execute(): boolean {
    // InstantPayment
    return true;
  }

  private recordPayment() {}
  private createScheduledPayments() {
    // 分割支払いの場合、ScheduledPaymentを作成する
  }
}
