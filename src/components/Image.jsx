import React from "react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        className={className}
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
