import React, { Component } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.id = props.id;
    this.img = props.img;
    this.title = props.title;
    this.year = props.year;
    this.info = props.info;
  }

  render() {
    return (
      <div className="movie">
        <img width="100px" height="auto" src={this.img} alt={this.title} />
        <h4>{this.title} ({this.year})</h4>
        <p>{this.info}</p>
      </div>
    );
  }
}
