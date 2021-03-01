import { Linking } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const openURL = async (url: string) => {
  try {
    await Linking.openURL(url);
  } catch (error) {
    crashlytics().recordError(error);
  }
};

export { openURL };
