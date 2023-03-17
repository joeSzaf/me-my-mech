import { Button } from '@mui/material';
import PageSection from 'components/_Atomic/PageSection/PageSection';
import { SlideShowSectionWrapper } from './SlideShowSection.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Gameplay1 from 'public/images/gameplay_1.jpg';
import Gameplay2 from 'public/images/gameplay_2.jpg';
import Slide from './Slide/Slide';

const SlideShowSection = () => {
  const items = [
    {
      name: 'Gameplay Screen 1',
      description: 'See us at PAX East!',
      image: Gameplay1,
    },
    {
      name: 'Gameplay Screen 2',
      description:
        'Stop by out booth to play the latest demo of My, My Mech and I',
      image: Gameplay2,
    },
  ];

  return (
    <PageSection backgroundColor='inherit' textColor='ffffff'>
      <SlideShowSectionWrapper>
        <div style={{ width: '100%' }}>
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            interval={6000}
          >
            {items.map((item, i) => (
              <Slide key={i} image={item.image} />
            ))}
          </Carousel>
        </div>
      </SlideShowSectionWrapper>
    </PageSection>
  );
};

export default SlideShowSection;
