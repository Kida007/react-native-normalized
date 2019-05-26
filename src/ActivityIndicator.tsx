import React, { forwardRef } from "react";
import {
  ActivityIndicatorProps,
  ActivityIndicator as NativeActivityIndicator
} from "react-native";

const NormalizedActivityIndicator = forwardRef(
  (props: ActivityIndicatorProps, ref: React.Ref<any>) => {
    return (
      <NativeActivityIndicator
        {...(ref ? { ref } : {})}
        color="#999999"
        {...props}
      />
    );
  }
);

export default NormalizedActivityIndicator;
