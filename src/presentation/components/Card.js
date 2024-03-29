import React from "react";

class Card extends React.Component{
  render() {
    return (
        <div className={this.props.value !== undefined ? this.props.value : 'card mb-3'}>
          <h3 className='card-header' style={{paddingLeft: '30px'}}>{this.props.title}</h3>
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
      )
    }
}

export default Card;