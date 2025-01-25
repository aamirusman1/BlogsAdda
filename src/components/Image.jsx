import React from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt}
        width={w}
        height={h}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
      />
    </>
  );
};

export default Image;

//Note:
//lqip: Low-Quality Image Placeholder
//provides a small, low-quality version of the image while the full-resolution version is loading.
//quality: 20: Sets the quality of the placeholder image to 20%
