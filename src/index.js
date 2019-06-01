import React from 'react';
import ReactDOM from 'react-dom';

import ItemsView from './items.view'; // ex2 view
import Items from './items.model'; // ex2 model

import ColorSelector from './color'; //ex3


const store = new Items();
ReactDOM.render(<ItemsView itemsList={store}/>
    , document.getElementById('ex2'));

ReactDOM.render(<ColorSelector/>
    , document.getElementById('ex3'));
