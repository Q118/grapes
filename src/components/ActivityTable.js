/** @format */

import React from "react";
import activities from "../utils/sampleActivities.json";
import moment from "moment";
import Container from "react-bootstrap/Container";
import SuggestButton from "./SuggestButton"
import "../css/activity-table.css";

class ActivityTable extends React.Component {
	render() {
		return (
			<Container>
				<table className="table activity--table">
					<thead>
						<tr>
							<th scope="col">My GRAPES on {" "}
							{moment().format("MMMM Do YYYY")}
							</th>
						</tr>
					</thead>
					<tbody>
						{activities.map((activity) => (
							<tr key={activity.id} className="activity__row">
								<td className="name-meaning">
									<strong><h1>{activity.name}</h1></strong>
									{activity.meaning}
								</td>
								<td className="activity__description">
									<textarea
										placeholder={activity.start}
										className="activity__input"
										rows="3"
										cols="50"
									/>
								</td>
								<td>
									<SuggestButton />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Container>
		);
	}
}

export default ActivityTable;
