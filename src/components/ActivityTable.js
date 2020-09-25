/** @format */

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ActivitySquare from "./ActivitySquare";

// each box should have a text area to be filled

export default function ActivityTable() {
	return (
		<div>
			<Container className="activity--table__container">
				<Row>
                    <Col className="box box--g">

                       <h3>G</h3>
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
