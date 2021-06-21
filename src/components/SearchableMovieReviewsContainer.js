import React, { Component } from 'react';
  import 'isomorphic-fetch';
          import MovieReviews from './MovieReviews'
                    const NYT_API_KEY = '55354e1e031a4ddeb4aa0f48b1a13a54';
                             const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                                      + `api-key=${NYT_API_KEY}&query=`;
                         class SearchableMovieReviewsContainer extends Component {
                                        state = {
                                                searchTerm: '',
                                                         reviews: []
                                                         }
                           handleSearch = event =>this.setState({searchTerm: event.target.value});
                                              handleSubmit = event => {
                             event.preventDefault();
                                   fetch(URL.concat(this.state.searchTerm)).then(res => res.json()).then(res => this.setState({ searchTerm: res.results}));
                                  }
                                  render() {
                                        return (
                                            <div className="searchable-movie-reviews">
                                                           <form onSubmit={ this.handleSubmit }>
                                          <label htmlFor='search-input'>Search Movie Reviews</label>
                                       <input
                                           id='search-input'
                                                type="text"
                                               onChange={ this.handleSearch } />
                                                    <button type="submit">Submit</button>
                                                                               </form>
                                                          { this.state.reviews.length > 0 && <h2>Search for Movies:</h2> }
                                                                                     <MovieReviews reviews={ this.state.reviews } />
                                                                                  </div>
                                                                             );
                                                                      }
                                                                   }
                                 export default SearchableMovieReviewsContainer;
