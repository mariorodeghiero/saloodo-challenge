import axios from "axios";

/**
 * authenticateUser action
 */
export const authenticateUserRequest = () => {
  return {
    type: "POST_USER_AUTH_REQUEST"
  };
};

export const authenticateUserSuccess = data => {
  return {
    type: "POST_USER_AUTH_SUCCESS",
    data
  };
};

export const authenticateUserFailure = data => {
  return {
    type: "POST_USER_AUTH_FAILURE",
    data
  };
};

export const authenticateUser = (email, password) => {
  const body = {
    email: email,
    password: password
  };
  return dispatch => {
    dispatch(authenticateUserRequest());
    axios
      .post("http://localhost:3000/login", body)
      .then(({ data }) => dispatch(authenticateUserSuccess(data)))
      .catch(() => dispatch(authenticateUserFailure()));
  };
};

/**
 * loadData action
 */
export const loadDataRequest = () => {
  return {
    type: "LOAD_DATA_REQUEST"
  };
};

export const loadDataSuccess = data => {
  return {
    type: "LOAD_DATA_SUCCESS",
    data
  };
};

export const loadDataFailure = data => {
  return {
    type: "LOAD_DATA_FAILURE",
    data
  };
};

export const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest());
    axios
      .get("http://localhost:3000/manager")
      .then(({ data }) => dispatch(loadDataSuccess(data)))
      .catch(() => dispatch(loadDataFailure()));
  };
};

/**
 * loadAdminShipments action
 */

export const loadAdminShipmentsRequest = () => {
  return {
    type: "LOAD_ADMIN_SHIPMENTS_REQUEST"
  };
};

export const loadAdminShipmentsSuccess = data => {
  return {
    type: "LOAD_ADMIN_SHIPMENTS_SUCCESS",
    data
  };
};

export const loadAdminShipmentsFailure = data => {
  return {
    type: "LOAD_ADMIN_SHIPMENTS_FAILURE",
    data
  };
};

export const loadAdminShipments = () => {
  return dispatch => {
    dispatch(loadAdminShipmentsRequest());
    axios
      .get("http://localhost:3000/shipments")
      .then(({ data }) => dispatch(loadAdminShipmentsSuccess(data)))
      .catch(() => dispatch(loadAdminShipmentsFailure()));
  };
};

/**
 * loadBikers action
 */

export const loadBikersRequest = () => {
  return {
    type: "LOAD_BIKERS_REQUEST"
  };
};

export const loadBikersSuccess = data => {
  return {
    type: "LOAD_BIKERS_SUCCESS",
    data
  };
};

export const loadBikersFailure = data => {
  return {
    type: "LOAD_BIKERS_FAILURE",
    data
  };
};

export const loadBikers = () => {
  return dispatch => {
    dispatch(loadBikersRequest());
    axios
      .get("http://localhost:3000/bikers")
      .then(({ data }) => dispatch(loadBikersSuccess(data)))
      .catch(() => dispatch(loadBikersFailure()));
  };
};

/**
 * assignedBiker action
 */

export const assignedBikerRequest = () => {
  return {
    type: "ASSIGNED_BIKERS_REQUEST"
  };
};

export const assignedBikerSuccess = (data, body) => {
  return {
    type: "ASSIGNED_BIKERS_SUCCESS",
    payload: body,
    data
  };
};

export const assignedBikerFailure = data => {
  return {
    type: "ASSIGNED_BIKERS_FAILURE",
    data
  };
};

export const assignedBiker = (orderId, biker) => {
  const body = {
    order_id: orderId,
    assigned: biker
  };
  return dispatch => {
    dispatch(assignedBikerRequest());
    axios
      .post("http://localhost:3000/assign", body)
      .then(({ data }) => dispatch(assignedBikerSuccess(data, body)))
      .catch(() => dispatch(assignedBikerFailure()));
  };
};

/**
 * editTimer action
 */
export const editTimerRequest = () => {
  return {
    type: "EDIT_TIME_REQUEST"
  };
};

export const editTimerSuccess = (data, body) => {
  return {
    type: "EDIT_TIME_SUCCESS",
    payload: body,
    data
  };
};

export const editTimerFailure = data => {
  return {
    type: "EDIT_TIME_FAILURE",
    data
  };
};

export const editTimer = (orderId, timer) => {
  const body = {
    order_id: orderId,
    duration_estimate: timer
  };
  return dispatch => {
    dispatch(editTimerRequest());
    axios
      .post("http://localhost:3000/time", body)
      .then(({ data }) => dispatch(editTimerSuccess(data, body)))
      .catch(() => dispatch(editTimerFailure()));
  };
};
