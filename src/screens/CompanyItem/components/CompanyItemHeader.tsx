import {useIsFocused} from '@react-navigation/native';
import LikeLottie, {
  LikeLottieRefProps,
} from 'assets/animations/components/LikeLottie';
import {Icons} from 'assets/icons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {addAlpha, HIT_SLOP} from 'constants/constants';
import SIZES from 'constants/sizes';
import useRootStore from 'hooks/useRootStore';
import React, {FC, useEffect, useRef} from 'react';
import {CompanyBase} from 'services/api';
import {styles} from '../CompanyItemScreen.styles';
import LinearGradient from 'react-native-linear-gradient';

interface CompanyItemHeaderProps {
  data: CompanyBase;
}

const CompanyItemHeader: FC<CompanyItemHeaderProps> = ({data}) => {
  const likeRef = useRef<LikeLottieRefProps>(null);
  const isFocused = useIsFocused();
  const {share} = useRootStore().service.company;

  useEffect(() => {
    if (isFocused && likeRef.current) {
      likeRef.current.onStart?.();
    }
  }, [isFocused]);
  return (
    <LinearGradient
      useAngle={true}
      angle={180}
      locations={[0, 1]}
      colors={[data.backgroundColor, addAlpha(data.backgroundColor, 0)]}
      style={{
        height: SIZES.height * 0.55,
      }}>
      <>
        <RN.View style={styles.headerImageContainer}>
          <RN.Image
            source={{uri: data.logo}}
            resizeMode={'contain'}
            style={styles.headerImage}
          />
        </RN.View>

        <RN.View
          style={[
            RN.StyleSheet.absoluteFillObject,
            styles.headerBottomTextsContainer,
          ]}>
          <Text
            title={data.type as string}
            type={'boldCaption1'}
            style={[styles.text, styles.title]}
          />
          <Text
            title={data.name as string}
            type={'boldLargeTitle'}
            style={[styles.text, styles.headerDescription]}
          />

          <RN.View style={styles.iconsContainer}>
            <RN.TouchableOpacity
              style={styles.iconContainer}
              hitSlop={HIT_SLOP}
              onPress={() => {
                console.log('toggle');
                likeRef.current?.onToggle?.();
              }}>
              <LikeLottie ref={likeRef} width={50} height={50} />
            </RN.TouchableOpacity>
            <RN.TouchableOpacity
              style={styles.iconContainer}
              hitSlop={HIT_SLOP}
              onPress={() => {
                share.onPress().then(_ => {
                  console.log(share.response);
                });
              }}>
              <Icons.Share color={COLORS.white} width={22} />
            </RN.TouchableOpacity>
          </RN.View>
        </RN.View>
      </>
    </LinearGradient>
  );
};

export default CompanyItemHeader;
