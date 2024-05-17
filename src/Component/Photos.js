import React from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Photos() {
  const slideImages = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6H49o1yjfat-cVuZtjgwjhN7Lf6bwZs9HoQY8E7HyQ&s',
      caption: 'Slide 1'
    },
    {
      url: 'https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg',
      caption: 'Slide 3'
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitcU_GUBFVc11HzBqdBUXnzXdy3iQzLoU9JOS78_DMA&s'

    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_h4g01DB1vz6_ADfUD_vEsvEC0neoFAwK_dpewD0g2g&s'

    },
  ];
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  return (
    <div>
        <section id="Photos">

<div id="HASH" className="blue-msg" style={{marginTop: "30px"}}>
  <span
    id="time-HASH"
    className="smalltext"
    style={{marginLeft: "80px", fontSize: "40px"}}
    ><b>Photos</b></span
  >
  <span
    className="ios-circle"
    style={{marginRight: "50px",marginBottom: "30px", marginTop: "20px", fontSize: "20px"}}
    ><a href="https://www.linkedin.com/company/rnpsoft/posts/?feedView=all" rel='noreferrer' target="_blank">See More</a></span
  >
</div>
<div className="slide-container center" style={{ marginTop: "50px" }}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>


</section>
      
    </div>
  )
}

export default Photos
