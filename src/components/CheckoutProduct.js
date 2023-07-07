import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="p" />

      <div className="checkoutProduct__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
