import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { Container, Cart, Logo, NavBar, Profile, ImgContainer } from './styles';

import logoImg from '../../assets/images/Logo.svg';

export default function Header() {
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
            <span>1 item</span>
          </div>
          <FiShoppingCart size={36} color="#2e2e2e" />
        </Cart>
      </NavBar>
    </Container>
  );
}
