import React from "react"
import $ from "jquery"
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"
import '../css/regist.css';
import Top from "./top"
import qurl4 from "../images/tu.png"
import qurl5 from "../images/aa_r1_c7_s1.jpg"

class Regist extends React.Component{
	constructor(props){
		super(props)
	}
	change(){
		function jisuan(){
			 var code="";
			function createCode(){
				var codeLength = 4;//验证码的长度   
       			var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"a","b","c","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
       			for(var i=0;i<codeLength;i++){
       				var chaIndex = Math.floor(Math.random()*61);
       				code+=selectChar[chaIndex];
       			}
       			if (code.length != codeLength){
       				
					createCode();
				}

				$(".qyg_tu").html(code)
			}
			createCode();
		};
		jisuan()
	}
	
	
	tap(){
		var _this = this;
		function validate(){					
			if($(".qyg_yzm").val().length<=0){
				alert("请输入验证码！");
				return false;
			}
			else if($(".qyg_yzm").val() != $(".qyg_tu").text()){
				alert("验证码输入错误！");
				this.change()
				return false;
			}
			else{
				$.ajax({
					type:"post",
					url:"http://127.0.0.1:8000/regist",
					data:{phoneNum:$(".phoneNum").val(),psw:$(".psw").val()},
					
					success:function(data){
						if(data==1){
						
							alert("注册成功");
							_this.props.history.push("/login")
						}else{
							alert("账号已存在")
						}
					}					
				})
				return true;
			}

		}
		validate();
	}
	
	render(){
		return(
			
			<div>
				<Top />
				<div className="qyg_rout">
					<p className="qyg_rtit"><span>新用户注册</span></p>
					<div className="qyg_reg">
					
						<div>
							<p>
								<label className="qyg_ps">&nbsp;&nbsp;&nbsp;用户名:</label>
								<input type="text" placeholder='邮箱/手机号码' className="qyg_inp phoneNum"/>
							</p>
							<p>
								<label className="qyg_ps" className="qyg_ps">创建密码:</label>
								<input type="password" placeholder="输入密码" className="qyg_inp psw" />
							</p>
							<p>
								<label className="qyg_ps">确认密码:</label>
								<input type="password" placeholder="输入密码" className="qyg_inp" />
							</p>
							<p>
								<label className="qyg_ps">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昵称:</label>
								<input type="text" placeholder="昵称" className="qyg_inp"/>
							
							</p>
							<p>
								<label className="qyg_ps">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别:</label>
								<input type="radio" name="sex" value="男"   className="qyg_sex" />男&nbsp;&nbsp;&nbsp; 
								<input type="radio" name="sex" value="女" className="qyg_sex"/>女
							
							</p>
							<p>
							
								<label className="qyg_ps">&nbsp;&nbsp;&nbsp;所在地:</label>
								<select className="qyg_sel">
									<option>中国</option>
									<option>英国</option>
									<option>美国</option>
									<option>澳大利亚</option>
								
								</select>
								<select className="qyg_sel">
									<option>请选择省份</option>
									<option>福建</option>
									<option>浙江</option>
									<option>山东</option>
								
								</select>
								<select className="qyg_sel">
									<option>请选择城市</option>
									<option>泉州</option>
									<option>厦门</option>
									<option>福州</option>
								
								</select>
								
								
							</p>
							<p className="qyg_all">
								<label className="qyg_ps">&nbsp;&nbsp;&nbsp;验证码:</label>
								<input type="text" placeholder="验证码" className="qyg_yzm"/>
								<span className="qyg_tu">qZ69</span>
								<strong onClick={this.change.bind(this)}>换一换</strong>
							</p>
							<div className="qyg_rbtn">
								<button onClick={this.tap.bind(this)}>同意以下协议并注册</button>
							
							</div>
							<p className="qyg_xy">旅视网旅游服务协议</p>
						
						
						</div>
					</div>
					
				</div>
			
			
			</div>
		)
	}
	
}


export default Regist;