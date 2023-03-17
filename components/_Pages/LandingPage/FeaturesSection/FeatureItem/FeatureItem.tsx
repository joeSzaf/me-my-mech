import { FeatureItemWrapper } from './FeatureItem.style';

interface FeatureItemProps {
  title: string;
  body: string;
}

const FeatureItem = ({ title, body }: FeatureItemProps) => {
  return (
    <FeatureItemWrapper>
      <h3>{title}</h3>
      <p>{body}</p>
    </FeatureItemWrapper>
  );
};

export default FeatureItem;
