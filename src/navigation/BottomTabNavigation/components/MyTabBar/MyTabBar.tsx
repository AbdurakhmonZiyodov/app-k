import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import ColoredIcons from 'assets/coloredIcons/ColoredIcons';
import {Icons} from 'assets/icons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import SIZES, {scale, verticalScale} from 'constants/sizes';
import {bottomTabBarOptions} from 'navigation/BottomTabNavigation/BottomTabNavigation.constants';
import {APP_ROUTES} from 'navigation/routes';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {styles} from './MyTabBar.styles';

type TabBarItem = {
  route: any;
  index: number;
};

const ICON_SIZE = Math.max(SIZES.width * 0.05, 22);

const MyTabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  const renderTabBar = ({route, index}: TabBarItem) => {
    const {options} = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;
    const activeColor = isFocused ? COLORS.green : COLORS.black4;

    const renderIcon = () => {
      switch (label as APP_ROUTES) {
        case APP_ROUTES.main:
          return <Icons.HomeIcon color={activeColor} size={ICON_SIZE} />;
        case APP_ROUTES.dao_password:
          return <Icons.DaoPasswordIcon color={activeColor} size={ICON_SIZE} />;
        case APP_ROUTES.tasks:
          return <Icons.BagFillIcon color={activeColor} size={ICON_SIZE} />;
        case APP_ROUTES.account:
          return <Icons.AccountIcon color={activeColor} size={ICON_SIZE} />;
        default:
          return <Icons.BagFillIcon color={activeColor} size={ICON_SIZE} />;
      }
    };

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate({name: route.name, merge: true} as any);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    if (label === APP_ROUTES.activities) {
      return (
        <RN.TouchableOpacity
          key={index}
          onPress={onPress}
          onLongPress={onLongPress}
          activeOpacity={0.5}
          style={styles.centeredButtonContainer}>
          <RN.View style={styles.centeredButton}>
            <ColoredIcons.LoginHeaderLogoIcon width={scale(32)} />
          </RN.View>
        </RN.TouchableOpacity>
      );
    }

    return (
      <RN.TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={0.5}
        style={styles.buttonContainer}
        key={index}>
        {renderIcon()}
        <Text
          title={bottomTabBarOptions.list[index].buttonLabel}
          type="regularCaption1"
          style={[
            styles.buttonLabel,
            {fontSize: verticalScale(10), lineHeight: verticalScale(12)},
          ]}
        />
      </RN.TouchableOpacity>
    );
  };

  const renderTabBars = () =>
    state.routes.map((route, index) => renderTabBar({route, index}));

  // navigaion route === Account screen
  if (state.index === 4) return <RN.View />;
  if (state.index === 0) return <RN.View />;
  return (
    <RN.View style={[styles.container]}>
      <RN.View style={styles.renderTabBarsContainer}>{renderTabBars()}</RN.View>
      <RN.View style={styles.backgroundIconLine}>
        <Svg
          width={SIZES.width}
          height={SIZES.width * 0.23}
          style={{
            transform: [
              {
                translateY: SIZES.width * 0.23 * 0.3,
              },
            ],
          }}
          viewBox="0 0 376 84"
          fill="#1B1B1B">
          <Path
            d="M375 16.2V67.8C375 76.7 367.838 84 358.886 84H16.1141C7.16181 84 0 76.8 0 67.8V16.2C0 7.2 7.16181 0 16.1141 0H138.163C145.225 0 151.293 4.7 153.581 11.4C158.355 25.7 171.784 36 187.599 36C203.415 36 216.844 25.7 221.618 11.4C223.707 4.7 229.775 0 236.837 0H358.886C367.838 0 375 7.2 375 16.2Z"
            fill="#1B1B1B"
          />
          <Path d="M0 0H58V84H0V0Z" fill="#1B1B1B" />
          <Path d="M318 0H376V84H318V0Z" fill="#1B1B1B" />
        </Svg>
      </RN.View>
    </RN.View>
  );
};

export default MyTabBar;
