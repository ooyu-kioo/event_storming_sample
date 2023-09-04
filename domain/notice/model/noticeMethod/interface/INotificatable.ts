export interface INotificatable {
  isNotify: boolean;

  notify(): void;
  toggleNotification(): void;
}
