import React from 'react'
import React, { useContext } from "react";
import { ActivityContext } from "../App";
import { v4 as uuidv4 } from "uuid";

export default function ActivityEdit({ activity }) {
	const { handleActivityChange, handleActivitySelect } = useContext(ActivityContext);


	function handleChange(changes) {
		//here we are overriding the name and activity with the name from changes and
		//we want to pass this to the handle activity change function
		handleActivityChange(activity.id, { ...activity, ...changes });
	}

	//very similar to function form app.js but applying to ingredients line 74..


	return (
		<div className="activity-edit">
			<div className="activity-edit__remove-button-container">
				<button
					className="btn recipe-edit__remove-button"
					// pass in undefined bc want to select nothing
					onClick={() => handleRecipeSelect(undefined)}>
					Done.
				</button>
			</div>
			<div className="activity-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					<span className="just-ed">Name</span>
				</label>
				<textarea
					type="name"
					name="activity"
					className="activity-edit__input"
					onChange={(e) => handleChange({ start: e.target.value })}
					value={activity.start}
					id="instructions"
				/>
			</div>
			<br />
		</div>
	);
}
