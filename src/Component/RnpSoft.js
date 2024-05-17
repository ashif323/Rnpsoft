import React from 'react'
import img1 from './hi tech global connection lines background 4k H4RDJ9P.webm';

// import imageUrl from './build_a_website_for_free_-_article_image.webp'

function RnpSoft() {
    return (
        <>
            < div className="bg-image" style={{

                height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%"
            }} >
                <section>


                    <div className="container" id="rnpsoft">

                        <nav className='head' style={{fontSize: "19px",
  textTransform: "capitalize" , display: "block" ,  color:"#bdb6b6"}}>
                            <h1>RnpSoft</h1>
                            <ul>

                                <li><a href="#home">home</a></li>
                                <li><a href="#Carrer">Carrer</a></li>
                                <li><a href="#About">About</a></li>
                                <li><a href="#Photos">Photos</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </nav>

                        

                        <div className="article" >
                            <p className="text " style={{ top: "20px" }} >Welcome</p>
                            <h1 style={{ color: "white" }}>To our Company</h1>
                            {/* <h1 style={{ width: "20%" }}>Software development is the art and science of crafting instructions for computers. It's a problem-solving dance that starts with understanding user needs. We translate those needs into a blueprint, using programming languages like Python or Java.  This blueprint tells the computer exactly what steps to take.</h1> */}
                            <a href="https://rnpsoft.framer.website/" rel='noreferrer' target="_blank"
                            ><button type="button" style={{ color: "white", bottom: "100px" }} className="btn btn-white">Learn More</button></a
                            >
                        </div>
                    </div>


                </section >
            </div>
            <div className="card-deck" style={{ marginTop: "30px", marginRight: "auto" }}>
                <div className="card" style={{ backgroundColor: "black", borderWidth: "medium" }}>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title text-center"><b>Software development</b></h5>
                        <p className="card-text text-center">

                            Software engineers design, develop, test, and maintain software applications. They use programming languages, platforms, and architectures to create software solutions for end users. Software engineers may work on computer games, business applications, operating systems, network control systems, and more.

                        </p>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: "black", borderWidth: "medium" }}>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title text-center"><b>Real Time Operation</b></h5>
                        <p className="card-text text-center">
                            Real-time operation is the processing of data and events that have strict time constraints. A real-time operating system (RTOS) is a type of operating system that executes tasks with strict time deadlines. RTOSes are deterministic and predictable, and are often used in embedded systems and critical systems.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: "black", borderWidth: "medium" }}>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title text-center"><b>ML/AI</b></h5>
                        <p className="card-text text-center">
                            Machine learning (ML) is a subset of artificial intelligence (AI) that focuses on developing statistical algorithms that can learn from data and generalize to unseen data. ML uses algorithms to analyze large amounts of data, learn from the insights, and then make informed decisions.
                        </p>
                    </div>
                </div>
            </div>


            {/* <div className="bg-video" style={{

                height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}> */}
            <div>

                {/* <video src={img1}></video> */}





                <section className="bg-video" >
                    <video autoPlay loop muted src={img1}></video>
                </section>
            </div>
        </>








    )
}

export default RnpSoft

