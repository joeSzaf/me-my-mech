import SocialIcon from 'components/_Atomic/SocialIcon/SocialIcon';
import { SocialGroup } from 'components/_Atomic/SocialIcon/SocialIcon.style';
import {
  WishlistSectionWrapper,
  InformationContainer,
} from './WishlistSection.style';
import DiscordIcon from 'public/icons/DiscordIcon.svg';
import PageSection from 'components/_Atomic/PageSection/PageSection';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import Link from 'next/link';

const WishlistSection = () => {
  return (
    <PageSection backgroundColor='inherit'>
      <WishlistSectionWrapper>
        <h1>Farm and build a community... with a mech.</h1>
        <Button
          variant='contained'
          color='secondary'
          LinkComponent={Link}
          href='https://store.steampowered.com/app/1977940/Me_My_Mech_and_I/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Wishlist us on Steam
        </Button>
        <InformationContainer>
          <h2>The world ended, but that’s in the past...</h2>
          <p>
            You have a mech and a dream to rebuild society. Transform your mech
            from war machine to tool for farming, scavenging, and building.
            Develop friendships with new townsfolk and explore ruins of the
            past.
          </p>
          <p>Do it all alongside your best friend: your mech.</p>
        </InformationContainer>
        <SocialGroup>
          <SocialIcon Icon={<TwitterIcon />} url='test'></SocialIcon>
          <SocialIcon Icon={<DiscordIcon />} url='test'></SocialIcon>
          <SocialIcon Icon={<YouTubeIcon />} url='test'></SocialIcon>
          <SocialIcon Icon={<InstagramIcon />} url='test'></SocialIcon>
        </SocialGroup>
      </WishlistSectionWrapper>
    </PageSection>
  );
};

export default WishlistSection;
