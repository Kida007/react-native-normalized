import { Alert, AlertButton, AlertOptions } from "react-native";

export default class NormalizedAlert {
  static alert(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions
  ) {
    Alert.alert(title, message, buttons, { ...options, cancelable: false });
  }
  // @ts-ignore
  static prompt = Alert.prompt;
}
