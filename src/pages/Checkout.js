import React from 'react'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct.js'
import './Checkout.css'
import { useStateValue } from './../components/StateProvider'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div>
      <Header />

      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty</h2>
          <p>
            You have no item in your basket. To buy one or "Add to basket" next
            to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Checkout
