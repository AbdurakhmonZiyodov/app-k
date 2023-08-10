import {StyleProp, ViewStyle} from 'react-native';
import NewTasksGradient from './NewTasksGradient';
import React from 'react';

export type GradientProps = {
  containerStyle?: StyleProp<ViewStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Gradients = {
  NewTasksGradient,
};

export default Gradients;
