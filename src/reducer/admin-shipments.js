const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === "LOAD_ADMIN_SHIPMENTS_REQUEST") {
    return {
      ...state,
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
      ...state,
      loading: false,
      success: false,
      error: true
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
    assigned === "unassigned"
      ? (newData[objIndex].order_status.assigned = false)
      : (newData[objIndex].order_status.assigned = true);

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
  if (action.type === "EDIT_TIME_REQUEST") {
    return {
      ...state,
      loading: true,
      success: false,
      error: false
    };
  }
  if (action.type === "EDIT_TIME_SUCCESS") {
    const { order_id, duration_estimate } = action.payload;
    let newData = state.data;
    const objIndex = newData.findIndex(obj => obj.order_id == order_id);
    newData[objIndex].pickup_estimate = duration_estimate;
    newData[objIndex].order_status.picked_up = true;
    return {
      ...state,
      loading: false,
      success: true,
      error: false,
      data: newData
    };
  }
  if (action.type === "EDIT_TIME_FAILURE") {
    return {
      ...state,
      loading: false,
      success: false,
      error: true
    };
  }
  if (action.type === "CONFIRM_DELIVERED_REQUEST") {
    return {
      ...state,
      loading: true,
      success: false,
      error: false
    };
  }
  if (action.type === "CONFIRM_DELIVERED_SUCCESS") {
    const { order_id } = action.payload;
    let newData = state.data;
    const objIndex = newData.findIndex(obj => obj.order_id == order_id);
    newData[objIndex].order_status.delivered = true;
    return {
      ...state,
      loading: false,
      success: true,
      error: false,
      data: newData
    };
  }
  if (action.type === "CONFIRM_DELIVERED_FAILURE") {
    return {
      ...state,
      loading: false,
      success: false,
      error: true
    };
  }
  return state;
};
