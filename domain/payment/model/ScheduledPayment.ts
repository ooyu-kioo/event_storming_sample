import { IChargable } from "./paymentMethod/interface/IChargable";

export class ScheduledPayment {
  constructor(
    public id: number,
    public paymentId: number,
    public amount: number,
    public method: IChargable,
    public dueDate: Date,
    public paid: boolean = false
  ) {}

  // 2回目以降の支払い予定を生成する
  static createScheduledPyaemnts(
    totalAmount: number,
    splitCount: number,
    method: IChargable,
    purchasedAt: Date
  ): ScheduledPayment[] {
    const result: ScheduledPayment[] = [];
    const amountPerPayment = ScheduledPayment.splitAmount(
      totalAmount,
      splitCount
    );

    for (let i = 1; i < splitCount; i++) {
      const dueDate = new Date(purchasedAt);
      dueDate.setMonth(purchasedAt.getMonth() + i);
      const newPayment = new ScheduledPayment(
        i,
        method.paymentId,
        amountPerPayment,
        method,
        dueDate
      );
      result.push(newPayment);
    }
    return result;
  }

  static splitAmount(amount: number, splitCount: number): number {
    return amount / splitCount;
  }
}
