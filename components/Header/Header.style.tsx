import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const HeaderWrapper = styled(AppBar)`
  .largeScreenHeader {
    padding: 16px 0;
  }

  .smallScreenHeader {
    padding: 8px 0;

    .logoText {
      font-size: 32px;
      margin-left: 8px;
    }

    @media screen and (max-width: 900px) {
      padding: 16px 0;
      padding-left: 18px;
    }
  }

  .logoSection {
    max-height: 72px;

    :hover {
      cursor: pointer;
    }
  }

  .logoText {
    font-family: Bungee, sans-serif;
    font-size: 36px;
    font-weight: normal;
    letter-spacing: 4px;
    margin-bottom: 0;
    margin-left: 12px;
  }
`;

export const NavButton = styled(Button)`
  font-weight: 700;

  :hover {
    background-color: #474747;
  }

  :active {
    background-color: #5c5c5c;
  }
`;

export const DropdownLink = styled.h3`
  color: #5c5c5c;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
`;

export const SmallHeaderLogoSection = styled(Link)`
  height: 54px;
  width: 240px;

  @media screen and (max-width: 350px) {
    height: 40.5px;
    width: 180px;
  }
`;

export default HeaderWrapper;
