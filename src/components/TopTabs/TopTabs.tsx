import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from 'constants/colors';
import React, {FC} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import ITopBar from './ITopBar/ITopBar';
const Tab = createMaterialTopTabNavigator();

interface TopTabsItem {
  id: number;
  name: string;
  component: React.ReactNode;
}

interface TopTabsProps {
  data: TopTabsItem[];
  position?: 'top' | 'bottom';
  buttonStyle?: StyleProp<ViewStyle>;
  activeButtonStyle?: StyleProp<ViewStyle>;
  buttonTitleStyle?: StyleProp<TextStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

const TopTabs: FC<TopTabsProps> = ({data, position, ...reaOfProps}) => {
  const renderTabScreen = (item: TopTabsItem) => (
    <Tab.Screen key={item.id} name={item.name}>
      {() => item.component}
    </Tab.Screen>
  );

  const renderTabScreens = () => data.map(renderTabScreen);

  return (
    <Tab.Navigator
      tabBarPosition={position}
      screenOptions={{
        animationEnabled: true,
        tabBarScrollEnabled: true,
        swipeEnabled: true,
      }}
      sceneContainerStyle={{
        backgroundColor: COLORS.transparent,
      }}
      tabBar={props => <ITopBar {...props} {...reaOfProps} />}>
      {renderTabScreens()}
    </Tab.Navigator>
  );
};

export default TopTabs;
