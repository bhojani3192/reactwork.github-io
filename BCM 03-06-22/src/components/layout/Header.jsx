import React from 'react'
import './header.css'
import logo from '../../assets/images/logo.png'
import notification from '../../assets/images/Notification.png'
import setting from '../../assets/images/Setting.png'
import profile from '../../assets/images/profile-image.png'
import down from '../../assets/images/drop-down.png'





const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header-wraper d-flex align-items-center">
            <div className="logo col-8">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div className="setting-icon">
                <a href="#0">
                  <img src={setting} alt="" />
                </a>
              </div>
              <div className="notification-icon">
                <a href="#0">
                  <img src={notification} alt="" />
                </a>
              </div>
              <div className="user-profile d-flex align-items-center">
                <img src={profile} alt="" />
                <div className="profile-detail ms-2">
                  <h5>Amara Kyle</h5>
                  <span>BCM Manager</span>
                </div>
                <img className=' drop-down' src={down} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
