import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';

import Logo from '../../assets/images/Logo.svg';

import { Container, Navigation, Social } from './styles';

export default function Footer() {
  return (
    <Container>
      <Navigation>
        <div className="shop-nav">
          <p>
            <span>Shop</span>
          </p>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Kids</Link>
          <Link to="/">Accessories</Link>
        </div>
      </Navigation>
      <Social>
        <p>Our Social Medias</p>
        <div className="agroup">
          <AiFillFacebook size={32} />
          <AiOutlineInstagram size={32} />
          <AiFillTwitterCircle size={32} />
          <AiFillYoutube size={32} />
          <FaPinterest size={32} />
        </div>
        <img src={Logo} alt="" />
      </Social>
      <Navigation>
        <div className="help-nav">
          <p>
            <span>Help</span>
          </p>
          <Link to="/">My Account</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Customer Service</Link>
        </div>
      </Navigation>
    </Container>
  );
}
