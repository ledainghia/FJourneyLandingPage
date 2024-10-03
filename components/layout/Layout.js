import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import PageHead from './PageHead';
import StickyForm from './StickyForm';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';
import Footer5 from './footer/Footer5';
import Header1 from './header/Header1';

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  noTra,
  children,
  headerCls,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    const WOW = require('wowjs');
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />
      <div id='page' className='page'>
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
            noTra={noTra}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
            noTra={noTra}
          />
        ) : null}

        <main className='main'>{children}</main>

        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
        {footerStyle == 2 ? <Footer2 /> : null}
        {footerStyle == 3 ? <Footer3 /> : null}
        {footerStyle == 4 ? <Footer4 /> : null}
        {footerStyle == 5 ? <Footer5 /> : null}

        <BackToTop />
        {/* <StickyForm /> */}
      </div>
    </>
  );
}
