import { FC, PropsWithChildren } from "react";
import bgVideo from "../../assets/earth-bg.mp4";

const BgVideo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-[140vh] tall:h-[100vh] relative">
      <video
        autoPlay
        loop
        muted
        className="fixed right-0 top-0 h-[100vh] w-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {children}
    </div>
  );
};

export default BgVideo;
