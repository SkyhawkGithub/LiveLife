import React from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';

const Header: React.FC<any> = (props: Readonly<any>) => {
  const { scene, previous, navigation } = props;
  const { options } = scene.descriptor;
  const title = options.headerTitle || options.title || scene.route.name;

  let leftIcon: any = previous ? 'arrow-left' : undefined;
  let leftAction: any = previous ? navigation.goBack : null;

  return (
    <SafeAreaConsumer>
      {(insets: { top: any }) => (
        <Appbar.Header statusBarHeight={insets?.top}>
          <Appbar.Action icon={leftIcon} onPress={leftAction} />
          <Appbar.Content title={title} />
        </Appbar.Header>
      )}
    </SafeAreaConsumer>
  );
};

export default Header;
