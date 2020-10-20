import React from 'react';

const UserInput=(props)=>{
	 const inputstyle ={  // inline style
	 	border: '2px solid red'
	 }
	return(
	<input type="text" 
	 style={inputstyle} 
	onChange={props.changed}
	value={props.currentName}/>
	)
}

export default UserInput;