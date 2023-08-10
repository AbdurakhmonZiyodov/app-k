import {
  StatusBar as RNStatusBar,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {FC, ReactNode} from 'react';
import RN from 'components/RN';
import {styles} from './IProvider.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'constants/colors';

interface IProviderProps {
  children?: ReactNode;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  barStyle?: StatusBarStyle;
}

export const IProvider: FC<IProviderProps> = ({
  children,
  backgroundColor = COLORS.black1,
  style,
  barStyle = 'light-content',
}) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <RN.View
      style={[
        styles.container,
        {backgroundColor, paddingTop: top, paddingBottom: bottom - 10},
        style,
      ]}>
      <RNStatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
      {children}
    </RN.View>
  );
};

export default observer(IProvider);
