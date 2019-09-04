import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import State from "./State"
import {AddPost} from "./State"
import {updateNewPostText} from "./State"
import { addMessege} from "./State"
import { updateNewMessege} from "./State"


export let Render = () => {
ReactDOM.render(<App state={State} addPost={AddPost} 
    updatePost = {updateNewPostText}
    addMessege={addMessege}
    updateNewMessege={updateNewMessege}/>,
     document.getElementById('root'));
}

serviceWorker.unregister();
