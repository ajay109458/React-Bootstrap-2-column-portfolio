import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

class Project extends React.Component {

	render() {
		return (

				<div className="col-lg-6 portfolio-item">
          <div className="card h-100" >
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{this.props.title}</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
            </div>
          </div>
        </div>
		);
	}
}

export default Project
