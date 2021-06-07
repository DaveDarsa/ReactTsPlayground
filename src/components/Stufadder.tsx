import React, { ChangeEvent, useState } from "react";

interface StufadderProps {
	people: Array<{ name: string; position: string }>;
	adder: React.Dispatch<Array<{ name: string; position: string }>>;
}

type changeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

type submitType = (event: React.FormEvent<HTMLFormElement>) => void;

export const Stufadder: React.FC<StufadderProps> = ({ people, adder }) => {
	const [name, setName] = useState<string>("");
	const [position, setPosition] = useState<string>("");

	const changeHandler: changeType = (event) => {
		if (event.target.name === "name") {
			setName(event.target.value);
		} else {
			setPosition(event.target.value);
		}
	};

	const submitHandler: submitType = (event) => {
		event.preventDefault();

		let newPerson: { name: string; position: string } = {
			name,
			position,
		};

		let newPeople = [...people, newPerson];
		adder(newPeople);
		setName("");
		setPosition("");
	};

	return (
		<form onSubmit={submitHandler}>
			<input type="text" name="name" value={name} onChange={changeHandler} />
			<label htmlFor="name">Name</label>
			<input
				type="text"
				name="position"
				value={position}
				onChange={changeHandler}
			/>
			<label htmlFor="position">Position</label>
			<input type="submit" hidden />
		</form>
	);
};
