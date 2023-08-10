import {Icons} from 'assets/icons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {FC} from 'react';
import {IconProps} from 'types';
import {styles} from './BillingCard.style';

interface Props {
  title?: string;
  isSelected?: boolean;
  cardType?: 'history' | 'editing';
  screenType?: 'edit' | 'done';
  Icon?: IconProps;
}

const BillingCard: FC<Props> = ({title, isSelected, cardType, screenType}) => {
  const CardType = cardType === 'editing';

  const rightContent = () => {
    if (screenType === 'edit') {
      return (
        <RN.View style={styles.rightContent}>
          {isSelected && <Icons.CheckIcon size={16} color={COLORS.green} />}
        </RN.View>
      );
    } else {
      return (
        <RN.View style={styles.rightContent}>
          <Icons.TrashIcon />
        </RN.View>
      );
    }
  };

  const paymentHistory = () => (
    <RN.View style={styles.container}>
      <RN.View style={styles.leftContent}>
        <Icons.Card color={COLORS.green} width={20} />
        <Text
          title={title ? title : '0612'}
          style={styles.title}
          type="regularFootnote2"
        />
      </RN.View>
      <RN.View style={styles.centerCard}>
        <Text title="12.09.2022" style={styles.title} type="regularFootnote2" />
      </RN.View>
      <RN.View style={styles.rightContent}>
        <Text title="+150$" style={styles.title} type="regularFootnote2" />
      </RN.View>
    </RN.View>
  );

  const cardEditingView = () => (
    <RN.View style={styles.container}>
      <RN.View style={styles.leftContent}>
        <Icons.Card color={COLORS.green} width={20} />
        <Text
          title={title ? title : 'Card  ending on 0612'}
          style={styles.title}
          type="regularFootnote2"
        />
      </RN.View>
      <RN.View style={styles.rightContent}>{rightContent?.()}</RN.View>
    </RN.View>
  );

  return (
    <RN.TouchableOpacity>
      {CardType ? cardEditingView?.() : paymentHistory?.()}
    </RN.TouchableOpacity>
  );
};

export default BillingCard;
