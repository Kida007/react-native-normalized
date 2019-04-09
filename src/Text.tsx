import React from "react";
import {
  Text,
  StyleSheet,
  TextProps,
  Constructor,
  NativeMethodsMixin
} from "react-native";

declare class TextComponent extends React.Component<TextProps> {}

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
