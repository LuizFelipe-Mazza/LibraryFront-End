
import { AiFillInstagram } from "react-icons/ai";
import { AiFillSkype} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {SiWhatsapp} from "react-icons/si";
import {BsTelegram} from "react-icons/bs";
import './footer.scss'

export function Footer(){
    return(
        <>
        <div className="containerFooter">
            <div className="linksFooter">
                <div className="contactDev">
                    <h3>Contato Desenvolvedor</h3>
                <a href="/"><SiWhatsapp className='iconFooter'/> Whatsapp</a>
                    <a href="/"><AiFillSkype className="iconFooter"/> Skype</a>
                    <a href="/"><BsTelegram className="iconFooter"/> Telegram</a>
                </div>
          
                <div className="socialMedia">
                    <h3>Redes Sociais</h3>
                    <a href="/"><AiFillInstagram className="iconFooter"/> Instagram</a>
                    <a href="/"><FaFacebook className="iconFooter"/> Facebook</a>
                    <a href="/"><FaLinkedin className="iconFooter"/> Linkedin</a>
                </div>
            </div>
            <div className="copyright">
            <p className='copyrights_webSite'> © LIVRARIA DIGITAL 2022. All rigths reserved</p>
            </div>
        </div>
        </>
    )
}