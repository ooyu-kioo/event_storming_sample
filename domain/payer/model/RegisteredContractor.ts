export class RegisteredContractor {
  constructor(public contractorIds: number[]) {}

  add(id: number): void {
    this.contractorIds.push(id);
  }

  remove(id: number): void {
    this.contractorIds = this.contractorIds.filter(
      (contractorId) => contractorId !== id
    );
  }
}
