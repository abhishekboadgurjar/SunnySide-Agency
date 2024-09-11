import React from 'react'
import Emily from "../assets/images/image-emily.jpg"
import Jennie from "../assets/images/image-jennie.jpg"
import Thomas from "../assets/images/image-thomas.jpg"

const Testimonials = () => {
  return (
    <div className="testimonials">
        <h3>CLIENT TESTIMONIALS</h3>
        <div className="cards">
          <div className="card">
            <img src={Emily} alt="" />
            <h5>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</h5>
            <h4>Emily R.</h4>
            <p>Marketing Director</p>
          </div>
          <div className="card">
            <img src={Thomas} alt="" />
            <h5>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</h5>
            <h4>Thomas S.</h4>
            <p>Chief Operating Officer</p>
          </div>
          <div className="card">
            <img src={Jennie} alt="" />
            <h5>Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!</h5>
            <h4>Jennie F.</h4>
            <p>Business Owner</p>
          </div>
        </div>
      </div>
  )
}

export default Testimonials