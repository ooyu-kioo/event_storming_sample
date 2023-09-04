import { IChargable } from "./interface/IChargable";
import { PaypalTransaction } from "./PaypalTransaction";
import { PaypalChargeRequest } from "../../api/request/PaypalChargeRequest";
import { PaypalApi } from "../../api/PaypalAPI";

export interface PaypalParams {
  token: string;
  paymentId: number;
  transactions: PaypalTransaction[] | null;
}

export class Paypal implements IChargable {
  token: string;
  paymentId: number;
  transactions: PaypalTransaction[] | null;

  constructor(
    token: string,
    paymentId: number,
    transactions: PaypalTransaction[] | null = null
  ) {
    this.token = token;
    this.paymentId = paymentId;
    this.transactions = transactions;
  }

  charge(amount: number): boolean {
    const request = new PaypalChargeRequest(
      this.token,
      this.latestOrderId(),
      amount
    );
    const api = new PaypalApi();

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
