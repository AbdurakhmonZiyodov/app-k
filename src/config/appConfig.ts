import {isIOS} from 'utils/platforms';
import Config from 'react-native-config';

//  for google
const GOOGLE_AUTH_IOS_KEY = Config.GOOGLE_AUTH_IOS_KEY;
const GOOGLE_AUTH_ANDROID_KEY = Config.GOOGLE_AUTH_ANDROID_KEY;

//  for facebook
const FACEBOOK_APP_ID = Config.FACEBOOK_APP_ID;

//  base url
const API_URL = Config.API_URL;

const APP_VERSION = Config.APP_VERSION;

const googleConfig = {
  webClientId: isIOS ? GOOGLE_AUTH_IOS_KEY : GOOGLE_AUTH_ANDROID_KEY,
};

const facebookConfig = {
  app_id: FACEBOOK_APP_ID,
};

export const AppConfig = {
  auth: {
    google: googleConfig,
    facebook: facebookConfig,
  },
  baseUrl: API_URL,
  apiVersion: APP_VERSION,
};
