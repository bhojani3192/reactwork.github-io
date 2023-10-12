import React from 'react'
import './home.css'
import crisis1 from '../../assets/images/crisis-img.png'
import crisis2 from '../../assets/images/plan-img.png'
import crisisrec from '../../assets/images/crisis-rectengle.png'
import crisisrec2 from '../../assets/images/crissisrec-2.png'
import nextarow from '../../assets/images/next-arow.png'
import { history } from '../../components/common'

const Home = () => {
  return (
    <div className="container-fluid  d-flex justify-content-center my-5">
      <div className="row justify-content-center">
        <div className="home-wrapper">
          <div className="home-title">
            <span>Choose an option below to continue</span>
            <h1 className='hero-title'>How would you like us to  <br />  help you today?</h1>
          </div>
          <div className="home-section  py-5">
            <div className="row">
              <div className="crisis-wrapper me-5">
                <img className='crisisImg' src={crisis1} alt="" />
                <div className="crisis-detail">
                  <h5>IAM IN CRISIS!</h5>
                  <div className="crisis-detail-img d-flex">
                    <p>Help me with a step-by step checklist of recovery steps</p>
                    <img className='bottomImg' src={crisisrec} alt="" />
                  </div>
                </div>
              </div>
              <div className="crisis-wrapper-2">
                <img className='crisisImg' src={crisis2} alt="" />
                <div className="crisis-detail">
                  <h5>BE CRISIS READY!</h5>
                  <div className="crisis-detail-img d-flex">
                    <p>Help me with a step-by step checklist of recovery steps</p>
                    <img className='bottomImg bottomImg2' src={crisisrec2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="next-button">
              <button className="btn-primary next-btn text-uppercase"
                onClick={() => history.push("/chart")}
              >Next
                <img className='ms-3' src={nextarow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
