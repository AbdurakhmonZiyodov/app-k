import {FC} from 'react';
import {ButtonType} from 'types';
import Button, {ButtonProps} from '../Button';
import PrimaryButtonLarge from '../PrimaryButtonLarge';
import {styles} from './PrimaryButtonSmall.styles';

type SmallButtonProps = Omit<ButtonProps, 'label' | 'labelStyle' | 'labelType'>;

const SmallButton: FC<SmallButtonProps> = props => {
  switch (props.type) {
    case ButtonType.FILLED:
      return (
        <PrimaryButtonLarge
          {...props}
          titleType="boldSubheadline"
          style={[styles.container, styles.contentPadding]}
        />
      );
    case ButtonType.OUTLINED:
      return (
        <PrimaryButtonLarge
          {...props}
          titleType="boldSubheadline"
          style={[
            styles.container,
            styles.contentPadding,
            styles.outlinedContainer,
          ]}
        />
      );
    case ButtonType.SHADED:
      return (
        <PrimaryButtonLarge
          {...props}
          titleType="boldSubheadline"
          style={[styles.container, styles.contentPadding]}
        />
      );
    default:
      return <Button {...props} />;
  }
};

export default SmallButton;
