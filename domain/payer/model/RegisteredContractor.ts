import { IRegisteredContractor } from "../interface/entity/IRegisteredContractor";

export class RegisteredContractor implements IRegisteredContractor {
  contractorId: number;

  constructor(contractorId: number) {
    this.contractorId = contractorId;
  }
}
