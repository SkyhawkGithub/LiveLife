import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { withCommonUI } from 'src/hocs/withCommonUI';
import styles from './styles';
import R from 'src/res';

const Root: React.FC<any> = (props: Readonly<any>) => {
  return (
    <SafeAreaView style={R.styles.flexOne}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        style={R.styles.flexOne}>
        <ScrollView
          style={R.styles.flexOne}
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps={'handled'}>
          <View style={styles.innerContainer}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default withCommonUI(Root);
