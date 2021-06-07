import React, { createContext, useState } from "react";

type contType = {
	isLoggedIn: boolean;
	logInOrout: (newVal: boolean) => void;
};
const initValue: contType = {
	isLoggedIn: false,
	logInOrout: () => {},
};

export const UserContext = createContext<contType>(initValue);

export const UserContextProvider: React.FC = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

	const logInOrout = (logged: boolean): void => {
		if (logged) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
		console.warn(isLoggedIn);
	};

	return (
		<UserContext.Provider value={{ isLoggedIn, logInOrout }}>
			{children}
		</UserContext.Provider>
	);
};
