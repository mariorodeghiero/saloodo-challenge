const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === "LOAD_ADMIN_SHIPMENTS_REQUEST") {
    return {
      data: [],
      loading: true,
      success: false,
      error: false
    };
  }
  if (action.type === "LOAD_ADMIN_SHIPMENTS_SUCCESS") {
    return {
      loading: false,
      success: true,
      error: false,
      data: action.data
    };
  }
  if (action.type === "LOAD_ADMIN_SHIPMENTS_FAILURE") {
    return {
      loading: false,
      success: false,
      error: true,
      data: []
    };
  }
  if (action.type === "ASSIGNED_BIKERS_REQUEST") {
    return {
      ...state,
      loading: true,
      success: false,
      error: false
    };
  }
  if (action.type === "ASSIGNED_BIKERS_SUCCESS") {
    const { order_id, assigned } = action.payload;
    let newData = state.data;
    const objIndex = newData.findIndex(obj => obj.order_id == order_id);
    newData[objIndex].assigned = assigned;
    return {
      ...state,
      loading: false,
      success: true,
      error: false,
      data: newData
    };
  }
  if (action.type === "ASSIGNED_BIKERS_FAILURE") {
    return {
      ...state,
      loading: false,
      success: false,
      error: true
    };
  }
  return state;
};
