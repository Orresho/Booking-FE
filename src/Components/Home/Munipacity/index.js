import React from "react";
import Select from 'react-select';

import './style.css';

const Munipacity = () => {
	const munipacityOptions = [
		{
			value: "växjö kommun",
			label: 'Växjö Kommun',
		},
		{
			value: "malmö Kommun",
			label: 'Malmö Kommun',
		},
		{
			value: "hultsfred kommun",
			label: 'Hultsfred Kommun',
		},
		{
			value: "jönköping kommun",
			label: 'Jönköping Kommun',
		},
	];
	
	return (
		<div className="Munipacity">
			<h2>Select your munipacity</h2>
			<div className="munipacity-select-bar">
				<Select options={munipacityOptions}/>
			</div>
		</div>
	);
}

export default Munipacity