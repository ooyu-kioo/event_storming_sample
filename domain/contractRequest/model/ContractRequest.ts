export class ContractRequest {
  constructor(
    public contractorId: number,
    public licensePlanId: number,
    public paid: boolean,
    public price: number,
    public contract_duration: number
  ) {}

  approve(): boolean {
    this.paid = true;
    return true;
  }
}
