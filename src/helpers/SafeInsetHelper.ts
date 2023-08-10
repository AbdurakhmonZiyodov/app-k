import {EdgeInsets} from 'react-native-safe-area-context';

type GetSafeBottomInsetProps = {
  insets: EdgeInsets;
  minimumValue: number;
};

export class SafeInsetHelper {
  static getSafeBottomInset = ({
    insets,
    minimumValue,
  }: GetSafeBottomInsetProps) => Math.max(insets.bottom, minimumValue);
}
