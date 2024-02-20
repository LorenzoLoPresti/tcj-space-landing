import { PropsWithChildren, ReactNode } from "react";

export type FooterProps = {
  Body: React.FC<PropsWithChildren>;
  Section: React.FC<FooterSectionProps>;
  Col: React.FC<PropsWithChildren>;
  FooterInput: React.FC;
  NewsLetter: React.FC;
  FooterLinks: React.FC;
  Contacts: React.FC;
  Privacy: React.FC;
  SocialList: React.FC;
};

export type FooterSectionProps = PropsWithChildren<{
  isUpper?: boolean;
}>;

export type ContactProps = PropsWithChildren<{
  icon: ReactNode;
  gap?: "gap-2" | "gap-3";
}>;
