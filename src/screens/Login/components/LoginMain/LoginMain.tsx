import ColoredIcons from 'assets/coloredIcons/ColoredIcons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {styles} from './LoginMain.styles';

export type LoginMainProps = {
  title: string;
  description: string;
  renderIcon?(): React.ReactNode;
};

const LoginMain: FC<LoginMainProps> = ({title, description, renderIcon}) => (
  <RN.View style={styles.container}>
    <RN.View style={styles.logo}>
      {renderIcon ? (
        renderIcon()
      ) : (
        <ColoredIcons.LoginHeaderLogoIcon width={30} />
      )}
      <Text title={title} type="boldTitle2_2" style={styles.title} />
      <RN.View style={styles.descriptionContainer}>
        <Text
          title={description}
          type="regularFootnote2"
          textPosition="center"
          style={styles.description}
        />
      </RN.View>
    </RN.View>
  </RN.View>
);

export default observer(LoginMain);
