import React from "react"
import $ from "jquery"
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"
import '../css/gouwuche.css';
import qurl1 from "../images/logoyg.jpg"

class Gouwu extends React.Component{
	
	constructor(props){
		super(props)
	}
	
	tap(){
		this.props.history.push("/home")
	}
	exit(){
		this.props.history.push("/login")
	}
	
	render(){
		return(
			
			
			<div>
				<div className="qyg_nav">
					<div className="qyg_shop">
						<div className="qyg_shopr">
							<span>judjy</span>
							<b>: 您好，欢迎来到国内最大个性化旅游定制平台！</b>
							<button className="qyg_exit" onClick={this.exit.bind(this)}>[退出]</button>
						</div>
						<ul>
							<li onClick ={this.tap.bind(this)}>返回首页 </li>
							<li>我的订单 </li>
							<li className="qyg_gx">我的个性游
								<ul className="qyg_erji">
									<li>我的消息</li>
									<li>我的订单</li>
									<li>我的收藏</li>
									<li>个人中心</li>
								</ul>
							
							</li>
							<li>收藏 </li>
							<li>帮助</li>
						</ul>
					</div>
				</div>
				<div className="qyg_out">
					<div className='qyg_top'>
						<div><img src={qurl1} /></div>
						<div className="qyg_right">
							<span>1.我的购物车</span>
							<span>2.支付</span>
							<span>3.完成</span>
						</div>
					</div>
					<div className="qyg_down">
						<div className="qyg_tab">
							<strong>产品名称</strong>
							<strong>旅视价</strong>
							<strong>数量</strong>
							<strong>小计</strong>
							<strong>操作</strong>
							
						</div>
						<div>
							<ul>
								<li>
									<div className="qyg_data">
										<span>大洛阳美丽的风景线</span>
										<i className="qyg_lvshi">80元</i>
										<div className="qyg_caozuo">
											<button className="qyg_btn">-</button>
											<input type="text" id="qyg_ipt" disabled  value="1"/>
											<button className="qyg_btn">+</button>
										</div>
										<i className="qyg_danjia">80元</i>
										
										<button className="qyg_del">删除</button>
									</div>
									<div>
										<p className="qyg_pro">
											<span> &lt;回到首页</span>
											<strong>商品总计:</strong>
											<b>80</b>
										</p>
										<div className="qyg_prodowm">
											<span>输入代金券密码:</span>
											<input type="text" id="qyg_txt"/>
											<button className="qyg_add">添加</button>
											<span className="qyg_djq">已有代金券:</span>
											<select>
												<option>请选择已有代金券</option>
											
											</select>
											
											<span className="qyg_youhui">优惠说明</span>
											<strong>优惠:</strong>
											<b>80</b>
										</div>
									</div>
									
									<div>
										<p className="qyg_pro">
											<span>联系人</span>
											
										</p>
										<div className="qyg_prodowm">
											<span>*手机号码: </span>
											<input type="text" id="qyg_phone"/>
											
											<span className="qyg_djq">(请正确填写您的手机号，用于免费接收旅视手机订单验证码，它是您线下消费的唯一凭证。)</span>
											
										</div>
									</div>
									<div className="qyg_all">
										<span>订单金额合计: </span>
										<strong>8000</strong>
										<button className="qyg_next">下一步</button>
									</div>
								</li>
							</ul>
						</div>
					
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		$(".qyg_gx").hover(function(){
			console.log($(".qyg_gx").children("li"))
			$(".qyg_erji").show()
		},function(){
			$(".qyg_erji").hide()
		})
		
		
		$(".qyg_gx").children(".qyg_erji").children("li").hover(function(){
			
			$(this).css({background:"pink"})
		},function(){
			$(this).css({background:"white"})
		})
		
		
		$(".qyg_gx").parent("ul").children("li").hover(function(){
			$(this).css({color:"green"})
		},function(){
			$(this).css({color:"#000"})
			
		})
		
				
	}
	
	
	
}

export default Gouwu;
