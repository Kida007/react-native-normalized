import React, { forwardRef, useMemo } from "react";
import {
  Text as NativeText,
  StyleSheet,
  TextProps,
  Platform,
} from "react-native";

export type Text = NativeText;

export const Text = forwardRef(
  (
    props: TextProps & { children: React.ReactNode },
    ref: React.Ref<NativeText>
  ) => {
    const { style, ...restProps } = props;
    const styleProp = useMemo(() => [styles.textStyles, style], [style]);
    return (
      <NativeText {...(ref ? { ref } : {})} style={styleProp} {...restProps}>
        {props.children}
      </NativeText>
    );
  }
);

const styles = StyleSheet.create({
  textStyles: {
    ...Platform.select({
      android: { fontFamily: "Roboto" },
    }),
    color: "black",
  },
});
