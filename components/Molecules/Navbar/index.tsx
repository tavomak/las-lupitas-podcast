import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

const Navbar = () => {
  const links = [
    {
      name: t('nav_homepage_title'),
      route: '/',
    },
    {
      name: t('nav_services_title'),
      route: '/services',
      children: [
        {
          name: t('nav_service_web_title'),
          route: 'web-development',
        },
        {
          name: t('nav_service_email_title'),
          route: 'email-marketing',
        },
        {
          name: t('nav_service_audit_title'),
          route: 'performance-seo',
        },
        {
          name: t('nav_service_sem_title'),
          route: 'search-engine-marketing',
        }, {
          name: t('nav_service_analytics_title'),
          route: 'business-intelligence',
        },
      ],
    },
    {
      name: t('nav_blog_title'),
      route: '/blog',
    },
    {
      name: t('nav_cases_title'),
      route: 'cases',
    },
    {
      name: t('nav_quote_title'),
      route: 'quote',
    },
    {
      name: t('nav_contact_title'),
      route: 'contact',
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [topView, setTopView] = useState(0);
  const nodeRef = useRef(null);

  const handleMouseEnter = (e, selected) => {
    e.preventDefault();
    if (selected === t('nav_services_title')) {
      setShowSubMenu(true);
    }
  };

  const handleScroll = () => {
    const element = document.querySelector('#header') as HTMLElement;
    setTopView(element.offsetTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [topView]);
  return (
    <header className={`${styles.header} ${topView > 0 && styles.active}`} id="header">
      <nav className={`container navbar navbar-expand-lg ${styles.nav}`}>
        <div className="container-fluid">
          <Link href="/">
            <a className={`navbar-brand ${styles.primaryNav} ps-lg-2`} href="!#">
              <Image
                src="/assets/img/primaryLogo.svg"
                alt="Estela Estudio Digital"
                width={50}
                height={50}
              />
            </a>
          </Link>
          <button className={`d-lg-none hamburger hamburger--emphatic ${menuOpen ? 'is-active' : ''}`} type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <div className={`collapse navbar-collapse text-center ${menuOpen ? 'show' : ''}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.length && links.map((item) => (
                <li className="nav-item position-relative px-2" key={item.name} onMouseEnter={(e) => handleMouseEnter(e, item.name)} onMouseLeave={() => setShowSubMenu(false)}>
                  <Link href={item.route} locale={activeLocale}>
                    <a className="nav-link text-primary-color" href={item.route}>
                      <p className="mb-0">
                        {item.name}
                        {item.children && (
                          <span className="ps-1">
                            <FaChevronDown />
                          </span>
                        )}
                      </p>
                    </a>
                  </Link>
                  {item.children?.length > 1 && (
                    <CSSTransition
                      nodeRef={nodeRef}
                      in={showSubMenu}
                      timeout={300}
                      classNames="alert"
                      unmountOnExit
                    >
                      <ul className={`${styles.submenu} shadow`} ref={nodeRef}>
                        {item.children.map((subItem) => (
                          <li className="py-2" key={subItem.route}>
                            <Link href={subItem.route} locale={activeLocale}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CSSTransition>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
