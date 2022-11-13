import { createSlice } from '@reduxjs/toolkit';



const slice = createSlice({
	name: 'user',
	initialState:{
		email: ''
	},
	reducers:{
		setEmail: (state, action)=>{
			if(action.type === 'SETEMAIL'){
				return {...state, email: action.payload.email};
			}
		}
	}
});

export const {setEmail} = slice.actions;
export default slice.reducer;