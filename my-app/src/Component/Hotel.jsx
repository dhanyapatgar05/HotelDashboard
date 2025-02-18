import { FaUserCircle, FaLock, FaHome, FaConciergeBell, FaRegBookmark } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import "./Hotel.css"

export default function Hotel() {
  return (
    <div className="container">
      <div className="recommend-card">
        {/* User Info */}
        <div className="user-info">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5sFjZPx1Yzi1b9_FpQzrxqgsjv2DPAp81Q&s" alt="User" className="user-avatar" />
          <div>
            <h3 className="user-name">Joana Barros</h3>
            <p className="user-role">Hotel Guest</p>
          </div>
          <FaRegBookmark className="bookmark-icon" />
        </div>

        {/* Recommendation Section */}
        <h4 className="recommend-title">Recommended for you</h4>
        <div className="recommend-content">
          <img src="https://www.royal-hawaiian.com/the-abhasa-spa/images/img_main.webp" alt="Recommendation" className="recommend-image" />
          <div className="recommend-text">
            <span className="recommend-badge">From $30/person</span>
            <h5 className="recommend-heading">Enjoy some me time</h5>
            <p className="recommend-description">Relax with our massages and treatments.</p>
            <p className="recommend-info">Spa facilities will close in 4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};