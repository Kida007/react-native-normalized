import React from "react";
import { ActivityIndicatorProps, ActivityIndicator } from "react-native";

class NormalizedActivityIndicator extends React.Component<
  ActivityIndicatorProps
> {
  render() {
    return <ActivityIndicator color="#999999" {...this.props} />;
  }
}

export default NormalizedActivityIndicator;
