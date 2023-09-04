import { INotificate } from "../interface/INotificate";

export class Slack implements INotificate {
  constructor(
    public id: number,
    public isNotify: boolean,
    public token: string
  ) {}

  notify(): void {}
  toggleNotification(): void {}
}
