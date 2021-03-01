import { StyleSheet } from 'react-native';
import R from 'src/res';

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
  },
  contentStyle: {
    minHeight: 44,
    height: 44,
  },
  text: {
    fontFamily: R.fonts.varelaRoundRegular,
    fontSize: 18,
    lineHeight: 22,
    color: R.colors.white,
    paddingHorizontal: 16,
  },
});

export default styles;
