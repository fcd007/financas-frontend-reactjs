import React from "react";

class Button extends React.Component {
  render() {
    return(
      <button className={this.props.className}>{this.props.title}</button>
    )
  }
}

export default Button;
