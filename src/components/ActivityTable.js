/** @format */

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActivitySquare from "./ActivitySquare";
import { ActivityContext } from "../App";

// each box should have a text area to be filled

export default function ActivityTable(props) {
    
    const { mappedActivities } = useContext(ActivityContext);
    
    const { id, name, meaning, start, suggestions } = props;

	return (
		<div>
			<Container className="activity--table__container">
				<Row>
					<Col className="box box--g">
    <h3>{mappedActivities[0]}</h3>
						<ActivitySquare />
					</Col>
					<Col className="box box--r">
						<h3>R</h3>
						<ActivitySquare />
					</Col>
					<Col className="box box--a">
						<h3>A</h3>
						<ActivitySquare />
					</Col>
				</Row>
				<Row>
					<Col className="box box--p">
						<h3>P</h3>
						<ActivitySquare />
					</Col>
					<Col className="box box--e">
						<h3>E</h3>
						<ActivitySquare />
					</Col>
					<Col className="box box--s">
						<h3>S</h3>
						<ActivitySquare />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
