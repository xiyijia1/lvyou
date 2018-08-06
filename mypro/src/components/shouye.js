import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import $ from "jquery";



import "../css/shouye.css"
import 'antd/dist/antd.css';


import { Carousel } from 'antd';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'



class Shouye extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount(){
		$(".renshubtn").click(function(){
			$(this).css({backgroundPositionY:-101+"px"}).siblings().css({backgroundPositionY:0})
		})
		
		$(".shijianbtn").click(function(){
			$(this).css({backgroundPositionY:-161+"px"}).siblings().css({backgroundPositionY:-60+"px"})
		})
		$(".da").hover(function(){
			$(this).attr("class","da guo")
			$(this).children(".con").show();
			$(this).siblings(".da").children(".con").hide();
		},function(){
			
		})
//		$("#gexing").hover(function(){
//			$(this).css({"background":'url("../images/plan_right_1.png")'})
//		},function(){
//			
//		})
		
	}
	render() {
		return(
			<div>
				<Carousel autoplay>
				    <div><img src={banner1}/></div>
				    <div><img src={banner2}/></div>
				    <div><img src={banner3}/></div>
				    <div><img src={banner4}/></div>
				</Carousel>
				
				<div className="plan">
					<div className="plan_left">
						<h3>开始定制你的个性化旅游</h3>
						<div className="form_grop">
							<label htmlFor="didian">目的地</label>
							<input type="text" id="didian" placeholder="请选择或输入旅行地点或景点" />
							<div className="didianList">
								
							</div>
						</div>
						<div className="form_grop">
							<label>旅行人数</label>
							<div className="renshu_group">
								<button id="xuesheng" className="renshubtn"></button>
								<button id="qinglv" className="renshubtn"></button>
								<button id="jiating" className="renshubtn"></button>
								<button id="xiaotuandui" className="renshubtn"></button>
							</div>
						</div>
						<div className="form_grop">
							<label>旅行时间</label>
							<div className="shijian_group">
								<button id="yitian" className="shijianbtn"></button>
								<button id="liangtian" className="shijianbtn"></button>
								<button id="santian" className="shijianbtn"></button>
								<button id="santianduo" className="shijianbtn"></button>
							</div>
						</div>
						<div className="form_grop">
							<label></label>
							<div className="dingBtn">
								开始定制
							</div>
						</div>
					</div>
					
					<div className="plan_right">
						<div id="gexing" className="da">
							<h4>个性旅游</h4>
							<div className="ding"></div>
							<div className="con">
								<div id = "yi" className="con_top">
								</div>
								<p>1、输入您向往的目的地，定制特色的旅游产品。</p>
								<p>2、以特色旅游产品来满足您的任意个性释放。</p>
							</div>
						</div>
						<div id="dengyu" className="xiao"></div>
						<div id="tese" className="da">
							<h4>特色产品</h4>
							<div className="con">
								<div id = "er" className="con_top">
								
								</div>
								<p>1、提供大量的目的地城市、景点景区。</p>
								<p>2、提供全国各目的地的特色美食、特色住宿、特色娱乐，体验非凡的旅行。</p>
							</div>
						</div>
						<div id="jia" className="xiao"></div>
						<div id="ziyou" className="da">
							<h4>自由定制</h4>
							<div className="con">
								<div id = "san" className="con_top">
								
								</div>
								<p>1、根据自己的身体、时间、费用来定制旅游产品与服务。</p>
								<p>2、任意的单项与组合，随心所欲的完成私人旅游定制。</p>
							</div>

						</div>
						<div id="jia" className="xiao"></div>
						<div id="wanmei" className="da">
							<h4>完美体验</h4>
							<div className="con">
								<div id = "si" className="con_top">
								
								</div>
								<p>1、严格的审查，正规服务商的服务保证。</p>
								<p>2、未确认消费的旅游产品，随时退换。</p>
								<p>3、随时的互动分享，让您时时掌握目的地的最新情况。</p>
							</div>
						</div>
					</div>
					
					
				</div>
			</div>
		)
	}
}

export default Shouye;