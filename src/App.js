import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sitebar from "./Components/Sitebar/Sitebar"
import Content from "./Components/Content/Content"
import Dialogs from "./Components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"


function App(props) {
  debugger
  return (
    <BrowserRouter>
    <body className="grid">
       <Header />
       <Sitebar />
    <div className="app-wrapper-content">
        <Route path="/Content" render={ () => <Content post={props.state.ArrayPosts} 
            Newpost={props.state.ArrayPosts.text}
            dispatch = {props.dispatch}
            />} />
        <Route path="/Dialogs" render={ () => <Dialogs dialogs={props.state.ArrayMesseges.ArrayDialogs} 
            messeges={props.state.ArrayMesseges.ArrayMesseges} 
            dispatch = {props.dispatch}
            Newmessege={props.state.ArrayMesseges.messege}/>} />
    </div>
      
    </body>
    </BrowserRouter>
  )
}

export default App;
