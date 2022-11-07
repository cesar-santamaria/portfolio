import Link from "next/link";
import { Text, useColorModeValue, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import FootprintIcon from "./icons/footprint";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image
          src="cs.png"
          w="50px"
          objectFit="cover"
          alt="CS initials logo"
          ml={{ base: 3, md: 20 }}
          mt={4}
        />
      </LogoBox>
    </Link>
  );
};

export default Logo;
