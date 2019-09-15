import React from "react" 
import Header from "./Header.js"
import  * as Axios from "axios"
import { connect } from "react-redux"
import { setUserDataAC } from "../../Redux/auth"
import { getAuth } from "../../api/api.js"

class HeaderContainer extends React.Component {

    componentDidMount () {
        
        getAuth().then(data => {
                if (data.resultCode === 0) {
                    
                    let {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
        
            
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
       return { setUserData: (userId, email, login) => {
            dispatch(setUserDataAC(userId, email, login))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer)