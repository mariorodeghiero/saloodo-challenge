import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "../Avatar";
import AdminCard from "../AdminCard";
import BikerCard from "../BikerCard";
import Login from "../Login";

import {
  loadData,
  loadAdminShipments,
  loadBikers,
  authenticateUser,
  authenticateUserRequest,
  assignedBiker
} from "../../actions/actions";

import * as S from "./styled";

export class Dashboard extends React.Component {
  componentDidMount() {
    const { loadData, loadBikers } = this.props;
    loadData();
    loadBikers();
    this.props.loadAdminShipments();
    this.props.authenticateUser("biker@gmail.com", "biker");
  }

  handleAuthenticateUser(email, password) {
    this.props.authenticateUser(email, password);
  }

  render() {
    const bikers = this.props.bikers;

    const {
      isAuthenticate,
      typeOfAccess,
      name,
      image
    } = this.props.userAuthenticated;
    return (
      <S.DashboardWrapper>
        {isAuthenticate && (
          <>
            <S.MenuBar>
              <S.Profile>
                <Avatar size="lg" image={image} />
                <S.Name>{name}</S.Name>
                <S.Access>
                  Access: <S.Type>{typeOfAccess}</S.Type>
                </S.Access>
              </S.Profile>
              <S.Menu>
                <S.MenuTitle>MENU</S.MenuTitle>
                <S.Item>Shipments</S.Item>
              </S.Menu>
              <S.Logout>
                <S.BtnLogout onClick={() => this.props.initializeUser()} />
                <span>Log Out</span>
              </S.Logout>
            </S.MenuBar>
            {console.log(this.props.shipments)}
            <S.Shipments>
              {this.props.shipments.data.map((item, index) => {
                if (typeOfAccess === "manager") {
                  return (
                    <AdminCard
                      key={`admin-shipment-${index}`}
                      origin={item.origin}
                      destination={item.destination}
                      assigned={item.assigned}
                      orderStatus={item.order_status}
                      orderId={item.order_id}
                      bikers={bikers}
                      assignedBiker={(orderId, biker) =>
                        this.props.assignedBiker(orderId, biker)
                      }
                    />
                  );
                }
                return (
                  <BikerCard
                    key={`admin-shipment-${index}`}
                    origin={item.origin}
                    destination={item.destination}
                    assigned={item.assigned}
                    orderStatus={item.order_status}
                    orderId={item.order_id}
                    bikers={bikers}
                    assignedBiker={(orderId, biker) =>
                      this.props.assignedBiker(orderId, biker)
                    }
                  />
                );
              })}
            </S.Shipments>
          </>
        )}
        {!isAuthenticate && (
          <Login
            authenticateUser={(email, password) =>
              this.handleAuthenticateUser(email, password)
            }
          />
        )}
      </S.DashboardWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    shipments: state.adminShipments,
    bikers: state.bikers.data,
    userAuthenticated: state.userAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData()),
    loadAdminShipments: () => dispatch(loadAdminShipments()),
    loadBikers: () => dispatch(loadBikers()),
    authenticateUser: (email, password) =>
      dispatch(authenticateUser(email, password)),
    initializeUser: () => dispatch(authenticateUserRequest()),
    assignedBiker: (orderId, biker) => dispatch(assignedBiker(orderId, biker))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
