import { FC, PropsWithChildren } from "react";
import Container from "../Container/Container";
import BannerImage from "../BannerImage/BannerImage";

type BannerProps = PropsWithChildren<{
  src: string;
  isImageLeft?: boolean;
}>;

type BannerCompoundProps = {
  Body: React.FC<BannerProps>;
};

const Banner: FC<BannerProps> & BannerCompoundProps = ({
  src,
  isImageLeft,
  children,
}: BannerProps) => {
  return (
    <Banner.Body src={src} isImageLeft={isImageLeft}>
      {children}
    </Banner.Body>
  );
};

const Body: FC<BannerProps> = ({
  src,
  isImageLeft = false,
  children,
}: BannerProps) => {
  const classNames = `p-4 space-y-3 border-b-2 xl:pr-36  border-b-sky-800 ${
    isImageLeft ? "border-r-2 border-r-sky-800" : "border-l-2 border-l-sky-800"
  }`;

  return (
    <Container>
      <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
        <BannerImage src={src} isImageLeft={isImageLeft} />
        <div className={classNames}>{children}</div>
      </div>
    </Container>
  );
};

Banner.Body = Body;

export default Banner;
