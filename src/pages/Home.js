import React from 'react'
import Header from '../components/Header'
import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81Do0mpJa+L._SX3000_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates"
            price={11.96}
            rating={5}
            image={'https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg'}
          />
          <Product
            id="123451"
            title="Iron Flame (The Empyrean, 2)"
            price={24.68}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL210_SR195,210_.jpg'
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="123452"
            title="One Summer in Savannah: A Novel"
            price={18.46}
            rating={5}
            image={'https://m.media-amazon.com/images/I/41xoMUZaI4L.jpg'}
          />
          <Product
            id="123453"
            title="Something Unexpected"
            price={5.32}
            rating={5}
            image={'https://m.media-amazon.com/images/I/51OBA8nQaeL.jpg'}
          />
          <Product
            id="123454"
            title="Broken Play: False Start, Book 1"
            price={23.3}
            rating={5}
            image={
              'https://m.media-amazon.com/images/I/91BFnPa24hL._AC_UY327_FMwebp_QL65_.jpg'
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="123455"
            title="Controversial Essays"
            price={6.65}
            rating={5}
            image={'https://m.media-amazon.com/images/I/515yOxWF5pL.jpg'}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
