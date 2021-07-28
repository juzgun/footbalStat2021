import state from "./redux/state"
import './index.css';
import reportWebVitals from './reportWebVitals';
import rerenderEntireTree from './render';

rerenderEntireTree(state);

reportWebVitals();
