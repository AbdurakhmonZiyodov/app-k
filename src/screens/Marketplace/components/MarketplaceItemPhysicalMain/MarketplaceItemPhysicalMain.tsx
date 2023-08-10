import RN from 'components/RN/RN';
import {styles} from './MarketplaceItemPhysicalMain.styles';
import Text from 'components/UI/components/Text/Text';
import useRootStore from 'hooks/useRootStore';
import useVisibility from 'hooks/useVisibility';
import {HIT_SLOP} from 'constants/constants';
import {Icons} from 'assets/icons';
import {COLORS} from 'constants/colors';
import UI from 'components/UI/UI';
import {ButtonType} from 'types';
import usePressableList from 'hooks/usePressableList';

export default () => {
  const {share} = useRootStore().service.company;
  const starVisibilty = useVisibility();
  const colorPressableList = usePressableList({count: 3, activeIndex: 1});
  const sizePressableList = usePressableList({count: 5, activeIndex: 1});

  const renderHeader = () => (
    <RN.View style={styles.headerContainer}>
      <RN.View style={styles.headerLeft}>
        <Text title="100$" type="boldLargeTitle" />
        <Text title="153$" type="boldCallout" style={styles.oldPriceText} />
      </RN.View>
      <RN.View style={styles.headerRight}>
        <RN.View style={styles.iconsContainer}>
          <RN.TouchableOpacity
            style={styles.iconContainer}
            hitSlop={HIT_SLOP}
            onPress={starVisibilty.toggleVisibility}>
            <Icons.StarIcon
              color={COLORS.white}
              width={22}
              fill={starVisibilty.visible ? 'white' : 'transparent'}
            />
          </RN.TouchableOpacity>
          <RN.TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              share.onPress().then(_ => {
                console.log(share.response);
              });
            }}>
            <Icons.Share color={COLORS.white} width={22} />
          </RN.TouchableOpacity>
        </RN.View>
      </RN.View>
    </RN.View>
  );

  const renderColor = () => (
    <RN.View style={styles.colorsContainer}>
      <Text
        title="Color"
        type="boldSmall"
        textTransform="uppercase"
        color="lightBlack"
      />
      <RN.ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RN.View style={styles.coloredImagesContainer}>
          {colorPressableList.list.map(listItem => (
            <RN.TouchableOpacity
              onPress={() => colorPressableList.onPressed(listItem.index)}
              key={listItem.index}
              style={[
                styles.coloredImageBox,
                listItem.isVisible && styles.activeColoredImageBox,
              ]}
            />
          ))}
        </RN.View>
      </RN.ScrollView>
    </RN.View>
  );

  const renderSize = () => (
    <RN.View>
      <Text
        title="size"
        type="boldSmall"
        textTransform="uppercase"
        color="lightBlack"
      />
      <RN.ScrollView
        horizontal
        contentContainerStyle={styles.sizeScrollViewContainer}>
        <RN.View style={styles.mySize}>
          <Text title="My size" color="grey" type="regularCallout" />
        </RN.View>

        {sizePressableList.list.map(listItem => (
          <RN.TouchableOpacity
            key={listItem.index}
            onPress={() => sizePressableList.onPressed(listItem.index)}
            style={[
              styles.sizeBox,
              listItem.isVisible && styles.activeSizeBox,
            ]}>
            <Text
              title={`M${listItem.index + 1}`}
              type="regularCallout"
              textTransform="uppercase"
            />
          </RN.TouchableOpacity>
        ))}
      </RN.ScrollView>

      <UI.Button.PrimaryButton.Large
        title="Add to bag"
        titleStyle={styles.addButtonTitle}
        textPosition="center"
        style={styles.addButton}
        type={ButtonType.FILLED}
      />
    </RN.View>
  );

  const renderDescription = () => (
    <RN.View>
      <Text
        title="ABOUT"
        type="boldSmall"
        color="lightBlack"
        paddingTop={20}
        paddingBottom={6}
      />

      <Text
        type="regularCaption1"
        title="When choosing outerwear, pay attention to functionality. The 650 Protective Down Jacket is made with warmCELL and windCELL technologies to keep the cold and wind at bay. Thumbhole cuffs are another plus.
Peculiarities:
Standard fit.
Side pockets with zipper.
Welt pocket with a zipper on the sleeve."
      />
    </RN.View>
  );

  return (
    <RN.View style={styles.container}>
      {renderHeader()}
      {renderColor()}
      {renderSize()}
      {renderDescription()}
    </RN.View>
  );
};
