import React from 'react'
import img1 from './videoplayback.mp4';
import img4 from './businessman-hand-working-with-finances-about-cost-and-calculator-and-laptop-computer-on-wooden-desk-in-modern-office-photo.jpeg'
import img5 from './photo-1531545514256-b1400bc00f31.avif'

import img3 from './images (4).jpeg'

function About() {
  return (
    <div>
      <section id="About">

        <div style={{ marginTop: "20px" }}>
          <div id="HASH" className="blue-msg">
            <span
              id="time-HASH"
              className="smalltext"
              style={{ marginLeft: "80px", fontSize: "40px" , color:"white" }}
            ><b>About</b></span
            >
            <span
              className="ios-circle"
              style={{ marginRight: "50px", marginTop: "20px", fontSize: "20px" }}
            ><a href="https://www.linkedin.com/company/rnpsoft/about/" rel='noreferrer' target="_blank">View More</a></span
            >
          </div>
          <div className="center" style={{ marginTop: "50px"  }}>
            <video
              style={{
                float: "left",
                width: "576px",
                marginTop: "20px",
                marginLeft: "-100px",
                
                overflow:"hidden"

                
                
              }}
              src={img1} autoPlay loop muted
              alt="video"
              
              
              
            />
          </div>
          <h3
            style={{
              float: "right",
              color: "white",
              marginTop: "12px",
              position: "absolute",
              marginLeft: "20px",
              width: "40%",
              left: "54%"
            }}
          >
            Elevate your career in the dynamic world of technology with RnPsoft! 🚀 We're your IT solutions partner, specializing in app development, software solutions, ML, AI, and more. Join our professional network for industry insights, career opportunities, and innovation. Connect with us to be part of the future of IT.
          </h3>
          <div className="container"  style={{borderRadius:"90px"}}>
            <div className="card-deck" style={{ marginTop: "450px", marginRight: "auto", marginBottom: "30px" }}>
              <div className="card" style={{ backgroundColor: "black" ,  borderWidth:"medium" }}>
                <img
                  src={img3}
                  className="card-img-top"
                  alt="logo"

                  
    
                />
                <div className="card-body" style={{ color: "white" }}>
                  <h5 className="card-title text-center"><b>About 1</b></h5>
                  <p className="card-text text-center">
                  A company profile is a perfect opportunity to show the work that goes on behind the scenes, thus justifying why your prices may be higher than others in your industry.I always thought history was boring — but that‘s not always the case regarding a company’s history...
                  </p>
                </div>
              </div>
              <div className="card" style={{ backgroundColor: "black" ,  borderWidth:"medium"}}>
                <img
                  src={img4}
                  className="card-img-top"
                  alt="logo"
                  style={{height:"200px"}}
                />
                <div className="card-body" style={{ color: "white" }}>
                  <h5 className="card-title text-center"><b>About 2</b></h5>
                  <p className="card-text text-center">
                  My content creator profile emphasizes that I‘ve been an anime fan since childhood and shows how I developed my skills for years as a journalist. My audience knows I’m an experienced creator who also happens to be a total nerd....
                  </p>
                </div>
              </div>
              <div className="card" style={{ backgroundColor: "black" ,  borderWidth:"medium"}}>
                <img
                  src={img5}
                  className="card-img-top"
                  alt="logo"
                  style={{height:"200px"}}
                  
                />
                <div className="card-body" style={{ color: "white" }}>
                  <h5 className="card-title text-center"><b>About 3</b></h5>
                  <p className="card-text text-center">
                  “Thursday was built out of our own frustration. Clunky work boots or delicate fashion boots? Cheap shoes that fall apart after a few wears, or incredibly overpriced shoes? It didn't seem right that we had to make these trade-offs. There had to be another option.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
