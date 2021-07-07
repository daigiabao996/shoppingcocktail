import React from 'react'
import { Link, useHistory } from "react-router-dom";
import Modal from "../Modal/Modal"
import './MainLayout.css';

export default function MainLayout({ children }) {
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="sidebar__left">
          <Link to="/">Home</Link>
          <Modal />
        </div>
        <div className="sidebar__right">
          <button className="signout-btn" onClick={handleSignOut}>Log Out</button>
        </div>
      </div>
      {children}
    </div>
  )
}
