export class CardTransaction {
  constructor(
    public paymentId: number,
    public orderId: string,
    public cardNumber: string,
    public success: boolean,
    public errMessage: string | null = null,
    public createdAt: Date
  ) {}
}
