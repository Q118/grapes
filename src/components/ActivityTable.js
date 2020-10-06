import React from "react";
import activities from "../utils/sampleActivities.json";
import "bootstrap/dist/css/bootstrap.css";


class ActivityTable extends React.Component {


	render() {
	
		return (
			<div className="container mt-4">
				<header className="headerContainer mb-2 pt-2 text-center">
					<h1>Medicinal activitys</h1>
				</header>

				<table className="table tableContainer table-hover">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Meaning</th>
							<th scope="col">Start</th>
							{/* <th scope="col">Suggestions</th>
							<th scope="col">Picture</th> */}
						</tr>
					</thead>
					<tbody>
						{activities.map((activity) => (
							<tr key={activity.id}>
								{/* <th scope="row">{activity.id}</th> */}
								<td>
									<strong>{activity.name}</strong>
								</td>
								<td>{activity.meaning}</td>
								<td>{activity.start}</td>
								{/* <td>
									{" "}
									<img alt={activity.Name} src={activity.Image} className="picture" />
								</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ActivityTable;


