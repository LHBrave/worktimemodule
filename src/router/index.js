import React, { Component } from 'react';
import {BrowserRouter ,Route,Redirect} from 'react-router-dom';
import ItemList from '../pages/ItemList';
import WorkTimeApproval from '../pages/WorkTimeApproval';
import WorkTimeReport from '../pages/WorkTimeReport';
import Footer from '../components/Footer';


class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Route path = '/' component={Footer} />
                    <Redirect to = '/itemlist'/>
                    <Route path = '/itemlist' component={ItemList}/>
                    <Route path = '/worktimeapproval' component={WorkTimeApproval}/>
                    <Route path  = '/WorkTimeReport' component={WorkTimeReport}/>
                </BrowserRouter> 
        );
    }
}

export default Router;