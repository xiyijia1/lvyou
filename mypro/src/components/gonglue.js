import React from 'react'
import '../css/gonglue.css'
import $ from 'jquery';
import Mock from 'mockjs';
import Top from "./top";

class Gonglue extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			provinces:[],
			flag1:false,
			flag2:false,
			zhuti:[
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				},
				{
					name:'避暑游',
					number:234
				}
			]
		}
	}
	
	zhankai1(){
		var span1 = $('#more1');
		if(!this.state.flag1){
			this.setState({
				flag1:true
			})
			span1.html('收起∧')
		}else{
			this.setState({
				flag1:false
			})
			span1.html('更多∨')
		}
	}
	zhankai2(){
		var span2 = $('#more2');
		if(!this.state.flag2){
			this.setState({
				flag2:true
			})
			span2.html('收起∧')
		}else{
			this.setState({
				flag2:false
			})
			span2.html('更多∨')
		}
	}
	
	componentDidMount(){
//		轮播
		(function(){
			var index = 0;
			var timer = setInterval(function(){
				index++;
				show();
			},2000);
			var lunbo_simgs = $('.gonglue_lunbo ul li').children('img');
			lunbo_simgs.css('opacity',.6);
			lunbo_simgs.hover(function(){
				clearInterval(timer);
				index = $(this).parent().index();
				$('.img_lunbo').hide().attr('src',lunbo_simgs.eq(index).attr('src')).show();
				lunbo_simgs.css('opacity',.6).parent().css('border',0);
				lunbo_simgs.eq(index).css('opacity',1).parent().css('border','1px solid gold');
			},function(){
				timer = setInterval(function(){
					index++;
					show();
				},2000);
			})
			function show(){
				if(index==lunbo_simgs.length){
					index=0;
				}
				$('.img_lunbo').fadeOut(function(){
					$(this).attr('src',lunbo_simgs.eq(index).attr('src')).fadeIn(500);
					lunbo_simgs.css('opacity',.6).parent().css('border',0);
					lunbo_simgs.eq(index).css('opacity',1).parent().css('border','1px solid gold');
				})
			}
		})();
		
//		获取省份数据
		var _this = this;
		$.ajax({
			type:"get",
			url:"http://chaoge.com/getProvinces",
			async:true,
			dataType:'json',
			success:function(data){
				_this.setState({
					provinces:data.provinces
				})
			}
		});
	}
	componentWillMount(){
		//	造数据
		Mock.mock('http://chaoge.com/getProvinces','get',{
			'provinces|40':[{
				'name':'@province',
				'number':'@integer(10,200)'
			}]
		})
	}
	
	render(){
		var _this = this;
		let arr_provinces = [];
		let arr_zhuti =[];
		if(this.state.flag1){
			_this.state.provinces.map(function(item,i){
				arr_provinces.push(<a key={i} href='#'>{item.name}({item.number})</a>)
			})
		}else{
			_this.state.provinces.slice(0,8).map(function(item,i){
				arr_provinces.push(<a key={i} href='#'>{item.name}({item.number})</a>)
			})
		}
		if(this.state.flag2){
			_this.state.zhuti.map(function(item,i){
				arr_zhuti.push(<a key={i} href='#'>{item.name}({item.number})</a>)
			})
		}else{
			_this.state.zhuti.slice(0,8).map(function(item,i){
				arr_zhuti.push(<a key={i} href='#'>{item.name}({item.number})</a>)
			})
		}
		
		
		return(
			<div id='hjc_gonglue'>
				<div className='hjc_gonglue_header'>
					<h3>景点攻略</h3>
					<div>
						<input type='text' />
						<button>搜索</button>
					</div>
				</div>
				<div className='hjc_gonglue_aside'>
					<div className='choose_city'>
						<span>当前城市:<strong>上海</strong></span>
						<select>
							<option>-选择城市-</option>
							<option>郑州</option>
							<option>杭州</option>
						</select>
					</div>
					<div className='haibao'>
						<div className='haibao_inner'>
							<img src='http://www.517dv.com/public/guides/63821460/a35f73ba939ec03c023dffbc8550a13e.jpg' />
							<p>景点攻略下载</p>
							<div>
								<img src='http://www.517dv.com/public/images/default/blog/guide/xz.png' />
								<img src='http://www.517dv.com/public/images/default/blog/guide/xz-1.png' />
							</div>
						</div>
					</div>
					<div>
						<img src='http://www.517dv.com/public/images/default/blog/guide/ss_s1.jpg'/>
					</div>
					<div className='special_jingxuans'>
						<h3>特色精选</h3>
						<div className='special_jingxuan'>
							<img src='http://upload.17u.com/uploadfile/scenerypic_common/134_100/2012/11/08/2/2012110815395729464.jpg' />
							<a>南江大峡谷</a>
							<div>
								<span>$115元</span>
								<img src='http://www.517dv.com/public/images/shop/list/qk_03.jpg' />
							</div>
						</div>
						<div className='special_jingxuan'>
							<img src='http://upload.17u.com/uploadfile/scenerypic_common/134_100/2013/06/17/2/2013061710094423205.jpg' />
							<a>白马峪温泉</a>
							<div>
								<span>$115元</span>
								<img src='http://www.517dv.com/public/images/shop/list/qk_03.jpg' />
							</div>
						</div>
						<div className='special_jingxuan'>
							<img src='http://upload.17u.com/uploadfile/scenerypic_common/134_100/2011/08/23/2/2011082315192269551.jpg' />
							<a>香火岩峡谷</a>
							<div>
								<span>$115元</span>
								<img src='http://www.517dv.com/public/images/shop/list/qk_03.jpg' />
							</div>
						</div>
						<div className='special_jingxuan'>
							<img src='http://upload.17u.com/uploadfile/scenerypic_common/134_100/2011/11/14/2/2011111414055636661.jpg' />
							<a>贵阳欢乐世界</a>
							<div>
								<span>$115元</span>
								<img src='http://www.517dv.com/public/images/shop/list/qk_03.jpg' />
							</div>
						</div>
					</div>
				</div>
				<div className='hjc_gonglue_section'>
					{/*轮播*/}
					<div className='gonglue_lunbo'>
						<img className='img_lunbo' src='http://www.517dv.com/upload/picad/00/00/00/00/06/89.0.jpg' />
						<ul>
							<li>
								<img src='http://www.517dv.com/upload/picad/00/00/00/00/06/89.0.jpg' />
							</li>
							<li>
								<img src='http://www.517dv.com/upload/picad/00/00/00/00/06/88.0.jpg' />
							</li>
							<li>
								<img src='http://www.517dv.com/upload/picad/00/00/00/00/06/87.0.jpg' />
							</li>
							<li>
								<img src='http://www.517dv.com/upload/picad/00/00/00/00/06/91.0.jpg' />
							</li>
						</ul>
					</div>
					{/*游记*/}
					<div className='gonglue_youji'>
						<div className='youji_header'>
							<img src='http://www.517dv.com/public/images/default/blog/guide/xt.png' />
							<span>全部旅游游记</span>
							<img src='http://www.517dv.com/public/images/default/blog/guide/ay.png' />
						</div>
						<div className='youji_nav'>
							<div className='hr1'>
								<span></span>
							</div>
							<div className='youji_area'>
								<span>地区</span>
								<div className='youji_provinces'>
									{arr_provinces}
								</div>
								<span id='more1' onClick={this.zhankai1.bind(this)}>更多∨</span>
							</div>
							<div className='youji_area youji_zhuti'>
								<span>主题</span>
								<div className='youji_provinces'>
									{arr_zhuti}
								</div>
								<span id='more2' onClick={this.zhankai2.bind(this)}>更多∨</span>
							</div>
						</div>
						{/*游记部分*/}
						<div className='youjis'>
							<div className='youjis_header'>
								<button>最热</button>	
								<button>最新</button>
							</div>
							<div className='youji'>
								<div className='youji_left'>
									<img src='http://www.517dv.com/upload/editorpic/13/59/00/65/71/8707/7da0cb22a3644681925a9c6ac7cd8ebd.jpg' />
									<div>
										<img src='http://www.517dv.com/upload/avatar/00/00/00/00/49/53.small.jpg' />
										<span>作者:狼道博客</span>
									</div>
								</div>
								<div className='youji_right'>
									<p>水晶般海浪的塞班岛</p>
									<p>那天女友来个电话说有个想法，想去看海！我因为去过国内好几个有海的城市，自己本身就居住在上海。对国内的海实在没有一点兴趣，说要去就跑的远一点，看看真正的蓝天大海，把手里的银子算了</p>
									<div className='youji_luxian'>
										<span>游记路线</span>
										<div>
											<img src='http://www.517dv.com/public/images/default/blog/guide/sa-1.png' />
											<span><strong className='liulan_number'>10222</strong>人浏览</span>
										</div>
									</div>
									<p className='youji_jingqu'>洛阳伏牛山风景区</p>
								</div>
							</div>
							<div className='youji'>
								<div className='youji_left'>
									<img src='http://www.517dv.com/upload/editorpic/13/59/00/65/71/8707/7da0cb22a3644681925a9c6ac7cd8ebd.jpg' />
									<div>
										<img src='http://www.517dv.com/upload/avatar/00/00/00/00/49/53.small.jpg' />
										<span>作者:狼道博客</span>
									</div>
								</div>
								<div className='youji_right'>
									<p>水晶般海浪的塞班岛</p>
									<p>那天女友来个电话说有个想法，想去看海！我因为去过国内好几个有海的城市，自己本身就居住在上海。对国内的海实在没有一点兴趣，说要去就跑的远一点，看看真正的蓝天大海，把手里的银子算了</p>
									<div className='youji_luxian'>
										<span>游记路线</span>
										<div>
											<img src='http://www.517dv.com/public/images/default/blog/guide/sa-1.png' />
											<span><strong className='liulan_number'>10222</strong>人浏览</span>
										</div>
									</div>
									<p className='youji_jingqu'>洛阳伏牛山风景区</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Gonglue;