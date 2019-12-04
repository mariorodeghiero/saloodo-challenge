import { combineReducers } from "redux";
import user from "./user";
import userAuth from "./authenticate";
import bikers from "./bikers";
import adminShipments from "./admin-shipments";

export default combineReducers({ user, userAuth, adminShipments, bikers });
