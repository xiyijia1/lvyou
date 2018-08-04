import React from "react"
import $ from "jquery"
import {BrowserRouter as Router,Link,Switch,Redirect,Route} from "react-router-dom"
import url1 from '../images/shanghai.jpg'




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
				<img  className="pic"  src={url1} />
								
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
