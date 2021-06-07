import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

interface StufflistProps {
	people: Array<{ name: string; position: string }>;
}

export const Stufflist: React.FC<StufflistProps> = ({ people }) => {
	const { isLoggedIn, logInOrout } = useContext(UserContext);

	return (
		<div className="list">
			<header>I'm a header {isLoggedIn ? "Logged" : "NOT logged"}</header>
			<button onClick={() => logInOrout(!isLoggedIn)}>LOL WTF</button>
			{people.map((person) => {
				return (
					<div className="dude" key={Math.random()}>
						<p>{person.name}</p>
						<span>{person.position} lol</span>
					</div>
				);
			})}
		</div>
	);
};
