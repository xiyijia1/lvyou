import React from "react"
import $ from "jquery"
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"
import '../css/login.css';
import Top from "./top"
import qurl4 from "../images/tu.png"
import qurl5 from "../images/aa_r1_c7_s1.jpg"
//----------------引入redux--------------------
import Action from '../redux/Action'
import Store from '../redux/Store'

class Login extends React.Component{
	constructor(props){
		super(props)	
	}
	
	save(){
		
	    Store.dispatch(Action(this.refs.ipt.value)) 	
	}


	send(){
		var _this =this;
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8000/login",
			data:{phoneNum:$(".qyg_bac1").val(),psw:$(".qyg_bac2").val()},
			success:function(data){
				if(data==1){
					alert("登陆成功")
					_this.save();	
					_this.props.history.push("/shouye")
					    
				}else{
					alert("账号密码不正确")
				}
			}
		});
		
	}
	render(){
		return(
			
			<div>
				<Top />
				<div className="qyg_lout">
					<p className="qyg_tit"><span>登录旅视云平台</span></p>
					<div className="qyg_log">
						<div className='qyg_leftl'>
							<p className="qyg_in">
								<label className="qyg_ym">用户名:</label>
								<input type = 'text' placeholder="会员/邮箱" className="qyg_bac1" ref="ipt"/>
								
							</p>
							<p className="qyg_in">
								<label className="qyg_ym">密  &nbsp;&nbsp;码:</label>
								<input type = 'password'  className="qyg_bac2"/>
								
							</p>
							<div className="qyg_aside">
								<p>
									<input type="checkbox" />
									<span>自动登录</span>
								</p>
								<strong>忘记密码</strong>
							</div>
							
							<div className="qyg_login">
								<button onClick={this.send.bind(this)}>登录</button>
							</div>
							<div className="qyg_link">
								<p>使用其他账号登录:</p>
								
								<ul>
									<li><a href=""><p className="qyg_qq">QQ</p></a></li>
									<li><a href=""><p className="qyg_bd">百度</p></a></li>
									<li><a href=""><p className="qyg_xl">新浪微博</p></a></li>
									<li><a href=""><p className="qyg_rr">人人网</p></a></li>
									<li><a href=""><p className="qyg_kx">开心网</p></a></li>
								
								</ul>
							</div>
						</div>
						<div className="qyg_mid"><img src={qurl5} /></div>
						<div className="qyg_leftp"><img src ={qurl4} /></div>
					</div>
				</div>
			
			
			</div>
		)
	}
	
}


export default Login;
