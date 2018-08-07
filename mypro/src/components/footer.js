import React from 'react'
import '../css/footer.css'
import ZyImgmsga from '../images/msg1.png'
import ZyImgmsgb from '../images/msg2.png'
import ZyImgmsgc from '../images/msg3.png'
import ZyImgmsgd from '../images/msg4.png'

import ZyImgxina from '../images/xina.jpg'

import ZyImgtx from '../images/tx.jpg'
import ZyImgwx from '../images/wx.jpg'
import ZyImggxy from '../images/gxy.gif'
class Footer extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className='Zy_footerS'>
					<div className='Zy_Fimg1'>
						<div className='Zy_Fi'>
							<img src={ZyImgmsga}/>
							<dl>
								<dt>个性组件</dt>
								<dd>万千用户智能组件</dd>
							</dl>
						</div>
						
						<div className='Zy_Fi'>
							<img src={ZyImgmsgb}/>
							<dl>
								<dt>个性组件</dt>
								<dd>万千用户智能组件</dd>
							</dl>
						</div>
						
						<div className='Zy_Fi'>
							<img src={ZyImgmsgc}/>
							<dl>
								<dt>个性组件</dt>
								<dd>万千用户智能组件</dd>
							</dl>
						</div>
						
						<div className='Zy_Fi'>
							<img src={ZyImgmsgd}/>
							<dl>
								<dt>个性组件</dt>
								<dd>万千用户智能组件</dd>
							</dl>
						</div>						
					</div>				
				</div>
				
				<div className='Zyfooter_zhong'>
					<div className='ZyFZg'>
						<dl>
							<dt>游客中心</dt>
							<dd><a href='#'>.免费注册</a></dd>
							<dd><a href='#'>.订单查询</a></dd>
							<dd><a href='#'>.投诉与建议</a></dd>
						</dl>
						
						<dl className='ZyFcuo'>
							<dt>游客中心</dt>
							<dd><a href='#'>.免费注册</a></dd>
							<dd><a href='#'>.订单查询</a></dd>
							<dd><a href='#'>.投诉与建议</a></dd>
						</dl>
						
						<dl className='ZyFcuo'>
							<dt>游客中心</dt>
							<dd><a href='#'>.免费注册</a></dd>
							<dd><a href='#'>.订单查询</a></dd>
							<dd><a href='#'>.投诉与建议</a></dd>
						</dl>
						
						
						<dl className='ZyFcuowu'>
							<dt>游客中心</dt>
							<dd>
								<img src={ZyImgxina}/>
								<a href='#'>.免费注册</a>							
							</dd>
							<dd>
								<img src={ZyImgtx}/>
								<a href='#'>.订单查询</a>
							</dd>
							<dd className='Zy_weiXing'>
								<img src={ZyImgwx}/>
								<a href='#'>.投诉与建议</a>
								<div className='Zy_weiBiao'>
									<div className='ZyWimg'></div>
								</div>
							</dd>
						</dl>
						<dl className='ZyGxy'>
							<dt>手机应用APP</dt>
							<img src={ZyImggxy}/>
						</dl>
					</div>
				</div>
				
				<div className='Zy_footerDi'>
					<div className='Zy_Ft'>
						<ul className='Zy_FtUl'>
							<li><a href='#'>关于我们</a></li>
							<li><a href='#'>关于我们</a></li>
							<li><a href='#'>关于我们</a></li>
							<li><a href='#'>关于我们</a></li>
							<li><a href='#'>关于我们</a></li>
						</ul>
						<div className='Zy_FtDl'>
							<div className='Zy_Fdl'>
								<dl className='Zy_Dl'>
									<dt></dt>
									<dd className='Zy_dd'>网络警察</dd>
									<dd>报警平台</dd>
								</dl>
								<dl className='Zy_Dl'>
									<dt></dt>
									<dd className='Zy_dd'>网络警察</dd>
									<dd>报警平台</dd>
								</dl>
								<dl className='Zy_Dl'>
									<dt></dt>
									<dd className='Zy_dd'>网络警察</dd>
									<dd>报警平台</dd>
								</dl>
								<dl className='Zy_Dl'>
									<dt></dt>
									<dd className='Zy_dd'>网络警察</dd>
									<dd>报警平台</dd>
								</dl>
							</div>
						</div>
						<div className='Zy_p'>
						<p>
               		 Copyright © 2008 - 2018,  517dv.com版权所有    ICP:B2-20100024-1
                广播电视节目制作经营许可证 增值电信业务经营许可证
                </p>
					</div>	
						
					</div>
					
				</div>
				
				
			</div>
		)
	}
}
export default Footer;