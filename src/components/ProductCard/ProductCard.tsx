import { FC, ReactNode } from "react";
import TextBlock from "../TextBlock/TextBlock";
import Text from "../Text/Text";

type ProductCardProps = {
  aosDelay: string;
  icon: ReactNode;
  title: string;
  content: string;
  description: string;
};

const ProductCard: FC<ProductCardProps> = ({
  aosDelay,
  icon,
  title,
  content,
  description,
}: ProductCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto gap-2"
    >
      {icon}
      <TextBlock headingsAs="h1" headingText={title}>
        {content}
      </TextBlock>
      <Text className="text-sm">{description}</Text>
    </div>
  );
};

export default ProductCard;
