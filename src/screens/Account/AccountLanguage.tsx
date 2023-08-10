import Images from 'assets/images';
import IProvider from 'components/IProvider';
import RN from 'components/RN';
import AccountTemplates from 'components/Templates/AccountTemplates';
import {useState} from 'react';
import LanguageCard from './Components/LanguageCard';

const date = [
  {countryName: 'England', countryFlag: Images.FLagImg.img1, id: 1},
  {countryName: 'Arabic', countryFlag: Images.FLagImg.img2, id: 2},
  {countryName: 'Deutsch', countryFlag: Images.FLagImg.img3, id: 3},
];

const AccountLanguage = () => {
  const [lang, setLang] = useState(date[0].id);

  return (
    <IProvider>
      <AccountTemplates title="Language" renderBtnTitle="Change">
        <RN.View>
          {date?.map(item => (
            <RN.View key={item.id}>
              <LanguageCard
                onClick={() => setLang(item.id)}
                countryName={item.countryName}
                countryFlag={item.countryFlag}
                id={item.id}
                isActive={lang}
              />
            </RN.View>
          ))}
        </RN.View>
      </AccountTemplates>
    </IProvider>
  );
};

export default AccountLanguage;
