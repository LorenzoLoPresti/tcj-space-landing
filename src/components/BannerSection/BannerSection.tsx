import { FC } from "react";
import Banner from "../Banner/Banner";
import TextBlock from "../TextBlock/TextBlock";
import Button from "../Button.tsx/Button";

import satelliteImg from "../../assets/satelite1.jpg";
import satelliteImg2 from "../../assets/satelite2.jpg";
import classNames from "classnames";
const sectionClassNames: string = classNames({
  relative: true,
  "z-50": true,
  "pb-12": true,
  "space-y-20": true,
  "text-white": true,
  "bg-black": true,
});

const BannerSection: FC = () => {
  return (
    <section className={sectionClassNames}>
      <Banner src={satelliteImg} isImageLeft>
        <TextBlock label="Our Mission" headingsAs="h1" headingText="Rapidscat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia
          iure, quibusdam dolor voluptatum eius distinctio. Expedita dicta
          excepturi totam odio quod in vitae, eligendi ipsam necessitatibus,
          doloremque minima quidem?
        </TextBlock>
        <Button data-aos="fade-up" data-aos-delay="500">
          Learn More
        </Button>
      </Banner>
      <Banner src={satelliteImg2}>
        <TextBlock label="Our Mission" headingsAs="h1" headingText="Rapidscat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia
          iure, quibusdam dolor voluptatum eius distinctio. Expedita dicta
          excepturi totam odio quod in vitae, eligendi ipsam necessitatibus,
          doloremque minima quidem?
        </TextBlock>
        <Button data-aos="fade-up" data-aos-delay="500">
          Learn More
        </Button>
      </Banner>
    </section>
  );
};

export default BannerSection;
