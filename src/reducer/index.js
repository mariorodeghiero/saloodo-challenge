import { combineReducers } from "redux";
import user from "./user";
import adminShipments from "./admin-shipments";

export default combineReducers({ user, adminShipments });
