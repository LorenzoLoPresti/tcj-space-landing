import { FC } from "react";
import {
  Body,
  Section,
  Col,
  FooterInput,
  NewsLetter,
  FooterLinks,
  Contacts,
  Privacy,
  SocialList,
} from "./FooterCompound";
import Text from "../Text/Text";
import List from "../List/List";
import { FooterProps } from "./FooterTypes";

const Footer: FC & FooterProps = () => {
  return (
    <Footer.Body>
      <Footer.Section isUpper>
        {/* left side */}
        <Footer.NewsLetter />

        {/* Right side */}
        <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
          <Footer.FooterLinks />
          <Footer.FooterLinks />
          <div>
            <Footer.Col>
              <Text as="h5" className="mb-2 text-xl font-bold">
                Contact Us
              </Text>

              <Footer.Contacts />
            </Footer.Col>
          </div>
        </div>
      </Footer.Section>
      {/* End of right side */}

      {/* bottom section */}
      <Footer.Section>
        <Footer.Privacy />
        <Footer.SocialList />
        <div className="text-sm text-gray-400">
          <List>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </List>
        </div>
      </Footer.Section>
    </Footer.Body>
  );
};

Footer.Body = Body;
Footer.Section = Section;
Footer.Col = Col;
Footer.FooterInput = FooterInput;
Footer.NewsLetter = NewsLetter;
Footer.FooterLinks = FooterLinks;
Footer.Contacts = Contacts;
Footer.Privacy = Privacy;
Footer.SocialList = SocialList;

export default Footer;
