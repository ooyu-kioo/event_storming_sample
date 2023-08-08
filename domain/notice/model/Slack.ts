import { ISlack } from "../interface/entity/ISlack";
import { INotificate } from "../interface/strategy/INotificate";

export class Slack implements ISlack, INotificate {
  id: number;
  isNotify: boolean;
  token: string;

  constructor(id: number, isNotify: boolean, token: string) {
    this.id = id;
    this.isNotify = isNotify;
    this.token = token;
  }

  notify(): void {}
  toggleNotification(): void {}
}
