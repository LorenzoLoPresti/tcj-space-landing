import { FC } from "react";
import AppLayout from "./components/Layout/AppLayout";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
  easing: "ease-in-out",
  once: true,
});

const App: FC = () => {
  return <AppLayout />;
};
export default App;
