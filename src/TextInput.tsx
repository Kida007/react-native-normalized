import React from "react";
import { TextInput, TextInputProps } from "react-native";

class NormalizedTextInput extends React.Component<TextInputProps> {
  render() {
    const newProps = this.props.multiline
      ? { textAlignVertical: "top" as "top" }
      : {};
    return (
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#C7C7CD"
        {...newProps}
        {...this.props}
      />
    );
  }
}

export default NormalizedTextInput;
