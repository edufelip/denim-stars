import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiUser, FiSearch } from 'react-icons/fi';
import { TiShoppingCart } from 'react-icons/ti';
import { Container, Cart, Logo, NavBar, Profile, ImgContainer } from './styles';

import logoImg from '../../assets/images/Logo.svg';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const cartNumber = cart.length === 1 ? '1 item' : `${cart.length} items`;
  return (
    <Container>
      <Logo>
        <ImgContainer>
          <Link to="/">
            <img src={logoImg} alt="DenimStars" />
          </Link>
        </ImgContainer>
        <Profile>
          <form action="/" method="POST">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <FiSearch size="20" />
            </button>
          </form>
          <FiUser size="30" color="#2e2e2e" />
        </Profile>
      </Logo>
      <NavBar>
        <Link to="/">Masculine</Link>
        <Link to="/">Feminine</Link>
        <Link to="/">Kids</Link>
        <Link to="/">Shoes</Link>
        <Link to="/">Accessories</Link>
        <Link to="/">Blog</Link>
        <Cart to="/cart">
          <div>
            <strong>My Cart</strong>
            <span>{cartNumber}</span>
          </div>
          <TiShoppingCart size={36} color="#2e2e2e" />
        </Cart>
      </NavBar>
    </Container>
  );
}
