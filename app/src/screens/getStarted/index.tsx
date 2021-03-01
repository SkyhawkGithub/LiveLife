import { connect } from 'react-redux';

import Root from './root';

import { getStartedPress } from 'src/actions/getStarted';

const mapStateToProps = (state: any) => state.getStarted;

export default connect(mapStateToProps, {
  getStartedPress,
})(Root);
