import { ComponentProps, FC, PropsWithChildren } from "react";

export type TextTags = "h1" | "h4" | "h5" | "p";

type TextProps = PropsWithChildren<{
  as?: TextTags;
  styledAs?: TextTags;
  isBold?: boolean;
}> &
  ComponentProps<TextTags>;

const Text: FC<TextProps> = ({
  as = "p",
  styledAs = as,
  isBold = false,
  children,
  ...attr
}: TextProps) => {
  const El = as;

  const styles: Record<TextTags, string> = {
    h1: "text-5xl uppercase",
    h4: "mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left",
    h5: "mb-3 text-xl font-bold",
    p: "",
  };

  const { className: customClassNames } = { ...attr };

  const classNames = `${isBold ? "font-bold" : ""} ${styles[styledAs]} ${
    customClassNames ? customClassNames : ""
  }`;

  return (
    <El {...attr} className={classNames}>
      {children}
    </El>
  );
};

export default Text;
