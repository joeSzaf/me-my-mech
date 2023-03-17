import PageSection from 'components/_Atomic/PageSection/PageSection';
import FeatureItem from './FeatureItem/FeatureItem';
import { FeaturesSectionWrapper } from './FeaturesSection.style';

const featureItems = [
  {
    title: 'Mechs to plowshares',
    body: 'There is no fighting. There is no combat. You use your mechanized warmachine for building and reclaiming a broken world.',
  },
  {
    title: 'Build a thriving farm and town',
    body: 'Grow crops and process them into food, fuel, or many other useful goods. Your town needs them to grow and develop.',
  },
  {
    title: 'Automate your farms: OMG Drones',
    body: 'With the circuitry scavenged in the ruins, construct drones to harvest crops or search for useful materials.',
  },
  {
    title: 'Enjoy multiple playthroughs – a roguelike mechlike',
    body: 'You will meet different NPCs, find different equipment, and have different starting mechs/locations to choose from to make each journey unique..',
  },
  {
    title: 'Customize your mech',
    body: 'Find and build components to upgrade your mech with equipment like a new cannon that better waters crops, jump jets that let you access new areas, or wood paneling to make your mech more cozy!',
  },
  {
    title: 'Build mega projects',
    body: 'Focus your run to construct a mega project (like a hydroelectric dam or rail line) that will permanently affect future playthroughs and bring your world one-step closer to society.',
  },
  {
    title: 'Shop Cat',
    body: 'Shop Cat.',
  },
];

const FeaturesSection = () => {
  return (
    <PageSection backgroundColor='inherit' textColor='000'>
      <FeaturesSectionWrapper>
        {featureItems.map((featureItem) => {
          return (
            <FeatureItem title={featureItem.title} body={featureItem.body} />
          );
        })}
      </FeaturesSectionWrapper>
    </PageSection>
  );
};

export default FeaturesSection;
