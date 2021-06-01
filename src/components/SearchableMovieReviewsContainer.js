import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'C83SGrCTUhkokFnblKaWs45qHRenEgyW'; // 2021-05-31 KKO generated
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        const searchTerm = this.state.searchTerm
        this.setState({
            searchTerm: ''
        })
        this.getFetchData(searchTerm)
    }
    getFetchData = searchTerm => {
        fetch(`${URL}&query=${searchTerm}`)
            .then(response => response.json())
            .then(({results}) => {
                this.setState({
                    reviews: results
                })
            })
    }
    render(){
        return (
            <div className="searchable-movie-reviews">
                <div>
                    <h2>Search for reviews</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="searchTerm" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
                        <input type="submit" />
                    </form>
                </div>
                <div>
                    <h2>Reviews found</h2>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;