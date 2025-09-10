import ig from '../assets/images/ig.png'
import fb from '../assets/images/fb.png'
import youtube from '../assets/images/youtube.png'
import logo from '../assets/images/Logo.png'
import QRcode from '../assets/images/QR-code.png'
import { NavLink } from 'react-router'

function Footer() {
    
    return(<>
        <div className="container">
        <div className="py-7 py-lg-11">
            <div className="d-flex justify-content-lg-between flex-column flex-lg-row">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="me-lg-15 text-center">
                        <NavLink to="/"><img src={logo} alt="logo" className="logo-text mb-2"/></NavLink>
                        <div className="d-flex justify-content-center">
                            <a href=""><img src={ig} alt="ig" className="text-success"/></a>
                            <a href=""><img src={fb} alt="facebook"/></a>
                            <a href=""><img src={youtube} alt="youtube"/></a>
                        </div>
                    </div>
                    <div className="d-flex flex-column text-center text-lg-start">
                        <p className="mb-5 fs-7"><i className="bi bi-envelope me-2"></i>learnplus@gmail.com</p>
                        <p className="mb-7 fs-7"><i className="bi bi-geo-alt me-2"></i>嘉義市西區中正路15號</p>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-outline-primary btn-padding-sm btn-width me-3 me-lg-5 text-nowrap">意見回饋</div>
                            <div className="btn btn-outline-primary btn-padding-sm btn-width text-nowrap">我想成為講師</div>
                        </div>
                    </div>
                </div>
                <img src={QRcode} alt="QR code" className="qr-size qr-border mx-auto mx-lg-0 mt-5 mt-lg-0"/>
            </div>
        </div>
        </div>
        <div className="copyright-bg">
            <div className="container">
                <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center py-3 py-lg-7">
                    <div className="text-gray-40 pt-3 pt-lg-0 fs-7">@2024 學識伴 LearnPlus++</div>
                    <ul className="d-flex align-items-center list-unstyled fw-medium">
                        <li className="me-7"><a href="#" className="text-gray-40">私隱政策聲明</a></li>
                        <li className="me-7"><a href="#" className="text-gray-40">網站使用條款</a></li>
                        <li ><a href="#" className="text-gray-40">商業合作</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

export default Footer