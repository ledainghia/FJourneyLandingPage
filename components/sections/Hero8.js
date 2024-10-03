export default function Hero8() {
  return (
    <>
      <section id='hero-8' className='bg-fixed hero-section division'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-lg-8 offset-md-1 offset-lg-2'>
              <div className='hero-txt text-center'>
                <h2 className='primary-color'>
                  FJourney - Giải pháp đi lại thông minh, bảo vệ môi trường
                </h2>
                <p className='p-md'>
                  Chúng tôi mang đến giải pháp cho vấn đề giao thông đô và giảm
                  thiểu quá tải nhà xe.{' '}
                  <span className='fw-bold'>FJourney</span> là ứng dụng giúp bạn
                  dễ dàng kết nối với những người đi chung đường, giúp tiết kiệm
                  chi phí, thời gian và giảm thiểu tình trạng kẹt xe, góp phần
                  bảo vệ môi trường sống của chúng ta.
                </p>
                <a href='#cta-4' className='btn btn-tra-grey black-hover'>
                  Tải miễn phí ngay hôm nay
                </a>
                {/* <div className='hero-8-img text-center'>
                  <img
                    className='img-fluid'
                    src='/images/hero-8-img.png'
                    alt='hero-image'
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
