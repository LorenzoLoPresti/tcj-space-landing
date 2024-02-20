import { FC, PropsWithChildren } from "react";
import Button from "../Button.tsx/Button";
import TextBlock from "../TextBlock/TextBlock";
import Footer from "./Footer";
import Text from "../Text/Text";
import List from "../List/List";
import Link from "../Link/Link";

import { HiLocationMarker } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { ContactProps, FooterSectionProps } from "./FooterTypes";

// Footer's body
export const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <footer className="relative z-50 px-5 text-white bg-gray-800">
      <div data-aos="fade-up" className="max-w-[1200px] mx-auto text-white">
        {children}
      </div>
    </footer>
  );
};

// Column inside footer
export const Col: FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-4 py-8">{children}</div>;
};

// Footer's section
export const Section: FC<FooterSectionProps> = ({
  isUpper = false,
  children,
}: FooterSectionProps) => {
  const classNames = `${
    isUpper ? "grid py-5 md:grid-cols-3" : "hidden sm:block"
  }`;

  return (
    <section className={classNames}>
      {isUpper ? (
        <>{children}</>
      ) : (
        <div className="flex items-center justify-between py-6 border-t-2 border-gray-400">
          {children}
        </div>
      )}
    </section>
  );
};

// Footer's newsletter
export const NewsLetter: FC<PropsWithChildren> = () => {
  return (
    <Footer.Col>
      <TextBlock headingText="Be Ready To Grow" headingsAs="h4">
        Get Exclusive <span className="font-bold">Update</span> straight to your
        inbox
      </TextBlock>
      <br />
      <Footer.FooterInput />
    </Footer.Col>
  );
};

// Footer's input
export const FooterInput: FC = () => {
  return (
    <div className="flex items-center h-10">
      <input
        type="text"
        className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-transparent border-gray-200 border-2"
        placeholder="Email"
      />
      <Button>Ok</Button>
    </div>
  );
};

// Footer's links
export const FooterLinks: FC = () => {
  return (
    <div>
      <Footer.Col>
        <Text as="h5">Quick Links</Text>
        <List isFlexCol>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Service</Link>
          <Link href="#">Login</Link>
        </List>
      </Footer.Col>
    </div>
  );
};

// footer's contacts
export const Contacts: FC = () => {
  return (
    <ul className="space-y-3">
      <Contact gap="gap-2" icon={<HiLocationMarker />}>
        Noida, Uttar Pradesh
      </Contact>
      <Contact icon={<MdMessage />}>abc@gmail.com</Contact>
      <Contact icon={<HiLocationMarker />}>+91 123456789</Contact>
    </ul>
  );
};

// single contact
export const Contact: FC<ContactProps> = ({
  icon,
  gap = "gap-3",
  children,
}: ContactProps) => {
  const classNames = `flex items-center ${gap}`;
  return (
    <li className={classNames}>
      {icon}
      <Text>{children}</Text>
    </li>
  );
};

// Footer's privacy
export const Privacy: FC = () => {
  return (
    <span className="text-sm text-gray-400">copyright &copy; 2024 by TCJ</span>
  );
};

// Footer's socialList
export const SocialList: FC = () => {
  return (
    <List isFlexCol className="flex items-center justify-center gap-4 pb-4">
      <Link href="#">
        <FaInstagram className="text-4xl" />
      </Link>

      <Link href="#">
        <FaFacebook className="text-4xl" />
      </Link>
      <Link href="#">
        <FaLinkedin className="text-4xl" />
      </Link>
    </List>
  );
};
