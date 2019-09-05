
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import * as serviceWorker from './serviceWorker';
    import store from "./Redux/redux-store" 

    let Render = (state) => {
    ReactDOM.render(<App state={state}
         dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root'));
    }

    Render(store.getState());


    store.subscribe( () => {
        let state = store.getState();
        Render(state);
    });

     serviceWorker.unregister();
    
    

    

