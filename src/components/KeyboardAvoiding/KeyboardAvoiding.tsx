import Dismessible from 'components/Dismessible/Dismessible';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './KeyboardAvoiding.styles';

type KeyboardAvoidingProps = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  keyboardVerticalOffset?: number;
};

const KeyboardAvoiding: FC<KeyboardAvoidingProps> = ({children, style}) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={[styles.container, style]}>
    <Dismessible>{children}</Dismessible>
  </KeyboardAwareScrollView>
);

export default KeyboardAvoiding;
