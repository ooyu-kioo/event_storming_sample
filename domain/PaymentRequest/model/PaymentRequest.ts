export class PaymentRequest {
  constructor(
    public id: number,
    public contractRequestId: number,
    public amount: number,
    public paid: boolean
  ) {}

  togglePaid(): boolean {
    this.paid = !this.paid;
    return true;
  }
}
