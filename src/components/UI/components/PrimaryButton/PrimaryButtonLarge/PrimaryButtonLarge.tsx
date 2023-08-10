import {FC} from 'react';
import {ButtonType} from 'types';
import Button, {ButtonProps} from '../Button';
import {styles} from './PrimaryButtonLarge.styles';

const LargeButton: FC<ButtonProps> = ({
  type,
  title,
  label,
  style,
  labelStyle,
  titleStyle,
  onPress,
  ...resOfProps
}) => {
  switch (type) {
    case ButtonType.FILLED:
      return (
        <Button
          title={title}
          titleType={label ? 'boldSubheadline' : 'boldBody'}
          titleStyle={[styles.filledTextColor, titleStyle]}
          label={label}
          labelType="regularCaption3"
          labelStyle={[styles.filledLabelColor, labelStyle]}
          onPress={onPress}
          style={[
            styles.container,
            label ? styles.contentPaddingWithLabel : styles.contentPadding,
            styles.filledContainer,
            style,
          ]}
          {...resOfProps}
        />
      );

    case ButtonType.OUTLINED:
      return (
        <Button
          title={title}
          titleType={label ? 'boldSubheadline' : 'boldBody'}
          titleStyle={[styles.outlinedTextColor, titleStyle]}
          label={label}
          labelType="regularCaption3"
          labelStyle={[styles.outlinedLabelColor, labelStyle]}
          onPress={onPress}
          style={[
            styles.container,
            label ? styles.contentPaddingWithLabel : styles.contentPadding,
            styles.outlinedContainer,
            style,
          ]}
          {...resOfProps}
        />
      );

    case ButtonType.SHADED:
      return (
        <Button
          title={title}
          titleType={label ? 'boldSubheadline' : 'boldBody'}
          titleStyle={[styles.outlinedTextColor, titleStyle]}
          label={label}
          labelType="regularCaption3"
          labelStyle={[styles.outlinedLabelColor, labelStyle]}
          onPress={onPress}
          style={[
            styles.container,
            label ? styles.contentPaddingWithLabel : styles.contentPadding,
            styles.shadedContainer,
            style,
          ]}
          {...resOfProps}
        />
      );

    default:
      return <Button title={title} />;
  }
};

export default LargeButton;
