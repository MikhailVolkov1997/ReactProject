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
        <Route path="/Content" render={ () => <Content post={props.state.ArrayPosts} 
            AddPost={props.addPost} 
            updatePost={props.updatePost}
            textPost={props.state.text}
            />} />
        <Route path="/Dialogs" render={ () => <Dialogs dialogs={props.state.ArrayDialogs} 
            messeges={props.state. ArrayMesseges} 
            addMessege={props.addMessege}
            updateNewMessege={props.updateNewMessege}
            textMessege={props.state.messege}/>} />
    </div>
      
    </body>
    </BrowserRouter>
  )
}

export default App;
