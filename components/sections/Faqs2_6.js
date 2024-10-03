export default function Faqs2_6() {
  return (
    <>
      <section id='faqs-2' className='wide-100 faqs-section division'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 section-title'>
              <h3 className='h3-md'>Câu hỏi thường gặp</h3>
              <p className='p-md'>
                Dưới đây là những câu hỏi phổ biến mà người dùng FJourney thường
                thắc mắc. Nếu bạn còn thắc mắc khác, hãy liên hệ với chúng tôi!
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='questions-holder'>
                <div className='question wow fadeInUp' data-wow-delay='0.1s'>
                  <h5 className='h5-xs'>FJourney hoạt động như thế nào?</h5>
                  <p>
                    FJourney kết nối sinh viên và giảng viên FPTU dựa trên vị
                    trí hiện tại của họ để cùng di chuyển đến trường. Hệ thống
                    sẽ tự động ghép cặp người dùng có lộ trình tương đồng.
                  </p>
                </div>
                <div className='question wow fadeInUp' data-wow-delay='0.3s'>
                  <h5 className='h5-xs'>
                    Làm thế nào để bắt đầu sử dụng FJourney?
                  </h5>
                  <ul className='content-list mb-35'>
                    <li>Tải ứng dụng từ App Store hoặc Google Play</li>
                    <li>Đăng ký tài khoản với email FPTU của bạn</li>
                    <li>
                      Chọn lộ trình di chuyển và bắt đầu kết nối với người dùng
                      khác
                    </li>
                  </ul>
                </div>
                <div className='question wow fadeInUp' data-wow-delay='0.8s'>
                  <h5 className='h5-xs'>Ứng dụng có tính phí không?</h5>
                  <p>Fjourney chỉ thu phí khi sử dụng dịch vụ "Đi Nhờ"</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='questions-holder ind-30'>
                <div className='question wow fadeInUp' data-wow-delay='0.1s'>
                  <h5 className='h5-xs'>
                    Tôi có thể tìm bạn đồng hành thế nào?
                  </h5>
                  <ul className='content-list mb-35'>
                    <li>Sử dụng tính năng ghép cặp thông minh của FJourney</li>
                    <li>
                      Chọn lộ trình phù hợp với bạn và tìm người đồng hành dựa
                      trên vị trí và thời gian di chuyển
                    </li>
                  </ul>
                </div>
                <div className='question wow fadeInUp' data-wow-delay='0.3s'>
                  <h5 className='h5-xs'>
                    Làm thế nào để cập nhật thông tin cá nhân của tôi?
                  </h5>
                  <p>
                    Bạn có thể cập nhật thông tin cá nhân trực tiếp trong ứng
                    dụng FJourney thông qua phần cài đặt tài khoản.
                  </p>
                </div>
                <div className='question wow fadeInUp' data-wow-delay='0.8s'>
                  <h5 className='h5-xs'>
                    Tôi gặp vấn đề kỹ thuật, liên hệ ai?
                  </h5>
                  <p>
                    Nếu bạn gặp bất kỳ vấn đề kỹ thuật nào, hãy gửi email tới
                    đội ngũ hỗ trợ của FJourney qua địa chỉ
                    support@fjourney.site.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <div
                className='more-questions wow fadeInUp'
                data-wow-delay='1.2s'
              >
                <h5 className='h5-xs'>
                  Bạn còn câu hỏi nào khác?{' '}
                  <a href='/faqs'>Đặt câu hỏi tại đây</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
