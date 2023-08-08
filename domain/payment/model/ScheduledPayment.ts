import { IScheduledPayment } from "../interface/entity/IScheduledPayment";
import { IPayment } from "../interface/strategy/IPayment";
import { IPaymentMethod } from "../interface/strategy/IPaymentMethod";

export class ScheduledPayment implements IPayment, IScheduledPayment {
  id: number;
  payerId: number;
  amount: number;
  paymentMethod: IPaymentMethod;
  dueDate: Date;
  paid: boolean;

  constructor(
    id: number,
    payerId: number,
    amount: number,
    payment: IPaymentMethod,
    dueDate: Date,
    paid: boolean
  ) {
    this.id = id;
    this.payerId = payerId;
    this.amount = amount;
    this.paymentMethod = payment;
    this.amount = amount;
    this.dueDate = dueDate;
    this.paid = paid;
  }

  makePayment(): void {
    this.paymentMethod.execute(this.amount);
  }
}
