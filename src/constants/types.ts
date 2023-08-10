import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

export enum THEME {
  WHITE,
  DARK,
}

export type MainCardType = {
  title?: string;
  subTitle?: string;
  color?: string;
  itemIcon?: any;
  isNew?: boolean;
  image?: any;
  size?: number;
  cardStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  order?: number;
  xLine?: number;
  yLine?: number;
  navigationPath?: any;
};
