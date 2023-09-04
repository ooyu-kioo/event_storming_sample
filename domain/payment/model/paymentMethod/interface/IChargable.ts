export interface IChargable {
  token: string;
  paymentId: number;

  charge(amount: number): boolean;
}
