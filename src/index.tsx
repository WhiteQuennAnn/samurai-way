import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";


rerenderEntireTree(state);


