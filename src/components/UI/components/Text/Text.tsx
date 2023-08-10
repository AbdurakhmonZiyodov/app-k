import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {THEME} from 'constants/types';
import {TYPOGRAPHY} from 'constants/typography';
import {FC} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {BaseText, PaddingProps} from 'types';

type TextProps = BaseText &
  PaddingProps & {
    title?: string;
    style?: StyleProp<TextStyle>;
    isActive?: boolean;
    type?: keyof typeof TYPOGRAPHY;
    theme?: THEME;
    color?: keyof typeof COLORS;
  };

const Text: FC<TextProps> = ({
  title,
  style,
  type = 'default',
  isActive = true,
  textPosition = 'auto',
  color = 'white',
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  textTransform,
  ...res
}) => {
  if (!isActive || !title) return <RN.Text />;

  return (
    <RN.Text
      style={[
        TYPOGRAPHY[type],
        {
          textAlign: textPosition,
          color: COLORS[color],
          paddingLeft,
          paddingRight,
          paddingBottom,
          paddingTop,
          paddingHorizontal,
          paddingVertical,
          textTransform,
        },
        style,
      ]}
      testID={title}
      {...res}>
      {title}
    </RN.Text>
  );
};

export default Text;
