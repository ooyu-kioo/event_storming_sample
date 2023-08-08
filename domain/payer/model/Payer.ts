import { IPaymentMethod } from "../interface/strategy/IPaymentMethod";
import { IAutoPayment } from "../interface/entity/IAutoPayment";
import { IPayer } from "../interface/entity/IPayer";
import { User } from "../../user/model/User";
import { IPaymentRequest } from "../interface/entity/IPaymentRequest";
import { IRegisteredContractor } from "../interface/entity/IRegisteredContractor";

export class Payer extends User implements IPayer {
  id: number;
  contractors: IRegisteredContractor[];
  autoPayment: IAutoPayment | null;
  paymentMethods: IPaymentMethod[];
  unpaidPaymentRequests: IPaymentRequest[];

  constructor(
    id: number,
    name: string,
    autoPayment: IAutoPayment | null,
    paymentMethods: IPaymentMethod[],
    unpaidPaymentRequests: IPaymentRequest[]
  ) {
    super(id, name);
    this.autoPayment = autoPayment;
    this.paymentMethods = paymentMethods;
    this.unpaidPaymentRequests = unpaidPaymentRequests;
  }

  chargePaymentRequest(paymentRequestId: number): boolean {
    // unpaidPaymentRequestsから一致するidに対して決済を行う
    // InstantPayment実行

    // ContractRequest: 決済されたらpaidをtrueにする
    // PaymentAttempt: 決済時に生成する
    return true;
  }

  isAutoPayment(): boolean {
    return this.autoPayment !== null;
  }
}
