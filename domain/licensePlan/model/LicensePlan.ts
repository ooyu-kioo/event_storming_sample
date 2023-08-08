import { ILicensePlan } from "../interface/entity/ILicensePlan";

export class LicensePlan implements ILicensePlan {
  id: number;
  price: number;
  contractDuration: number;
}
