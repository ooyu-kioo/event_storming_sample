import { IChargable } from "../paymentMethod/interface/IChargable";
import { AutoPayment } from "../AutoPayment";
import { ScheduledPayment } from "../ScheduledPayment";
import { PaymentMethodFactory } from "../paymentMethod/PaymentMethodFactory";
import {
  PaymentMethodArgs,
  PaymentMethodType,
} from "../paymentMethod/type/PaymentMethodType";

export class Payment {
  constructor(
    public id: number,
    public payerId: number,
    private autoPayment: AutoPayment | null = null,
    private paymentMethods: IChargable[] | null = null,
    private scheduledPayments: ScheduledPayment[] | null = null
  ) {}

  // 通常決済
  // TODO: (現状だと決済手段をあらかじめ登録してないと決済できない)
  makePayment(methodToken: string, amount: number): void {
    const method = this.getPaymentMethod(methodToken);
    method.charge(amount);
  }
  makeSplitPayment(
    methodToken: string,
    totalAmount: number,
    splitCount: number
  ): void {
    const initialAmount = ScheduledPayment.splitAmount(totalAmount, splitCount);
    const method = this.getPaymentMethod(methodToken);
    method.charge(initialAmount);

    const scheduledPayents = ScheduledPayment.createScheduledPyaemnts(
      totalAmount,
      splitCount,
      method,
      new Date()
    );
    this.scheduledPayments = scheduledPayents;
  }

  // 自動支払い
  setAutoPayment(method: IChargable): void {
    this.autoPayment = new AutoPayment(1, this.id, method);
  }
  removeAutoPayment(): void {
    this.autoPayment = null;
  }
  isAutoPay(): boolean {
    return !!this.autoPayment;
  }

  // 支払い手段
  registPaymentMethod(type: PaymentMethodType, args: PaymentMethodArgs): void {
    const method = PaymentMethodFactory.create(type, args);
    this.paymentMethods = (this.paymentMethods ?? []).concat(method);
  }
  removePaymentMethod(token): void {
    if (!this.paymentMethods) return;

    this.paymentMethods = this.paymentMethods.filter(
      (method) => method.token !== token
    );
  }

  // 予定支払い
  getscheduledPayments(): ScheduledPayment[] | void {
    if (!this.scheduledPayments) return;

    return this.scheduledPayments;
  }
  makePrePayment(scheduledPayments: ScheduledPayment[]): void {
    scheduledPayments.forEach((payment) => {
      this.makePayment(payment.method.token, payment.amount);
    });
  }

  // private

  private getPaymentMethod(methodToken: string): IChargable {
    const result = this.paymentMethods?.find(
      (method) => method.token === methodToken
    );

    if (!result) {
      throw new Error("invalid payment method token");
    }

    return result;
  }
}
