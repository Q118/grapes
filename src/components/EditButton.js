/** @format */


import React, { useContext } from "react";
import { ActivityContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function EditButton({ id }) {
    const { handleActivitySelect } = useContext(ActivityContext);

	return (
		<div>
			<button
				className="btn btn--primary mr-1"
				onClick={() => handleActivitySelect(id)}>
				<FontAwesomeIcon icon={faEdit} />
			</button>
		</div>
	);
}
