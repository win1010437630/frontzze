﻿import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Property from './Property';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Inform extends Component {
  render() {
    return (
      <Router>
      <div>
       <Route path="/Property" component={Property} />  
      <Route exact path="/Inform" render={() => ( 
      	<div className='x_pro'>
      		<div className='xx_property'>
      				<p>
      					通知
      					<Link to='/Property'>
                  <span className='left xx_shezhi'>
      					   返回
      				    </span>
                </Link>
      				</p>      				
      		</div>
      	</div>
      )}/>
    </div>
    </Router>
    );
  }
}

export default Inform;
