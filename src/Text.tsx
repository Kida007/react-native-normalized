import React, { forwardRef } from "react";
import {
  Text as NativeText,
  StyleSheet,
  TextProps,
  Platform
} from "react-native";

const Text = forwardRef(
  (props: TextProps & { children: any }, ref: React.Ref<any>) => {
    const { style, ...restProps } = props;
    return (
      <NativeText
        {...(ref ? { ref } : {})}
        style={[styles.textStyles, style]}
        {...restProps}
      >
        {props.children}
      </NativeText>
    );
  }
);

const styles = StyleSheet.create({
  textStyles: {
    ...Platform.select({
      android: { fontFamily: "Roboto" }
    }),
    color: "black"
  }
});

export default Text;
