const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === "LOAD_DATA_REQUEST") {
    return {
      data: [],
      loading: true,
      success: false,
      error: false
    };
  }
  if (action.type === "LOAD_DATA_SUCCESS") {
    return {
      loading: false,
      success: true,
      error: false,
      data: action.data
    };
  }
  if (action.type === "LOAD_DATA_FAILURE") {
    return {
      loading: false,
      success: false,
      error: true,
      data: []
    };
  }
  return state;
};
