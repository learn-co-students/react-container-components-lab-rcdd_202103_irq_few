// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {

  return (
    <div className="review-list">
        {props.reviews.map(movie => {
          return <div className="review" key={movie.display_title}>
                <a href={movie.link.url}>{movie.headline}</a>
                <p>By: {movie.byline}</p>
                <hr></hr>
            </div>
      })}
    </div>

  )
}

export default MovieReviews 