import Image from 'next/image';
import {
  FaRegEnvelope, FaWhatsapp, FaRegDotCircle, FaFacebookSquare, FaLinkedin, FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-ligth-grey py-5">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6 e">
          <Image src="/assets/img/footer-logo.gif" alt="Estela Estudio Digital Logo" width={70} height={70} />
          <p>
            <small>
              Somos una empresa de servicios financieros especializada
              {' '}
              en el segmento de empresas PYME del país,
              {' '}
              presentes en el mercado desde el año 2003.
            </small>
          </p>
          <p>
            <small>Todos los derechos reservados Estela Estudio Digital SPA</small>
          </p>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 e">
          <h3 className="text-uppercase fs-5"><small>Contacto</small></h3>
          <ul>
            <li>
              <ul className="d-flex">
                <li className="me-3">
                  <FaRegEnvelope />
                </li>
                <li>
                  <a href="mailto:contacto@estelaestudio.cl" className="e">
                    <small>
                      contacto@estelaestudio.cl
                    </small>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="d-flex">
                <li className="me-3">
                  <FaWhatsapp />
                </li>
                <li>
                  <a href="tel:+56228201100" className="e"><small>+56228201100</small></a>
                  <span> | </span>
                  <a href="tel:+56228201158" className="e"><small>+56228201158</small></a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="d-flex">
                <li className="me-3">
                  <FaRegDotCircle />
                </li>
                <li>
                  <a href="https://goo.gl/maps/Md4zzZmssuSnqG96A" className="e"><small>El Bosque Central 92, piso 11, Las Condes, Región Metropolitana, Chile</small></a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="d-flex py-2">
                <li className="me-3">
                  <FaFacebookSquare />
                  <a href="https://www.facebook.com/estelaestudiochile/" className="e"><small> Facebook</small></a>
                </li>
                <li className="me-3">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/company/cfc-capital-s-a/" className="e"><small> Linkedin</small></a>
                </li>
                <li>
                  <FaInstagramSquare />
                  <a href="https://www.instagram.com/cfc_capital" className="e"><small> Instagram</small></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
