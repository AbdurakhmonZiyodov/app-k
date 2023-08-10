import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {FC} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {styles} from './ITopBar.styles';
interface RenderBottomProps {
  route: RouteProp<ParamListBase, string>;
  index: number;
}

type ITopBarType = MaterialTopTabBarProps & {
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTitleStyle?: StyleProp<TextStyle>;
  activeButtonStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
};

const ITopBar: FC<ITopBarType> = ({
  state,
  descriptors,
  navigation,
  buttonContainerStyle,
  buttonStyle,
  activeButtonStyle,
  buttonTitleStyle,
}) => {
  const renderBottom = (item: RenderBottomProps) => {
    const {options} = descriptors[item.route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : item.route.name;

    const isFocused = state.index === item.index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: item.route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate({name: item.route.name, merge: true} as any);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: item.route.key,
      });
    };

    return (
      <RN.TouchableOpacity
        key={label as string}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        style={[
          styles.button,
          isFocused && styles.activeButton,
          buttonStyle,
          isFocused && activeButtonStyle,
        ]}
        onLongPress={onLongPress}>
        <Text
          title={label as string}
          type="boldLoginButtonTitle"
          textPosition="center"
          style={[styles.buttonText, buttonTitleStyle]}
        />
      </RN.TouchableOpacity>
    );
  };
  return (
    <RN.View style={styles.container}>
      <RN.View style={[styles.buttonContainer, buttonContainerStyle]}>
        {state.routes.map((route, index) => renderBottom({route, index}))}
      </RN.View>
    </RN.View>
  );
};

export default ITopBar;
