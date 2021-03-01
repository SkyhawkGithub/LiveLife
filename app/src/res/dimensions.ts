import { Dimensions } from 'react-native';

const dimensions = {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  spacing: {
    half: 4,
    default: 8,
    double: 16,
  },
};

export default dimensions;
