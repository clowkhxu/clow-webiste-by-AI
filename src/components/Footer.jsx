function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Về chúng tôi</h3>
          <p>Website xem phim trực tuyến với kho phim đa dạng và phong phú.</p>
        </div>
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: contact@example.com</p>
          <p>Điện thoại: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MovieWeb. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 