import React from "react";
import { ActivityIndicator } from "react-native";

class NormalizedActivityIndicator extends React.Component {
  render() {
    return <ActivityIndicator {...this.props} />;
  }
}

export default NormalizedActivityIndicator;
