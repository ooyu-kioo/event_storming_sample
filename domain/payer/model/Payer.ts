import { RegisteredContractor } from "./RegisteredContractor";

export class Payer {
  constructor(public id: number, public contractors: RegisteredContractor) {}

  registContractor(contractorId: number): void {
    this.contractors.add(contractorId);
  }
  removeContractor(contractorId: number): void {
    this.contractors.remove(contractorId);
  }
}
