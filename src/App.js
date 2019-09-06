import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sitebar from "./Components/Sitebar/Sitebar"
import Content from "./Components/Content/Content"
import Dialogs from "./Components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"


function App(props) {
  
  return (
    <BrowserRouter>
    <body className="grid">
       <Header />
       <Sitebar />
    <div className="app-wrapper-content">
        <Route path="/Content" render={ () => <Content post={props.state.dataPosts} 
            Newpost={props.state.dataPosts.text}
            dispatch = {props.dispatch}
            />} />
        <Route path="/Dialogs" render={ () => <Dialogs dialogs={props.state.dataMessages.arrayDialogs} 
            messages={props.state.dataMessages.arrayMessages} 
            dispatch = {props.dispatch}
            Newmessage={props.state.dataMessages.message}/>} />
    </div>
      
    </body>
    </BrowserRouter>
  )
}

export default App;
