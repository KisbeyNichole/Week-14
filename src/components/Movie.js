import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rating: null,
    };
  }

  addReview = (review) => {
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review],
    }));
  };

  setRating = (rating) => {
    this.setState({ rating });
  };

  render() {
    return (
      <div className="movie">
        <img width="100px" height="auto" src={this.props.img} alt={this.props.title} />
        <h4>{this.props.title} ({this.props.year})</h4>
        <p>{this.props.info}</p>
        <Stars setRating={this.setRating} />
        <ReviewList reviews={this.state.reviews} />
        <ReviewForm addReview={this.addReview} />
      </div>
    );
  }
}
