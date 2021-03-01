import React, { PureComponent, ComponentType } from 'react';
import { Snackbar, ActivityIndicator, Modal } from 'react-native-paper';

export function withCommonUI<T>(WrappedComponent: ComponentType<T>) {
  return class extends PureComponent<T, any> {
    constructor(props: Readonly<T>) {
      super(props);
      this.state = {
        snackbarParams: undefined,
        isLoading: false,
      };
    }

    showSnackbar = (params: any) => {
      this.setState({
        snackbarParams: params,
      });
    };

    showLoading = (isLoading: boolean) => {
      this.setState({
        isLoading,
      });
    };

    onSnackbarDismiss = () => {
      this.setState({
        snackbarParams: undefined,
      });
    };

    render() {
      const { snackbarParams, isLoading } = this.state;
      return (
        <>
          <WrappedComponent
            {...(this.props as T)}
            showSnackbar={this.showSnackbar}
            showLoading={this.showLoading}
          />
          <Snackbar
            onDismiss={this.onSnackbarDismiss}
            visible={snackbarParams !== undefined}
            duration={snackbarParams?.duration}
            action={snackbarParams?.action}>
            {snackbarParams?.message}
          </Snackbar>
          <Modal dismissable={false} visible={isLoading}>
            <ActivityIndicator size="large" animating={true} color="#ffffff" />
          </Modal>
        </>
      );
    }
  };
}
