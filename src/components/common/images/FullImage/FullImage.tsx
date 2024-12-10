"use client";

//base
import { FC } from "react";

//assets
import defaultImage from "assets/image/general/defaultImage.png";

interface IPropType {
  src: string | null;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  objectFit?: "contain" | "cover" | "fill";
}

const FullImage: FC<IPropType> = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  objectFit,
}) => {
  return (
    <section
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
        ...(style ? style : {}),
      }}
    >
      <img
        src={src ? src : defaultImage.src}
        alt={alt}
        className={`w-full h-full object-cover  ${className}`}
        style={{
          objectFit: objectFit ? objectFit : "cover",
          ...(style ? style : {}),
        }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = defaultImage.src;
          currentTarget.style.objectFit = "contain";
        }}
      />
    </section>
  );
};

export { FullImage };
