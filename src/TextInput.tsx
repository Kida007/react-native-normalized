import React, { forwardRef } from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  black: {
    color: "black"
  }
});

const TextInput = forwardRef((props: TextInputProps, ref: React.Ref<any>) => {
  const newProps = props.multiline ? { textAlignVertical: "top" as "top" } : {};
  const { style, ...otherProps } = props;
  return (
    <NativeTextInput
      {...(ref ? { ref } : {})}
      underlineColorAndroid="transparent"
      placeholderTextColor="#C7C7CD"
      style={[styles.black, style].filter(Boolean)}
      {...newProps}
      {...otherProps}
    />
  );
});

export default TextInput;
