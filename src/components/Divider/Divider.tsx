import RN from 'components/RN';
import React, {FC} from 'react';

interface DividerProps {
  height?: number;
  width?: number;
}

const Divider: FC<DividerProps> = ({height, width}) => (
  <RN.View style={{width, height}} />
);

export default Divider;
