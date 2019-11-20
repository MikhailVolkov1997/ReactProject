import React from "react"
import Header from "./Header.js"
import { connect } from "react-redux"
import { logout } from './../../Redux/auth'
import { compose } from "redux"


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer)
