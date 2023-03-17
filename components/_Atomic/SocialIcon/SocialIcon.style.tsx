import styled from '@emotion/styled';

const SocialIconWrapper = styled.div`
  align-items: center;
  background-color: #1e5c5c;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;

  svg {
    color: #fff;
    path {
      fill: #fff;
    }
    height: 32px;
  }

  :hover {
    background-color: #2d8b8b;
    cursor: pointer;

    svg {
      color: #fff;
      path {
        fill: #fff;
      }
      height: 32px;
    }
  }
`;

export const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export default SocialIconWrapper;
