export class ContractRequest {
  id: number;
  contractorId: number;
  licensePlanId: number;
  paid: boolean;
  price: number;
  contract_duration: number;

  constructor(
    contractorId: number,
    licensePlanId: number,
    paid: boolean,
    price: number,
    contract_duration: number
  ) {
    this.contractorId = contractorId;
    this.licensePlanId = licensePlanId;
    this.paid = paid;
    this.price = price;
    this.contract_duration = contract_duration;
  }

  approve(): boolean {
    this.paid = true;
    return true;
  }
}
