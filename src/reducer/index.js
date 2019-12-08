import { combineReducers } from "redux";
import userAuth from "./authenticate";
import bikers from "./bikers";
import adminShipments from "./admin-shipments";

export default combineReducers({ userAuth, adminShipments, bikers });
