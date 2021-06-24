import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FEuNL37kVsWEp80rtCQktifZGsBbEVwA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    state = {
      reviews: []
    }

    render() {
      return (
        <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }

    componentDidMount() {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          this.setState({
            reviews: data.results
          })
        })
    }
  }

  export default LatestMovieReviewsContainer 