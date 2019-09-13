import React from "react" 
import Header from "./Header.js"
import  * as Axios from "axios"
import { connect } from "react-redux"
import { setUserDataAC } from "../../Redux/auth"

class HeaderContainer extends React.Component {

    componentDidMount () {
        
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
                if (response.data.resultCode === 0) {
                    
                    let {id, email, login} = response.data.data;
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