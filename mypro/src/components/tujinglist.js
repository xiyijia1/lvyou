import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom";
import $ from 'jquery';
import '../css/tujing.css';
import Top from './top';
class Tujing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        	arr:[{
				"url":"http://www.517dv.com/public/images/default/photo/ad-pic_01.jpg",
				"title":"北京"
			},{
				"url":"http://www.517dv.com/public/images/default/photo/ad-pic_02.jpg",
				"title":"上海"
			},{
				"url":"http://www.517dv.com/public/images/default/photo/ad-pic_03.jpg",
				"title":"海南"
			},{
				"url":"http://www.517dv.com/public/images/default/photo/ad-pic_04.jpg",
				"title":"河南"
			},{
				"url":"http://www.517dv.com/public/images/default/photo/ad-pic_05.jpg",
				"title":"重庆"
			},{
				"url":"http://www.517dv.com/public/images/default/photo/ad-pic_06.jpg",
				"title":"浙江"
			}],
			arr1:[{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/12/32/80.m.jpg",
				"title":"木札岭云海",
				"eair":"河南　洛阳",
				"see":"127",
				"tit":"1",
				"heart":"37",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/05/74/24.small.jpg",
				"username":"翡冷翠的一夜",
				"time":"2012-06-7"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/18/90/62.m.jpg",
				"title":"069.jpg",
				"eair":"河南　安阳",
				"see":"112",
				"tit":"0",
				"heart":"26",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/08/54/20.small.jpg",
				"username":"羑里城",
				"time":"2013-02-17"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/12/32/76.m.jpg",
				"title":"瀑布",
				"eair":"河南　洛阳",
				"see":"97",
				"tit":"0",
				"heart":"17",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/05/74/24.small.jpg",
				"username":"翡冷翠的一夜",
				"time":"2012-06-7"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/20/01/19.m.jpg",
				"title":"海南三亚",
				"eair":"河南三亚",
				"see":"84",
				"tit":"2",
				"heart":"13",
				"url1":"http://www.517dv.com/public/images/user_pic.gif",
				"username":"小倾城",
				"time":"2012-06-7"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/12/32/80.m.jpg",
				"title":"木札岭云海",
				"eair":"河南　洛阳",
				"see":"127",
				"tit":"1",
				"heart":"37",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/05/74/24.small.jpg",
				"username":"翡冷翠的一夜",
				"time":"2012-06-7"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/18/90/62.m.jpg",
				"title":"069.jpg",
				"eair":"河南　安阳",
				"see":"112",
				"tit":"0",
				"heart":"26",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/08/54/20.small.jpg",
				"username":"羑里城",
				"time":"2013-02-17"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/12/32/76.m.jpg",
				"title":"瀑布",
				"eair":"河南　洛阳",
				"see":"97",
				"tit":"0",
				"heart":"17",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/05/74/24.small.jpg",
				"username":"翡冷翠的一夜",
				"time":"2012-06-7"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/20/01/19.m.jpg",
				"title":"海南三亚",
				"eair":"河南三亚",
				"see":"84",
				"tit":"2",
				"heart":"13",
				"url1":"http://www.517dv.com/public/images/user_pic.gif",
				"username":"小倾城",
				"time":"2012-06-7"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/18/90/62.m.jpg",
				"title":"069.jpg",
				"eair":"河南　安阳",
				"see":"112",
				"tit":"0",
				"heart":"26",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/08/54/20.small.jpg",
				"username":"羑里城",
				"time":"2013-02-17"
			},{
				"url":"http://www.517dv.com/upload/userphoto/00/00/00/12/32/76.m.jpg",
				"title":"瀑布",
				"eair":"河南　洛阳",
				"see":"97",
				"tit":"0",
				"heart":"17",
				"url1":"http://www.517dv.com/upload/avatar/00/00/00/05/74/24.small.jpg",
				"username":"翡冷翠的一夜",
				"time":"2012-06-7"
			}]
	}
}

	tap(){
		console.log("a")
	}






	componentDidMount(){
    		var _this = this;
    		var arrm = this.state.arr1;
    		console.log(arrm)
   			$(function(){
   				(function(){
	    			$(".zh-btn").on('click',function(){
			    		$(this).addClass("zh-active1").siblings().removeClass("zh-active1");
			    	})
	    		})()
   			
   				;(function(){
   					var dev = document.getElementsByClassName("zh-b-b-img");
   					var body = document.getElementsByTagName("body")[0];
   					var devWidth = dev[0].offsetWidth;
   					var Bottom = document.getElementsByClassName("zh-b-bottom")[0];
   					var Achild = Bottom.children[1];
   					var Had = document.getElementsByClassName("zh-b-bottom")[0].offsetWidth;
   					var Htop = document.getElementsByClassName("zh-b-bottom")[0].offsetTop;
   					var col =  Math.floor(Had/devWidth);
   					var ml = 15;
   					var mt = 15;
   					var arr = [];
   					var str = "";
   					for(var i = 0; i < col; i++){
							dev[i].style.top = 0;
							dev[i].style.left = (devWidth+ml)*i + "px";
							arr.push(dev[i].offsetHeight);
						}
   					for(var i = col; i < dev.length; i++){
   						dev[i].style.left = dev[getMinIndex(arr)].style.left;
   						dev[i].style.top = arr[getMinIndex(arr)] + mt + "px";
   						arr[getMinIndex(arr)] = arr[getMinIndex(arr)] + dev[i].offsetHeight + mt;
   					}
   				
   				
   				window.onscroll = function(){	
   						var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   						var clien = document.documentElement.clientHeight;
   						/*if(scrollTop > arr[getMinIndex(arr)] - clien + Htop){
   							for(var i = 0; i < _this.state.arr2.length; i++){
   								arrm.push(_this.state.arr2[i]);
   								_this.setState({arr1:arrm});
   							}
   							console.log(arrm)
   							for(var j = dev.length - _this.state.arr1.length ; j < dev.length ; j++){
   								dev[j].style.left = dev[getMinIndex(arr)].style.left
   								dev[j].style.top = arr[getMinIndex(arr)] + "px";
   								arr[getMinIndex(arr)] = arr[getMinIndex(arr)] + dev[j].offsetHeight;
   							}
   							
   							
   						}*/
   					}
   				
   			function getMinIndex(arr){
				var minVal = Math.min.apply(null,arr);
				var minIndex = arr.indexOf(minVal);
				return minIndex;
			}
   				})()
   			})    	
    }

    render(){
        return(
            <div>
            	<Top />
                <div id="zh-con">
                {/* 头部开始 */}
                    <div className="zh-top">
                        <b>图景</b>
                        <div className="zh-right">
                            <input type="text" placeholder="搜景区图片"/>
                            <button>搜索</button>
                        </div>
                    </div>
                {/* 头部结束 */}
                {/* 中间部分start */}
                <div className="zh-center">
                <div className="zh-c-left">
                    <div className="zh-c-l-top">
                        <p>按地区</p>
                        <button className="zh-active">全部</button>
                    </div>
                    <div className="zh-c-l-bottom">
                        <p>按主题</p>
                        <button className="zh-active">全部</button>
                        <button className="zh-active">温泉</button>
                        <button className="zh-active">滑雪</button>
                        <button className="zh-active">探险</button>
                        <button className="zh-active">滑草</button>
                        <button className="zh-active">徒步</button>
                        <button className="zh-active">登山</button>
                        <button className="zh-active">骑马</button>
                        <button className="zh-active">高尔夫</button>
                        <button className="zh-active">漂流</button>                        
                        <button className="zh-active">赏花</button>
                        <button className="zh-active">影视基地</button>
                        <button className="zh-active">自驾</button>
                        <button className="zh-active">农家乐</button>
                        <button className="zh-active">其他</button>
                    </div>
                </div>
                {/*  右边部分start   */}
                <div className="zh-c-right">
                <Router>
                	<div>
		                {
		                   	this.state.arr.map(function(item,i){
		                   		return(
		                   			<div key={i} className="zh-c-r-img">
			                   			<Link to={"/home/"+item.title}>
			                   				<img src={item.url}/>
			                   				<span>{item.title}</span>
		                   				</Link>
		                  			</div>
		                   		)
		                   		})
		                  }               
                	</div>
                </Router>
                </div>
                {/*  右边部分end   */}
                </div>                
                {/* 中间部分结束 */}
                
                {/* 下部分startr */}
                
				<div className="zh-bottom">
					<div className="zh-b-top">
						<span className="zh-active1 zh-btn" >最热</span>
						<span className="zh-btn">最新</span>
						<i></i>
						<span></span>
					</div>
						{/* top结束*/}
					<div className="zh-b-bottom">
						<div className="zh-b-b-img">
							<button className="zh-active">全部</button>
							<button className="zh-active">美景</button>
							<button className="zh-active">景色迷人</button>
							<button className="zh-active">古镇</button>
							<button className="zh-active">乌镇</button>
							<button className="zh-active">栖霞山</button>
							<button className="zh-active">凤凰</button>
							<button className="zh-active">夜色</button>
							<button className="zh-active">普吉岛实景</button>
							<button className="zh-active">行程记录</button>
							<button className="zh-active">实景拍摄</button>
							<button className="zh-active">桥</button>
						</div>
						<Router>
							<div>
								{
									this.state.arr1.map(function(item,i){
										return(			
											<div key={i} className="zh-b-b-img">
												<Link to={"/home/"+item.title}>
													<img src={item.url} />
													<p className="zh-tit">
														<span>{item.title}</span><span>{item.eair}</span>
													</p>
													<p className="zh-tit1">
														<em></em><span>{item.see}</span>
														<em></em><span>{item.tit}</span>
														<em></em><span>{item.heart}</span>
													</p>
													<div className="zh-tit2">
														<img src={item.url1} />
														<span>{item.username}</span>
														<span>{item.time}</span>
														<em></em>
													</div>
												</Link>
											</div>
										)
									})
								}
							</div>
						</Router>
					</div>
				</div>
				{/* 下部分end */}

                </div>
            </div>
        )
   } 
}
export default Tujing;