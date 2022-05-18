
import React from 'react';
/*import reactDOM for proper linkage*/

import ReactDOM  from 'react-dom';

/*for app component, after start server in terminal*/
import App from './App'

/*import the index.css file*/
import './index.css'


/*to render the app*/

ReactDOM.render(<App/>,document.querySelector('#root'))

/*move to create app component in src file*/

