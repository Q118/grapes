/** @format */

import React, { useContext } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import ActivitySquare from "./ActivitySquare";
import { ActivityContext } from "../App";

// each box should have a text area to be filled

export default function ActivityTable({activities}) {
	const { handleActivityAdd } = useContext(ActivityContext);

	// const { id, name, meaning, start, suggestions } = props;

	return (
		<div className="activity__table">
			<div>
				{activities.map((activity) => {
					return <ActivitySquare key={activity.id} {...activities} />;
				})}
			</div>
		</div>
	);
}
