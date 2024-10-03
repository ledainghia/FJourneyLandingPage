export default function Footer4() {
  return (
    <>
      <footer id='footer-4' className='wide-40 footer division'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-lg-4 col-xl-4'>
              <div className='footer-info mb-40'>
                <img
                  src='/images/footer-logo.png'
                  width={175}
                  height={35}
                  alt='footer-logo'
                />
                <p className='foo-email'>
                  E:{' '}
                  <a href='mailto:support@fjourney.com'>support@fjourney.com</a>
                </p>
                <p>P: +84 123 456 789</p>
                <div className='footer-socials-links mt-20'>
                  <ul className='foo-socials text-center clearfix'>
                    <li>
                      <a href='#' className='ico-facebook'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='ico-twitter'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='ico-instagram'>
                        <i className='fab fa-instagram' />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='ico-linkedin'>
                        <i className='fab fa-linkedin-in' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-lg-2 col-xl-2 offset-lg-1 offset-xl-2'>
              <div className='footer-links mb-40'>
                <h5 className='h5-sm'>Ứng dụng</h5>
                <ul className='clearfix'>
                  <li>
                    <a href='#'>FJourney hoạt động thế nào?</a>
                  </li>
                  <li>
                    <a href='#'>Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href='#'>Cập nhật ứng dụng</a>
                  </li>
                  <li>
                    <a href='#'>Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4 col-lg-2 col-xl-2'>
              <div className='footer-links mb-40'>
                <h5 className='h5-sm'>Công ty</h5>
                <ul className='clearfix'>
                  <li>
                    <a href='#'>Về chúng tôi</a>
                  </li>
                  <li>
                    <a href='#'>Tuyển dụng</a>
                  </li>
                  <li>
                    <a href='#'>Truyền thông</a>
                  </li>
                  <li>
                    <a href='#'>Blog của chúng tôi</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-2'>
              <div className='footer-form mb-20'>
                <h5 className='h5-sm'>Tải Ứng Dụng</h5>
                <a href='#' className='store'>
                  <img
                    className='appstore-original'
                    src='/images/store_badges/appstore.png'
                    alt='appstore-logo'
                  />
                </a>
                <a href='#' className='store'>
                  <img
                    className='googleplay-original'
                    src='/images/store_badges/googleplay.png'
                    alt='googleplay-logo'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='bottom-footer'>
            <div className='row'>
              <div className='col-md-12'>
                <p className='footer-copyright'>
                  © 2024 <span>FJourney</span>. Tất cả các quyền được bảo lưu
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
