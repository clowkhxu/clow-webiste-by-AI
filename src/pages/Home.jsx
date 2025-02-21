import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch danh sách phim từ API
    fetch('YOUR_API_ENDPOINT/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home">
      <section className="featured">
        <h2>Phim mới cập nhật</h2>
        <div className="movie-grid">
          {movies.map(movie => (
            <div key={movie._id} className="movie-card">
              <Link to={`/phim/${movie.slug}`}>
                <img src={movie.thumb_url} alt={movie.name} />
                <div className="movie-card-info">
                  <h3>{movie.name}</h3>
                  <p>{movie.origin_name}</p>
                  <span>{movie.quality}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 