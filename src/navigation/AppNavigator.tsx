import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import RN from 'components/RN';
import {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './AppNavigator.styles';
import NavigationService from './NavigationService';
import {APP_ROUTES} from './routes';

// screens
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import BottomTabNavigation from 'navigation/BottomTabNavigation';
import {Host} from 'react-native-portalize';
import CreateAccountScreen from 'screens/Login/CreateAccountScreen';
import ForgotPasswordWithEmailScreen from 'screens/Login/ForgotPasswordWithEmailScreen';
import ForgotPasswordWithPhoneScreen from 'screens/Login/ForgotPasswordWithPhoneScreen';
import LoginScreen from 'screens/Login/LoginScreen';
import OtpVerifyOfCreateAccountScreen from 'screens/Login/OtpVerifyOfCreateAccountScreen';
import OnBoardingScreen from 'screens/OnBoarding';
import {OtpVerifyParams} from './AppNavigator.types';

export type RootStackParamList = {
  // public routes
  [APP_ROUTES.on_boarding]: undefined;
  [APP_ROUTES.login]: undefined;
  [APP_ROUTES.create_account]: undefined;
  [APP_ROUTES.forgot_password_with_email]: undefined;
  [APP_ROUTES.forgot_password_with_phone]: undefined;
  [APP_ROUTES.otp_verify_of_login]: OtpVerifyParams;
  [APP_ROUTES.otp_verify_of_create_account]: OtpVerifyParams;

  //   private routes
  [APP_ROUTES.bottom_navigation]: undefined;
};

export type AppRouteType<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type NavigationType = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: FC = () => {
  const isVisible = useRootStore()._token.isVisible;

  const renderPublicNavigators = () => (
    <>
      <Stack.Screen
        name={APP_ROUTES.on_boarding}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name={APP_ROUTES.login}
        component={LoginScreen}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
      <Stack.Screen
        name={APP_ROUTES.create_account}
        component={CreateAccountScreen}
        options={{...TransitionPresets.ModalSlideFromBottomIOS}}
      />
      <Stack.Screen
        name={APP_ROUTES.forgot_password_with_email}
        component={ForgotPasswordWithEmailScreen}
        options={{...TransitionPresets.ModalSlideFromBottomIOS}}
      />
      <Stack.Screen
        name={APP_ROUTES.forgot_password_with_phone}
        component={ForgotPasswordWithPhoneScreen}
        options={{...TransitionPresets.ModalSlideFromBottomIOS}}
      />
      <Stack.Screen
        name={APP_ROUTES.otp_verify_of_create_account}
        component={OtpVerifyOfCreateAccountScreen}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
    </>
  );

  const renderPrivateNavigators = () => (
    <>
      <Stack.Screen
        name={APP_ROUTES.bottom_navigation}
        component={BottomTabNavigation}
		options={{
			headerTitleAlign:"center"
		}}
      />
    </>
  );

  return (
    <SafeAreaView style={styles.navigator}>
      <RN.View style={styles.navigator}>
        <NavigationContainer ref={NavigationService.ref}>
          <Host>
            <Stack.Navigator
              screenOptions={{headerShown: false, gestureEnabled: false}}
              initialRouteName={
                APP_ROUTES[isVisible ? 'bottom_navigation' : 'on_boarding']
              }>
              {isVisible ? renderPrivateNavigators() : renderPublicNavigators()}
            </Stack.Navigator>
          </Host>
        </NavigationContainer>
      </RN.View>
    </SafeAreaView>
  );
};

export default observer(AppNavigator);
