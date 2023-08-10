import {Icons} from 'assets/icons';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import useVisibility from 'hooks/useVisibility';
import {observer} from 'mobx-react-lite';
import React, {forwardRef, useCallback, useRef} from 'react';
import {KeyboardType, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Country, CountryCode} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-number-input';
import {IconType, Phone} from 'types';
import {styles} from './Field.styles';

const deafultOption = {
  width: 20,
  color: COLORS.white,
};

type FieldProps = {
  value?: string;
  onFocus?(): void;
  onBlur?(): void;
  onChangeText?(value: string): void;
  onPhoneChangeText?(phone: Phone): void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  countryCode?: CountryCode;
  countryCodeNumber?: string;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: IconType;
  rightIcon?: IconType;
  placeholder?: string;
  placeholderColor?: string;
  type?: 'text' | 'password' | 'phone' | 'number';
  iconOption?: typeof deafultOption;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  isValid?: boolean;
  leftIconStyle?: StyleProp<ViewStyle>;
  multiline?: boolean;
  numberOfLines?: number;
  renderLeftIcon?(): React.ReactNode;
  keyboardType?: KeyboardType;
};

const Field = forwardRef<PhoneInput, FieldProps>(
  (
    {
      value,
      onChangeText,
      inputContainerStyle,
      inputStyle,
      leftIcon,
      rightIcon,
      placeholder,
      placeholderColor,
      countryCodeNumber,
      iconOption,
      maxLength,
      countryCode,
      onPhoneChangeText,
      leftIconStyle,
      onBlur,
      onFocus,
      type,
      multiline = false,
      numberOfLines = 1,
      renderLeftIcon: renderLeft,
      keyboardType,
    },
    ref,
  ) => {
    const LeftIcon = Icons[leftIcon as IconType];
    const RightIcon = Icons[rightIcon as IconType];
    const passwordVisiblity = useVisibility();

    const onBlurInput = useCallback(() => {
      onBlur?.();
    }, [onBlur]);

    const onFocusInput = useCallback(() => {
      onFocus?.();
    }, [onFocus]);

    const phoneInput = useRef<Phone>({
      countryCode: countryCode || 'UA',
      countryCodeNumber: countryCodeNumber || '380',
      phoneNumber: '',
    });

    const onChangeCountryCode = (country: Country) => {
      phoneInput.current.countryCode = country.cca2;
      phoneInput.current.countryCodeNumber = country.callingCode[0];
      onPhoneChangeText?.(phoneInput.current);
    };

    const EasIconOfPassword =
      Icons[passwordVisiblity.visible ? 'EyeOff' : 'EyeOn'];
    const iconStyle = {
      ...deafultOption,
      ...iconOption,
    };

    const renderLeftIcon = () => {
      if (renderLeft) return renderLeft();

      if (!leftIcon) return <RN.View />;
      return (
        <RN.TouchableOpacity activeOpacity={0.5} style={leftIconStyle}>
          <LeftIcon {...iconStyle} />
        </RN.TouchableOpacity>
      );
    };

    const renderRightIcon = () => {
      if (!rightIcon) return <RN.View />;

      return (
        <RN.TouchableOpacity activeOpacity={0.5}>
          <RightIcon {...iconStyle} />
        </RN.TouchableOpacity>
      );
    };

    const renderInput = () => {
      switch (type) {
        case 'phone':
          return (
            <>
              <PhoneInput
                withDarkTheme
                withShadow
                ref={ref}
                //   autoFocuscle
                layout="first"
                defaultCode={phoneInput.current.countryCode}
                textInputStyle={styles.input}
                codeTextStyle={styles.codeTextStyle}
                textContainerStyle={styles.inputContainer}
                onChangeCountry={onChangeCountryCode}
                textInputProps={{maxLength, value, placeholder: ''}}
                flagButtonStyle={styles.flagButtonStyle}
                renderDropdownImage={
                  <Icons.ArrowBoldIcon width={14} color={COLORS.white} />
                }
                containerStyle={styles.inputContainer}
                onChangeText={val => {
                  phoneInput.current.phoneNumber = val;
                  onChangeText?.(val);
                }}
              />
            </>
          );

        case 'password':
          return (
            <>
              <RN.TextInput
                style={[styles.input, inputStyle]}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={!passwordVisiblity.visible}
                placeholderTextColor={placeholderColor || COLORS.lightBlack}
                onBlur={onBlurInput}
                onFocus={onFocusInput}
                multiline={multiline}
                numberOfLines={numberOfLines}
              />
              <RN.TouchableOpacity
                onPress={passwordVisiblity.toggleVisibility}
                style={!passwordVisiblity.visible ? styles.activeEye : {}}>
                <EasIconOfPassword {...iconStyle} />
              </RN.TouchableOpacity>
            </>
          );
        default:
          return (
            <RN.TextInput
              style={[styles.input, inputStyle]}
              value={value}
              keyboardType={keyboardType}
              onChangeText={onChangeText}
              placeholder={placeholder}
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={onBlurInput}
              onFocus={onFocusInput}
              placeholderTextColor={placeholderColor || COLORS.lightBlack}
            />
          );
      }
    };

    return (
      <RN.View style={[styles.root, inputContainerStyle]}>
        {renderLeftIcon()}
        {renderInput()}
        {renderRightIcon()}
      </RN.View>
    );
  },
);

Field.displayName = 'Field';

export default observer(Field);
