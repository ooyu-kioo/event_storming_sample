export interface INotificate {
  isNotify: boolean;

  notify(): void;
  toggleNotification(): void;
}
