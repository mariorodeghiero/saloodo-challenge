const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'LOAD_BIKERS_REQUEST') {
    return {
      data: [],
      loading: true,
      success: false,
      error: false,
    };
  }
  if (action.type === 'LOAD_BIKERS_SUCCESS') {
    return {
      loading: false,
      success: true,
      error: false,
      data: action.data,
    };
  }
  if (action.type === 'LOAD_BIKERS_FAILURE') {
    return {
      loading: false,
      success: false,
      error: true,
      data: [],
    };
  }
  return state;
};
