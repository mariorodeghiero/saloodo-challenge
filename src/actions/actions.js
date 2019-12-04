import axios from "axios";

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
 * loadData action
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
