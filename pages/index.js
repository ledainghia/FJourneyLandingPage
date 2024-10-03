import Link from 'next/link';
import { useEffect } from 'react';
import Home8 from './demo-8';

export default function Home() {
  useEffect(() => {
    const WOW = require('wowjs');
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      {/* <div id="demo">
                <div id="page" className="page-wrapper">
                    <header id="header" className="demo-header">
                        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-tra hover-menu">
                            <div className="container-fluid">
                                <Link href="/" className="navbar-brand logo-black"><img src="/images/demo/logo.png" width={120} height={30} alt="header-logo" /></Link>
                                <Link href="/" className="navbar-brand logo-white"><img src="/images/demo/logo-white.png" width={120} height={30} alt="header-logo" /></Link>
                            </div>
                        </nav>
                    </header>
                    <section id="hero" className="bg-scroll hero-section division">
                        <div className="hero-overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="hero-txt text-center">
                                            <button className="gradient-button index-button">
                                                React 18 - NextJS 13
                                            </button>
                                            <h2>ShiftKey</h2>
                                            <h3>Software &amp; Startup</h3>
                                            <h3>Premium Landing Page Template</h3>
                                            <p>A pixel perfect Premium Multi-Purpose Landing Pages Pack crafted with terrific attention to details.
                                                It was designed to promote your Mobile App, Software or Startup web site
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-wave" />
                        </div>
                    </section>
                    <div className="page-images">
                        <section id="select" className="bg-fixed select-section division">
                            <div className="container-fluid">
                                <div className="st-content">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-1.jpg" alt="layout-1-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-1" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#1</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-2.jpg" alt="layout-2-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-2" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#2</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-3.jpg" alt="layout-3-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-3" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#3</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-4.jpg" alt="layout-4-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-4" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#4</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-5.jpg" alt="layout-5-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-5" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#5</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-6.jpg" alt="layout-6-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-6" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#6</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-7.jpg" alt="layout-7-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-7" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#7</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-8.jpg" alt="layout-8-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-8" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#8</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-9.jpg" alt="layout-9-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-9" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#9</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-10.jpg" alt="layout-10-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-10" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#10</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-11.jpg" alt="layout-11-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-11" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#11</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-12.jpg" alt="layout-12-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-12" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#12</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-13.jpg" alt="layout-13-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-13" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#13</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-14.jpg" alt="layout-14-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-14" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#14</span></h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/layout-15.jpg" alt="layout-15-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/demo-15" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Layout <span>#15</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div id="i-pages" className="bg-fixed inner-pages division">
                            <div className="container-fluid">
                                <div className="st-content">
                                    <div className="row">
                                        <div className="col-lg-10 offset-lg-1 section-text-center">
                                            <h2>Additional Inner Pages</h2>
                                            <h2 className="tra-header">Inner Pages</h2>
                                            <p>9 inner pages carefully crafted to suit your needs. Showcase your App, Software or Startup
                                                with flexible and pre-made concepts
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/about.jpg" alt="about-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/about" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>About Page</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/pricing.jpg" alt="pricing-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/pricing" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Pricing Page</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/clients.jpg" alt="clients-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/clients" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Customers Page</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/faqs.jpg" alt="faqs-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/faqs" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>FAQs Page</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/blog-listing.jpg" alt="blog-listing-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/blog-listing" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Blog Listing</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/single-post.jpg" alt="single-post-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/single-post" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Single Post</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/contacts.jpg" alt="contacts-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/contacts" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Contact Us</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/terms.jpg" alt="terms-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/terms" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>Terms &amp; Privacy</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/demo/404.jpg" alt="404-preview" />
                                                <div className="item-overlay"><div className="overlay-content">
                                                    <Link className="gradient-button" href="/404" >Launch Demo</Link>
                                                </div></div>
                                            </div>
                                            <h4>404 Page</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer id="footer" className="footer division">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 footer-copyright text-center">
                                        <p>Developed with <i className="far fa-heart" /> by AliThemes</p>
                                        <p>© 2023 <span>ShiftKey.</span> All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div> */}
      <Home8 />
    </>
  );
}
