import React from "react" 
import Header from "./Header.js"
import  * as Axios from "axios"
import { connect } from "react-redux"
import {getAuthThunkCreator} from './../../Redux/auth'
import { getAuth } from "../../api/api.js"
import {compose} from "redux"


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

export default compose (connect(mapStateToProps, mapDispatchToProps)) (HeaderContainer)
