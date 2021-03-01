import { configureFonts, DefaultTheme } from 'react-native-paper';
import fonts from './fonts';
import colors from './colors';

const fontConfig = {
  default: {
    regular: {
      fontFamily: fonts.muli,
    },
    medium: {
      fontFamily: fonts.muliSemiBold,
    },
    light: {
      fontFamily: fonts.muliLight,
    },
    thin: {
      fontFamily: fonts.muliExtraLight,
    },
  },
};

const themes = {
  defaultTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      accent: colors.accent,
      placeholder: colors.white,
      text: colors.white,
    },
    fonts: configureFonts(fontConfig),
  },
};

export default themes;
