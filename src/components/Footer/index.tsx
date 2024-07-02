import React, { FC } from "react";
import { FooterItem, FooterWrapper } from "./Footer.styled";
import Icon, { Icons } from "@/components/Icon";
import Link from "next/link";

const Footer: FC = () => (
  <FooterWrapper data-testid="Footer">
    <div>
      <FooterItem>
        <p>find me in:</p>
      </FooterItem>
      <FooterItem>
        <Link href="https://www.linkedin.com/in/mspattoglio/" target="_blank">
          <Icon icon={Icons.LINKEDIN} />
        </Link>
      </FooterItem>
      <FooterItem>
        <Link href="https://github.com/Sol-Zeta" target="_blank">
          <Icon icon={Icons.GITHUB} />
        </Link>
      </FooterItem>
    </div>
    <FooterItem id='last'>
      <p>Developed with</p>
      <Icon icon={Icons.COFFEE} isButton={false} />
    </FooterItem>
  </FooterWrapper>
);

export default Footer;
