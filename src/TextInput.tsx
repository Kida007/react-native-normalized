import React, { forwardRef } from "react";
import { TextInput as NativeTextInput, TextInputProps } from "react-native";

const TextInput = forwardRef((props: TextInputProps, ref: React.Ref<any>) => {
  const newProps = props.multiline ? { textAlignVertical: "top" as "top" } : {};
  return (
    <NativeTextInput
      {...(ref ? { ref } : {})}
      underlineColorAndroid="transparent"
      placeholderTextColor="#C7C7CD"
      {...newProps}
      {...props}
    />
  );
});

export default TextInput;
