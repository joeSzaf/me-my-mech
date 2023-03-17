import MechHeader from 'public/images/website_header_gradient_larger.png';
import BigButton from 'components/_Atomic/BigButton/BigButton';
import { ButtonContainer } from './HeroSection.style';
import Image from 'next/legacy/image';

const HeroSection = () => {
  return (
    <div>
      <Image
        alt='"Me, My Mech and I" logo and picture of a farmer, a mech, and a cat overlooking a farm with a destroyed city in the backgroun.'
        src={MechHeader}
        layout='responsive'
        style={{ objectFit: 'fill' }}
      />
    </div>
  );
};

export default HeroSection;
