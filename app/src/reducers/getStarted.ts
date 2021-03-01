import { GET_STARTED_PRESS } from 'src/types/getStarted';

const initialState = {
  showGetStarted: true,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_STARTED_PRESS:
      return {
        showGetStarted: false,
      };
    default:
      return state;
  }
}
