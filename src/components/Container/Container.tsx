import { ComponentProps, FC, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & ComponentProps<"div">;

const Container: FC<ContainerProps> = ({ children, ...attr }) => {
  const { className: customClassNames } = { ...attr };
  const classNames = ` container ${customClassNames ? customClassNames : ""}`;
  return (
    <div {...attr} className={classNames}>
      {children}
    </div>
  );
};
export default Container;
