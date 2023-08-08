import { IPaymentMethod } from "../strategy/IPaymentMethod";
import { IAutoPayment } from "./IAutoPayment";
import { IPaymentRequest } from "./IPaymentRequest";
import { IRegisteredContractor } from "./IRegisteredContractor";

export interface IPayer {
  id: number;
  contractors: IRegisteredContractor[];
  autoPayment: IAutoPayment | null;
  paymentMethods: IPaymentMethod[];
  unpaidPaymentRequests: IPaymentRequest[];

  chargePaymentRequest(paymentRequestId: number): boolean;
  isAutoPayment(): boolean;
}
