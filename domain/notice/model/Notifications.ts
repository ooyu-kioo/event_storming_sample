import { INotificate } from "../interface/strategy/INotificate";

export class Notifications {
  nofifyMethods: INotificate[];
  activeNotifyMethods: INotificate[];

  constructor(notifyMethods: INotificate[]) {
    this.nofifyMethods = notifyMethods;
    this.activeNotifyMethods = this.nofifyMethods.filter(
      (method) => method.isNotify == true
    );
  }

  notify(): void {
    // activeNotifyMethods.forEach((method) => method.notify());
  }
  toggleNotification(notifyMethod: INotificate): boolean {
    // notifyMethod.toggleNotification();
    return true;
  }
}
