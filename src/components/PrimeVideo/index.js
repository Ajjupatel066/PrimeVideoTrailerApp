// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movies-slider-container">
        <h1 className="slider-title">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
        <h1 className="slider-title">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
