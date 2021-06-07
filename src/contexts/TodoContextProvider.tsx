import React, { createContext, useReducer } from "react";
import { AdminReducer } from "../components/reducers/TodoReducer";

type conType = {
	todos: { name: string | number; id: number }[];
	dispatch: (obj: { type: string; payload: number | string }) => void;
};

const AdminContext = createContext<any>(null);

const initVal: { name: string; id: number }[] = [];

export const AdminContextProvider: React.FC = ({ children }) => {
	const [todos, dispatch] = useReducer(AdminReducer, initVal);
	return (
		<AdminContext.Provider value={{ todos, dispatch }}>
			{children}
		</AdminContext.Provider>
	);
};
