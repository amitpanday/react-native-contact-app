

const contact = {

  create: function (data) {
    return dispatch => {
      dispatch({
        type: 'create',
        data: data,
        error: false,
        loading: false
      });
    }
  },

  update: function (data) {
    return dispatch => {
      dispatch({
        type: 'update',
        data: data,
        error: false,
        loading: false
      });
    }
  }

};

export default contact;