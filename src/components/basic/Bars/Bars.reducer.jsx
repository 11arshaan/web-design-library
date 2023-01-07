
export const barsState = {
    
};

export function barsReducer(state, action) {
	const {type, payload} = action;
	
	switch(type) {
	case "SET_WIDTH":
		return {...state, width: payload}
	}
}