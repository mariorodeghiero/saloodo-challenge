import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadData, loadAdminShipments } from "../../actions/actions";
import Avatar from "../Avatar";
import Card from "../Card";

import * as S from "./styled";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadData();
    this.props.loadAdminShipments();
  }
  render() {
    const { name, typeOfAccess, image } = this.props.user;
    const shipments = this.props.shipments;
    return (
      <S.DashboardWrapper>
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
            <button>Log out</button>
          </S.Logout>
        </S.MenuBar>
        <S.Shipments>
          <h1>Dashboard</h1>
          {shipments.map((item, index) => {
            return (
              <Card
                key={`shipment-${index}`}
                origin={item.origin}
                destination={item.destination}
                assigned={item.assigned}
                orderStatus={item.order_status}
              />
            );
          })}
        </S.Shipments>
      </S.DashboardWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    shipments: state.adminShipments.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData()),
    loadAdminShipments: () => dispatch(loadAdminShipments())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
