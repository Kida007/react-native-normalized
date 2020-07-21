import React, { forwardRef } from "react";
import { Image as NativeImage, ImageProps } from "react-native";

export type Image = NativeImage;

export const Image: React.ForwardRefExoticComponent<
  ImageProps & React.RefAttributes<NativeImage>
> & {
  prefetch?: ReturnType<typeof NativeImage.prefetch>;
  abortPrefetch?: typeof NativeImage.abortPrefetch;
  getSize?: typeof NativeImage.getSize;
  queryCache?: typeof NativeImage.queryCache;
  resolveAssetSource?: typeof NativeImage.resolveAssetSource;
} = forwardRef((props: ImageProps, ref: React.Ref<NativeImage>) => {
  return <NativeImage {...(ref ? { ref } : {})} fadeDuration={0} {...props} />;
});

Image.prefetch = NativeImage.prefetch;
Image.abortPrefetch = NativeImage.abortPrefetch;
Image.getSize = NativeImage.getSize;
Image.queryCache = NativeImage.queryCache;
Image.resolveAssetSource = NativeImage.resolveAssetSource;
