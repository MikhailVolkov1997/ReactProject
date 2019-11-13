import React from 'react';
import './App.css';
import Sitebar from "./Components/Sitebar/Sitebar"
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import ContentComponent from './Components/Content/ContentContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Content/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from "react-redux";
import {getAuthThunkCreator} from './Redux/auth'
import Preloader from './Components/Proloader/Preloader';
import {initializeThunkCreator} from "./Redux/app-reducer";
import { compose } from "redux";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import DialogsContainer from './Components/Dialogs/DialogsContainer' ;



class App extends React.Component{

  componentDidMount () {
           this.props.getAuthThunkCreator();     
           this.props.initializeThunkCreator();
          
  }

  render () {
     if(!this.props.initialazed) {
       
          return <Preloader />
    } else {
  return (
    // <BrowserRouter>
    <body className="grid">
       <HeaderContainer  />
       <Sitebar />
    <div className="app-wrapper-content">
        <Route path='/profile/:userId' render={ () => <ProfileContainer />} />
        <Route path="/Content" render={ () => <ContentComponent  />} />
        <Route path="/Dialogs" render={ () => <DialogsContainer   /> }/>
        <Route path="/Users" render={ () => <UsersContainer   /> }/>
        <Route path='/Login' render={ () => <Login /> } />
        
    </div>
      
    </body>
   // </BrowserRouter>
  
  )
  }
}
}
const mapStateToProps = (state) => {
  return {
    initialazed:state.app.initialazed,
    userId:state.auth.userId,
    
  }
}

// export default connect(mapStateToProps, { getAuthThunkCreator, initializeThunkCreator }) (App)
 
 let AppContainer = compose (
  withRouter,
  connect(mapStateToProps, { getAuthThunkCreator, initializeThunkCreator }) 
) (App)

let MainApp = (props) => {
  return <BrowserRouter>
  <Provider  store={store} >
          <AppContainer />
       </Provider>
       </BrowserRouter>
}

export default MainApp