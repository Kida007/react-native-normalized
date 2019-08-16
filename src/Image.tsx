import React, { forwardRef } from "react";
import { Image as NativeImage, ImageProps } from "react-native";

const Image: any = forwardRef((props: ImageProps, ref: React.Ref<any>) => {
  return <NativeImage {...(ref ? { ref } : {})} fadeDuration={0} {...props} />;
});

Image.prefetch = NativeImage.prefetch;
Image.abortPrefetch = NativeImage.abortPrefetch;
Image.getSize = NativeImage.getSize;
Image.queryCache = NativeImage.queryCache;
Image.resolveAssetSource = NativeImage.resolveAssetSource;

export default Image;
