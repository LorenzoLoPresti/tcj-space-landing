import { FC, PropsWithChildren } from "react";
import Text, { TextTags } from "../Text/Text";

type TextBlockProps = PropsWithChildren<{
  headingsAs?: TextTags;
  headingStyledAs?: TextTags;
  headingText: string;
  isHeadingBold?: boolean;
  subAs?: TextTags;
  subStyledAs?: TextTags;
  label?: string;
}>;

const TextBlock: FC<TextBlockProps> = ({
  headingsAs,
  headingStyledAs = headingsAs,
  headingText,
  isHeadingBold = false,
  subAs = "p",
  subStyledAs = subAs,
  label = "",
  children,
}) => {
  return (
    <>
      {!!label && (
        <Text data-aos="fade-up" className="uppercase text-sky-800">
          {label}
        </Text>
      )}
      <Text
        data-aos="fade-up"
        as={headingsAs}
        styledAs={headingStyledAs}
        isBold={isHeadingBold}
      >
        {headingText}
      </Text>
      <Text
        data-aos="fade-up"
        data-aos-delay="300"
        as={subAs}
        styledAs={subStyledAs}
      >
        {children}
      </Text>
    </>
  );
};

export default TextBlock;
