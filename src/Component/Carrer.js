import React from 'react'
import img2 from './software_engineer.jpeg.webp';
import img3 from './istockphoto-921356686-612x612.jpg';
import img4 from './images (3).jpeg';

function Carrer() {
  return (
    <div>
            <section id="Carrer">

<div className="name1" style={{marginTop: "20px"}}>
  <div id="HASH" className="blue-msg">
    <span
      id="time-HASH"
      className="smalltext"
      style={{marginLeft: "80px", fontSize: "40px"}}
      ><b>Carrer</b></span
    >
    <span
      className="ios-circle"
      style={{marginRight: "50px", marginTop: "20px", fontSize: "20px"}}
      ><a href="https://rnpsoft.framer.website/job" rel='noreferrer' target="_blank">View More</a></span
    >
  </div>
  <div className="container" style={{marginTop: "50px"}}>
    <div className="card-deck">
      <div className="card" style={{backgroundColor: "black" ,  borderWidth:"medium"}}>
        <img
          src={img2}
          className="card-img-top"
          alt="logo" 
        />
        <div className="card-body" style={{color: "white"}}>
          <h5 className="card-title text-center">Internship</h5>
          <p className="card-text text-center">
          Developing sophisticated web and mobile applications, our company thrives in turning your digital dreams into reality....
          </p>
        </div>
      </div>
      <div className="card" style={{backgroundColor: "black" ,  borderWidth:"medium"}}>
        <img
          src={img3}
          className="card-img-top"
          alt="logo"
          style={{marginBottom:"20px" , height:"200px"}}
          
        />
        <div className="card-body" style={{color: "white" }}>
          <h5 className="card-title text-center">Full Time Job</h5>
          <p className="card-text text-center">
          Developing sophisticated web and mobile applications, our company thrives in realizing your digital dreams...
          </p>
        </div>
      </div>
      <div className="card" style={{backgroundColor: "black" ,  borderWidth:"medium"}}>
        <img
          src={img4}
          className="card-img-top"
          alt="logo"
        />
        <div className="card-body" style={{color: "white"}}>
          <h5 className="card-title text-center">Marketing and Sales</h5>
          <p className="card-text text-center">
          Developing sophisticated web and mobile applications, our company thrives in realizing your digital dreams...
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

export default Carrer
