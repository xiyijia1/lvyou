import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import $ from "jquery";




import "../css/shouye.css"
import 'antd/dist/antd.css';
import Top from "./top";

import { Carousel } from 'antd';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import menpiaoImg from '../images/menpiao.jpg'
import menpiao1 from '../images/menpiao1.jpg'
import menpiao2 from '../images/menpiao2.jpg'
import menpiao3 from '../images/menpiao3.jpg'
import menpiao4 from '../images/menpiao4.jpg'
import fuwu1 from '../images/fuwu1.jpg'
import fuwu2 from '../images/fuwu2.jpg'
import fuwu3 from '../images/fuwu3.jpg'
import fuwu4 from '../images/fuwu4.jpg'

import Mock from "mockjs"
import dataJia from "../data/shouyeP"
import menpiaoJia from "../data/menpiaoS"


Mock.mock("http://www.jia.com",dataJia)
Mock.mock("http://www.jiamenpiao.com",menpiaoJia)





class Shouye extends React.Component {
	constructor(props) {
		super(props)		
	}
		
	componentDidMount(){
		
		var flag = false;
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
		$(".showAll").click(function(){
			flag = !flag
			if(flag){
				$(".didianUl").children().show()
				$(this).css({"backgroundPositionX":-289+"px"})
			}else{
				$(".didianUl").children().hide()
				$(".didianUl").children().eq(0).show()
				$(".didianUl").children().eq(1).show()
				$(".didianUl").children().eq(2).show()
				$(this).css({"backgroundPositionX":-314+"px"})
			}
			
		})
		
		$(".close").click(function(){
			$(".didianList").hide()
		})
		$.ajax({
			type:"get",
			url:"http://www.jia.com",
			dataType:"json",
			async:true,
			success:function(data){
				var str ="";
				for(var i = 0 ;i <3;i++){
					str+=`<li>${data.user[i].address}</li>`
				}
				for(var i = 3 ;i <data.user.length;i++){
					str+=`<li style="display:none">${data.user[i].address}</li>`
				}
				$(".didianUl").html(str)
				$(".didianUl li").click(function(){
					$("#didian").val($(this).text())
				})
			}
		});
		
		$.ajax({
			type:"get",
			url:"http://www.jiamenpiao.com",
			dataType:"json",
			async:true,
			success:function(data){
//				var str1 = "";
//				for(var j=0;j<data.user.length;j++){
//					str1+=`<dl>
//							<dt><img src="${data.user[j].con.url}"/></dt>
//							<dd>
//								<h5>${data.user[j].con.tit}</h5>
//								<p>
//									<span>￥${data.user[j].con.nowPrice}</span>
//									<em>起</em>
//									<strong>价值￥${data.user[j].con.prePrice}</strong>
//								</p>
//							</dd>
//						</dl>`
//				}
//				$(".menpiao_con").html(str1)
			}
		});
		
	}
	
	
	
	render() {
		return(
			<div>
				<Top/>
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
								<div className="close">×</div>
								<ul className="didianUl">
									
								</ul>
								<div className="showAll" ></div>
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
				
				{/*---------门票开始-----------*/}
				<div className="menpiao">
					<div className="menpiao_tit">
						<div className="menpiao_titL">
							<h4>精选景点门票</h4>
							<img src={menpiaoImg}/>
						</div>
						<div className="menpiao_titR">
							<span>上海</span>
							<span>北京</span>
							<span>洛阳</span>
							<span>成都</span>
							<span>更多&gt;&gt;</span>
						</div>
					</div>
					<div className="menpiao_con">
						<dl>
							<dt><img src={menpiao1}/></dt>
							<dd>
								<h5>郑州绿博园</h5>
								<p>
									<span>￥26</span>
									<em>起</em>
									<strong>价值￥26</strong>
								</p>
							</dd>
						</dl>
						<dl>
							<dt><img src={menpiao2}/></dt>
							<dd>
								<h5>郑州江南春温泉</h5>
								<p>
									<span>￥108</span>
									<em>起</em>
									<strong>价值￥198</strong>
								</p>
							</dd>
						</dl>
						<dl>
							<dt><img src={menpiao3}/></dt>
							<dd>
								<h5>栾川鸡冠洞景区</h5>
								<p>
									<span>￥63</span>
									<em>起</em>
									<strong>价值￥94.5</strong>
								</p>
							</dd>
						</dl>
						<dl>
							<dt><img src={menpiao4}/></dt>
							<dd>
								<h5>郑州方特欢乐世界</h5>
								<p>
									<span>￥40</span>
									<em>起</em>
									<strong>价值￥60</strong>
								</p>
							</dd>
						</dl>
					</div>
					
				</div>
				{/*---------门票结束-----------*/}
				
				{/*---------服务开始-----------*/}
				<div className="fuwu">
					<div className="fuwu_tit">
						<h4>特色旅游服务</h4>
					</div>
					<div className="fuwu_con">
						<img src={fuwu1}/>
						<img src={fuwu2}/>
						<img src={fuwu3}/>
						<img src={fuwu4}/>
					</div>
				</div>
				
				{/*---------服务结束-----------*/}
			</div>
		)
	}
}

export default Shouye;