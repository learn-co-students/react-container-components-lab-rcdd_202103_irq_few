import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'x7GqqiLMgXbYMoxGjARZfnqfIDZGE42i';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearch = (e) => {
    e.preventDefault()

    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(json => this.setState({ ...this.state, reviews: json.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <input type="text" onChange={e => this.setState({...this.state, searchTerm: e.target.value})} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}