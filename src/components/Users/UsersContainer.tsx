import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps =(state: AppStoreType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps =(dispatch: Dispatch) => {
    return {

    }
}



export default  connect(mapStateToProps, mapDispatchToProps) (Users);