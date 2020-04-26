const initialState = {
  contact: [],
  error: false,
  loading: true
};

const createContact = (state = initialState, action) => {

  switch (action.type) {

    case 'create':
      return { ...state, contact: [...state.contact, action.data], error: action.error, loading: action.loading }
    case 'update':
      return { ...state, contact: [...action.data], error: action.error, loading: action.loading }
    default:
      return state;

  }
};

export default createContact;