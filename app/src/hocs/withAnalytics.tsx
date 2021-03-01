import React, { PureComponent } from 'react';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer as _NavigationContainer } from '@react-navigation/native';

class NavigationContainer extends PureComponent<any> {
  navigationRef: any;
  previousRouteName: string | undefined;

  onReady = () => {
    this.previousRouteName = this.navigationRef?.getCurrentRoute()?.name;
    if (this.previousRouteName) {
      analytics().logScreenView({
        screen_name: this.previousRouteName,
        screen_class: this.previousRouteName,
      });
    }
    this.props.onReady && this.props.onReady();
  };

  onStateChange = (state: any) => {
    const previousRouteName = this.previousRouteName;
    const currentRouteName = this.navigationRef?.getCurrentRoute()?.name;

    // Save the current route name for later comparision
    this.previousRouteName = currentRouteName;

    if (currentRouteName && previousRouteName !== currentRouteName) {
      analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }

    this.props.onStateChange && this.props.onStateChange(state);
  };

  render() {
    return (
      <_NavigationContainer
        {...this.props}
        ref={(ref) => (this.navigationRef = ref)}
        onReady={this.onReady}
        onStateChange={this.onStateChange}
      />
    );
  }
}

export { NavigationContainer };
