export default function Cta3_1() {
  return (
    <>
      <section id='cta-3' className='cta-section'>
        <div className='bg-primary-color blue-textured cta-3-content division'>
          <div className='container white-color'>
            <div className='row d-flex align-items-center'>
              <div className='col-md-6'>
                <div className='cta-txt pc-45'>
                  <h3 className='h3-lg'>
                    Di chuyển thông minh hơn với FJourney
                  </h3>
                  <p className='p-md'>
                    Bạn là sinh viên hoặc giảng viên FPTU và gặp khó khăn trong
                    việc di chuyển? FJourney sẽ giúp bạn kết nối với cộng đồng
                    để đi lại thuận tiện, tiết kiệm và thú vị hơn bao giờ hết!
                  </p>
                  <div className='stores-badge'>
                    {/* <a href='#' className='store'>
                      <img
                        className='googleplay-white'
                        src='/images/store_badges/googleplay-tra-white.png'
                        alt='googleplay-logo'
                      />
                    </a> */}
                    <p className='os-version'>* App sẽ sớm ra mắt</p>
                  </div>
                </div>
              </div>{' '}
              {/*END DOWNLOAD TXT */}
              <div className='col-md-6'>
                <div className='cta-3-img text-center pr-45'>
                  <img
                    className='img-fluid'
                    src='/images/ct1_fjourney.png'
                    alt='cta-image'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
