//base
import { FC } from "react";

//lib
import { Image } from "antd";

//assets
import defaultImage from "assets/image/general/defaultImage.png";

interface IPropType {
  src: string;
  previewSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  objectFit?: "contain" | "cover" | "fill";
}

const AntImage: FC<IPropType> = ({
  src,
  previewSrc,
  alt,
  className,
  style,
  width,
  height,
  objectFit,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ? width : "100%"}
      height={height ? height : "100%"}
      className={`w-full h-full object-cover  ${className}`}
      style={{
        objectFit: objectFit ? objectFit : "cover",
        ...(style ? style : {}),
      }}
      fallback={defaultImage.src}
      preview={{
        src: previewSrc ? previewSrc : src,
      }}
    />
  );
};

export { AntImage };
