import React, { forwardRef, useMemo } from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  black: {
    color: "black",
  },
});

const TextInput: React.RefForwardingComponent<
  NativeTextInput,
  TextInputProps
> = forwardRef((props: TextInputProps, ref: React.Ref<NativeTextInput>) => {
  const newProps = props.multiline ? { textAlignVertical: "top" as "top" } : {};
  const { style, ...otherProps } = props;
  const styleProp = useMemo(() => [styles.black, style].filter(Boolean), []);
  return (
    <NativeTextInput
      {...(ref ? { ref } : {})}
      underlineColorAndroid="transparent"
      placeholderTextColor="#C7C7CD"
      style={styleProp}
      {...newProps}
      {...otherProps}
    />
  );
});

export default TextInput;
