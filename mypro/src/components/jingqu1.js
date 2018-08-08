import React from "react";
import $ from 'jquery'
import img1 from '../images/0.jpg'
import '../css/jingqu.css'
import Top from "./top";


class JingQu1 extends React.Component{
	constructor(props){
		super(props);
	}
	
	turnTo(index){
		console.log(index)
		$('.jingqu_tab').children().eq(index).attr('class','active').siblings().attr('class','');
		$('.jingdians').eq(index).css('display','block').siblings('.jingdians').css('display','none');	
	}
	
	componentDidMount(){
		$('.jingdians').eq(0).css('display','block').siblings('.jingdians').css('display','none');
	}
	
	render(){
		return (
			<div id="jingqu">
				<Top />
				<div className='zhutu'><img src='http://www.517dv.com/new/images/city/luoyang.jpg'/></div>
				<div className="hjc_qingqu_nav">
					<ul className="jingqu_tab">
						<li onClick={this.turnTo.bind(this,0)} className='active' >景点门票</li>
						<li onClick={this.turnTo.bind(this,1)}>特色住宿</li>
						<li onClick={this.turnTo.bind(this,2)}>当地美食</li>
						<li onClick={this.turnTo.bind(this,3)}>特色娱乐</li>
					</ul>
					<div className="jingqu_contation">
						<span className="span_btn">已选条件:</span>
						<span className="span_btn">价格↓</span>
					</div>
				</div>
				{/*景区1*/}
				<div className='hjc_qingqu_section'>
					<div className='jingdians'>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
					</div>
					<div className='jingdians'>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>鲁山大佛</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
					</div>
					<div className='jingdians'>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>尧山漂流</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
					</div>
					<div className='jingdians'>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>栾川鸡冠洞</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
						<div className='jingdian'>
							<img src={img1} />
							<div className='mid'>
								<p>下汤温泉度假村</p>
								<p>
									<span>平顶山</span>
									<span>|</span>
									<span>一年四季都能体验的水上 运动圣地</span>
								</p>
								<p>
									<span>温泉</span>
									<span>度假村</span>
									<span>河南</span>
									<span>平顶山</span>
									<span>下汤温泉度假村</span>
								</p>
								<p>
									平顶山鲁山县下汤镇
								</p>
							</div>
							<div className='right'>
								<span>$<strong>85</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>
					</div>
					<div className='jjingdians'>
						<h3>特色精选</h3>
						<div className='jjingdian'>
							<img src={img1} />
							<div>
								<p>下汤温泉度假村</p>
								<span>$<strong>85</strong></span>
								<span>$<strong>113</strong></span>
								<p>去看看&gt;&gt;</p>
							</div>
						</div>
						<div className='jjingdian'>
							<img src={img1} />
							<div>
								<p>下汤温泉度假村</p>
								<span>$<strong>85</strong></span>
								<span>$<strong>113</strong></span>
								<p>去看看&gt;&gt;</p>
							</div>
						</div>
						<div className='jjingdian'>
							<img src={img1} />
							<div>
								<p>下汤温泉度假村</p>
								<span>$<strong>85</strong></span>
								<span>$<strong>113</strong></span>
								<p>去看看&gt;&gt;</p>
							</div>
						</div>
						<div className='jjingdian'>
							<img src={img1} />
							<div>
								<p>下汤温泉度假村</p>
								<span>$<strong>85</strong></span>
								<span>$<strong>113</strong></span>
								<p>去看看&gt;&gt;</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}

export default JingQu1;
