import React from 'react'
// import img from './build_a_website_for_free_-_article_image.webp';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Home() {
  const slideImages = [
    {
      url: 'https://framerusercontent.com/images/rKe0du4QXA8kuIvhLbfNv5Thrk.png'
      
    },
    {
      url: 'https://pbs.twimg.com/ext_tw_video_thumb/1737707549796036608/pu/img/cQ6CTK8Lq0O3dEJf.jpg'
    },
    {
      url:'https://media.contra.com/image/upload/c_limit,fl_lossy,w_850/g8nwwh9sepjekuntpgdb'
     
    },
    {
      url :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHxQhGP4oThUKlfk24VKj_3U51zkQ2qeJPXOvRZuUMA&s'

    },
    {
      url:'https://www.shutterstock.com/image-vector/stay-tuned-banner-megaphone-260nw-1924839209.jpg'

    },
    
  ];

  // const spanStyle = {
  //   padding: '20px',
  //   background: '#efefef',
  //   color: '#000000'
  // }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
   
  return (

    
    <div>
      
        <section  id="home">
    

    
    <div id="HASH" className="blue-msg">
      <span
        id="time-HASH"
        className="smalltext"
        style={{marginLeft: "80px", fontSize: "40px"}}
        ><b>Home</b></span
      >
      <span
        className="ios-circle"
        style={{marginRight: "50px", marginTop: "20px", fontSize: "20px"}}
        ><a href="https://rnpsoft.framer.website/" rel='noreferrer' target="_blank">Learn More</a></span
      >
    </div>

    <div className="slide1">

    <div className="slide-container center" style={{marginTop: "50px" , marginBottom:"20px" }}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </div>
    

    {/* <div className="center" style={{marginTop: "50px" }}>
      <img src={img} alt="logo" />
    </div> */}
  
</section>
      
    </div>
  )
}

export default Home
