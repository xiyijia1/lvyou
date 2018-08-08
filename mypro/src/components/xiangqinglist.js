import React from 'react'
import $ from 'jquery'
import '../css/zhxiangqing.css'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import Top from './top'
class Xiangqing extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			arr:[{
				  "city":"郑州绿博园",
				  "url":"http://www.517dv.com/upload/2015/09/09/235efca33ce4d55d4509dd1c9726798f.jpg",
				  "price":"26",
				  "pingfen":"4.7分",
				  "address":"河南省郑州市郑开大道与人文路交汇向南2000米",
				  "tit":"景区入园门票一张。观光小火车、自行车、游船、观光塔、餐饮等需另外收费",
				  "shprice":"￥30",
				  "url1":"http://www.517dv.com/new/images/index/logo.jpg",
				  "tit1":"郑州绿博园是一座国内一流的大型生态主题公园；是一处汇聚了国内不同地域民俗民风和历史文化内涵的生态文化园林；是集海内外低碳及绿化 新科学、新技术、新品种于一体的生态建设成果展示 基地，郑州•中国绿化博览园如一座绿色丰碑，记载着生 态文明建设的辉煌业绩而镌刻于史册。中环是各类展园，系绿博园的精华荟萃带。外环为整个园区的背景森林带。",
				  "url2":"http://www.517dv.com/upload/2015/09/09/1441779073128360.jpg",
				  "url3":"http://www.517dv.com/upload/2015/09/09/1441779092527786.jpg",
				  "url4":"http://www.517dv.com/upload/2015/09/09/1441779106919179.jpg",
				  "url5":"http://www.517dv.com/upload/2015/09/09/1441779119517822.jpg",
				  "url6":"http://www.517dv.com/upload/2015/09/09/1441779130812418.jpg",
				  "url7":"http://www.517dv.com/upload/2015/09/09/1441779184442389.jpg"
				},{
				  "city":"郑州江南春温泉",
				  "url":"http://www.517dv.com/upload/2015/09/09/80dbcdfc3564384ccc09abf29b2b9a63.jpg",
				  "price":"130",
				  "pingfen":"4.2分",
				  "address":"河南省郑州市荥阳市近郊江山路与北四环交叉口向西七公里",
				  "tit":"石板浴、海盐浴、沙滩排球、四季恒温游泳池、大型海啸温泉造浪。",
				  "shprice":"￥168",
				  "url1":"http://www.517dv.com/new/images/index/logo.jpg",
				  "tit1":" 气候渐冷，去泡温泉是最佳挑选。温泉的热影响使人肌肉、关节放松，扩大血管，推进血液循环，到达消除疲惫，加快人体推陈出新的效果。特别的，泉流中所含的丰厚矿物质，有软化角质、美白肌肤等多种效果，放松身心的一起还有保健收成，可谓一举多得。在现代医学看来，温泉的保健效果是通过热影响和其间所含的丰厚化学物质来完成的。热影响和泡热水澡的道理是相通的，温泉能“治百病”的隐秘正在于其间所含的丰厚矿物质。依据其所含矿物质的差异，对人体的保健效果也大不相同。",
				  "url2":"http://www.517dv.com/upload/2015/09/09/1441770614543158.jpg",
				  "url3":"http://www.517dv.com/upload/2015/09/09/1441776755136622.jpg",
				  "url4":"http://www.517dv.com/upload/2015/09/09/1441777199485430.jpg",
				  "url5":"http://www.517dv.com/upload/2015/09/09/1441777351819521.jpg",
				  "url6":"http://www.517dv.com/upload/2015/09/09/1441777466179294.jpg",
				  "url7":"http://www.517dv.com/upload/2015/09/09/1441777803256441.jpg"
				},{
				  "city":"郑州香缇湾温泉",
				  "url":"http://www.517dv.com/upload/2015/09/09/d8436a4dbac9015f10740d375e498272.jpg",
				  "price":"120",
				  "pingfen":"4.2分",
				  "address":"郑州市中原西路商隐路交叉口向北300米路东",
				  "tit":"包括室内外温泉、休息大厅、乒乓球、台球、健身房、网吧、时令水果等。晚上12点以后休息大厅需另行收取38元",
				  "shprice":"￥168",
				  "url1":"http://www.517dv.com/new/images/index/logo.jpg",
				  "tit1":"香堤湾温泉是集温泉养生、休闲度假、商务会议、住宿、餐饮、娱乐等多种功能为一体的大型游闲项目,温泉的温泉水为饮浴双用的纯天然高温矿泉水，富含多种有益于人体健康的矿物质和微量元,不同的温泉池课大道不同的效果。",
				  "url2":"http://www.517dv.com/upload/2015/09/09/1441781594818590.jpg",
				  "url3":"http://www.517dv.com/upload/2015/09/09/1441781607534806.jpg",
				  "url4":"http://www.517dv.com/upload/2015/09/09/1441781617425892.jpg",
				  "url5":"http://www.517dv.com/upload/2015/09/09/1441781632162954.jpg",
				  "url6":"http://www.517dv.com/upload/2015/09/09/1441781644105350.jpg",
				  "url7":"http://www.517dv.com/upload/2015/09/09/1441781665127794.jpg"
				},{
				  "city":"郑州方特欢乐世界",
				  "url":"http://www.517dv.com/upload/2015/09/09/8f84b78b79df4f3fa8ebedc5759e7394.jpg",
				  "price":"210",
				  "pingfen":"4.7分",
				  "address":"郑开大道与人文路交叉口向南(绿博园北门正对面)",
				  "tit":"郑州方特欢乐世界门票一张,往返直通车车费，导服",
				  "shprice":"￥220",
				  "url1":"http://www.517dv.com/new/images/index/logo.jpg",
				  "tit1":"公园建在郑开大道与人文路交叉口向南，绿博园正对面。公园的内容涵盖现代科技、科学幻想、神话传说、历史文化、主题表演等多个方面，形式新颖、内容丰富，适合不同年龄层游客的需要。项目惊险刺激、富有文化内涵，参与性、体验性强。公园设计年游客接待能力为250万人次",
				  "url2":"http://www.517dv.com/upload/2015/09/09/1441759074923784.jpg",
				  "url3":"http://www.517dv.com/upload/2015/09/09/1441759189135852.jpg",
				  "url4":"http://www.517dv.com/upload/2015/09/09/1441759291526624.jpg",
				  "url5":"http://www.517dv.com/upload/2015/09/09/1441760162686646.jpg",
				  "url6":"http://www.517dv.com/upload/2015/09/09/1441759764390002.jpg",
				  "url7":"http://www.517dv.com/upload/2015/09/09/1441760376313668.jpg"
				}],
			obj:""
		}
	}
	
	
	componentWillMount(){
		
		var arr1 = this.state.arr;
		var str = "郑州方特欢乐世界";
		console.log(str == arr1[0].city)
		for(var i = 0; i < arr1.length ; i++){
			if(arr1[i].city == str){
				this.setState({obj:arr1[i]})
			}
		}
	}	
	
	componentDidMount(){
		var _this = this;
		(function(){
			$(window).scroll(function(){
				var scrollTop = $(this).scrollTop();
				if(scrollTop > 500){
					$(".zh-list").css({"position":"fixed","top":"0"})
				}else{
					$(".zh-list").css("position","relative")
				}
				$(".zh-move-list").each(function(){
					if(scrollTop >= $(this).offset().top - 300){
							var index = $(this).index();
							index = index - 2;
							$(".zh-list li").eq(index).addClass("zh-active2").siblings().removeClass("zh-active2");
					}
				})
			})
			
			
			$(".zh-list li").click(function(){
				var index = $(this).index();
				index = index;
				$(this).addClass("zh-active2").siblings().removeClass("zh-active2");
				$("html,body").animate({"scrollTop":$(".zh-move-list").eq(index).offset().top-200},500);
				
			})
			
			
			
			
		})()
		
		
		
		
	}
	
	
	
	
	
	
	render(){
		console.log(this.state.obj)
		return(
			<div>
			<Top />
			<div id="xiangqinglist">
			
			{/* topstart */}
				<div id="zh-xq-top">
					<div className = "zh-x-left">
						<img src={this.state.obj.url} />
					</div>
					<div className = "zh-x-right">
						<h2>{this.state.obj.city}</h2>
						<div className="zh-price">
							<span>
								<span>￥</span>
								<span>{this.state.obj.price}</span>
							</span>
							<em>全网最低价</em>
						</div>
						<p>{this.state.obj.pingfen}</p>
						<p>
							<span>景点地址:</span>
							<span>{this.state.obj.address}</span>	
						</p>
						<p>
							<span>游玩时间:</span>
							<span>一天</span>
						</p>
						<p>
							<em></em>
							<span>分享到:</span>
							<a href="#" title="分享到qq空间" className="zh-kongjian"></a>
							<a href="#" title="分享到新浪微博" className="zh-xinlangweibo"></a>
							<a href="#" title="分享到人人网" className="zh-renrennet"></a>
							<a href="#" title="分享到腾讯微博" className="zh-tengxun"></a>
						</p>
					</div>
				</div>
			{/* top end*/}
			<ul className = "zh-list">
				<li className="zh-active2">门票预订</li>
				<li>景点简介</li>
				<li>交通指南</li>
				<li>附近特色住宿</li>
				<li>附近特色美食</li>
				<li>附近特色娱乐</li>
				<li>用户点评</li>
			</ul>
			{/* 列表*/}
			<div className="zh-tab zh-move-list">
				<div className="zh-tab-top">
					<span>供应商</span>
					<span>产品名称</span>
					<span>门票说明</span>
					<span>市场价</span>
					<span>优惠价</span>	
				</div>
				<div className="zh-tab-bottom">
					<img src={this.state.obj.url1} />		
					<a href = "#">{this.state.obj.city}</a>
					<p>{this.state.obj.tit}</p>
					<p>{this.state.obj.shprice}</p>
					<p>
						<span>￥</span>
						<span>{this.state.obj.price}</span>
						<span className="btn">加入购物车</span>
						<button className="btn1">购买</button>
					</p>
				</div>
			</div>
			
			{/* 列表结束*/}
			
			{/* 景区简介start*/}
				<div className = "zh-jqjianjie zh-move-list">
					<div className="zh-jq-left">
						<span>景区简介</span>
						<div className="zh-jq-left-bottom">
							<p>预定限制：游玩当天8：00前预定。。</p>
							<p>退订政策：如需退订，请提前联系在线客服或拨打免费电话400-6191-517</p>
							<p>门票有效期：2015年9月1日—2015年12月31日</p>
							<p>景区开放时间：淡季 (12月~3月)：09:00~17:00；旺季 (4月~11月)：08:30~18:00</p>
							<p>取票地点：景区北门售票处1号窗口换取门票入园</p>
							<p>入园凭证：预定成功手机短信为主</p>
							<p>免票人群：儿童身高1.4米(不含1.4米)以下免票；现役军人、革命伤残军人、70岁（不含）以上的老人等持有效证件免票。残疾人持残疾证件免票。</p>
							<p>优惠人群：60-69岁的老人持有效证件购票享受半票；1.4米以上的在校全日制学生凭本人学生证购票享受半票。</p>
							<em>{this.state.obj.tit1}</em>
							<img src={this.state.obj.url2}/>
							<img src={this.state.obj.url3}/>
							<img src={this.state.obj.url4}/>
							<img src={this.state.obj.url5}/>
							<img src={this.state.obj.url6}/>
							<img src={this.state.obj.url7}/>
						</div>
					</div>
					<div className="zh-jq-right">
						<p>特色精选</p>
						<div className="zh-jq-right-list">
							<img src="http://www.517dv.com/upload/2015/09/09/235efca33ce4d55d4509dd1c9726798f.jpg"/>
							<p>郑州绿博园</p>
							<p className="zh-j-r-l">
								<span>￥26</span>
								<a href="#">去看看</a>
							</p>
						</div>
					
					
						<div className="zh-jq-right-list">
							<img src="http://upload.17u.com/uploadfile/scenerypic_common/134_100/2012/08/24/2/2012082411563658815.jpg"/>
							<p>点点梦想城</p>
							<p className="zh-j-r-l">
								<span>￥30</span>
								<a href="#">去看看</a>
							</p>
						</div>
						
						
						
						
						<div className="zh-jq-right-list">
							<img src="http://upload.17u.com/uploadfile/scenerypic_common/134_100/2013/04/23/2/2013042314275331587.jpg"/>
							<p>中原影视城</p>
							<p className="zh-j-r-l">
								<span>￥80</span>
								<a href="#">去看看</a>
							</p>
						</div>
						
						
						
						
						<div className="zh-jq-right-list">
							<img src="http://upload.17u.com/uploadfile/scenerypic_common/134_100/2013/03/11/2/2013031117213973893.jpg"/>
							<p>神仙洞景区</p>
							<p className="zh-j-r-l">
								<span>￥30</span>
								<a href="#">去看看</a>
							</p>
						</div>
						
						
						<div className="zh-jq-right-list">
							<img src="http://upload.17u.com/uploadfile/scenerypic_common/134_100/2013/05/21/2/2013052109363214751.jpg"/>
							<p>郑州海洋馆</p>
							<p className="zh-j-r-l">
								<span>￥80</span>
								<a href="#">去看看</a>
							</p>
						</div>
					</div>
				</div>
			{/* 景区简介end */}
			
			
			{/* 交通指南start */}
				<div className="zh-jtzhinan zh-move-list">
					<h1>交通指南</h1>
				</div>
		{/* 交通指南end */}
			{/* 附近特色住宿start */}
				<div className="zh-tszhusu zh-move-list">
					<span>附近特色住宿</span>
					<div className = "zh-room">
						<h2>郑州香缇湾温泉 附近特色住宿</h2>
						<div className="zh-room-bottom">
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/21/60/93.5.jpg"/>
								<div>
									<a>茂隆旅馆</a>
									<p>点评:4.8分</p>
									<p>¥50元起</p>
								</div>
							</div>
						
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/21/61/05.5.jpg"/>
								<div>
									<a>[凯旋广场/百货楼]凌宇快捷酒店</a>
									<p>点评:4.5分</p>
									<p>¥80元起</p>
								</div>
							</div>
						
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/57/22.5.jpg"/>
								<div>
									<a>郑州吴家驿站精品酒店</a>
									<p>点评:4.6分</p>
									<p>¥328元起</p>
								</div>
							</div>
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/06/51.5.jpg"/>
								<div>
									<a>河南登封锦鹏生态酒店(行政标房)</a>
									<p>点评:4.9分</p>
									<p>¥668元起</p>
								</div>
							</div>
							
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/57/66.5.jpg"/>
								<div>
									<a>禅宗少林•照见山居——大床房/双人房</a>
									<p>点评：4.6分</p>
									<p>¥369元起</p>
								</div>
							</div>
							
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/57/59.5.jpg"/>
								<div>
									<a>禅宗少林•照见山居——香客房</a>
									<p>点评：4.6分</p>
									<p>¥139元起</p>
								</div>
							</div>
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/58/29.5.jpg"/>
								<div>
									<a>新元素主题酒店</a>
									<p>点评：4.3分</p>
									<p>¥116元起</p>
								</div>
							</div>
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/69/99.5.jpg"/>
								<div>
									<a>橡树5季酒店</a>
									<p>点评：4.3分</p>
									<p>¥299元起   </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/* 附近特色住宿end */}
			
			
			{/* 附近特色美食start */}
				<div className="zh-food zh-move-list">
					<span>附近特色美食</span>
					<div className = "zh-room">
						<h2>郑州香缇湾温泉 附近特色美食</h2>
						<div className="zh-room-bottom">
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/07/07.5.jpg"/>
								<div>
									<a>河南少林寺 下院永泰寺 素斋 10人桌全家平安宴</a>
									<p>点评：4.8分</p>
									<p>¥620元起</p>
								</div>
							</div>
				
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/07/07.5.jpg"/>
								<div>
									<a>河南少林寺 下院永泰寺 素斋 10人桌全家平安宴</a>
									<p>点评：4.5分</p>
									<p>¥620元起	</p>
								</div>
							</div>
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/63/28.5.jpg"/>
								<div>
									<a>郑州特味村生态园</a>
									<p>点评：4.0分</p>
									<p>¥392元起</p>
								</div>
							</div>
							
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/66/28.5.jpg"/>
								<div>
									<a>洛阳七品牛汤</a>
									<p>点评：4.0分</p>
									<p>¥21元起</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/* 附近特色美食end */}
			
			
			{/* 附近特色娱乐start */}
				<div className="zh-play zh-move-list">
					<span>附近特色娱乐</span>
					<div className = "zh-room">
						<h2>郑州香缇湾温泉 附近特色美食</h2>
						<div className="zh-room-bottom">
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/21/88/34.5.jpg"/>
								<div>
									<a>郑州方特欢乐世界</a>
									<p>点评：4.1分</p>
									<p>¥210元起</p>
								</div>
							</div>
					
					
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/21/88/39.5.jpg"/>
								<div>
									<a>孤柏渡成人票</a>
									<p>点评：4.5分</p>
									<p>¥75元起</p>
								</div>
							</div>
					
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/21/64/66.5.jpg	"/>
								<div>
									<a>江南春电子票</a>
									<p>点评：4.0分</p>
									<p>¥120元起	</p>
								</div>
							</div>
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/21/73/55.5.jpg"/>
								<div>
									<a>济源五龙口温泉成人电子门票</a>
									<p>点评：4.3分</p>
									<p>¥50元起	</p>
								</div>
							</div>
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/04/90.5.jpg"/>
								<div>
									<a>河南登封 禅宗少林音乐大典门票 送票到手 95元起</a>
									<p>点评：4.7分</p>
									<p>¥95元起</p>
								</div>
							</div>
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/35/15.5.jpg"/>
								<div>
									<a>郑州世纪欢乐园成人门票</a>
									<p>点评：4.1分</p>
									<p>¥120元起	</p>
								</div>
							</div>
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/04/90.5.jpg"/>
								<div>
									<a>河南登封 禅宗少林音乐大典门票 送票到手 95元起</a>
									<p>点评：4.5分</p>
									<p>¥95元起</p>
								</div>
							</div>
							<div>
								<img src="http://www.517dv.com/upload/bcproduct/00/00/00/01/57/30.5.jpg"/>
								<div>
									<a>《禅宗少林·音乐大典》实景演出 门票 贵宾区</a>
									<p>点评：4.5分</p>
									<p>¥348元起	</p>
								</div>
							</div>
						</div>					
					</div>
				</div>
			{/* 附近特色娱乐end */}
			
			
			
			
			{/* 用户点评start */}
				<div className="zh-dianping zh-move-list">
					<span>用户点评</span>
					<div>你还没有评价哦</div>
				
				</div>
			{/* 用户点评end */}
			
			
			</div>
		</div>
		)
	}
	
	
}

export default Xiangqing;