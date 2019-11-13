
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import * as serviceWorker from './serviceWorker';
    import store from "./Redux/redux-store" 
    import {Provider} from "react-redux";
    import {BrowserRouter } from "react-router-dom"
import MainApp from './App';

    
    ReactDOM.render(
     <MainApp/>,
        document.getElementById('root'));


     serviceWorker.unregister();
    
    

    

