import {FC} from 'react';
import {ButtonType} from 'types';
import {ButtonProps} from '../Button';
import PrimaryButtonLarge from '../PrimaryButtonLarge';
import {styles} from './PrimaryButtonMedium.styles';

const MediumButton: FC<ButtonProps> = props => {
  switch (props.type) {
    case ButtonType.FILLED:
      return (
        <PrimaryButtonLarge
          style={[
            styles.container,
            props.label
              ? styles.contentPaddingWithLabel
              : styles.contentPadding,
          ]}
          {...props}
        />
      );
    case ButtonType.OUTLINED:
      return (
        <PrimaryButtonLarge
          style={[
            styles.container,
            props.label
              ? styles.contentPaddingWithLabel
              : styles.contentPadding,
          ]}
          {...props}
        />
      );
    case ButtonType.SHADED:
      return (
        <PrimaryButtonLarge
          style={[
            styles.container,
            props.label
              ? styles.contentPaddingWithLabel
              : styles.contentPadding,
          ]}
          {...props}
        />
      );
    default:
      return (
        <PrimaryButtonLarge
          style={[
            styles.container,
            props.label
              ? styles.contentPaddingWithLabel
              : styles.contentPadding,
          ]}
          {...props}
        />
      );
  }
};

export default MediumButton;
