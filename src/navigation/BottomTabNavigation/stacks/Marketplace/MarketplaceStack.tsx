import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {MarketplaceItemParams} from 'navigation/AppNavigator.types';
import {MARKETPLACE_ROUTES} from 'navigation/routes';
import MarketplaceItemScreen from 'screens/Marketplace/MarketplaceItem';
import MarketplaceScreen from 'screens/Marketplace';
import MarketplaceCheckoutScreen from 'screens/Marketplace/MarketplaceCheckout';
import MarketplaceItemPhysicalScreen from 'screens/Marketplace/MarketplaceItemPhysical/MarketplaceItemPhysicalScreen';

export type MarketplaceStackParamList = {
  [MARKETPLACE_ROUTES.home]: undefined;
  [MARKETPLACE_ROUTES.product_item]: MarketplaceItemParams;
  [MARKETPLACE_ROUTES.product_item_physical]: MarketplaceItemParams;
  [MARKETPLACE_ROUTES.checkout]: undefined;
};

export type MarketplaceRouteType<T extends keyof MarketplaceStackParamList> =
  RouteProp<MarketplaceStackParamList, T>;

export type NavigationTypeMarketplace<
  T extends keyof MarketplaceStackParamList,
> = StackNavigationProp<MarketplaceStackParamList, T>;

const Stack = createStackNavigator<MarketplaceStackParamList>();

const MarketplaceStack = () => (
  <Stack.Navigator
    initialRouteName={MARKETPLACE_ROUTES.home}
    screenOptions={{headerShown: false}}>
    <Stack.Screen
      name={MARKETPLACE_ROUTES.home}
      component={MarketplaceScreen}
    />
    <Stack.Screen
      name={MARKETPLACE_ROUTES.product_item}
      component={MarketplaceItemScreen}
    />
    <Stack.Screen
      name={MARKETPLACE_ROUTES.product_item_physical}
      component={MarketplaceItemPhysicalScreen}
    />
    <Stack.Screen
      name={MARKETPLACE_ROUTES.checkout}
      component={MarketplaceCheckoutScreen}
    />
  </Stack.Navigator>
);

export default MarketplaceStack;
