import { INotificate } from "../interface/INotificate";

export class Mail implements INotificate {
  constructor(
    public id: number,
    public isNotify: boolean,
    public address: string
  ) {}

  notify(): void {}
  toggleNotification(): void {}
}
