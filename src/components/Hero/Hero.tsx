import Container from "../Container/Container";
import Button from "../Button.tsx/Button";
import TextBlock from "../TextBlock/TextBlock";
import mountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="relative z-20 h-full text-white bg-black/20 hero">
      <div className="flex items-center justify-center h-full p-4">
        <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 lg:pr-36">
            <TextBlock
              headingsAs="h1"
              isHeadingBold
              headingText="Orbit The Earth"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              quisquam at magnam hic. Corrupti dignissimos reprehenderit, atque
              eos illo minus assumenda aut quam eum repellat fugiat? Natus nisi
              repellendus quasi!
            </TextBlock>

            <Button data-aos="fade-up" data-aos-delay="500" className="z-10">
              Learn More
            </Button>
          </div>
        </Container>
      </div>
      <img
        src={mountainPng}
        alt=""
        className="absolute bottom-0 right-0 hidden w-full tall:block brightness-50"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};
export default Hero;
