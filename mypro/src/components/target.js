import React from "react"
import $ from "jquery"
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"

import Top from "./top";
import "../css/target.css"

import tuijian1 from '../images/tuijian1.jpg'
import tuijian2 from '../images/tuijian2.jpg'
import tuijian3 from '../images/tuijian3.jpg'
import tuijian4 from '../images/tuijian4.jpg'
import tuijian5 from '../images/tuijian5.jpg'


import Mock from "mockjs"
import targetJia from "../data/targetT"

Mock.mock("http://www.jiatarget.com",targetJia)




class Target extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	
	componentDidMount(){
		$.ajax({
			type:"get",
			url:"http://www.jiatarget.com",
			dataType:"json",
			async:true,
			success:function(data){
				var str ="";
				for(var i = 0 ;i <data.user.length;i++){
					var len = data.user[i].address.length;
					if(len>2){
						var a = data.user[i].address.slice(0,len-1)
					}else{
						var a = data.user[i].address
					}
					str+=`<li>
									<span>${a}</span>
								</li>`
				}
				
				$(".remen_left_conul").html(str)
			}
		});
		
		$(".dangji_con1,.dangji_con_right").hover(function(){
			$(this).children(".dangji_tit").animate({"left":"0px"},500)
			$(this).children(".dangjia_footer").animate({"bottom":"0px"},500)
		},function(){
			$(this).children(".dangji_tit").animate({"left":"-100px"},500)
			$(this).children(".dangjia_footer").animate({"bottom":"-44px"},500)
		})
	}
	
	render(){
		return(
			
			<div>
				<Top/>
				<div className="remen">
					<div className="remen_left">
						<h3>旅游热门目的地</h3>
						<div className="remen_left_con">
							<ul className="remen_left_conul">
								
							</ul>
						</div>
					</div>
					<div className="remen_right">
						<div className="remen_right_con">
						
						</div>
					</div>
				</div>
				<div className="dangji">
					<h4>当季推荐</h4>
					<div className="dangji_con">
						<div className="dangji_con_left">
							<div className="dangji_con1">
								<img src={tuijian1}/>
								<div className="dangji_tit">
									洛阳
								</div>
								<div className="dangjia_footer">
									<span>洛阳白马寺</span>
									<em>￥55起</em>
								</div>
								
							</div>
							<div className="dangji_con1">
								<img src={tuijian2}/>
								<div className="dangji_tit">
									青岛
								</div>
								<div className="dangjia_footer">
									<span>青岛海泉湾度假区海洋温泉</span>
									<em>￥55起</em>
								</div>
							</div>
							<div className="dangji_con1">
								<img src={tuijian3}/>
								<div className="dangji_tit">
									上海
								</div>
								<div className="dangjia_footer">
									<span>上海东方明珠电视台</span>
									<em>￥55起</em>
								</div>
							</div>
							<div className="dangji_con1">
								<img src={tuijian4}/>
								<div className="dangji_tit">
									成都
								</div>
								<div className="dangjia_footer">
									<span>成都温江国色天香（乡）</span>
									<em>￥55起</em>
								</div>
							</div>
						</div>
						<div className="dangji_con_right">
							<img src={tuijian5}/>
							<div className="dangji_tit">
								北京
							</div>
							<div className="dangjia_footer">
								<span>北京杜莎夫人蜡像馆</span>
								<em>￥55起</em>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		
		)
	}

}
export default Target;
