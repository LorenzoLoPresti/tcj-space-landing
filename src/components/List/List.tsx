import { ComponentProps, FC, PropsWithChildren } from "react";

type ListProps = PropsWithChildren<{
  isInNavbar?: boolean;
  isFlexCol?: boolean;
}> &
  ComponentProps<"ul">;

const List: FC<ListProps> = ({
  isInNavbar = false,
  isFlexCol = false,
  children,
  ...attributes
}) => {
  const { className } = attributes;

  const classNames = `${
    isInNavbar
      ? "hidden md:flex items-center gap-6 py-4 text-xl text-white sm:py-0  "
      : "flex gap-3"
  } ${isFlexCol ? "flex-col" : ""}`;

  return <ul className={className || classNames}>{children}</ul>;
};
export default List;
