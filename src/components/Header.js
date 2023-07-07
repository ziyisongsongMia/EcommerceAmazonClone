import { React } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Input, Space } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useStateValue } from './StateProvider'

function Header() {
  const { Search } = Input
  const [{ basket }, dispatch] = useStateValue() //basket is state
  console.log(basket)

  const onSearch = (value) => console.log(value)
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png?w=1005"
          alt="amazonLogo"
        />
      </Link>

      <Search
        className="header__search"
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
      />

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Mia</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart ">
            <ShoppingCartOutlined fill="#E9D7C3" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}
export default Header
