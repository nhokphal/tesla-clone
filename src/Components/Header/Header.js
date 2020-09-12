import React from 'react';
import '../../Components/Header.css';
import logoUrl from 'src/Assets/logo.svg';

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
)
export default Header;