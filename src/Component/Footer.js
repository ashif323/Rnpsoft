import React from 'react'

function footer() {
    return (
        <div>
            
            <section id="Contact">
            <div id="HASH" className="blue-msg">
                    <span
                        id="time-HASH"
                        className="smalltext"
                        style={{ marginLeft: "560px", fontSize: "40px", color:"white" }}
                    ><b>Contact</b></span
                    >
                    </div>
                <footer className='name'>
                    <div className="footer-col">
                        <h4>products</h4>
                        <ul>
                            <li><a href="/">teams</a></li>
                            <li><a href="/">advertising</a></li>
                            <li><a href="/">talent</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>network</h4>
                        <ul>
                            <li><a href="/">technology</a></li>
                            <li><a href="/">science</a></li>
                            <li><a href="/">business</a></li>
                            <li><a href="/">professional</a></li>
                            <li><a href="/">API</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="/">about</a></li>
                            <li><a href="/">legal</a></li>
                            <li><a href="/">contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="links">
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </footer>
            </section>
            <button type="button" className="btn btn-primary float-right   bg-light text-dark" style={{ marginRight: "20px" }}><a href="#rnpsoft">Top</a></button>

            <div className="footer__bar" style={{ textAlign: "center"  , color:"white"}}>
                Copyright © 2024 Web Design Product. All rights reserved.
            </div>
        </div>


    )
}

export default footer
