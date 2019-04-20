import { Alert, AlertButton, AlertOptions } from "react-native";

export default class NormalizedAlert {
  static alert(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
    type?: string
  ) {
    Alert.alert(
      title,
      message,
      buttons,
      { ...options, cancelable: false },
      type
    );
  }
  // @ts-ignore
  static prompt = Alert.prompt;
}
