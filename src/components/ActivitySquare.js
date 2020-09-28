/** @format */

import React, { useContext } from "react";
import { ActivityContext } from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


export default function ActivitySquare(props) {
	//set up the initial state to hold name and activity
	const { handleRecipeSelect } = useContext(ActivityContext);

	const { id, name, meaning, start } = useContext(ActivityContext);

	// **To do* add in suggestions into props//

	return (
		<div className="activity__square">
			<div className="activity__header">
				<div className="activity__title">
					<h3>{name}</h3>
				</div>
				<div className="edit--button__container">
					<button
						className="btn btn--primary mr-1"
						onClick={() => handleRecipeSelect(id)}>
						<FontAwesomeIcon icon={faEdit} />
					</button>
				</div>
    <div className="activity__meaning"><h4>{meaning}</h4></div>       
            </div>
            <div className="activity__row"></div>

			<textarea
				type="activity"
				name="activity"
				className="activity__input"
				placeholder={meaning}
			/>
		</div>
	);
}

// corelated with proper selectedID
