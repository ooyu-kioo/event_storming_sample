import { INotificate } from "../interface/strategy/INotificate";
import { IMail } from "../interface/entity/IMail";

export class Mail implements IMail, INotificate {
  id: number;
  isNotify: boolean;
  address: string;

  constructor(id: number, isNotify: boolean, address: string) {
    this.id = id;
    this.isNotify = isNotify;
    this.address = address;
  }

  notify(): void {}
  toggleNotification(): void {}
}
