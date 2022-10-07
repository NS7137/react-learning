import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
// import { API_ENDPOINT } from './context';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  // const [movie, setMovie] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: '' });

  // const fetchMovie = async url => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   if (data.Response === 'False') {
  //     setError({ show: true, msg: data.Error });
  //     setLoading(false);
  //   } else {
  //     setMovie(data);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchMovie(`${API_ENDPOINT}&i=${id}`);
  // }, [id]);

  if (loading) {
    return <div className='loading'></div>;
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className='single-movie'>
      <img src={poster === 'N/A' ? url : poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
