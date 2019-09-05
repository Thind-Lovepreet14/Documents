import React, { Component } from 'react';
export default class Default extends Component {
  render() {
    return(
      <React.Fragment>
          <div className="alert alert-danger text-center " role="alert">
            <p className="h1">ERROR : 404 <i className="fas fa-biohazard"></i></p>
            <p className="h5">The Requested URL &nbsp;
              <span className="text-info">
              {this.props.location.pathname}
            </span>
             &nbsp; does not exist !
           </p>
          </div>
      </React.Fragment>
    )
  }
}
