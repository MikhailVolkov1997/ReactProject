import  React from 'react';
import {Redirect} from "react-router-dom"

export const withAuthRedirect = (Component) => {

    class redirectComponent extends React.Component {
        render () {
            if (this.props.isAuth === false ) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
    } 
    return redirectComponent;
}