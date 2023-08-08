import { ILicense } from "../interface/entity/ILicense";

export class License implements ILicense {
  id: number;
  contractRequestId: number;
  started_at: Date;
  expired_at: Date;

  constructor(id, contractRequestId, started_at, expired_at) {
    this.id = id;
    this.contractRequestId = contractRequestId;
    this.started_at = started_at;
    this.expired_at = expired_at;
  }
}
