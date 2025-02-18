import { FaUserCircle, FaLock, FaHome, FaConciergeBell } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";

export default function Hotel() {
  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <FaUserCircle className="icon" />
          <div>
            <h3 className="title">Joana Barros</h3>
            <p className="subtitle">Hotel Guest</p>
          </div>
        </div>
        {/* Recommended Section */}
        <div className="recommendation">
          <h4 className="recommend-title">Enjoy some me time</h4>
          <p className="recommend-text">Relax with our massages and treatments.</p>
          <span className="recommend-badge">From $30/person</span>
          <p className="recommend-info">Spa facilities will close in 4 hours</p>
        </div>
       </div>
    </div>
  );
};