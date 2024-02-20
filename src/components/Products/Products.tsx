import { FC } from "react";
import Container from "../Container/Container";
import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave Gif.gif";
import ProductCard from "../ProductCard/ProductCard";

interface Product {
  title: string;
  content: string;
  description: string;
  icon: React.ReactElement<IconType>;
  aosDelay: string;
}

const products: Product[] = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting Earth and serves as a space envirnoment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of a the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];

const Products: FC = () => {
  return (
    <section className="relative z-50 text-white bg-black">
      <Container>
        <div className="min-h-[400px]">
          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {products.map(
              ({ title, content, description, icon, aosDelay }, index) => (
                <ProductCard
                  key={title + index}
                  aosDelay={aosDelay}
                  title={title}
                  content={content}
                  icon={icon}
                  description={description}
                />
              )
            )}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </Container>
    </section>
  );
};

export default Products;
