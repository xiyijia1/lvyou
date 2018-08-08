import React from "react";
import $ from 'jquery'
import img1 from '../images/0.jpg'
import '../css/jingqu2.css'
import { Pagination } from 'antd';
import createData from '../data/jingqu';
import Top from "./top";

createData();

class JingQu2 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			current:1
		}
	}
	
	turnTo(index){
		console.log(index)
		$('.jingqu_tab').children().eq(index).attr('class','active').siblings().attr('class','');
		$('.hjc_qingqu_section').eq(index).css('display','flex').siblings('.hjc_qingqu_section').css('display','none');	
	}
//	分页
	 onChange(page){
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	  }

	
	
	componentDidMount(){
		$('.hjc_qingqu_section').eq(0).css('display','flex').siblings('.hjc_qingqu_section').css('display','none');
		$.ajax({
			type:"get",
			url:"http://chaoge.com/getJingus",
			async:true,
			success:function(data){
				console.log(data);
			}
		});
	}
	
	render(){
		return (
			<div id="jingqu">
				<Top />
				<div className="hjc_qingqu_nav">
					<ul className="jingqu_tab">
						<li onClick={this.turnTo.bind(this,0)} className='active' >景点门票</li>
						<li onClick={this.turnTo.bind(this,1)}>门票+酒店</li>
						<li onClick={this.turnTo.bind(this,2)}>门票+美食</li>
						<li onClick={this.turnTo.bind(this,3)}>门票+娱乐</li>
					</ul>
					<div className="jingqu_contation">
						<span className="span_btn">已选条件:</span>
						<span className="span_contation" >天上飘过一头牛</span>
						<span className="span_btn">清空</span>
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
						<Pagination current={this.state.current} onChange={this.onChange.bind(this)} total={50} />
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
				{/*门票+酒店*/}
				<div className='hjc_qingqu_section'>
					<div className='hjc_jiudian'>
						<div className='left'>
							<div>
								<img src='http://www.517dv.com/upload/2014/08/14/3ce59bbe2d1a48ff4dc9ed487bc83631.jpg' />
								<span className='jiudian_title'>景点门票</span>
							</div>
							<a>洛阳龙门海洋馆</a>
							<select>
								<option>成人票(电子票)</option>
							</select>
						</div>
						<span>+</span>
						<div className='mid'>
							<div>
								<img src='http://www.517dv.com/upload/bcproduct/00/00/00/21/61/75.5.jpg' />
								<span className='jiudian_title'>当地酒店</span>
							</div>
							<a>龙门鸿展宾馆</a>
							<select>
								<option>单间</option>
								<option>双间</option>
							</select>
							<p>距景区1公里以内</p>
						</div>
						<span>=</span>
						<div className='right'>
							<span>$150.00</span>
							<span>$188.00</span>
							<button>购买菜单</button>
						</div>
					</div>
					<div className='hjc_jiudian'>
						<div className='left'>
							<div>
								<img src='http://www.517dv.com/upload/2014/08/14/3ce59bbe2d1a48ff4dc9ed487bc83631.jpg' />
								<span className='jiudian_title' >景点门票</span>
							</div>
							<a>洛阳龙门海洋馆</a>
							<select>
								<option>成人票(电子票)</option>
							</select>
						</div>
						<span>+</span>
						<div className='mid'>
							<div>
								<img src='http://www.517dv.com/upload/bcproduct/00/00/00/01/73/84.5.jpg' />
								<span className='jiudian_title'>当地酒店</span>
							</div>
							<a>龙门鸿展宾馆</a>
							<select>
								<option>单间</option>
								<option>双间</option>
							</select>
							<p>距景区1公里以内</p>
						</div>
						<span>=</span>
						<div className='right'>
							<span>$150.00</span>
							<span>$188.00</span>
							<button>购买菜单</button>
						</div>
					</div>
				</div>
				{/*门票+美食*/}
				<div className='hjc_qingqu_section'>
					<div className='hjc_jiudian'>
						<div className='left'>
							<div>
								<img src='http://www.517dv.com/upload/2014/08/14/3ce59bbe2d1a48ff4dc9ed487bc83631.jpg' />
								<span className='jiudian_title'>景点门票</span>
							</div>
							<a>洛阳龙门海洋馆</a>
							<select>
								<option>成人票(电子票)</option>
							</select>
						</div>
						<span>+</span>
						<div className='mid'>
							<div>
								<img src='http://www.517dv.com/upload/bcproduct/00/00/00/21/61/75.5.jpg' />
								<span className='jiudian_title'>当地酒店</span>
							</div>
							<a>龙门鸿展宾馆</a>
							<select>
								<option>单间</option>
								<option>双间</option>
							</select>
							<p>距景区1公里以内</p>
						</div>
						<span>=</span>
						<div className='right'>
							<span>$150.00</span>
							<span>$188.00</span>
							<button>购买菜单</button>
						</div>
					</div>
					<div className='hjc_jiudian'>
						<div className='left'>
							<div>
								<img src='http://www.517dv.com/upload/2014/08/14/3ce59bbe2d1a48ff4dc9ed487bc83631.jpg' />
								<span className='jiudian_title' >景点门票</span>
							</div>
							<a>洛阳龙门海洋馆</a>
							<select>
								<option>成人票(电子票)</option>
							</select>
						</div>
						<span>+</span>
						<div className='mid'>
							<div>
								<img src='http://www.517dv.com/upload/bcproduct/00/00/00/21/61/75.5.jpg' />
								<span className='jiudian_title'>当地酒店</span>
							</div>
							<a>龙门鸿展宾馆</a>
							<select>
								<option>单间</option>
								<option>双间</option>
							</select>
							<p>距景区1公里以内</p>
						</div>
						<span>=</span>
						<div className='right'>
							<span>$150.00</span>
							<span>$188.00</span>
							<button>购买菜单</button>
						</div>
					</div>
				</div>
				{/*门票+娱乐*/}
				<div className='hjc_qingqu_section'>
					<div className='hjc_jiudian'>
						<div className='left'>
							<div>
								<img src='http://www.517dv.com/upload/2014/08/14/3ce59bbe2d1a48ff4dc9ed487bc83631.jpg' />
								<span className='jiudian_title'>景点门票</span>
							</div>
							<a>洛阳龙门海洋馆</a>
							<select>
								<option>成人票(电子票)</option>
							</select>
						</div>
						<span>+</span>
						<div className='mid'>
							<div>
								<img src='http://www.517dv.com/upload/bcproduct/00/00/00/21/61/75.5.jpg' />
								<span className='jiudian_title'>当地酒店</span>
							</div>
							<a>龙门鸿展宾馆</a>
							<select>
								<option>单间</option>
								<option>双间</option>
							</select>
							<p>距景区1公里以内</p>
						</div>
						<span>=</span>
						<div className='right'>
							<span>$150.00</span>
							<span>$188.00</span>
							<button>购买菜单</button>
						</div>
					</div>
					<div className='hjc_jiudian'>
						<div className='left'>
							<div>
								<img src='http://www.517dv.com/upload/2014/08/14/3ce59bbe2d1a48ff4dc9ed487bc83631.jpg' />
								<span className='jiudian_title' >景点门票</span>
							</div>
							<a>洛阳龙门海洋馆</a>
							<select>
								<option>成人票(电子票)</option>
							</select>
						</div>
						<span>+</span>
						<div className='mid'>
							<div>
								<img src='http://www.517dv.com//upload/bcproduct/00/00/00/01/68/85.5.jpg' />
								<span className='jiudian_title'>当地酒店</span>
							</div>
							<a>龙门鸿展宾馆</a>
							<select>
								<option>单间</option>
								<option>双间</option>
							</select>
							<p>距景区1公里以内</p>
						</div>
						<span>=</span>
						<div className='right'>
							<span>$150.00</span>
							<span>$188.00</span>
							<button>购买菜单</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}

export default JingQu2;
