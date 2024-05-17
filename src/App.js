// import logo from './logo.svg';
import './App.css';
import React from 'react';

// import RnpSoft from './Component/RnpSoft';
const LazyRnpSoft = React.lazy(()=>import('./Component/RnpSoft.js'));
const LazyHome = React.lazy(()=>import('./Component/Home.js'));
const LazyCarrer = React.lazy(()=>import('./Component/Carrer.js'));
const LazyAbout = React.lazy(()=>import('./Component/About.js'));
const LazyPhotos = React.lazy(()=>import('./Component/Photos.js'));
const LazyFooter = React.lazy(()=>import('./Component/Footer.js'));
// import Home from './Component/Home';

// import Carrer from './Component/Carrer';
// // import Carrer1 from './Component/Carrer';
// import About from './Component/About';
// import Photos from './Component/Photos';
// import Footer from './Component/Footer'



function App() {
  return (
    <>      
    
    <LazyRnpSoft/>
    <hr width="100%;" height="4px " size="5" color="white" style={{marginTop:"20px"}} />
    
    
    <LazyHome/>
    <hr width="100%;" height="4px " size="5" color="white" style={{marginTop:"20px"}} />
    <LazyCarrer/>
    <hr width="100%;" height="4px " size="5" color="white" style={{marginTop:"20px"}} />
    <LazyAbout/>     
    <hr width="100%;" height="4px " size="5" color="white" style={{marginTop:"20px"}} />
    <LazyPhotos/>
    <hr width="100%;" height="4px " size="5" color="white" style={{marginTop:"20px"}} />
    <LazyFooter/>
    

    </>
  );
}

export default App;
