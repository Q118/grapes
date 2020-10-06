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
								</td>
								<td className="activity__description">
									<textarea 
										placeholder={activity.start}
										className="activity__input"
										rows="4" cols="50"
									/>
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
