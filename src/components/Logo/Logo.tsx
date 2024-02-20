import { FC } from "react";

type LogoProps = { logo: string };

const Logo: FC<LogoProps> = ({ logo }: LogoProps) => {
  return (
    <div className="flex text-white items-center gap-4 font-bold text-2xl">
      <img src={logo} alt="" className="w-10" />
      <span>TCJ-SPACE</span>
    </div>
  );
};
export default Logo;
