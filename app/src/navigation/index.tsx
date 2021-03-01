import { connect } from 'react-redux';

import Root from './root';
import * as initialisationActions from 'src/actions/initialisation';

const mapStateToProps = (state: any) => {
  const { session, getStarted } = state;
  return {
    session,
    getStarted,
  };
};

export default connect(mapStateToProps, {
  initialiseApplication: initialisationActions.initialiseApplication,
})(Root);
