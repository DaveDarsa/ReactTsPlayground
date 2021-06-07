import React, { useState, useContext } from "react";
import { Stufadder } from "./components/Stufadder";
import { Stufflist } from "./components/Stufflist";
import {
	UserContext,
	UserContextProvider,
} from "./contexts/UserContextProvider";

interface person {
	name: string;
	position: string;
}

const App: React.FC = () => {
	const { isLoggedIn, logInOrout } = useContext(UserContext);

	const [people, setPeople] = useState<person[] | []>([]);

	return (
		<div className="App">
			<UserContextProvider>
				<Stufflist people={people} />
				<Stufadder adder={setPeople} people={people} />
			</UserContextProvider>
		</div>
	);
};

export default App;
