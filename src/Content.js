import React from 'react';
import Project from './Project.js'
import {Row, Col, Grid} from 'react-bootstrap'

class Content extends React.Component {
	render() {

		var projects = [];
		for(var i = 0; i < 6; i++ ) {
			projects.push(<Project title={"Project " + (i+1)}/>);
		}

		return (
			<Grid>
				<Row>
					<Col sm={12}>
						<h1>Page Heading <small> Secondary Text </small></h1>
					</Col>
				</Row>
        <div className="row">
				    {projects}
        </div>
			</Grid>
		);
	}
}

export default Content;
