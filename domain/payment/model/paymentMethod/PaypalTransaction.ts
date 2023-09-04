export class PaypalTransaction {
  constructor(
    public paymentId: number,
    public orderId: string,
    public token: string,
    public success: boolean,
    public errMessage: string | null = null,
    public createdAt: Date
  ) {}
}
