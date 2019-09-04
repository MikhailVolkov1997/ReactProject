
    import * as serviceWorker from './serviceWorker';
    import State from "./State"
    import {Render} from "./render"

    Render(State);

    serviceWorker.unregister();

