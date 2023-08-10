import RN from 'components/RN';
import {styles} from './OnChangeCountry.style';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {Icons} from 'assets/icons';
import {COLORS} from 'constants/colors';
import {useState} from 'react';
import {Country, CountryCode} from './types';
import useVisibility from 'hooks/useVisibility';

const OnChangeCountry = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>('UA');
  const [country, setCountry] = useState<Country>();
  const visiblitiy = useVisibility(false);

  const onSelect = (countrys: Country) => {
    setCountryCode(countrys.cca2);
    setCountry(countrys);
  };

  const clicked = () => {
    console.log(country);
  };

  return (
    <RN.View style={styles.container}>
      <RN.TouchableOpacity style={styles.card} onPress={visiblitiy.show}>
        <CountryPicker
          theme={DARK_THEME}
          withFilter
          withFlag
          withCountryNameButton
          withEmoji
          onOpen={() => {
            console.log('onOpen');
          }}
          onClose={() => {
            console.log('onClose');
          }}
          visible={visiblitiy.visible}
          {...{
            countryCode,
            onSelect,
            clicked,
          }}
        />
        <Icons.ArrowDown width={14} height={14} color={COLORS.white} />
      </RN.TouchableOpacity>
    </RN.View>
  );
};

export default OnChangeCountry;
