export interface IScheduledPayment {
  id: number;
  payerId: number;
  amount: number;
  dueDate: Date;
  paid: boolean;
}
