import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">MovieWeb</Link>
        <div className="nav-search">
          <input type="text" placeholder="Tìm kiếm phim..." />
          <button>Tìm kiếm</button>
        </div>
        <div className="nav-links">
          <Link to="/">Trang chủ</Link>
          <Link to="/phim-le">Phim lẻ</Link>
          <Link to="/phim-bo">Phim bộ</Link>
          <Link to="/the-loai">Thể loại</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 