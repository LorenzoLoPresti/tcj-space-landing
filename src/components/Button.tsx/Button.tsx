import { ComponentProps, FC, PropsWithChildren } from "react";

type ButtonsProps = PropsWithChildren<{
  variant?: "primary" | "navbar";
}> &
  ComponentProps<"button">;

const Button: FC<ButtonsProps> = ({
  variant = "primary",
  children,
  ...attr
}: ButtonsProps) => {
  const styles: Record<"primary" | "navbar", string> = {
    primary: "bg-blue-400 hover:bg-blue-500 px-4 py-2 duration-200",
    navbar: "border-2 border-white",
  };

  const { className: customClassNames } = { ...attr };

  const classNames = `text-white  px-3 py-1 rounded-md ${styles[variant]} ${
    customClassNames ? customClassNames : ""
  }`;

  return (
    <button {...attr} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
