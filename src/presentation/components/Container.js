import React from "react";

class Container extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <fieldset>
              <div style={{ padding: "20px" }}></div>
              {this.props.children}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
