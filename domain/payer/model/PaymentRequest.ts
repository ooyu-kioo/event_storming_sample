import { IPaymentRequest } from "../interface/entity/IPaymentRequest";

export class PaymentRequest implements IPaymentRequest {
  id: number;
  contractRequestId: number;
  price: number;
  paid: boolean;

  constructor(
    id: number,
    contractRequestId: number,
    price: number,
    paid: boolean
  ) {
    this.id = id;
    this.contractRequestId = contractRequestId;
    this.price = price;
    this.paid = paid;
  }
}
