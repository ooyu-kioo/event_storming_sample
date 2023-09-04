import { IChargable } from "./interface/IChargable";
import { CardTransaction } from "./CardTransaction";
import { SquareChargeRequest } from "../../api/request/SquareChargeRequest";
import { SquareApi } from "../../api/SquareAPI";

export interface CardParams {
  token: string;
  paymentId: number;
  transactions: CardTransaction[] | null;
}

export class Card implements IChargable {
  token: string;
  paymentId: number;
  transactions: CardTransaction[] | null;

  constructor(
    token: string,
    paymentId: number,
    transactions: CardTransaction[] | null = null
  ) {
    this.token = token;
    this.paymentId = paymentId;
    this.transactions = transactions;
  }

  charge(amount: number): boolean {
    const request = new SquareChargeRequest(
      this.token,
      this.latestOrderId(),
      amount
    );
    const api = new SquareApi();

    return api.charge(request);
  }

  private latestOrderId(): string | null {
    if (!this.transactions) {
      return null;
    }

    const latestTransaction = [...this.transactions].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    )[0];

    return latestTransaction.orderId;
  }
}
