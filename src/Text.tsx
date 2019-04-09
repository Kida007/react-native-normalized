import React from "react";
import {
  Text,
  StyleSheet,
  TextProps,
  Constructor,
  NativeMethodsMixin
} from "react-native";

export class TextComponent extends React.Component<TextProps> {}
export declare type TextBase = Constructor<NativeMethodsMixin> &
  typeof TextComponent;

class NormalizedText extends TextComponent {
  render() {
    const { style, ...restProps } = this.props;

    return (
      <Text style={[styles.textStyles, style]} {...restProps}>
        {this.props.children}
      </Text>
    );
  }
}

export default NormalizedText;

const styles = StyleSheet.create({
  textStyles: {
    color: "black"
  }
});
