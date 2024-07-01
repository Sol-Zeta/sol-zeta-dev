import React, { FC } from "react";
import { FooterItem, FooterWrapper } from "./Footer.styled";
import Icon, { Icons } from "@/components/Icon";

const Footer: FC = () => (
  <FooterWrapper data-testid="Footer">
    <div>
      <FooterItem>
        <p>find me in:</p>
      </FooterItem>
      <FooterItem>
        <Icon icon={Icons.LINKEDIN} />
      </FooterItem>
      <FooterItem>
        <Icon icon={Icons.GITHUB} />
      </FooterItem>
    </div>
    <FooterItem>
      <p>Developed with</p>
      <Icon icon={Icons.COFFEE} isButton={false}/>
    </FooterItem>
  </FooterWrapper>
);

export default Footer;
