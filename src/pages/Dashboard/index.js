import React from 'react';
import { connect } from 'react-redux';

import AdminCard from '../../Components/AdminCard';
import BikerCard from '../../Components/BikerCard';
import Login from '../../Components/Login';
import SideBar from '../../Components/SideBar';

import {
  loadAdminShipments,
  loadBikers,
  authenticateUser,
  authenticateUserRequest,
  assignedBiker,
  editTimer,
  confirmDelivered,
} from '../../actions/actions';

import * as S from './styled';

export class Dashboard extends React.Component {
  componentDidMount() {
    const { loadBikers } = this.props;
    this.props.loadAdminShipments();
    loadBikers();
  }

  handleAuthenticateUser(email, password) {
    this.props.authenticateUser(email, password);
  }

  render() {
    const { bikers } = this.props;
    const {
      isAuthenticate,
      typeOfAccess,
      name,
      image,
    } = this.props.userAuthenticated;
    console.log(this.props);
    return (
      <S.DashboardWrapper>
        {!isAuthenticate ? (
          <Login
            authenticateUser={(email, password) => this.handleAuthenticateUser(email, password)}
          />
        ) : (
          <>
            <SideBar
              image={image}
              name={name}
              typeOfAccess={typeOfAccess}
              initializeUser={this.props.initializeUser}
            />
            <S.Shipments>
              {this.props.shipments.data.map((item) => {
                if (typeOfAccess === 'manager') {
                  return (
                    <AdminCard
                      key={`admin-shipment-${item.order_id}`}
                      origin={item.origin}
                      destination={item.destination}
                      pickupEstimate={item.pickup_estimate}
                      assigned={item.assigned}
                      orderStatus={item.order_status}
                      orderId={item.order_id}
                      bikers={bikers}
                      assignedBiker={(orderId, biker) => this.props.assignedBiker(orderId, biker)}
                    />
                  );
                }
                if (name === item.assigned) {
                  return (
                    <BikerCard
                      key={`admin-shipment-${item.order_id}`}
                      origin={item.origin}
                      destination={item.destination}
                      assigned={item.assigned}
                      orderStatus={item.order_status}
                      orderId={item.order_id}
                      pickupEstimate={item.pickup_estimate}
                      bikers={bikers}
                      editTimer={(orderId, timer) => this.props.editTimer(orderId, timer)}
                      confirmDelivered={(orderId) => this.props.confirmDelivered(orderId)}
                    />
                  );
                }
              })}
            </S.Shipments>
          </>
        )}
      </S.DashboardWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  shipments: state.adminShipments,
  bikers: state.bikers.data,
  userAuthenticated: state.userAuth,
});

const mapDispatchToProps = (dispatch) => ({
  loadAdminShipments: () => dispatch(loadAdminShipments()),
  loadBikers: () => dispatch(loadBikers()),
  authenticateUser: (email, password) => dispatch(authenticateUser(email, password)),
  initializeUser: () => dispatch(authenticateUserRequest()),
  assignedBiker: (orderId, biker) => dispatch(assignedBiker(orderId, biker)),
  editTimer: (orderId, timer) => dispatch(editTimer(orderId, timer)),
  confirmDelivered: (orderId) => dispatch(confirmDelivered(orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
