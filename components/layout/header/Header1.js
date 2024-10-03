import Link from 'next/link';
import { useState } from 'react';

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  headerCls,
  noTra,
}) {
  const [isDropdown, setDropdown] = useState(false);
  const handleDropdown = () => setDropdown(!isDropdown);
  return (
    <>
      <header id='header' className='header'>
        <nav
          className={`navbar fixed-top navbar-expand-md ${
            headerCls ? headerCls : ''
          } ${noTra ? '' : 'bg-tra'}  hover-menu ${scroll ? 'scroll' : ''}`}
        >
          <div className='container'>
            <Link href='/' className='navbar-brand logo-black'>
              <img
                src='/images/logo.png'
                width={120}
                height={30}
                alt='header-logo'
              />
            </Link>
            <Link href='/' className='navbar-brand logo-white'>
              <img
                src='/images/logo-white.png'
                width={120}
                height={30}
                alt='header-logo'
              />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              onClick={handleMobileMenu}
            >
              <span className='navbar-bar-icon'>
                <i className='fas fa-bars' />
              </span>
            </button>
            <div
              id='navbarSupportedContent'
              className={`collapse navbar-collapse ${
                isMobileMenu ? 'show' : ''
              }`}
            >
              <ul className='navbar-nav ms-auto'>
                {/* <li
                  className={`nav-item dropdown ${isDropdown ? 'show' : ''}`}
                  onClick={handleDropdown}
                >
                  <Link
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Home
                    <span className='custom-menu-desc'>15</span>
                  </Link>
                  <ul
                    className={`two-columns dropdown-menu ${
                      isDropdown ? 'show' : ''
                    }`}
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <li>
                      <Link className='dropdown-item' href='/demo-1'>
                        Home 01
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-2'>
                        Home 02
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-3'>
                        Home 03
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-4'>
                        Home 04
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-5'>
                        Home 05
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-6'>
                        Home 06
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-7'>
                        Home 07
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-8'>
                        Home 08
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-9'>
                        Home 09
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-10'>
                        Home 10
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-11'>
                        Home 11
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-12'>
                        Home 12
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-13'>
                        Home 13
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-14'>
                        Home 14
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/demo-15'>
                        Home 15
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className={`nav-item dropdown ${isDropdown ? "show" : ""}`} onClick={handleDropdown}>
                                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                        <span className="custom-menu-desc">06</span>
                                    </Link>
                                    <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`} aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/about">About Us</Link></li>
                                        <li><Link className="dropdown-item" href="/faqs">Faqs</Link></li>
                                        <li><Link className="dropdown-item" href="/clients">Our Clients</Link></li>
                                        <li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
                                        <li><Link className="dropdown-item" href="/terms">Terms</Link></li>
                                        <li><Link className="dropdown-item" href="/contacts">Contact Us</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Our Blog
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/blog-listing">Blog Listing</Link></li>
                                        <li><Link className="dropdown-item" href="/single-post">Single Blog Post</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item nl-simple"><Link className="nav-link" href="/contacts">Contact Us</Link></li> */}
                <li className='nav-item nl-simple'>
                  <Link className='nav-link btn btn-nav' href='/contacts'>
                    Download App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
