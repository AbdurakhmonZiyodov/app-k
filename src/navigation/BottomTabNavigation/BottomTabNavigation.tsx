import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {bottomTabBarOptions} from './BottomTabNavigation.constants';
import MyTabBar from './components/MyTabBar';

const Tab = createBottomTabNavigator();

export type ButtonTabOptionType = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
};

const BottomTabNavigation: FC = () => {
  const renderTabScreenItem = (i: (typeof bottomTabBarOptions.list)[0]) => (
    <Tab.Screen key={i.index} name={i.tabName} component={i.component} />
  );

  const renderTabScreens = () =>
    bottomTabBarOptions.list.map(renderTabScreenItem);

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={bottomTabBarOptions.options}>
      {renderTabScreens()}
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
