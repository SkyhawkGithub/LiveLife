import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import styles from './styles';
import R from 'src/res';

export default class ImageProgress extends PureComponent<FastImageProps, any> {
  constructor(props: Readonly<FastImageProps>) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onLoadStart = () => {
    this.setState({
      isLoading: true,
    });
  };

  onLoadEnd = () => {
    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { style, source } = this.props;
    const { isLoading = false } = this.state;

    return (
      <FastImage
        onLoadStart={this.onLoadStart}
        onLoadEnd={this.onLoadEnd}
        style={[styles.container, style]}
        source={source}
        resizeMode={FastImage.resizeMode.cover}>
        {isLoading && (
          <ActivityIndicator
            size="large"
            animating={true}
            color={R.colors.primary}
          />
        )}
      </FastImage>
    );
  }
}
