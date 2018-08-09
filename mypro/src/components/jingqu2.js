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
			current:1,
			jingqus:[],
			jingquliebiao:[]
		}
	}
	
	turnTo(index){
		console.log(index)
		$('.jingqu_tab').children().eq(index).attr('class','active').siblings().attr('class','');
		$('.hjc_qingqu_section').eq(index).css('display','flex').siblings('.hjc_qingqu_section').css('display','none');	
	}
//	分页
	onChange(page){
	    this.setState({
	      current: page,
	    });
	    this.setState({
	    	jingquliebiao:this.state.jingqus.slice((page-1)*5,page*5)
	    })
	}

	
	
	componentDidMount(){
		var _this = this;
		$('.hjc_qingqu_section').eq(0).css('display','flex').siblings('.hjc_qingqu_section').css('display','none');
		$.ajax({
			type:"get",
			url:"http://chaoge.com/getJingus",
			async:true,
			success:function(data){
				var jingqus = JSON.parse(data).jingqu;
				_this.setState({
					jingqus:jingqus,
					jingquliebiao:jingqus.slice(0,5)
				})	
				
			}
		});
	}
	
	render(){
		var _this = this;
		var jingqus = [];
		this.state.jingquliebiao.map(function(item,i){
			jingqus.push(<div key={i} className='jingdian'>
							<img src={item.imgurl} />
							<div className='mid'>
								<p>{item.jiben.name}</p>
								<p>
									<span>{item.city}</span>
									<span>|</span>
									<span>{item.jiben.jieshao}</span>
								</p>
								<p>
									<span>{item.jiben.special[0]}</span>
									<span>{item.jiben.special[1]}</span>
									<span>{item.jiben.special[3]}</span>
									<span>{item.jiben.special[4]}</span>
									<span>{item.jiben.special[5]}</span>
								</p>
								<p>
									{item.county}
								</p>
							</div>
							<div className='right'>
								<span>$<strong>{item.price}</strong></span>
								<button>立即预订</button>
								<span>去看看&gt;&gt;</span>
							</div>
							<div className='jingdian_fuhao'>
								<span></span>
							</div>
						</div>)
		})
		var jingqus_jingxuan = [];
		this.state.jingqus.slice(6,11).map(function(item,i){
			jingqus_jingxuan.push(
				<div key={i} className='jjingdian'>
					<img src={item.imgurl} />
					<div>
						<p>{item.jiben.name}</p>
						<span>$<strong>{item.price}</strong></span>
						<span>$<strong>113</strong></span>
						<p>去看看&gt;&gt;</p>
					</div>
				</div>
			)
		})
		console.log(jingqus_jingxuan);
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
						{/*景区列表*/}
						{jingqus}
						<Pagination current={this.state.current}  pageSize={5} onChange={this.onChange.bind(this)} total={this.state.jingqus.length} />
					</div>
					<div className='jjingdians'>
						<h3>特色精选</h3>
						{jingqus_jingxuan}
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
