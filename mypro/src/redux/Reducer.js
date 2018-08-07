
var Reducer=function(state,action){
	
	if(typeof state==='undefined'){
		return {}
	}
	
	switch (action.type){
		case 'ADD_TODO':
			state.name = action.text
			return state
			break;
		case 'DIZHI_TODO':
			state.address = action.text
			return state
			break;
		default:
			return state;
			break;
	}
	
	
}


export default Reducer;