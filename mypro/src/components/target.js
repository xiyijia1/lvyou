import React from "react"
import $ from "jquery"
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"




class Target extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	render(){
		return(
			
			<div>
				<h3>目的地</h3>
				<div className="qyg_left">
					<h4>旅游热门目的地</h4>
					<ul>
						<li>
							
						</li>
					
					</ul>
				
				</div>
								
			</div>
		
		)
	}
//	componentDidMount(){
//		var _this=this;
//		$.ajax({
//			type:"get",
//			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
//			async:true,
//			dataType:'jsonp',
//			success:function(data){
//
//				_this.setState({arr:data})
//			}
//		});
//	}
	
}
export default Target;
