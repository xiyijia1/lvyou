import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"
import ZyImgqq from '../images/qq.jpg'
import ZyImgXina from '../images/xina.jpg'
import ZyImgLogo from '../images/logod.jpg'
import ZyImgPosition from '../images/position.jpg'
import ZyImgFuWu from '../images/tel.jpg'
import '../css/top.css'
import $ from "jquery"
//----------------引入redux--------------------
import Action from '../redux/Action'
import Store from '../redux/Store'


class Top extends React.Component{
	constructor(props){
		super(props)
		this.state={
			num:true,
			name:Store.getState()
		}
		this.onchange=this.onchange.bind(this);
	}
	onchange(){
		var data=Store.getState();
		this.setState({arr:data})
	}
	componentDidMount(){
		Store.subscribe(this.onchanges)
	}
	
	tap1(){
		console.log(this)
		this.props.history.push("/login")
		
		
	}
	tap2(){
		console.log(this)
		this.props.history.push("/regist")
	}
	
	ZyXl(){
		if(this.state.num){
			$('.Zy_xUl').css({display:'block'});
			this.setState({num:false});
		}else{
			$('.Zy_xUl').css({display:'none'});
			this.setState({num:true});
		}
	}
	ZyTs(){
		$('.Zy_xLli').text($('.ZyXli1').eq(0).text())
	}
	ZyJS(){
		$('.Zy_xLli').text($('.ZyXli1').eq(1).text())
	}
	
	render(){
		var _this = this;
		return(
			<div>
			{/*头部---最上*/}
				<div className='ZYtop_tou'>
					<div className='ZYcontainer'>
						<ul className='Zy_touUl'>
							<li className='Zy_TopLi1'>
								<span>游客:&nbsp;{this.state.name}</span>
								<span>您好，欢迎来到国内最大个性化旅游定制平台！</span>
							</li>
							<li className='Zy_TopLi2'>
								<a href='/'>
									<span><img src={ZyImgqq}/></span>
								</a>
							</li>
							<li className='Zy_TopLi3'>
								<a href='/'>
									<span><img src={ZyImgXina}/></span>
								</a>
							</li>
							<li className='Zy_TopLi4 zyt'>
								<div className='Zy_TopQt'>其他登录</div>
								<div className='ZyTop4'>
									<div className='ZyTop41 ZyT'>
										<a href='/'>百度登录</a>
									</div>
									<div className='ZyTop42 ZyT'>
										<a href='/'>开心登录</a>
									</div>
									<div className='ZyTop43 ZyT'>
										<a href='/'>人人登录</a>
									</div>
									
								</div>
							</li>
							<li className='Zy_TopLi5 zyt'>
								<div className='ZyTop5'><Link to="/login">登录</Link></div>
								<div className='ZyTop51'>
									<input type='text' id='ZyTopTxT' className='ZyTopTXT' placeholder='请输入邮箱或手机号'/><br/>
									<input type='password' id='ZyTopTexT' className='ZyTopTXT' placeholder='······'/><br/>
									<button id='ZyTopBtn'>登录</button>
								</div>
							</li>
							<li className='Zy_TopLi6 zyt'><Link to="/regist">注册</Link></li>
							<li className='Zy_TopLi7 zyt'>
								<div className='ZyTop71'>购物车<span>0</span>件</div>
							</li>
							<li className='Zy_TopLi8 zyt'>
								<div className='ZyTop81'>收藏</div>
							</li>
							<li className='Zy_TopLi9 zyt'>
								<div className='ZyTop81 ZyTop91'>帮助</div>
							</li>
						</ul>
					</div>				
				</div>
			{/*头部---中间*/}
			<div className='Zy_topZhong'>
				<div className='Zy_TopZtu'>
					<div className='Zy_TopLogo'>
						<a href='/'>
							<img src={ZyImgLogo}/>
						</a>
					</div>
					{/*中间小地图----定位*/}
					<div className='Zy_TopDw'>
						<div className='Zy_TopDw1'>
							<img src={ZyImgPosition}/>
							<a href='/'>成都</a>							
						</div>
					</div>
					{/*搜索*/}
					<div className='Zy_SouSuo'>
						<div className='Zy_SS'>
							<div className='Zy_xiaLa'>
								<ul className='Zy_xiaul'>
									<li className='Zy_xLli' onClick={this.ZyXl.bind(this)}>特色服务</li>
									<ul className='Zy_xUl'>
										<li className='ZyXli1' onClick={this.ZyTs.bind(this)}>特色服务</li>
										<li className='ZyXli1' onClick={this.ZyJS.bind(this)}>景点门票</li>
									</ul>
								</ul>
								<span className='Zy_spn'></span>
							</div>
							<div className='Zy_input'>
								<input type='text' id='Zy_Stext'/>
								<button className='Zy_Sbtn'>搜索</button>
							</div>
						</div>
					</div>
					<div className='Zy_fuwu'>
						
							<img src={ZyImgFuWu}/>
										
					</div>
					
				</div>
			</div>
			<div className='Zy_buv'>
				<div className='Zy_Buvn'>
					<ul>
						<li className='Zy_Bli1 BunZ'><a href='/'>首页</a></li>
						<li className='Zy_Bli2 BunZ'><a href='/'>目的地</a></li>
						<li className='Zy_Bli3 BunZ'><a href='/'>景区门票</a></li>
						<li className='Zy_Bli4 BunZ'><a href='/'>旅游视频</a></li>
						<li className='Zy_Bli5 BunZ'>
							<a href='/'>旅游百宝箱</a>
							<ul className='Zy_luyou'>
								<li className='Zy_luyou1 Zy_Ly'>图景</li>
								<li className='Zy_luyou2 Zy_Ly'>旅游攻略</li>
							</ul>	
							<p></p>
						</li>
						<li className='Zy_Bli6 BunZ'><a href='/'>手机客户端下载</a></li>
					</ul>
					<ul className='Zy_BunUl'>
						<li className='Zy_BunLi1 ZyBL'>我的旅行</li>
						<li className='Zy_BunLi2 ZyBL ZyBL1'>						
						<Link to="/login">登录</Link>
						<span></span>
						</li>
						<li className='Zy_BunLi3 ZyBL ZyBL1'><Link to="/regist">注册</Link></li>
					</ul>
				</div>
			</div>
			
			</div>
		)
	}
	
	
	
	componentDidMount(){
		
	}
	
	
}

export default Top;