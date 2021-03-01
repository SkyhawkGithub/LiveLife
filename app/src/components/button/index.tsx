import React, { PureComponent } from 'react';
import { Button as _Button } from 'react-native-paper';

import styles from './styles';
import R from 'src/res';

export default class extends PureComponent<any, any> {
  render() {
    const { style, contentStyle, color, labelStyle } = this.props;
    return (
      <_Button
        {...this.props}
        style={[styles.button, style]}
        contentStyle={[styles.contentStyle, contentStyle]}
        color={color || R.colors.button}
        labelStyle={[styles.text, labelStyle]}
        mode="contained"
        uppercase={false}
      />
    );
  }
}
