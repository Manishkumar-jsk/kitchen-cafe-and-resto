import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
    <hr className="gallery-line"/>
    <div className="footerContainer">
        <div className="footerLeft">
            <div className="footer-icons">
                <a style={{"color":"black"}}><FontAwesomeIcon icon={faFacebook} style={{"padding":"10px"}} /></a>
                <a style={{"color":"black"}}><FontAwesomeIcon icon={faInstagram} style={{"padding":"10px"}} /></a>
                <a style={{"color":"black"}}><FontAwesomeIcon icon={faEnvelope} style={{"padding":"10px"}} /></a>
            </div>
        </div>
        <div className="footerRight">
            <div className="footerLinks">
                <span className="footerLink">ACCESSIBILITY</span>
                <span className="footerLink">PRESS</span>
                <span className="footerLink">CAREERS</span>
                <span className="footerLink">CONTACT</span>
                <button className="footerButton">NEWS LETTER</button>
            </div>
        </div>
    </div>
    <hr className="gallery-line"/>
    </>
  )
}
