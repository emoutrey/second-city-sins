import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import Intro from './Segments/Intro';
import Links from './Segments/Links';
import Groups from './Segments/Groups';
import Locations from './Segments/Locations';
import Calendar from './Segments/Calendar';
import Book from './Segments/Book';
import Guides from './Segments/Guides';
import Staff from './Segments/Staff';


ReactDOM.render((
<Router>
    <div>
        <Route path="/" component={Intro}/>
        <Route path="/" component={Links}/>
        {/* <Route path="/" component={Groups}/> */}
        <Route path="/" component={Locations}/>
        <Route path="/" component={Calendar}/>
        <Route path="/" component={Book}/>
        <Route path="/" component={Guides}/>
        <Route path="/" component={Staff}/>
    </div>
</Router>
), document.getElementById('root'));
registerServiceWorker();
