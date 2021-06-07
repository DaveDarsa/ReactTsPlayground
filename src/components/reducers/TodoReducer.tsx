type initType = { name: string; id: number }[];

interface Iaction {
	type: "ADD_TODO" | "DELETE_TODO";
	payload: string;
}

export const AdminReducer = (state: initType, action: Iaction) => {
	switch (action.type) {
		case "ADD_TODO":
			//
			// return [...state, { name: action.payload, id: Math.random() }];
			let updated = [...state, { name: action.payload, id: Math.random() }];
			return [...updated];
		// case "DELETE_TODO":
		// 	let filtered = state.filter((todo) => {
		// 		return todo.id !== action.payload;
		// 	});
		// 	return [];

		default:
			return [...state];
	}
};
