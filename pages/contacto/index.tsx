import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/Templates/Layout';
import Subscribe from '@/components/Molecules/Subscribe';
import Contact from '@/components/Molecules/Forms/Contact';
import { socialMediaInfo } from 'utils';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contacto = () => {
  const { t } = useTranslation('common');
  return (
    <Layout description='' title=''>
      <section className='container py-5'>
        <div className='row justify-content-center align-items-center py-5'>
          <div className='col-md-6'>
            <div className='card bg-primary-color text-white p-3 p-md-5 mb-5 rounded'>
              <h2 className='pb-4'>
                ¡Contáctanos y se parte de esta increíble historia junto a nosotros!
              </h2>
              <p>
                Si tienes algo que contar con nosotros acerca de bienestar, innovación y cultura
                contemporánea para alcanzar la felicidad desde la diversidad, el entusiasmo y la
                inclusión(DEI)
              </p>
              <ul className='pt-4'>
                <li className='py-3'>
                  <div className='d-flex'>
                    <span className='me-3'>
                      <FaPhoneAlt />
                    </span>
                    <span>{t('site_phone')}</span>
                  </div>
                </li>
                <li className='py-3'>
                  <div className='d-flex'>
                    <span className='me-3'>
                      <FaEnvelope />
                    </span>
                    <span>{t('site_email')}</span>
                  </div>
                </li>
                <li className='py-3'>
                  <div className='d-flex'>
                    <span className='me-3'>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{t('site_address')}</span>
                  </div>
                </li>
              </ul>
              <ul className='mt-5 d-flex'>
                {socialMediaInfo.length &&
                  socialMediaInfo.map(item => (
                    <li className='mx-2' key={item.name}>
                      <a className='text-white' href={item.route}>
                        <p className='mb-0 text-capitalize'>{item.name}</p>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <Contact />
          </div>
        </div>
      </section>
      <section className='container py-5'>
        <div className='row justify-content-center py-5'>
          <div className='col-md-6'>
            <Subscribe />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
