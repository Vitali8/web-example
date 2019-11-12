import * as CONSTANT from '../constants/app'
import sendRequest from '../services/api'

export function setError(error = '') {
  return (dispatch) => {
    dispatch({
      type: CONSTANT.SET_ERROR,
      payload: {
        error: error,
      },
    });

    return Promise.resolve();
  }
}

export function getData() {
  return (dispatch) => {
    return sendRequest(`messages`)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.GET_DATA,
            payload: {
              data: response.data,
            },
          });
          return true;
        } else {
          return false;
        }
      });
  }
}
