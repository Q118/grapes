/** @format */

import React from "react";
import activities from "../utils/sampleActivities.json";
import EditButton from "./EditButton";
import Container from "react-bootstrap/Container";
import "../css/activity-table.css";

class ActivityTable extends React.Component {
	render() {
		return (
			<Container>
				{/* <header className="headerContainer mb-2 pt-2 text-center">
					<h1>Medicinal activitys</h1>
				</header> */}

				<table className="table activity--table">
					<thead>
						<tr>
							<th scope="col">a</th>
							<th scope="col">a</th>
							{/* <th scope="col">Suggestions</th>
							<th scope="col">Picture</th> */}
						</tr>
					</thead>
					<tbody>
						{activities.map((activity) => (
							<tr key={activity.id}>
								<td>
									<strong>{activity.name}</strong>
									<br />
									{activity.meaning}
									<EditButton />
								</td>
								<td className="activity__description">
									{activity.start}
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
