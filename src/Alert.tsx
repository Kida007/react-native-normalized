import { Alert as NativeAlert, AlertButton, AlertOptions } from "react-native";

export class Alert {
  static alert(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions
  ) {
    NativeAlert.alert(title, message, buttons, {
      ...options,
      cancelable: false,
    });
  }
  // @ts-ignore
  static prompt = NativeAlert.prompt;
}
