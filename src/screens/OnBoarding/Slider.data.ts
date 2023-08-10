import Images from 'assets/images';
import {ImageSourcePropType} from 'react-native';

export type SlidesData = {
  id: number;
  title: string;
  subtitle: string;
  source: ImageSourcePropType;
};

const Slides = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur.1',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum1',
    source: Images.OnBoarding.onboarding1,
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur.2',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum',
    source: Images.OnBoarding.onboarding2,
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur.3',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum',
    source: Images.OnBoarding.onboarding3,
  },
];

export default Slides;
