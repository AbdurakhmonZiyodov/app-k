import {NotificationProvider} from 'contexts/NotificationContext';
import {observer} from 'mobx-react-lite';
import AppNavigator from 'navigation/AppNavigator';
import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './App.styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Require cycle',
  'forwardRef render functions accept exactly two parameters: props and ref. Did you forget to use the ref parameter?',
  '[MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify',
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

const App = () => (
  <NotificationProvider>
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator />
    </GestureHandlerRootView>
  </NotificationProvider>
);

export default observer(App);
