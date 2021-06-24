import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FEuNL37kVsWEp80rtCQktifZGsBbEVwA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
      reviews: [],
      searchTerm: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            reviews: data.results
          })
        })
    }

    render() {
      return (
        <div>
          <MovieReviews reviews={this.state.reviews} />
          <form onSubmit={this.handleSubmit}>
            <div>
                <input 
                    type="text" 
                    name="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}></input>
            </div>
            <div>
                <button type="submit">Search</button>
            </div>
          </form>

        </div>
      )
    }


  }

  export default SearchableMovieReviewsContainer 