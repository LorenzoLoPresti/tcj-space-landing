import { ComponentProps, FC, PropsWithChildren } from "react";
type LinkProps = PropsWithChildren & ComponentProps<"a">;

const Link: FC<LinkProps> = ({ children, ...attr }: LinkProps) => {
  return (
    <li>
      <a {...attr}>{children}</a>
    </li>
  );
};
export default Link;
