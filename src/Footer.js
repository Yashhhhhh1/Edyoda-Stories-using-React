import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer-details-div">
                <h3 className="footer-section-title">EDYODA</h3>
                <ul>
                    <li className="footer-options">About</li>
                    <li className="footer-options">Contact Us</li>
                    <li className="footer-options">Terms of Use</li>
                    <li className="footer-options">Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-details-div">
                <h3 className="footer-section-title">RESOURCES</h3>
                <ul>
                    <li className="footer-options">Learning Paths</li>
                    <li className="footer-options">Courses</li>
                    <li className="footer-options">Learning Videos</li>
                    <li className="footer-options">Educators</li>
                    <li className="footer-options">EdYoda Stories</li>
                    <li className="footer-options">University</li>
                    <li className="footer-options">AI Test</li>
                </ul>
            </div>
            <div className="footer-details-div">
                <h3 className="footer-section-title">FOR ENTERPRISES</h3>
                <ul>
                    <li className="footer-options">Train Your Employees</li>
                </ul>
                <h3 className="footer-section-title">QUICK LINKS</h3>
                <ul>
                    <li className="footer-options">Learn and Earn</li>
                    <li className="footer-options">Become a Learning-Enablers</li>
                    <li className="footer-options">Tips for Learning-Enablers</li>
                    <li className="footer-options">Request New Topics</li>
                    <li className="footer-options">Certification</li>
                    <li className="footer-options">Affiliate Program</li>
                </ul>
            </div>
            <div className="footer-details-div">
                <h3 className="footer-section-title">CONNECT</h3>
                <ul>
                <li className="footer-options">2nd Floor #188, Survery No.- 123/1,<br></br>Incubes Building Next to McDonalds,<br></br>
                ITPL Main Rd, Brookefield,<br></br>Bengaluru, Karnataka-560037,<br></br>India</li>
                <li className="footer-options"><i className="fa-solid fa-envelope"></i>hello@edyoda.com</li>
                <li className="footer-options"><i className="fa-solid fa-location-dot"></i> <i className="fa-brands fa-twitter-square"></i>
                 <i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-linkedin"></i></li>
                 <li className="footer-options"><i style={{fontSize : "12px", marginRight: "2px"}} className="fa-solid fa-copyright"></i>2021 <br></br> zekeLabs Technologies Private Limited</li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer;