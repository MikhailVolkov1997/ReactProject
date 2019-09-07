import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sitebar from "./Components/Sitebar/Sitebar"
import Dialogs from "./Components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"
import ContentComponent from './Components/Content/ContentContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App(props) {
  
  return (
    <BrowserRouter>
    <body className="grid">
       <Header />
       <Sitebar />
    <div className="app-wrapper-content">
        <Route path="/Content" render={ () => <ContentComponent  store = {props.store} />} />
        <Route path="/Dialogs" render={ () => <DialogsContainer store={props.store}  /> }/>
    </div>
      
    </body>
    </BrowserRouter>
  )
}

export default App;
