import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from 'src/components/button';
import styles from './styles';
import { localizeString } from 'src/i18n';
import { useNavigation } from '@react-navigation/native';
import { ScreenRoutes } from 'src/navigation/routes';

const Root: React.FC<any> = (props: Readonly<any>) => {
  const { getStartedPress } = props;

  const navigation = useNavigation();

  const onGetStartedPress = () => {
    getStartedPress();
    navigation.navigate(ScreenRoutes.signIn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: 'logo' }} />
      <Button style={styles.button} onPress={onGetStartedPress}>
        {localizeString('getStarted.button.start')}
      </Button>
    </SafeAreaView>
  );
};

export default Root;
