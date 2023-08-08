export interface IContractRequest {
  id: number;
  contractorId: number;
  licensePlanId: number;
  paid: boolean;
  price: number;
  contract_duration: number;
}
