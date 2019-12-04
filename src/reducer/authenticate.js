const INITIAL_STATE = {
  name: "",
  image: "",
  email: "",
  password: "",
  admin_id: null,
  typeOfAccess: "",
  isAuthenticate: false,
  loading: false,
  error: false,
  success: false
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === "POST_USER_AUTH_REQUEST") {
    return {
      isAuthenticate: false,
      loading: true,
      success: false,
      error: false
    };
  }
  if (action.type === "POST_USER_AUTH_SUCCESS") {
    return {
      loading: false,
      success: true,
      error: false,
      isAuthenticate: true,
      name: action.data.name,
      image: action.data.image,
      email: action.data.email,
      password: action.data.password,
      admin_id: null,
      typeOfAccess: action.data.typeOfAccess
    };
  }
  if (action.type === "POST_USER_AUTH_FAILURE") {
    return {
      isAuthenticate: false,
      loading: false,
      success: false,
      error: true
    };
  }
  return state;
};
