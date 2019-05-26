import React, { forwardRef } from "react";
import { Image as NativeImage, ImageProps } from "react-native";

const Image = forwardRef((props: ImageProps, ref: React.Ref<any>) => {
  return <NativeImage {...(ref ? { ref } : {})} fadeDuration={0} {...props} />;
});

export default Image;
