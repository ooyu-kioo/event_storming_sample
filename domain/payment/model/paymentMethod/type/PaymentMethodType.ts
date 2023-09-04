import { CardParams } from "../Card";
import { PaypalParams } from "../Paypal";

export type PaymentMethodType = "card" | "paypal";
export type PaymentMethodArgs = CardParams | PaypalParams;
