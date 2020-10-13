/** @format */

import React from "react";
import activities from "../utils/sampleActivities.json";
import moment from 'moment';
import Container from "react-bootstrap/Container";
import "../css/activity-table.css";

class ActivityTable extends React.Component {
	
	

	render() {

		

		return (
			<Container>
				<table className="table activity--table">
					<thead>
						<tr>
							<th scope="col">GRAPES</th>
		<th scope="col">on date{moment('20010704T120854').format('MMMM Do YYYY')}</th>
						</tr>
					</thead>
					<tbody>
						{activities.map((activity) => (
							<tr key={activity.id} className="activity__row">
								<td>
									<strong>{activity.name}</strong>
									<br />
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
							</tr>
						))}
					</tbody>
				</table>
			</Container>
		);
	}
}

export default ActivityTable;
