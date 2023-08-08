import { User } from "../../user/model/User";
import { IContractor } from "../interface/entity/Contractor";

export class Contractor extends User implements IContractor {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    super(id, name);
  }
}
