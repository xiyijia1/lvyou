import React, { Component } from 'react';
import './App.css';
import {Link,BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Regist from "./components/regist"
import Login from "./components/login"
import Shouye from "./components/shouye"
import Target from "./components/target"
import Tujinglist from "./components/tujinglist"
import Gouwuche from "./components/gouwuche"
import Xiangqinglist from "./components/xiangqinglist"

import Jingqu1 from "./components/jingqu1"
import Jingqu2 from "./components/jingqu2"
import Gonglue from "./components/gonglue"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        		<div>
        			<Switch>
        				<Route path="/regist" component={Regist}></Route>
        				<Route path="/login" component={Login}></Route>
        				<Route path="/shouye" component={Shouye}></Route>
        				<Route path="/target" component={Target}></Route>
        				<Route path="/jingqu1" component={Jingqu1}></Route>
        				
        				<Route path="/jingqu2" component={Jingqu2}></Route>
        				<Route path="/gonglue" component={Gonglue}></Route>
        				
        				
        				<Route path="/tujinglist" component={Tujinglist}></Route>
        				<Route path="/gouwuche" component={Gouwuche}></Route>
        				<Route path="/xiangqinglist/:id" component={Xiangqinglist}></Route>
        				
        				<Redirect to="/shouye" />
        			</Switch>
        		</div>
        		
        	</Router>
      </div>
    );
  }
}

export default App;
