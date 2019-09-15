import React from "react" 
import Header from "./Header.js"
import  * as Axios from "axios"
import { connect } from "react-redux"
import {getAuthThunkCreator} from './../../Redux/auth'
import { getAuth } from "../../api/api.js"

class HeaderContainer extends React.Component {

    componentDidMount () {
        getAuth().then(data => {
               this.props.getAuthThunkCreator();       
        })
    }

    render () {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
  return  {
      isAuth:state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
       return { 
            getAuthThunkCreator: () => {
                dispatch(getAuthThunkCreator());
            }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer)