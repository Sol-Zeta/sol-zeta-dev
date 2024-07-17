import React, { FC } from "react";
import Image from "next/image";
import {
  UserHeaderWrapper,
  AvatarContainer,
  Name,
  CreationDate,
  Section,
  HeaderLink,
  Header,
  Description
} from "./UserHeader.styled";
import Icon, { Icons } from "@/components/Icon";
import { getTimeAgo } from "./utils";

interface UserHeaderProps {
  user: any;
  creationDate: Date;
  snippetUrl: string;
  description: string;
}

const UserHeader: FC<UserHeaderProps> = ({
  user,
  creationDate,
  snippetUrl,
  description,
}) => {
  const getFormatedDate = (date: string) => {};
  return (
    <UserHeaderWrapper data-testid="UserHeader">
      <Header>
        <Section>
          <AvatarContainer>
            <Image
              src={user.avatar_url}
              alt="User Avatar"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
            />
          </AvatarContainer>
          <div>
            <Name>{user.login}</Name>
            <CreationDate>{getTimeAgo(creationDate)}</CreationDate>
          </div>
        </Section>
        <Section>
          <HeaderLink href={snippetUrl} target="_blank">
            <Icon icon={Icons.EXTERNAL_LINK} />
            details
          </HeaderLink>
          {/* <HeaderLink href="">
            <Icon icon={Icons.STAR_FILL} />
            stars
          </HeaderLink> */}
        </Section>
      </Header>
      <Description>{description}</Description>
    </UserHeaderWrapper>
  );
};

export default UserHeader;
function userRouter() {
  throw new Error("Function not implemented.");
}
