export default function Content2_8() {
  return (
    <>
      <section id='content-2' className='wide-60 content-section division'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6'>
              <div className='img-block wow fadeInUp' data-wow-delay='0.3s'>
                <img
                  className='img-fluid'
                  src='/images/image-01.png'
                  alt='content-image'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div
                className='txt-block pc-30 wow fadeInUp'
                data-wow-delay='0.1s'
              >
                {/* <span className='section-id primary-color'>
                  Handling With Ease
                </span> */}
                <h3 className='h3-md'>
                  Tăng cường trải nghiệm di chuyển với FJourney
                </h3>
                <p>
                  FJourney không chỉ là một ứng dụng đi nhờ xe, mà là một giải
                  pháp để thay đổi cách chúng ta di chuyển. Hệ thống thông minh
                  kết nối nhanh chóng người đi cùng hướng, giúp bạn không còn lo
                  lắng về việc tắc đường hay tìm kiếm phương tiện công cộng.
                </p>
                <h5 className='h5-md'>Tính năng nổi bật</h5>
                <div className='box-list m-top-15'>
                  <div className='box-list-icon'>
                    <i className='fas fa-genderless' />
                  </div>
                  <p>
                    <span className='fw-bold'>
                      Kết nối nhanh chóng và tiện lợi:
                    </span>{' '}
                    Chỉ với vài thao tác đơn giản, bạn đã có thể tìm được người
                    đi cùng đường.
                  </p>
                </div>
                <div className='box-list'>
                  <div className='box-list-icon'>
                    <i className='fas fa-genderless' />
                  </div>
                  <p>
                    <span className='fw-bold'>An toàn tuyệt đối:</span> Hệ thống
                    đánh giá từ người dùng giúp bạn lựa chọn những đối tác đi
                    chung đáng tin cậy.
                  </p>
                </div>
                <div className='box-list'>
                  <div className='box-list-icon'>
                    <i className='fas fa-genderless' />
                  </div>
                  <p>
                    <span className='fw-bold'>Tối ưu chi phí:</span> Chia sẻ chi
                    phí di chuyển giúp giảm áp lực tài chính cho mỗi chuyến đi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
