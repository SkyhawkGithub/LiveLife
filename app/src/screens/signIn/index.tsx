import { connect } from 'react-redux';

import Root from './root';

const mapStateToProps = (state: any) => state.signIn;

export default connect(mapStateToProps)(Root);
