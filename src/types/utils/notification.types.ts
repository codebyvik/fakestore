export interface notificationStateType {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}
