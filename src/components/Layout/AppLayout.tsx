import BannerSection from "../BannerSection/BannerSection";
import BgVideo from "../BgVideo/BgVideo";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const AppLayout = () => {
  return (
    <>
      <BgVideo>
        <Navbar />
        <Hero />
      </BgVideo>
      <Main>
        <Products />
        <BannerSection />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
