export class SquareChargeRequest {
  constructor(
    public token: string,
    public orderId: string | null,
    public amount: number
  ) {}
}
