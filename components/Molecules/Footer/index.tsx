import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { primaryLinks, socialMediaInfo, siteName } from 'utils';

const Footer = () => {
  const { t } = useTranslation('common');
  const { locale: activeLocale } = useRouter();
  return (
    <footer className='py-5'>
      <div className='container'>
        <hr />
        <div className='row justify-content-end mt-4'>
          <div className='col-md-4 me-md-auto'>
            <Image src='/logo-ll.svg' alt={siteName} width={150} height={80} />
            <p>
              <small>{t('footer_desc')}</small>
            </p>
          </div>

          <div className='col-md-2'>
            <p>
              <strong>{t('footer_site_map_title')}</strong>
            </p>
            <ul>
              {primaryLinks.length &&
                primaryLinks.map(item => (
                  <li className='' key={item.name}>
                    <Link legacyBehavior href={item.route} locale={activeLocale}>
                      <a className={`${'styles.navLink'}`} href={item.route}>
                        <p className='mb-0'>{t(item.name)}</p>
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='col-md-2'>
            <p>
              <strong>{t('footer_location_title')}</strong>
            </p>
            <ul>
              {socialMediaInfo.length &&
                socialMediaInfo.map(item => (
                  <li className='' key={item.name}>
                    <Link legacyBehavior href={item.route} locale={activeLocale}>
                      <a className={`${'styles.navLink'}`} href={item.route}>
                        <p className='mb-0 text-capitalize'>{t(item.name)}</p>
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='col-md-2'>
            <p>
              <strong>{t('footer_contact_title')}</strong>
            </p>
            <p className='mb-0'>
              <small>{t('site_email')}</small>
            </p>
          </div>
        </div>
        <hr />
        <p>
          <small>
            {t('develop_by')}{' '}
            <a href='https://estelaestudio.com/' target='_blanc'>
              {t('developer_name')}
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
