import React from 'react';
import './App.css';
import Sitebar from "./Components/Sitebar/Sitebar"
import {BrowserRouter, Route} from "react-router-dom"
import ContentComponent from './Components/Content/ContentContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Content/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer'



function App(props) {
  
  return (
    <BrowserRouter>
    <body className="grid">
       <HeaderContainer  />
       <Sitebar />
    <div className="app-wrapper-content">
        <Route path='/profile/:userId' render={ () => <ProfileContainer />} />
        <Route path="/Content" render={ () => <ContentComponent  />} />
        <Route path="/Dialogs" render={ () => <DialogsContainer   /> }/>
        <Route path="/Users" render={ () => <UsersContainer   /> }/>
        
    </div>
      
    </body>
    </BrowserRouter>
  )
}

export default App;
