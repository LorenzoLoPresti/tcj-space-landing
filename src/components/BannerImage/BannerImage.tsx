import classNames from "classnames";
import { FC } from "react";

type BannerImageProps = {
  src: string;
  isImageLeft?: boolean;
};

const BannerImage: FC<BannerImageProps> = ({
  src,
  isImageLeft = false,
}: BannerImageProps) => {
  const containerClassNames = classNames({
    "sm:order-2": !isImageLeft,
  });

  return (
    <div className={containerClassNames}>
      <img
        data-aos="zoom-in"
        src={src}
        alt=""
        className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
      />
    </div>
  );
};

export default BannerImage;
