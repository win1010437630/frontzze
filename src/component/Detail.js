﻿import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/detail.css'
import $ from 'jquery'


class Wl_detail extends Component {
  componentDidMount(){
    $('.wl_close').click(function(){
        window.history.go(-1)
    })
  }
  render() {
    return (
      <div className="Wl_detail">
      	   <div className="wl_dtit">
                <Icon type="close" className="wl_close"/>
                详情
           </div>
           <div className="wl_dcon">
                <p>
                  尊敬的业主您好尊敬的业主您好尊尊敬的业主您好尊敬的业主您好尊尊敬的业主您好尊敬的业主您好尊
                </p>
                <p>
                  尊敬的业主您好尊敬的业主您好尊尊敬的业主您好尊敬的业主您好尊尊敬的业主您好尊敬的业主您好尊
                </p>
                <span className="wl_dtime">2016-09-01 15:00:12</span>
           </div>
	     </div>
    );
  }
}

export default Wl_detail;
