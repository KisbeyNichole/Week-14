import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

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
      reviews: [...prevState.reviews, { text: review, rating: this.state.rating }],
      rating: null,  // Clear the rating after adding a review
    }));
  };

  setRating = (rating) => {
    this.setState({ rating });
  };

  resetRating = () => {
    this.setState({ rating: null });
  };

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.img}
              alt={this.props.title}
            />
            <Carousel.Caption className="overLayTitle">
              <h4>{this.props.title} ({this.props.year})</h4>
              <p>{this.props.info}</p>
            </Carousel.Caption>
          </Carousel.Item>
          {this.state.reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={this.props.img}
                alt={this.props.title}
              />
              <Carousel.Caption className="overLayReview">
                <ReviewList reviews={[review]} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <ReviewForm addReview={this.addReview} resetRating={this.resetRating} /> {/* Pass resetRating here */}
          <Stars setRating={this.setRating} rating={this.state.rating} />
        </Card.Body>
      </Card>
    );
  }
}
