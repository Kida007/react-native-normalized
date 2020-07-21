import React, { forwardRef } from "react";
import {
  ActivityIndicatorProps,
  ActivityIndicator as NativeActivityIndicator,
} from "react-native";

export type ActivityIndicator = NativeActivityIndicator;

export const ActivityIndicator = forwardRef(
  (props: ActivityIndicatorProps, ref: React.Ref<NativeActivityIndicator>) => {
    return (
      <NativeActivityIndicator
        {...(ref ? { ref } : {})}
        color="#999999"
        {...props}
      />
    );
  }
);
